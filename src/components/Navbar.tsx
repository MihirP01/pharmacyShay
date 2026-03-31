import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState, type FocusEvent } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { externalResourceLinks, internalNavLinks, navDropdownSections } from "../data/content";

type ThemeMode = "light" | "dark";

export function Navbar() {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 16);
  });

  useEffect(() => {
    setActiveDropdown(null);
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleDropdownBlur = (event: FocusEvent<HTMLDivElement>) => {
    const nextFocus = event.relatedTarget as Node | null;
    if (!nextFocus || !event.currentTarget.contains(nextFocus)) {
      setActiveDropdown(null);
    }
  };

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <motion.header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <Link to="/" className="brand" aria-label="Cannabis Clinic UK home">
          <span className="brand-mark">C</span>
          <span className="brand-text">
            Cannabis Clinic UK
            <small>Specialist UK patient-access care</small>
          </span>
        </Link>

        <nav className="header-dropdown-nav" aria-label="Primary navigation sections">
          {navDropdownSections.map((section) => {
            const isOpen = activeDropdown === section.label;
            const sectionId = section.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

            return (
              <div
                key={section.label}
                className="header-dropdown"
                onMouseEnter={() => setActiveDropdown(section.label)}
                onMouseLeave={() =>
                  setActiveDropdown((current) => (current === section.label ? null : current))
                }
                onFocusCapture={() => setActiveDropdown(section.label)}
                onBlurCapture={handleDropdownBlur}
              >
                <button
                  id={`dropdown-trigger-${sectionId}`}
                  type="button"
                  className={`header-dropdown-trigger ${isOpen ? "is-open" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={`dropdown-panel-${sectionId}`}
                  onClick={() =>
                    setActiveDropdown((current) => (current === section.label ? null : section.label))
                  }
                >
                  {section.label}
                  <span className="header-dropdown-caret" aria-hidden="true">
                    ▾
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen ? (
                    <motion.div
                      id={`dropdown-panel-${sectionId}`}
                      className="header-dropdown-panel"
                      role="region"
                      aria-labelledby={`dropdown-trigger-${sectionId}`}
                      initial={{ opacity: 0, y: -10, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.985 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="header-dropdown-items">
                        {section.items.map((item) =>
                          item.to ? (
                            <NavLink
                              key={item.to}
                              to={item.to}
                              className={({ isActive }) =>
                                `header-dropdown-item ${isActive ? "is-active" : ""}`
                              }
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span>{item.label}</span>
                              <small>{item.description}</small>
                            </NavLink>
                          ) : (
                            <a
                              key={item.href}
                              href={item.href}
                              className="header-dropdown-item"
                              target="_blank"
                              rel="noreferrer"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span>{item.label}</span>
                              <small>{item.description}</small>
                            </a>
                          ),
                        )}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle desktop-theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {`Theme: ${theme === "dark" ? "Dark" : "Light"}`}
          </button>
          <Link to="/eligibility" className="eligibility-button">
            Am I Eligible?
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24 }}
          >
            <motion.nav
              id="site-menu"
              className="menu-panel"
              aria-label="Site navigation"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.985 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="menu-eyebrow">Pages</p>
              <div className="menu-links">
                {internalNavLinks.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => `menu-link ${isActive ? "is-active" : ""}`}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <p className="menu-eyebrow menu-eyebrow-sub">Appearance</p>
              <button
                type="button"
                className="theme-toggle menu-theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
              >
                {`Theme: ${theme === "dark" ? "Dark" : "Light"}`}
              </button>
              <p className="menu-eyebrow menu-eyebrow-sub">Clinical guidance</p>
              <div className="menu-resource-links">
                {externalResourceLinks.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
