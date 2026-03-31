import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MotionStagger } from "../components/MotionReveal";
import { PageHero } from "../components/PageHero";
import { aboutPrinciples } from "../data/content";
import { fadeUp } from "../lib/motion";

const teamPlaceholders = [
  { role: "Medical Director", note: "Specialist clinician profile placeholder" },
  { role: "Lead Prescribing Specialist", note: "Specialist clinician profile placeholder" },
  { role: "Patient Care Lead", note: "Support and pathway coordination placeholder" },
];

const safetyPoints = [
  "Specialist consultation before treatment decisions",
  "Structured follow-up and monitoring support",
  "Clear communication around legal and safety considerations",
  "Transparent patient information and practical guidance",
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="About us"
        title="A patient-first clinic philosophy built on discretion, trust and specialist care."
        description="We are positioning this brand as a premium UK patient-access clinic experience with medically credible communication at every step."
        actions={
          <>
            <Link to="/how-it-works" className="button-secondary">
              View patient journey
            </Link>
            <Link to="/eligibility" className="button-primary">
              Check your eligibility
            </Link>
          </>
        }
      />

      <section className="shell about-layout">
        <MotionStagger className="about-principles">
          {aboutPrinciples.map((item) => (
            <motion.article key={item.title} className="proof-card" variants={fadeUp(0)}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </MotionStagger>

        <div className="about-detail-panels">
          <motion.article className="panel panel--soft" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <div className="panel-head">
              <span className="section-tag">Regulatory + safety approach</span>
              <h2>Careful messaging and safe pathway design come first.</h2>
              <p>
                Our communication style is intentionally professional and compliant. We avoid retail
                framing and keep care decisions clinician-led.
              </p>
            </div>
            <ul className="bullet-list">
              {safetyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.article>

          <motion.article className="panel" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <div className="panel-head">
              <span className="section-tag">Team placeholders</span>
              <h2>Specialist team profiles ready for your real clinicians.</h2>
              <p>
                Replace these blocks with approved profiles, credentials and patient-support roles
                once final content is available.
              </p>
            </div>
            <div className="team-placeholder-grid">
              {teamPlaceholders.map((member) => (
                <article key={member.role} className="team-card">
                  <h3>{member.role}</h3>
                  <p>{member.note}</p>
                </article>
              ))}
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}

