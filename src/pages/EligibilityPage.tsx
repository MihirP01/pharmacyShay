import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { springEase } from "../lib/motion";

type FormState = {
  ageBand: "" | "under18" | "18to24" | "25to44" | "45to64" | "65plus";
  ukResident: "" | "yes" | "no";
  conditionCategory: "" | "pain" | "mental-health" | "neurological" | "complex-care" | "other";
  symptomSummary: string;
  priorTreatments: string;
  currentMedication: string;
  recordsAvailable: "" | "yes" | "some" | "no";
  gpAware: "" | "yes" | "not-yet" | "prefer-discuss";
  email: string;
  phone: string;
  consent: boolean;
};

type IntakeResult = "undetermined" | "ineligible" | "eligible-next-step" | "needs-review";

const initialState: FormState = {
  ageBand: "",
  ukResident: "",
  conditionCategory: "",
  symptomSummary: "",
  priorTreatments: "",
  currentMedication: "",
  recordsAvailable: "",
  gpAware: "",
  email: "",
  phone: "",
  consent: false,
};

const steps = [
  { title: "Basics", hint: "Start with high-level eligibility context." },
  { title: "Symptoms", hint: "Help us understand your condition profile." },
  { title: "Treatment history", hint: "Show what has already been tried." },
  { title: "Records + context", hint: "Support safe specialist review." },
  { title: "Contact", hint: "How we should reach you next." },
];

export default function EligibilityPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<IntakeResult>("undetermined");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const progress = ((step + 1) / steps.length) * 100;

  const stepIsValid = useMemo(() => {
    if (step === 0) {
      return Boolean(form.ageBand && form.ukResident);
    }
    if (step === 1) {
      return Boolean(form.conditionCategory && form.symptomSummary.trim().length >= 16);
    }
    if (step === 2) {
      return Boolean(form.priorTreatments.trim().length >= 10);
    }
    if (step === 3) {
      return Boolean(form.recordsAvailable && form.gpAware);
    }
    return Boolean(form.email.trim() && form.consent);
  }, [form, step]);

  const setField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const evaluateResult = (data: FormState): IntakeResult => {
    if (data.ageBand === "under18" || data.ukResident === "no") {
      return "ineligible";
    }

    if (data.recordsAvailable === "no" || data.priorTreatments.trim().length < 16) {
      return "needs-review";
    }

    return "eligible-next-step";
  };

  const handleNext = () => {
    if (!stepIsValid) {
      setError("Please complete the required fields before continuing.");
      return;
    }

    setError("");

    if (step === 0 && (form.ageBand === "under18" || form.ukResident === "no")) {
      setResult("ineligible");
      setSubmitted(true);
      return;
    }

    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const handleBack = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
  };

  const handleSubmit = async () => {
    if (!stepIsValid) {
      setError("Please complete the required fields before submitting.");
      return;
    }

    setError("");
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setResult(evaluateResult(form));
    setSubmitted(true);
    setSubmitting(false);
  };

  const resetForm = () => {
    setForm(initialState);
    setStep(0);
    setSubmitted(false);
    setResult("undetermined");
    setError("");
  };

  return (
    <main className="page-shell">
      <PageHero
        eyebrow="Patient eligibility assessment"
        title="Check if you may be eligible with a calm, step-by-step intake flow."
        description="This premium form experience captures high-level qualification details first, then guides patients into specialist next steps."
      />

      <section className="shell eligibility-page-layout">
        <div className="eligibility-progress-card">
          <p className="eligibility-progress-label">Progress</p>
          <div className="eligibility-progress-track" aria-hidden="true">
            <motion.div
              className="eligibility-progress-bar"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.36, ease: springEase }}
            />
          </div>
          <ol className="eligibility-step-list">
            {steps.map((item, index) => (
              <li
                key={item.title}
                className={
                  index === step ? "is-active" : index < step || submitted ? "is-done" : undefined
                }
              >
                <strong>{`0${index + 1}`}</strong>
                <div>
                  <p>{item.title}</p>
                  <span>{item.hint}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="eligibility-form-card">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.section
                key="result"
                className="eligibility-result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.36, ease: springEase }}
              >
                {result === "ineligible" ? (
                  <>
                    <span className="result-pill">Assessment outcome</span>
                    <h2>This pathway may not be suitable right now.</h2>
                    <p>
                      Based on the details shared, specialist eligibility appears limited at this
                      stage. You can still contact the clinic for guidance on alternative support.
                    </p>
                    <div className="result-actions">
                      <Link className="button-secondary" to="/contact">
                        Speak with support
                      </Link>
                      <button type="button" className="button-primary" onClick={resetForm}>
                        Start again
                      </button>
                    </div>
                  </>
                ) : null}

                {result === "needs-review" ? (
                  <>
                    <span className="result-pill">Assessment received</span>
                    <h2>Your details need a closer specialist review.</h2>
                    <p>
                      Thank you. A clinician-led team would normally review treatment history and
                      records next, then guide you on the best route into consultation.
                    </p>
                    <div className="result-actions">
                      <Link className="button-secondary" to="/how-it-works">
                        View next steps
                      </Link>
                      <button type="button" className="button-primary" onClick={resetForm}>
                        Update answers
                      </button>
                    </div>
                  </>
                ) : null}

                {result === "eligible-next-step" ? (
                  <>
                    <span className="result-pill">Strong eligibility signal</span>
                    <h2>You may be suitable for specialist consultation.</h2>
                    <p>
                      Your initial answers suggest a potential route into clinician review. The next
                      step is consultation scheduling and full medical context review.
                    </p>
                    <div className="result-actions">
                      <Link className="button-primary" to="/contact">
                        Continue to contact
                      </Link>
                      <button type="button" className="button-secondary" onClick={resetForm}>
                        Submit another assessment
                      </button>
                    </div>
                  </>
                ) : null}
              </motion.section>
            ) : (
              <motion.section
                key={`step-${step}`}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.32, ease: springEase }}
                className="eligibility-step-panel"
              >
                <h2>{steps[step].title}</h2>
                <p>{steps[step].hint}</p>

                {step === 0 ? (
                  <div className="form-grid">
                    <label className="form-field">
                      <span>Age band *</span>
                      <select
                        value={form.ageBand}
                        onChange={(event) =>
                          setField("ageBand", event.target.value as FormState["ageBand"])
                        }
                      >
                        <option value="">Select age band</option>
                        <option value="under18">Under 18</option>
                        <option value="18to24">18-24</option>
                        <option value="25to44">25-44</option>
                        <option value="45to64">45-64</option>
                        <option value="65plus">65+</option>
                      </select>
                    </label>

                    <label className="form-field">
                      <span>UK resident? *</span>
                      <select
                        value={form.ukResident}
                        onChange={(event) =>
                          setField("ukResident", event.target.value as FormState["ukResident"])
                        }
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </label>
                  </div>
                ) : null}

                {step === 1 ? (
                  <div className="form-grid">
                    <label className="form-field">
                      <span>Primary condition category *</span>
                      <select
                        value={form.conditionCategory}
                        onChange={(event) =>
                          setField(
                            "conditionCategory",
                            event.target.value as FormState["conditionCategory"],
                          )
                        }
                      >
                        <option value="">Select category</option>
                        <option value="pain">Pain support</option>
                        <option value="mental-health">Mental health + sleep</option>
                        <option value="neurological">Neurological</option>
                        <option value="complex-care">Complex chronic care</option>
                        <option value="other">Other / unsure</option>
                      </select>
                    </label>

                    <label className="form-field">
                      <span>Brief symptom summary *</span>
                      <textarea
                        value={form.symptomSummary}
                        onChange={(event) => setField("symptomSummary", event.target.value)}
                        rows={5}
                        placeholder="Describe the main symptoms and impact on daily life."
                      />
                    </label>
                  </div>
                ) : null}

                {step === 2 ? (
                  <div className="form-grid">
                    <label className="form-field">
                      <span>Previous treatments tried *</span>
                      <textarea
                        value={form.priorTreatments}
                        onChange={(event) => setField("priorTreatments", event.target.value)}
                        rows={5}
                        placeholder="List treatments already attempted and any notable outcomes."
                      />
                    </label>

                    <label className="form-field">
                      <span>Current medications</span>
                      <textarea
                        value={form.currentMedication}
                        onChange={(event) => setField("currentMedication", event.target.value)}
                        rows={4}
                        placeholder="Share current medication context if available."
                      />
                    </label>
                  </div>
                ) : null}

                {step === 3 ? (
                  <div className="form-grid">
                    <label className="form-field">
                      <span>Supporting records available? *</span>
                      <select
                        value={form.recordsAvailable}
                        onChange={(event) =>
                          setField(
                            "recordsAvailable",
                            event.target.value as FormState["recordsAvailable"],
                          )
                        }
                      >
                        <option value="">Select an option</option>
                        <option value="yes">Yes, available</option>
                        <option value="some">Some records available</option>
                        <option value="no">Not currently</option>
                      </select>
                    </label>

                    <label className="form-field">
                      <span>GP communication preference *</span>
                      <select
                        value={form.gpAware}
                        onChange={(event) =>
                          setField("gpAware", event.target.value as FormState["gpAware"])
                        }
                      >
                        <option value="">Select an option</option>
                        <option value="yes">GP is aware</option>
                        <option value="not-yet">Not yet discussed</option>
                        <option value="prefer-discuss">Prefer to discuss during consultation</option>
                      </select>
                    </label>
                  </div>
                ) : null}

                {step === 4 ? (
                  <div className="form-grid">
                    <label className="form-field">
                      <span>Email address *</span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(event) => setField("email", event.target.value)}
                        placeholder="name@example.com"
                      />
                    </label>

                    <label className="form-field">
                      <span>Phone (optional)</span>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(event) => setField("phone", event.target.value)}
                        placeholder="+44 ..."
                      />
                    </label>

                    <label className="consent-field">
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(event) => setField("consent", event.target.checked)}
                      />
                      <span>
                        I consent to be contacted about assessment next steps and understand this is
                        not a treatment guarantee. *
                      </span>
                    </label>
                  </div>
                ) : null}

                {error ? <p className="form-error">{error}</p> : null}

                <div className="form-actions">
                  <button
                    type="button"
                    className="button-secondary"
                    onClick={handleBack}
                    disabled={step === 0}
                  >
                    Back
                  </button>

                  {step < steps.length - 1 ? (
                    <button type="button" className="button-primary" onClick={handleNext}>
                      Continue
                    </button>
                  ) : (
                    <button type="button" className="button-primary" onClick={handleSubmit} disabled={submitting}>
                      {submitting ? "Submitting..." : "Submit assessment"}
                    </button>
                  )}
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

