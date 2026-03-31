import { LegalTemplatePage } from "./LegalTemplatePage";

export default function ComplaintsPage() {
  return (
    <LegalTemplatePage
      eyebrow="Complaints Procedure"
      title="Complaints procedure placeholder"
      sections={[
        {
          heading: "How to raise a concern",
          text: "Placeholder process for submitting service or communication concerns.",
        },
        {
          heading: "Response timeline",
          text: "Placeholder timeline for acknowledgement, investigation and response updates.",
        },
        {
          heading: "Escalation pathway",
          text: "Placeholder escalation route for unresolved concerns.",
        },
      ]}
    />
  );
}

