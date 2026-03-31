import { LegalTemplatePage } from "./LegalTemplatePage";

export default function CookiePolicyPage() {
  return (
    <LegalTemplatePage
      eyebrow="Cookie Policy"
      title="Cookie policy placeholder"
      sections={[
        {
          heading: "Essential and analytics cookies",
          text: "Placeholder cookie categories, purposes and retention details.",
        },
        {
          heading: "Consent controls",
          text: "Placeholder text for cookie preferences and user consent updates.",
        },
        {
          heading: "Third-party services",
          text: "Placeholder text for external embeds, analytics and service providers.",
        },
      ]}
    />
  );
}

