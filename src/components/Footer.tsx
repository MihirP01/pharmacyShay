import { Link } from "react-router-dom";

const legalLinks = [
  { label: "Privacy Policy", to: "/legal/privacy-policy" },
  { label: "Terms", to: "/legal/terms" },
  { label: "Cookie Policy", to: "/legal/cookie-policy" },
  { label: "Medical Disclaimer", to: "/legal/medical-disclaimer" },
  { label: "Complaints Procedure", to: "/legal/complaints" },
  { label: "Accessibility Statement", to: "/legal/accessibility" },
];

const quickLinks = [
  { label: "Eligibility", to: "/eligibility" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Conditions", to: "/conditions" },
  { label: "FAQs", to: "/faqs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Cannabis Clinic UK</h2>
            <p>
              Specialist UK patient-access experience designed around eligibility assessment, clinician
              review, careful guidance and long-term support.
            </p>
            <Link className="button-primary footer-cta" to="/eligibility">
              Am I Eligible?
            </Link>
          </div>

          <div className="footer-column">
            <h3>Patient Pages</h3>
            <ul>
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Legal + Compliance</h3>
            <ul>
              {legalLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="footer-disclaimer">
          This website is for information and patient-access guidance only and does not replace direct
          medical advice. Treatment suitability is always determined by a specialist clinician.
        </p>
      </div>
    </footer>
  );
}
