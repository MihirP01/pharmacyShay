import { LegalTemplatePage } from "./LegalTemplatePage";

export default function TermsPage() {
  return (
    <LegalTemplatePage
      eyebrow="Terms"
      title="Terms and conditions placeholder"
      sections={[
        {
          heading: "Use of this website",
          text: "Placeholder terms for acceptable use, informational purpose and user responsibilities.",
        },
        {
          heading: "Clinical suitability and disclaimers",
          text: "Placeholder wording to clarify that website content does not guarantee treatment suitability.",
        },
        {
          heading: "Service limitations",
          text: "Placeholder terms covering scope, communication limits and service availability.",
        },
      ]}
    />
  );
}

