import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "../components/Accordion";
import { PageHero } from "../components/PageHero";
import { faqItems } from "../data/content";

type Category = "All" | (typeof faqItems)[number]["category"];

const categories: Category[] = [
  "All",
  "Eligibility",
  "Appointments",
  "Prescriptions",
  "Records",
  "Costs",
  "Delivery",
  "Safety",
  "Legal",
];

export default function FaqPage() {
  const [category, setCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return faqItems.filter((item) => {
      const categoryMatch = category === "All" || item.category === category;
      const search = query.trim().toLowerCase();
      if (!search) {
        return categoryMatch;
      }

      return (
        categoryMatch &&
        `${item.question} ${item.answer}`.toLowerCase().includes(search)
      );
    });
  }, [category, query]);

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Frequently asked questions"
        title="Clear, medically responsible answers to the questions patients ask most."
        description="Use category filters and search to find guidance on eligibility, safety, process, legal considerations and practical next steps."
        actions={
          <Link to="/eligibility" className="button-primary">
            Check your eligibility
          </Link>
        }
      />

      <section className="shell faq-page-controls">
        <label className="faq-search">
          <span>Search FAQs</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by keyword, such as driving, records or consultation..."
          />
        </label>

        <div className="faq-category-row" role="tablist" aria-label="FAQ categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={item === category ? "is-active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="faq-results-count">{`${filtered.length} question${filtered.length === 1 ? "" : "s"} found`}</p>
      </section>

      <section className="shell faq-page-list">
        <Accordion items={filtered} className="faq-accordion" />
      </section>
    </main>
  );
}

