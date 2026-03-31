import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { conditionGroups } from "../data/content";

type FilterKey = "all" | (typeof conditionGroups)[number]["id"];

export default function ConditionsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const visibleConditions = useMemo(() => {
    if (activeFilter === "all") {
      return conditionGroups;
    }
    return conditionGroups.filter((group) => group.id === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    if (activeFilter !== "all" && !conditionGroups.some((group) => group.id === activeFilter)) {
      setActiveFilter("all");
    }
  }, [activeFilter]);

  const isSingleView = visibleConditions.length === 1;

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Conditions and symptom support"
        title="Explore common symptom categories in a clinically responsible format."
        description="This page is educational and helps patients identify relevant pathways before specialist suitability assessment."
        actions={
          <Link to="/eligibility" className="button-primary">
            Check your eligibility
          </Link>
        }
      />

      <section className="shell conditions-filter-wrap">
        <div className="filter-row" role="tablist" aria-label="Condition filters">
          <button
            type="button"
            role="tab"
            aria-selected={activeFilter === "all"}
            aria-controls="conditions-grid"
            className={activeFilter === "all" ? "is-active" : ""}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          {conditionGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === group.id}
                aria-controls="conditions-grid"
                className={activeFilter === group.id ? "is-active" : ""}
                onClick={() => setActiveFilter(group.id)}
              >
                {group.label}
              </button>
            ))}
        </div>

        <motion.div
          id="conditions-grid"
          key={activeFilter}
          className={`condition-grid ${isSingleView ? "condition-grid--single" : ""}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          {visibleConditions.map((group) => (
            <motion.article
              key={group.id}
              className="condition-card"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>{group.label}</h3>
              <p>{group.summary}</p>
              <div className="condition-markers">
                {group.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <p className="micro-disclaimer">
          Clinical suitability is assessed by a specialist clinician and cannot be confirmed through
          symptom categories alone.
        </p>
      </section>
    </main>
  );
}
