export type NavLink = {
  label: string;
  to: string;
};

export type ExternalLink = {
  label: string;
  href: string;
};

export type NavDropdownItem = {
  label: string;
  description: string;
  to?: string;
  href?: string;
};

export type NavDropdownSection = {
  label: string;
  items: NavDropdownItem[];
};

export type TickerItem = {
  label: string;
};

export type JourneyItem = {
  title: string;
  description: string;
};

export type ConditionGroup = {
  id: string;
  label: string;
  summary: string;
  details: string[];
};

export type Testimonial = {
  name: string;
  context: string;
  quote: string;
};

export type FaqItem = {
  id: string;
  category:
    | "Eligibility"
    | "Appointments"
    | "Prescriptions"
    | "Records"
    | "Costs"
    | "Delivery"
    | "Safety"
    | "Legal";
  question: string;
  answer: string;
};

export const internalNavLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Eligibility", to: "/eligibility" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Conditions", to: "/conditions" },
  { label: "FAQs", to: "/faqs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const externalResourceLinks: ExternalLink[] = [
  {
    label: "NHS Medical Cannabis",
    href: "https://www.nhs.uk/medicines/medical-cannabis/",
  },
  {
    label: "NICE Guidance",
    href: "https://www.nice.org.uk/guidance/ng144",
  },
  {
    label: "UK Government Guidance",
    href: "https://www.gov.uk/government/publications/cannabis-based-products-for-medicinal-use",
  },
];

export const navDropdownSections: NavDropdownSection[] = [
  {
    label: "Patient Access",
    items: [
      {
        label: "Check Eligibility",
        description: "Start the eligibility assessment and next-step guidance.",
        to: "/eligibility",
      },
      {
        label: "How It Works",
        description: "See the specialist-led process from review to follow-up.",
        to: "/how-it-works",
      },
      {
        label: "Conditions",
        description: "Browse symptom categories in a medically responsible format.",
        to: "/conditions",
      },
      {
        label: "Contact Support",
        description: "Get practical help with appointments, records and onboarding.",
        to: "/contact",
      },
    ],
  },
  {
    label: "Clinic Information",
    items: [
      {
        label: "FAQs",
        description: "Answers on eligibility, safety, legal context and delivery.",
        to: "/faqs",
      },
      {
        label: "About the Clinic",
        description: "Understand our care model and specialist-led philosophy.",
        to: "/about",
      },
      {
        label: "Medical Disclaimer",
        description: "Key treatment suitability and informational-use statements.",
        to: "/legal/medical-disclaimer",
      },
      {
        label: "Accessibility Statement",
        description: "Read how we support accessible, patient-first web use.",
        to: "/legal/accessibility",
      },
    ],
  },
  {
    label: "UK Guidance",
    items: [
      {
        label: "NHS Medical Cannabis",
        description: "Official NHS information for patients and families.",
        href: "https://www.nhs.uk/medicines/medical-cannabis/",
      },
      {
        label: "NICE Guidance NG144",
        description: "Clinical guidance on cannabis-based medicinal products.",
        href: "https://www.nice.org.uk/guidance/ng144",
      },
      {
        label: "UK Government Guidance",
        description: "Policy and regulatory background for specialist pathways.",
        href: "https://www.gov.uk/government/publications/cannabis-based-products-for-medicinal-use",
      },
      {
        label: "Privacy Policy",
        description: "How patient data and contact information are handled.",
        to: "/legal/privacy-policy",
      },
    ],
  },
];

export const trustTickerItems: TickerItem[] = [
  { label: "Specialist clinician review before treatment decisions" },
  { label: "Patient eligibility assessment first, no guaranteed access" },
  { label: "Medical history and medication review integrated in pathway" },
  { label: "Discreet pharmacy fulfilment and structured follow-up support" },
  { label: "Calm, regulated and trust-led private clinic experience" },
];

export const heroTrustPills = [
  "Trusted clinical care",
  "Eligibility-first journey",
  "Specialist-led consultations",
  "Safety-focused treatment planning",
];

export const homeStats = [
  {
    value: "4-step pathway",
    label: "From first check to follow-up with clear expectations at each stage.",
  },
  {
    value: "Clinician-led review",
    label: "Suitability decisions are made through specialist consultation and medical history review.",
  },
  {
    value: "Patient-first support",
    label: "Reassurance, education and practical guidance remain visible throughout the journey.",
  },
];

export const homeJourneyItems: JourneyItem[] = [
  {
    title: "Check if you may be eligible",
    description:
      "Start with high-level information to understand whether a specialist assessment could be appropriate for your situation.",
  },
  {
    title: "Share clinical background",
    description:
      "Medical history, current medications and previous treatments are gathered to support safe specialist review.",
  },
  {
    title: "Speak with a specialist clinician",
    description:
      "Your consultation focuses on symptom history, treatment goals, practical safety and clinically appropriate options.",
  },
  {
    title: "Treatment journey and follow-up",
    description:
      "If suitable, care continues with ongoing support, practical follow-up and pharmacy coordination.",
  },
];

export const conditionGroups: ConditionGroup[] = [
  {
    id: "pain",
    label: "Pain Support",
    summary:
      "Assessment pathways for persistent pain symptoms where previous options may have offered limited relief.",
    details: ["Neuropathic pain", "Musculoskeletal pain", "Fibromyalgia", "Migraine overlap"],
  },
  {
    id: "mental-health",
    label: "Mental Health + Sleep",
    summary:
      "Careful specialist review for anxiety-related symptoms and ongoing sleep disruption in a medically responsible framework.",
    details: ["Anxiety symptoms", "Sleep disturbance", "Stress-related patterns", "Low mood overlap"],
  },
  {
    id: "neurological",
    label: "Neurological",
    summary:
      "Structured review for complex neurological symptom groups requiring specialist oversight and long-term planning.",
    details: ["Spasticity", "Chronic headache", "Sensory symptoms", "Complex neurological pain"],
  },
  {
    id: "complex-care",
    label: "Complex Chronic Care",
    summary:
      "Multi-condition presentations where treatment planning needs broader context and careful clinical judgement.",
    details: ["Multi-symptom profiles", "Long-term condition overlap", "Women's health pain", "Complex care pathways"],
  },
];

export const clinicianTrustPoints = [
  {
    title: "Specialist-led care model",
    text: "Every treatment decision sits within a specialist consultation process, not a direct-to-consumer checkout flow.",
  },
  {
    title: "Regulated-service framing",
    text: "Messaging and design stay medically credible, with clear language around suitability, safety and next steps.",
  },
  {
    title: "Medical-record review",
    text: "Relevant history and current treatment context are integrated before pathways are discussed.",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Patient Story A",
    context: "Persistent pain support",
    quote:
      "The process felt clear and professional. I understood each step before decisions were made, which reduced a lot of anxiety.",
  },
  {
    name: "Patient Story B",
    context: "Sleep and anxiety pathway",
    quote:
      "The consultation felt calm and practical. The team explained options carefully and kept expectations realistic from the start.",
  },
  {
    name: "Patient Story C",
    context: "Complex symptom history",
    quote:
      "I appreciated that my previous treatments and records were taken seriously. It felt like clinical care, not a sales process.",
  },
];

export const faqPreviewIds = ["faq-eligibility", "faq-driving", "faq-delivery"];

export const faqItems: FaqItem[] = [
  {
    id: "faq-eligibility",
    category: "Eligibility",
    question: "How do I know if I may be eligible?",
    answer:
      "Start with the eligibility assessment. It gathers high-level information first, then guides you toward specialist review where appropriate.",
  },
  {
    id: "faq-age",
    category: "Eligibility",
    question: "Is there an age requirement?",
    answer:
      "Yes. The service is intended for adults and eligibility is assessed using age, symptom history and clinical context.",
  },
  {
    id: "faq-appointment-time",
    category: "Appointments",
    question: "What happens in the specialist consultation?",
    answer:
      "A specialist clinician reviews your medical background, current medications and treatment goals to determine clinically appropriate next steps.",
  },
  {
    id: "faq-follow-up",
    category: "Appointments",
    question: "Will I need follow-up appointments?",
    answer:
      "Follow-up is usually part of ongoing care to monitor response, adjust plans if needed and maintain safe treatment support.",
  },
  {
    id: "faq-prescriptions",
    category: "Prescriptions",
    question: "Is treatment guaranteed after consultation?",
    answer:
      "No. Treatment decisions depend on specialist clinical judgement and suitability.",
  },
  {
    id: "faq-repeat",
    category: "Prescriptions",
    question: "How do repeat prescriptions work?",
    answer:
      "Repeat pathways are guided by ongoing clinical review, safety considerations and patient support checks.",
  },
  {
    id: "faq-records",
    category: "Records",
    question: "Do I need medical records?",
    answer:
      "Supporting medical information is often important to help clinicians assess suitability and treatment safety.",
  },
  {
    id: "faq-gp",
    category: "Records",
    question: "Will my GP be informed?",
    answer:
      "Communication processes can be discussed during onboarding and should align with patient consent and clinical best practice.",
  },
  {
    id: "faq-costs",
    category: "Costs",
    question: "How are costs explained?",
    answer:
      "The journey should separate assessment fees, consultation fees and any treatment-related costs with clear, upfront language.",
  },
  {
    id: "faq-delivery",
    category: "Delivery",
    question: "How does pharmacy delivery work?",
    answer:
      "Where relevant, fulfilment is handled with discreet packaging, practical delivery updates and support guidance.",
  },
  {
    id: "faq-driving",
    category: "Safety",
    question: "Can I drive while on treatment?",
    answer:
      "Driving and safety discussions should always be covered with your clinician, including legal and practical considerations for your situation.",
  },
  {
    id: "faq-side-effects",
    category: "Safety",
    question: "How are side effects managed?",
    answer:
      "Monitoring and follow-up are key parts of care so concerns can be discussed early and treatment plans adjusted safely if needed.",
  },
  {
    id: "faq-legal",
    category: "Legal",
    question: "Is medical cannabis legal in the UK?",
    answer:
      "Cannabis-based medicines can be prescribed through specialist pathways in the UK where clinically appropriate.",
  },
  {
    id: "faq-work",
    category: "Legal",
    question: "Could treatment affect work considerations?",
    answer:
      "Work-related implications vary. Specialist guidance and clear documentation are important to discuss on an individual basis.",
  },
];

export const aboutPrinciples = [
  {
    title: "Discreet, patient-first access",
    text: "We design every touchpoint to reduce stress and support informed choices with calm, professional communication.",
  },
  {
    title: "Clinical credibility over marketing noise",
    text: "Our platform language prioritises safety, suitability and transparency instead of exaggerated treatment claims.",
  },
  {
    title: "Structured long-term support",
    text: "Care does not stop at consultation. The journey includes ongoing guidance, practical support and review continuity.",
  },
];
