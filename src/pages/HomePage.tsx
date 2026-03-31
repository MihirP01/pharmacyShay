import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MotionReveal, MotionStagger } from "../components/MotionReveal";
import { ScrollScene } from "../components/ScrollScene";
import { TrustTicker } from "../components/TrustTicker";
import {
  clinicianTrustPoints,
  conditionGroups,
  faqItems,
  faqPreviewIds,
  heroTrustPills,
  homeJourneyItems,
  homeStats,
  testimonials,
  trustTickerItems,
} from "../data/content";
import { fadeUp } from "../lib/motion";

const faqPreview = faqItems.filter((item) => faqPreviewIds.includes(item.id));
const heroVideos = [
  "/media/hero-woods.mp4",
  "/media/hero-sunset.mp4",
  "/media/hero-coastal.mp4",
];

export default function HomePage() {
  const reducedMotion = useReducedMotion();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = !reducedMotion && !videoFailed;

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-media">
          <AnimatePresence mode="wait">
            {showVideo ? (
              <motion.video
                key={heroVideos[activeVideoIndex]}
                className="hero-video"
                autoPlay
                muted
                playsInline
                poster="/media/hero-poster.svg"
                preload="metadata"
                aria-hidden="true"
                onEnded={() => setActiveVideoIndex((current) => (current + 1) % heroVideos.length)}
                onError={() => setVideoFailed(true)}
                initial={{ opacity: 0.2, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <source src={heroVideos[activeVideoIndex]} type="video/mp4" />
              </motion.video>
            ) : null}
          </AnimatePresence>
          <img
            className={`hero-fallback ${showVideo ? "" : "is-visible"}`}
            src="/media/hero-poster.svg"
            alt="Calm specialist clinic environment placeholder"
          />
          <div className="hero-video-overlay" />
        </div>

        <div className="home-hero-content shell">
          <motion.div
            className="home-hero-copy"
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
          >
            <span className="section-tag">Specialist UK medical cannabis clinic</span>
            <h1>
              Calm, specialist-led access
              <span> to medical cannabis care in the UK.</span>
            </h1>
            <p>
              A premium patient-access experience focused on education, eligibility assessment and
              trusted clinical care. No noise, no pressure, just a clear and responsible pathway.
            </p>
            <div className="hero-cta-row">
              <Link to="/eligibility" className="button-primary">
                Check your eligibility
              </Link>
              <Link to="/how-it-works" className="button-secondary">
                How it works
              </Link>
            </div>
          </motion.div>

          <MotionStagger className="hero-trust-bar" stagger={0.07}>
            {heroTrustPills.map((item) => (
              <motion.span key={item} variants={fadeUp(0)}>
                {item}
              </motion.span>
            ))}
          </MotionStagger>
        </div>
      </section>

      <section className="shell home-stats-strip" aria-label="Service reassurance">
        <MotionStagger className="home-stats-grid">
          {homeStats.map((item) => (
            <motion.article key={item.value} className="stat-card" variants={fadeUp(0)}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </motion.article>
          ))}
        </MotionStagger>
      </section>

      <TrustTicker items={trustTickerItems} />

      <ScrollScene id="home-journey" density="compact" drift="left" flow>
        <section className="shell panel">
          <div className="panel-head">
            <span className="section-tag">Patient journey</span>
            <h2>How the treatment journey works, step by step.</h2>
            <p>
              We explain each stage clearly so patients feel reassured, informed and confident
              before they submit details.
            </p>
          </div>

          <MotionStagger className="journey-grid">
            {homeJourneyItems.map((item, index) => (
              <motion.article key={item.title} className="journey-card" variants={fadeUp(0)}>
                <span>{`0${index + 1}`}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </MotionStagger>
        </section>
      </ScrollScene>

      <ScrollScene id="home-conditions" density="compact" drift="right" flow>
        <section className="shell panel panel--soft">
          <div className="panel-head">
            <span className="section-tag">Conditions + symptom support</span>
            <h2>Educational condition categories presented with clinical responsibility.</h2>
            <p>
              Browse common symptom groups while keeping expectations grounded in specialist
              suitability assessment.
            </p>
          </div>

          <MotionStagger className="condition-grid">
            {conditionGroups.map((group) => (
              <motion.article key={group.id} className="condition-card" variants={fadeUp(0)}>
                <h3>{group.label}</h3>
                <p>{group.summary}</p>
                <div className="condition-markers">
                  {group.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </MotionStagger>

          <p className="micro-disclaimer">
            Suitability is always assessed by a specialist clinician. Categories are educational and
            do not imply guaranteed treatment.
          </p>
        </section>
      </ScrollScene>

      <ScrollScene id="home-clinician" density="compact" drift="left" flow>
        <section className="shell panel panel--bright">
          <div className="panel-head">
            <span className="section-tag">Clinician credibility</span>
            <h2>Specialist-led trust is built into every interaction.</h2>
            <p>
              The site architecture reinforces regulated-service messaging, medical record review and
              careful safety communication.
            </p>
          </div>

          <MotionStagger className="proof-stack">
            {clinicianTrustPoints.map((item) => (
              <motion.article key={item.title} className="proof-card" variants={fadeUp(0)}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
            ))}
          </MotionStagger>
        </section>
      </ScrollScene>

      <ScrollScene id="home-testimonials" density="compact" drift="right" flow>
        <section className="shell panel">
          <div className="panel-head">
            <span className="section-tag">Patient stories</span>
            <h2>Reassuring outcomes from a calm, structured process.</h2>
            <p>
              Placeholder stories are shown in a tasteful clinical tone and can be replaced with
              approved patient content later.
            </p>
          </div>

          <MotionStagger className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <motion.article key={testimonial.name} className="testimonial-card" variants={fadeUp(0)}>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-context">{testimonial.context}</p>
              </motion.article>
            ))}
          </MotionStagger>
        </section>
      </ScrollScene>

      <section className="shell panel home-faq-preview">
        <div className="panel-head">
          <span className="section-tag">FAQ preview</span>
          <h2>Key questions answered before patients book.</h2>
          <p>
            Safety, legal context and eligibility concerns are addressed clearly to reduce anxiety
            and improve decision quality.
          </p>
        </div>
        <div className="faq-preview-list">
          {faqPreview.map((faq) => (
            <MotionReveal key={faq.id} className="faq-preview-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </MotionReveal>
          ))}
        </div>
        <Link to="/faqs" className="button-secondary">
          View full FAQs
        </Link>
      </section>

      <section className="shell final-cta">
        <MotionReveal className="final-cta-card">
          <span className="section-tag">Next step</span>
          <h2>Find out if you may be eligible for specialist consultation.</h2>
          <p>
            Start with a calm eligibility assessment designed to collect the right information in
            the right order.
          </p>
          <Link to="/eligibility" className="button-primary">
            Check your eligibility
          </Link>
        </MotionReveal>
      </section>
    </main>
  );
}
