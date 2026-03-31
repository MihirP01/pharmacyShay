import { LegalTemplatePage } from "./LegalTemplatePage";

export default function AccessibilityPage() {
  return (
    <LegalTemplatePage
      eyebrow="Accessibility Statement"
      title="Accessibility statement placeholder"
      sections={[
        {
          heading: "Accessibility commitment",
          text: "Placeholder statement outlining inclusive design priorities and ongoing accessibility improvement.",
        },
        {
          heading: "Current support level",
          text: "Placeholder details on keyboard access, contrast approach, motion preferences and responsive behavior.",
        },
        {
          heading: "Report an accessibility issue",
          text: "Placeholder contact route for users needing accessibility support or reporting barriers.",
        },
      ]}
    />
  );
}

