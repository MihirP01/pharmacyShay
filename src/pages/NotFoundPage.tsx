import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="page-shell not-found-page">
      <section className="shell panel">
        <div className="panel-head">
          <span className="section-tag">Page not found</span>
          <h2>This page is not available right now.</h2>
          <p>
            The route may have moved during the redesign. Use the homepage or patient pages below
            to continue.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="button-primary" to="/">
            Return home
          </Link>
          <Link className="button-secondary" to="/eligibility">
            Check your eligibility
          </Link>
        </div>
      </section>
    </main>
  );
}

