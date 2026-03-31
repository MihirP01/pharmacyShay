import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { fadeUp } from "../lib/motion";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

const supportOptions = [
  "Eligibility guidance",
  "Consultation support",
  "Record preparation",
  "Follow-up and repeat queries",
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSending(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSending(false);
    setSent(true);
  };

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Contact"
        title="Talk to a patient support team that keeps things clear and calm."
        description="Use the contact form for eligibility guidance, consultation questions or pathway support."
      />

      <section className="shell contact-layout">
        <motion.article
          className="contact-panel"
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>Contact the clinic</h2>
          <p>
            This form is a premium placeholder and can be connected to your CRM, support desk or
            patient platform next.
          </p>

          {sent ? (
            <div className="contact-success">
              <h3>Message sent</h3>
              <p>
                Thank you. A team member would typically respond with next steps and any relevant
                guidance.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="form-field">
                <span>Full name *</span>
                <input
                  required
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                />
              </label>

              <label className="form-field">
                <span>Email *</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
              </label>

              <label className="form-field">
                <span>Phone</span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                />
              </label>

              <label className="form-field">
                <span>Topic *</span>
                <select
                  required
                  value={form.topic}
                  onChange={(event) => updateField("topic", event.target.value)}
                >
                  <option value="">Choose topic</option>
                  <option value="eligibility">Eligibility assessment</option>
                  <option value="consultation">Consultation support</option>
                  <option value="records">Records and history</option>
                  <option value="follow-up">Follow-up and pathway support</option>
                </select>
              </label>

              <label className="form-field">
                <span>Message *</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                />
              </label>

              <button type="submit" className="button-primary" disabled={sending}>
                {sending ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </motion.article>

        <div className="contact-side">
          <motion.article
            className="proof-card"
            variants={fadeUp(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Support options</h3>
            <ul className="bullet-list">
              {supportOptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            className="proof-card"
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Clinic details placeholder</h3>
            <p>Address: Placeholder Clinic Address, London, UK</p>
            <p>Email: care@clinicname.co.uk</p>
            <p>Phone: 020 0000 0000</p>
            <p>Hours: Mon-Sat 09:00-20:00</p>
          </motion.article>

          <motion.article
            className="map-placeholder"
            variants={fadeUp(0.14)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Map placeholder</h3>
            <p>Replace with interactive map embed when address details are finalized.</p>
          </motion.article>

          <motion.article
            className="proof-card"
            variants={fadeUp(0.18)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3>Need quick answers first?</h3>
            <p>Review key patient concerns before contacting support.</p>
            <Link className="button-secondary" to="/faqs">
              Open FAQs
            </Link>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
