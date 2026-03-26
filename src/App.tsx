import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type NavItem = {
  label: string;
  href: string;
};

type ServiceCard = {
  code: string;
  title: string;
  text: string;
  items: string[];
};

type InfoCard = {
  eyebrow: string;
  title: string;
  text: string;
};

type Step = {
  number: string;
  title: string;
  text: string;
};

type Faq = {
  question: string;
  answer: string;
};

type HeroStat = {
  value: string;
  label: string;
};

type ServiceGroup = {
  eyebrow: string;
  title: string;
  text: string;
  services: ServiceCard[];
};

const navItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Cannabis Care", href: "#cannabis" },
  { label: "Health Info", href: "#info" },
  { label: "How It Works", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const heroHighlights = [
  "Private prescriptions and repeat support",
  "Travel vaccines, seasonal jabs and prevention",
  "Blood testing, wellness reviews and medication guidance",
  "THC- and CBD-based medical cannabis consultations where clinically appropriate",
];

const heroStats: HeroStat[] = [
  {
    value: "Open late",
    label: "for urgent repeats, same-day questions and practical reassurance",
  },
  {
    value: "THC + CBD",
    label: "explained as regulated specialist care with calm, clear language",
  },
  {
    value: "One destination",
    label: "for medicines, prevention, delivery and trusted health guidance",
  },
];

const serviceCards: ServiceCard[] = [
  {
    code: "RX",
    title: "Dispensing & repeat prescriptions",
    text: "Fast prescription handling with pharmacist-led checks, refill reminders and guidance for ongoing medicines.",
    items: ["Private and repeat dispensing", "Medication reviews", "Delivery coordination"],
  },
  {
    code: "GP",
    title: "Same-day consultations",
    text: "Private pharmacy and clinician support for minor illness, treatment questions and care pathways that need fast answers.",
    items: ["Minor illness support", "Women’s and men’s health", "Referral onward when needed"],
  },
  {
    code: "VAC",
    title: "Vaccines & travel clinic",
    text: "Seasonal protection, destination-led travel advice and appointment-based vaccine planning for busy patients.",
    items: ["Flu and travel vaccines", "Risk-based travel checks", "Prevention planning"],
  },
  {
    code: "LAB",
    title: "Blood tests & wellness screening",
    text: "Clear pathways for blood work, biomarker checks and follow-up conversations that turn results into practical next steps.",
    items: ["Health screening panels", "Hormone and wellness checks", "Result interpretation support"],
  },
  {
    code: "CAN",
    title: "Medical cannabis care",
    text: "Structured assessment and follow-up for patients exploring specialist THC or CBD treatments under regulated care models.",
    items: ["CBD-led and balanced options", "Specialist review pathways", "Monitoring and dose titration"],
  },
  {
    code: "24H",
    title: "Delivery, reminders & aftercare",
    text: "A pharmacy should stay useful after checkout, so the experience includes reminders, follow-up prompts and home delivery support.",
    items: ["Nationwide dispatch support", "Local courier windows", "Secure reorder guidance"],
  },
];

const serviceGroups: ServiceGroup[] = [
  {
    eyebrow: "Medicines & access",
    title: "Keep everyday pharmacy needs moving without friction.",
    text: "This lane is about confidence and speed: prescriptions, medication questions and access to same-day support.",
    services: [serviceCards[0], serviceCards[1]],
  },
  {
    eyebrow: "Prevention & screening",
    title: "Use the pharmacy as a place for prevention, not just collection.",
    text: "Vaccines and blood testing sit together here because they both help patients act earlier, not later.",
    services: [serviceCards[2], serviceCards[3]],
  },
  {
    eyebrow: "Specialist & aftercare",
    title: "Higher-touch care still needs a calm, readable interface.",
    text: "Medical cannabis and delivery support work best when the information feels structured, warm and clinically grounded.",
    services: [serviceCards[4], serviceCards[5]],
  },
];

const cannabisPoints = [
  "Specialist-led eligibility screening with a full medication and symptom review.",
  "Routes covering CBD-dominant, balanced and THC-led options when legally available and clinically suitable.",
  "Ongoing monitoring focused on symptom response, side effects, dosing confidence and safe storage.",
];

const informationCards: InfoCard[] = [
  {
    eyebrow: "Everyday Care",
    title: "Minor illness guidance that is easy to act on",
    text: "Patients can quickly find what the pharmacy can help with first, when self-care may be enough and when it is time to escalate.",
  },
  {
    eyebrow: "Long-Term Support",
    title: "Medication information without the overwhelm",
    text: "Explain common medicine types, safe use, refill timing, interactions and the purpose of reviews in language people can actually follow.",
  },
  {
    eyebrow: "Preventive Health",
    title: "Vaccines, screenings and wellbeing plans in one place",
    text: "The site makes prevention feel proactive by pairing vaccine pathways, test options and practical health maintenance advice.",
  },
  {
    eyebrow: "Specialist Pathways",
    title: "Clear expectations for medical cannabis care",
    text: "Visitors can understand who it may be for, why assessment matters and how THC and CBD options differ before booking anything.",
  },
];

const pathwaySteps: Step[] = [
  {
    number: "01",
    title: "Choose the right service",
    text: "Start with prescriptions, vaccination, screening, same-day advice or a specialist cannabis consultation pathway.",
  },
  {
    number: "02",
    title: "Complete a clinical review",
    text: "Share symptoms, medications, allergies and treatment goals so the pharmacy team can triage safely.",
  },
  {
    number: "03",
    title: "Receive a tailored plan",
    text: "Get treatment guidance, supply options, testing advice, referrals or follow-up scheduling based on your needs.",
  },
  {
    number: "04",
    title: "Stay supported after the visit",
    text: "Use reminders, reorder support and aftercare guidance to keep treatment practical between appointments.",
  },
];

const faqs: Faq[] = [
  {
    question: "What should a modern pharmacy website help patients do?",
    answer:
      "It should make it easy to understand services, book or request help, learn what the pharmacy treats, see when to escalate to a clinician and understand what happens next after a consultation or prescription.",
  },
  {
    question: "How is medical cannabis presented on this site?",
    answer:
      "As a specialist, assessment-led pathway rather than a retail product. The copy explains that THC and CBD options depend on clinical suitability, legal frameworks and prescriber review.",
  },
  {
    question: "Can this site support both in-person and delivery-based care?",
    answer:
      "Yes. The content is written for a pharmacy with a clinic hub, remote support options and delivery workflows, so patients can understand both appointment-based care and medicine fulfilment.",
  },
  {
    question: "Does the medical information replace clinical advice?",
    answer:
      "No. Educational content helps people prepare and make informed choices, but it should always sit alongside pharmacist or prescriber guidance, especially for new symptoms or controlled treatments.",
  },
];

const floatingCards = [
  {
    title: "Night-owl support",
    body: "Urgent repeats, calm answers and fast triage without the frantic energy.",
  },
  {
    title: "Cannabis, clarified",
    body: "A specialist pathway for THC and CBD care that feels informed, not salesy.",
  },
  {
    title: "Health library",
    body: "Readable guidance on prevention, medicines, travel health and blood tests.",
  },
];

function SectionTag({ children }: { children: string }) {
  return <span className="section-tag">{children}</span>;
}

function Panel({
  tag,
  title,
  description,
  children,
  accent = "default",
}: {
  tag: string;
  title: string;
  description: string;
  children: ReactNode;
  accent?: "default" | "bright" | "soft";
}) {
  return (
    <div className={`panel panel--${accent}`}>
      <div className="panel__intro">
        <SectionTag>{tag}</SectionTag>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}

function FloatingBackground({
  one,
  two,
}: {
  one: MotionValue<number>;
  two: MotionValue<number>;
}) {
  return (
    <>
      <motion.div className="hero-aura hero-aura--one" style={{ y: one }} />
      <motion.div className="hero-aura hero-aura--two" style={{ y: two }} />
    </>
  );
}

function ScrollScene({
  id,
  panel,
}: {
  id: string;
  panel: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.28, 0.72, 0.88, 1],
    [0, 0.35, 1, 1, 0.35, 0],
  );
  const y = useTransform(scrollYProgress, [0, 0.18, 0.5, 0.82, 1], [90, 24, 0, -26, -90]);
  const scale = useTransform(scrollYProgress, [0, 0.22, 0.5, 0.82, 1], [0.965, 0.985, 1, 0.985, 0.965]);

  return (
    <section id={id} ref={ref} className="scene">
      <motion.div
        className="scene__frame"
        style={reducedMotion ? undefined : { opacity, y, scale }}
      >
        {panel}
      </motion.div>
    </section>
  );
}

function App() {
  const reducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const auraOneY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 120]);
  const auraTwoY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -80]);
  const heroCopyY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 60]);
  const heroCardsY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -40]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand__mark">S</span>
          <span className="brand__text">
            Shaylen Pharmacy
            <small>Wellness, prescriptions and specialist care</small>
          </span>
        </a>
        <nav aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          Request a callback
        </a>
      </header>

      <main id="top" className="story-flow">
        <section ref={heroRef} className="hero">
          <FloatingBackground one={auraOneY} two={auraTwoY} />
          <div className="hero-grid">
            <motion.div className="hero-copy" style={{ y: heroCopyY }}>
              <SectionTag>Private pharmacy, wellness and medical guidance</SectionTag>
              <p className="hero-kicker">
                Clean enough to feel premium. Quirky enough to feel human.
              </p>
              <h1>Elegant care, practical next steps, and a homepage with real rhythm.</h1>
              <p className="hero-copy__lead">
                Built to explain what the pharmacy does clearly: prescriptions, consultations,
                vaccines, blood testing, delivery support, wellness services and specialist
                medical cannabis pathways covering both THC and CBD-based care where appropriate.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#services">
                  Explore services
                </a>
                <a className="button button--ghost" href="#cannabis">
                  Understand cannabis care
                </a>
              </div>
              <ul className="hero-list">
                {heroHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="hero-stage" style={{ y: heroCardsY }}>
              <div className="hero-stage__panel">
                <div className="hero-stage__eyebrow">
                  <span>Open late</span>
                  <span>Clinic + delivery</span>
                </div>
                <div className="hero-stage__note">
                  <span>Tonight's brief</span>
                  <p>Reassuring answers first. Elegant information design second. Friction last.</p>
                </div>
                <div className="hero-stage__stats">
                  {heroStats.map((stat) => (
                    <article key={stat.value}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </article>
                  ))}
                </div>
              </div>
              <div className="hero-stage__float-grid">
                {floatingCards.map((card, index) => (
                  <motion.article
                    key={card.title}
                    className={`floating-card floating-card--${index + 1}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={
                      reducedMotion
                        ? { opacity: 1, y: 0 }
                        : {
                            opacity: 1,
                            y: [0, -10, 0],
                            rotate: index % 2 === 0 ? [-1.2, 1.2, -1.2] : [1.2, -1.2, 1.2],
                          }
                    }
                    transition={{
                      delay: 0.2 + index * 0.12,
                      duration: 6 + index,
                      repeat: reducedMotion ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <strong>{card.title}</strong>
                    <p>{card.body}</p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
          <motion.div
            className="hero-ribbon"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Prescriptions</span>
            <span>Vaccines</span>
            <span>Blood tests</span>
            <span>Medical cannabis</span>
            <span>Delivery & aftercare</span>
            <span>Health guidance</span>
          </motion.div>
        </section>

        <ScrollScene
          id="services"
          panel={
            <Panel
              tag="What the pharmacy offers"
              title="The service mix is broad, but the page flow makes it feel calm and easy to scan."
              description="Instead of treating every offer the same way, this section introduces the essentials first, then lets the more specialist pathways unfold naturally."
            >
              <div className="services-editorial">
                <motion.div
                  className="services-summary"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="services-summary__lead">
                    The section is now organised in lanes, not scattered boxes, so the content
                    reads more like a care pathway and less like a grid of unrelated promos.
                  </p>
                  <div className="services-pill-row">
                    <span>Urgent repeats</span>
                    <span>Same-day advice</span>
                    <span>Prevention</span>
                    <span>Specialist care</span>
                  </div>
                </motion.div>

                <div className="service-lanes">
                  {serviceGroups.map((group, groupIndex) => (
                    <motion.article
                      key={group.title}
                      className={`service-lane service-lane--${groupIndex + 1}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.18 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="service-lane__intro">
                        <span className="services-lead__eyebrow">{group.eyebrow}</span>
                        <h3>{group.title}</h3>
                        <p>{group.text}</p>
                      </div>

                      <div className="service-inline-list">
                        {group.services.map((service) => (
                          <article key={service.title} className="service-inline">
                            <div className="service-inline__head">
                              <span className="service-inline__code">{service.code}</span>
                              <div>
                                <h4>{service.title}</h4>
                                <p>{service.text}</p>
                              </div>
                            </div>
                            <ul>
                              {service.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </article>
                        ))}
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            </Panel>
          }
        />

        <ScrollScene
          id="cannabis"
          panel={
            <Panel
              tag="Medical cannabis"
              title="THC and CBD pathways are framed as thoughtful clinical care, not as something impulsive or vague."
              description="This section uses a more focused tone and cleaner pacing so the page naturally slows down before discussing eligibility, follow-up and patient expectations."
              accent="bright"
            >
              <div className="cannabis-layout">
                <motion.article
                  className="cannabis-card cannabis-card--narrative"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <SectionTag>How the pathway is framed</SectionTag>
                  <h3>Education first, suitability second, prescribing only when appropriate.</h3>
                  <p>
                    The site makes room for symptom history, previous treatments, goals of care and
                    realistic outcomes. That helps keep the tone specialist and medically credible,
                    even while the overall design stays warm and inviting.
                  </p>
                  <ul className="check-list">
                    {cannabisPoints.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.article>

                <div className="cannabis-stack">
                  <motion.article
                    className="cannabis-card cannabis-card--spotlight"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3>What patients need to understand quickly</h3>
                    <p>
                      This part of the homepage clarifies that CBD-dominant, balanced and THC-led
                      approaches may all exist within a regulated framework, but all require proper
                      assessment, monitoring and expectations setting.
                    </p>
                    <div className="pill-row">
                      <span>CBD-focused options</span>
                      <span>Balanced THC/CBD plans</span>
                      <span>Follow-up and titration</span>
                    </div>
                  </motion.article>

                  <motion.article
                    className="cannabis-card cannabis-card--micro"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="micro-label">Quiet reassurance</span>
                    <p>
                      The copy explicitly avoids recreational cues and instead highlights safety,
                      legality, specialist oversight and ongoing review.
                    </p>
                  </motion.article>
                </div>
              </div>
            </Panel>
          }
        />

        <ScrollScene
          id="info"
          panel={
            <Panel
              tag="Medical information"
              title="Patients should leave the site more informed, more confident and less overwhelmed."
              description="This section leans into elegant editorial structure so the information side of the website feels genuinely useful, not like filler underneath the service cards."
              accent="soft"
            >
              <div className="info-mosaic">
                {informationCards.map((card, index) => (
                  <motion.article
                    key={card.title}
                    className={`info-card info-card--${index + 1}`}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span>{card.eyebrow}</span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </motion.article>
                ))}
              </div>
            </Panel>
          }
        />

        <ScrollScene
          id="journey"
          panel={
            <Panel
              tag="How it works"
              title="The patient journey feels simple because the structure does the hard work behind the scenes."
              description="Each step is visually connected, which gives the page a sense of flow while still keeping the content clear and genuinely usable."
            >
              <div className="journey-rail">
                {pathwaySteps.map((step) => (
                  <motion.article
                    key={step.number}
                    className="step-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span>{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </motion.article>
                ))}
              </div>
            </Panel>
          }
        />

        <ScrollScene
          id="contact"
          panel={
            <Panel
              tag="Trust, access and FAQs"
              title="The close should feel clear and composed: who to contact, what to expect and where to ask the next question."
              description="The last section keeps the same elegant tone, but becomes a little more practical so the page finishes with confidence rather than decoration."
              accent="bright"
            >
              <div className="contact-layout">
                <div className="contact-card contact-card--feature">
                  <h3>Get in touch</h3>
                  <p className="contact-card__intro">
                    A refined contact panel with enough warmth to feel human and enough structure
                    to feel dependable.
                  </p>
                  <dl>
                    <div>
                      <dt>Clinic hub</dt>
                      <dd>Hampstead, London with UK-wide delivery support</dd>
                    </div>
                    <div>
                      <dt>Email</dt>
                      <dd>care@shaylenpharmacy.co.uk</dd>
                    </div>
                    <div>
                      <dt>Phone</dt>
                      <dd>020 7040 1122</dd>
                    </div>
                    <div>
                      <dt>Hours</dt>
                      <dd>Mon-Sat 8:00-22:00, Sun 9:00-18:00</dd>
                    </div>
                  </dl>
                </div>
                <div className="faq-list">
                  {faqs.map((faq) => (
                    <details key={faq.question} className="faq-item">
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </Panel>
          }
        />
      </main>

      <footer className="site-footer">
        <p>
          This concept site is designed for a UK-style pharmacy and wellness service. Medical
          information supports informed decisions but does not replace pharmacist or prescriber
          advice. For urgent or emergency symptoms, seek immediate local emergency care.
        </p>
      </footer>
    </div>
  );
}

export default App;
