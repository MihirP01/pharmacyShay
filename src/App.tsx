import { useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValueEvent,
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
  "NHS and private prescription support",
  "Travel vaccines, seasonal jabs and prevention",
  "Blood testing, medication reviews and pharmacist guidance",
  "THC- and CBD-based medical cannabis consultations where clinically appropriate",
];

const heroStats: HeroStat[] = [
  {
    value: "NHS + private",
    label: "clear pathways for everyday pharmacy needs and higher-touch care",
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

const heroCapsules = [
  "Repeat prescriptions",
  "Travel vaccines",
  "Blood testing",
  "THC/CBD clinics",
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
    eyebrow: "Prescriptions & advice",
    title: "Keep repeat medicines, urgent requests and pharmacist answers moving.",
    text: "This lane is built around the kind of practical support people expect from a modern UK pharmacy: clear dispensing, medication guidance and same-day access.",
    services: [serviceCards[0], serviceCards[1]],
  },
  {
    eyebrow: "Prevention & checks",
    title: "Use the pharmacy for prevention, not only for collection.",
    text: "Vaccines and blood testing sit together because they help people act early, stay informed and treat the pharmacy as an ongoing health touchpoint.",
    services: [serviceCards[2], serviceCards[3]],
  },
  {
    eyebrow: "Specialist & follow-up",
    title: "Specialist treatment should still feel clear, calm and familiar.",
    text: "Medical cannabis and aftercare work best when the interface feels regulated, grounded and easy to return to for repeats, updates and delivery support.",
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
    title: "NHS-ready support",
    body: "Prescription requests, repeat medicines and practical pharmacist guidance in one place.",
  },
  {
    title: "Specialist cannabis care",
    body: "THC and CBD pathways are explained with clinical clarity, discretion and follow-up.",
  },
  {
    title: "Health information hub",
    body: "Plain-English advice on medicines, prevention, travel health and blood testing.",
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
  drift = "left",
  density = "standard",
}: {
  id: string;
  panel: ReactNode;
  drift?: "left" | "right";
  density?: "standard" | "compact" | "short";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.22, 0.78, 0.92, 1],
    [0, 0.45, 1, 1, 0.45, 0],
  );
  const y = useTransform(scrollYProgress, [0, 0.16, 0.5, 0.84, 1], [72, 18, 0, -18, -72]);
  const xOffset = drift === "right" ? 42 : -42;
  const x = useTransform(scrollYProgress, [0, 0.18, 0.5, 0.84, 1], [xOffset, 8, 0, -8, -xOffset]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.84, 1], [0.975, 0.99, 1, 0.99, 0.975]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.16, 0.5, 0.84, 1],
    [
      "inset(10% 6% 10% 6% round 36px)",
      "inset(2% 1.5% 2% 1.5% round 36px)",
      "inset(0% 0% 0% 0% round 36px)",
      "inset(2% 1.5% 2% 1.5% round 36px)",
      "inset(10% 6% 10% 6% round 36px)",
    ],
  );

  return (
    <section id={id} ref={ref} className={`scene scene--${density}`}>
      <motion.div
        className="scene__frame"
        style={reducedMotion ? undefined : { opacity, x, y, scale, clipPath }}
      >
        {panel}
      </motion.div>
    </section>
  );
}

function App() {
  const reducedMotion = useReducedMotion();
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHeaderScrolled(latest > 36);
  });

  const auraOneY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 120]);
  const auraTwoY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -80]);
  const heroCopyY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 60]);
  const heroCardsY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -40]);
  const heroCardsScale = useTransform(scrollYProgress, [0, 1], [1, reducedMotion ? 1 : 0.988]);

  return (
    <div className="site-shell">
      <motion.header
        layout
        className={`site-header ${headerScrolled ? "site-header--scrolled" : ""}`}
      >
        <a className="brand" href="#top">
          <span className="brand__mark">S</span>
          <span className="brand__text">
            Shaylen Pharmacy
            <small>Wellness, prescriptions and specialist care</small>
          </span>
        </a>
        <nav aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="auth-button" type="button">
            Sign in / Sign up
          </button>
          <a className="header-cta" href="#contact">
            Request a callback
          </a>
        </div>
      </motion.header>

      <main id="top" className="story-flow">
        <section ref={heroRef} className="hero">
          <FloatingBackground one={auraOneY} two={auraTwoY} />
          <div className="hero-grid">
            <motion.div className="hero-copy" style={{ y: heroCopyY }}>
              <SectionTag>UK pharmacy, wellness and medical guidance</SectionTag>
              <p className="hero-kicker">
                Measured spacing, calm motion and a clearer route into care.
              </p>
              <h1>Care that feels considered from the first glance.</h1>
              <p className="hero-copy__lead">
                Shaylen Pharmacy brings together NHS and private prescription support,
                consultations, vaccines, blood testing, delivery, everyday health advice and
                regulated medical cannabis care in a digital experience designed to feel calm,
                precise and easy to trust.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#services">
                  Explore services
                </a>
                <a className="button button--ghost" href="#cannabis">
                  Understand cannabis care
                </a>
              </div>
              <p className="hero-account-note">
                Sign in / sign up is ready as a future patient account entry point for
                prescriptions, repeats and secure personal details.
              </p>
              <ul className="hero-list">
                {heroHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="hero-stage"
              style={{ y: heroCardsY, scale: heroCardsScale }}
            >
              <div className="hero-stage__panel">
                <div className="hero-stage__eyebrow">
                  <span>Measured pharmacy care</span>
                  <span>Clinic + delivery</span>
                </div>
                <div className="hero-stage__note">
                  <span>What should feel obvious</span>
                  <p>
                    Where to start, what is available and which next step makes sense should all
                    feel clear within seconds.
                  </p>
                </div>
                <div className="hero-stage__stats">
                  {heroStats.map((stat) => (
                    <article key={stat.value}>
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </article>
                  ))}
                </div>
                <div className="hero-stage__capsules">
                  {heroCapsules.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
              <div className="hero-stage__float-grid">
                {floatingCards.map((card, index) => (
                  <motion.article
                    key={card.title}
                    className={`floating-card floating-card--${index + 1}`}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      delay: 0.18 + index * 0.08,
                      duration: reducedMotion ? 0.2 : 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="floating-card__eyebrow">0{index + 1}</span>
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
          drift="left"
          density="standard"
          panel={
            <Panel
              tag="Services"
              title="Everyday pharmacy support, prevention and specialist care in one place."
              description="From NHS and private prescriptions to vaccines, blood tests and follow-up delivery support, the service range is organised so patients can find the right route quickly."
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
                    The structure stays controlled on purpose: essential care first, specialist
                    services second, and enough breathing room for each decision to feel simple.
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
          drift="right"
          density="compact"
          panel={
            <Panel
              tag="Medical cannabis"
              title="THC and CBD care is explained with clarity, discretion and proper clinical oversight."
              description="Patients can understand eligibility, assessment and follow-up without the tone drifting into lifestyle marketing or vague promises."
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
                    Patients are guided through symptom history, previous treatments, goals of care
                    and realistic outcomes so the pathway feels specialist, regulated and easy to
                    understand before any clinical decision is made.
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
                      CBD-dominant, balanced and THC-led approaches may all exist within a
                      regulated framework, but each route still depends on proper assessment,
                      monitoring and expectations setting.
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
                      Safety, legality, specialist oversight and ongoing review are made visible
                      throughout the pathway so patients know exactly how the service is framed.
                    </p>
                  </motion.article>
                </div>
              </div>
            </Panel>
          }
        />

        <ScrollScene
          id="info"
          drift="left"
          density="compact"
          panel={
            <Panel
              tag="Medical information"
              title="Reliable health information helps patients decide what to do next."
              description="Use the pharmacy as a practical first stop for everyday advice, medicine guidance, prevention support and better questions ahead of treatment."
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
          drift="right"
          density="compact"
          panel={
            <Panel
              tag="How it works"
              title="From first question to follow-up, the process stays clear."
              description="A simple patient journey helps people understand what happens before, during and after care."
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
          drift="left"
          density="short"
          panel={
            <Panel
              tag="Trust, access and FAQs"
              title="Speak to the team, plan the next step and find the answers you need."
              description="Contact details and common questions sit together so the page ends with clarity, trust and a practical route forward."
              accent="bright"
            >
              <div className="contact-layout">
                <div className="contact-card contact-card--feature">
                  <h3>Get in touch</h3>
                  <p className="contact-card__intro">
                    Whether you need a repeat, advice on symptoms or a specialist appointment, the
                    team can help direct you to the most suitable service.
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
          This site is designed for a UK pharmacy and wellness service. Medical information
          supports informed decisions but does not replace pharmacist or prescriber advice. For
          urgent or emergency symptoms, seek immediate local emergency care.
        </p>
      </footer>
    </div>
  );
}

export default App;
