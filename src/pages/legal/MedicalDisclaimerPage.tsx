import { LegalTemplatePage } from "./LegalTemplatePage";

export default function MedicalDisclaimerPage() {
  return (
    <LegalTemplatePage
      eyebrow="Medical Disclaimer"
      title="Medical disclaimer placeholder"
      sections={[
        {
          heading: "Information vs clinical advice",
          text: "Placeholder language clarifying that website content does not replace specialist medical assessment.",
        },
        {
          heading: "Suitability and prescribing",
          text: "Placeholder wording confirming that treatment decisions are based on clinician judgement and patient suitability.",
        },
        {
          heading: "Urgent medical concerns",
          text: "Placeholder emergency guidance for urgent or serious symptoms.",
        },
      ]}
    />
  );
}

