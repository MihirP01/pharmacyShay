import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { lazy, Suspense, type ReactNode } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { RouteSkeleton } from "./components/RouteSkeleton";
import { ScrollProgress } from "./components/ScrollProgress";
import { ScrollToTop } from "./components/ScrollToTop";

const HomePage = lazy(() => import("./pages/HomePage"));
const EligibilityPage = lazy(() => import("./pages/EligibilityPage"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage"));
const ConditionsPage = lazy(() => import("./pages/ConditionsPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PrivacyPage = lazy(() => import("./pages/legal/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/legal/TermsPage"));
const CookiePolicyPage = lazy(() => import("./pages/legal/CookiePolicyPage"));
const MedicalDisclaimerPage = lazy(() => import("./pages/legal/MedicalDisclaimerPage"));
const ComplaintsPage = lazy(() => import("./pages/legal/ComplaintsPage"));
const AccessibilityPage = lazy(() => import("./pages/legal/AccessibilityPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function PageFrame({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<RouteSkeleton />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageFrame>
                <HomePage />
              </PageFrame>
            }
          />
          <Route
            path="/eligibility"
            element={
              <PageFrame>
                <EligibilityPage />
              </PageFrame>
            }
          />
          <Route
            path="/how-it-works"
            element={
              <PageFrame>
                <HowItWorksPage />
              </PageFrame>
            }
          />
          <Route
            path="/conditions"
            element={
              <PageFrame>
                <ConditionsPage />
              </PageFrame>
            }
          />
          <Route
            path="/faqs"
            element={
              <PageFrame>
                <FaqPage />
              </PageFrame>
            }
          />
          <Route
            path="/about"
            element={
              <PageFrame>
                <AboutPage />
              </PageFrame>
            }
          />
          <Route
            path="/contact"
            element={
              <PageFrame>
                <ContactPage />
              </PageFrame>
            }
          />
          <Route
            path="/legal/privacy-policy"
            element={
              <PageFrame>
                <PrivacyPage />
              </PageFrame>
            }
          />
          <Route
            path="/legal/terms"
            element={
              <PageFrame>
                <TermsPage />
              </PageFrame>
            }
          />
          <Route
            path="/legal/cookie-policy"
            element={
              <PageFrame>
                <CookiePolicyPage />
              </PageFrame>
            }
          />
          <Route
            path="/legal/medical-disclaimer"
            element={
              <PageFrame>
                <MedicalDisclaimerPage />
              </PageFrame>
            }
          />
          <Route
            path="/legal/complaints"
            element={
              <PageFrame>
                <ComplaintsPage />
              </PageFrame>
            }
          />
          <Route
            path="/legal/accessibility"
            element={
              <PageFrame>
                <AccessibilityPage />
              </PageFrame>
            }
          />
          <Route
            path="*"
            element={
              <PageFrame>
                <NotFoundPage />
              </PageFrame>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <ScrollProgress />
        <Navbar />
        <ScrollToTop />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
