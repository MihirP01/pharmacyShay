import { PageHero } from "../../components/PageHero";

export function LegalTemplatePage({
  eyebrow,
  title,
  sections,
}: {
  eyebrow: string;
  title: string;
  sections: Array<{ heading: string; text: string }>;
}) {
  return (
    <main className="page-shell">
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description="This is a premium placeholder legal page and should be replaced with approved legal copy before launch."
      />

      <section className="shell legal-page">
        {sections.map((section) => (
          <article key={section.heading} className="legal-block">
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

