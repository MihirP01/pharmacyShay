import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MotionReveal, MotionStagger } from "../components/MotionReveal";
import { PageHero } from "../components/PageHero";
import { homeJourneyItems } from "../data/content";
import { fadeUp } from "../lib/motion";

const reviewPoints = [
  "Symptom profile and daily impact",
  "Current medication and safety interactions",
  "Past treatment history and response",
  "Patient goals and practical expectations",
];

export default function HowItWorksPage() {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow="How it works"
        title="A transparent patient journey from eligibility check to follow-up support."
        description="Every step is designed to reduce uncertainty and help patients understand what happens next."
        actions={
          <>
            <Link to="/eligibility" className="button-primary">
              Check your eligibility
            </Link>
            <Link to="/contact" className="button-secondary">
              Speak with support
            </Link>
          </>
        }
      />

      <section className="shell how-page-layout">
        <aside className="how-page-sticky">
          <MotionReveal>
            <span className="section-tag">Journey map</span>
            <h2>Designed like guided onboarding, not guesswork.</h2>
            <p>
              The sticky panel keeps context visible while each step scrolls into view. This helps
              patients feel oriented throughout the process.
            </p>
          </MotionReveal>

          <MotionStagger className="review-points">
            {reviewPoints.map((point) => (
              <motion.div key={point} className="review-point" variants={fadeUp(0)}>
                {point}
              </motion.div>
            ))}
          </MotionStagger>
        </aside>

        <div className="how-page-timeline">
          <MotionStagger className="timeline-cards">
            {homeJourneyItems.map((item, index) => (
              <motion.article key={item.title} className="timeline-card" variants={fadeUp(0)}>
                <span>{`0${index + 1}`}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </MotionStagger>
        </div>
      </section>
    </main>
  );
}

