import { LegalTemplatePage } from "./LegalTemplatePage";

export default function PrivacyPage() {
  return (
    <LegalTemplatePage
      eyebrow="Privacy Policy"
      title="Privacy policy placeholder"
      sections={[
        {
          heading: "How patient information is used",
          text: "Placeholder text for data usage, lawful basis, and patient communication policies.",
        },
        {
          heading: "Data storage and retention",
          text: "Placeholder text for retention windows, processing controls and record security commitments.",
        },
        {
          heading: "Patient rights",
          text: "Placeholder text for access, correction, objection and request pathways.",
        },
      ]}
    />
  );
}

