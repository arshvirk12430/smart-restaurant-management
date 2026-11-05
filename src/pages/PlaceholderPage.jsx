import { Link } from "react-router-dom";

function PlaceholderPage({ title, description }) {
  return (
    <section className="placeholder-section">
      <div className="container text-center">
        <div className="placeholder-icon mb-3">
          <i className="bi bi-tools"></i>
        </div>

        <h1 className="fw-bold">{title}</h1>
        <p className="text-muted mt-3">{description}</p>

        <p className="small text-muted mt-4">
          This feature will be implemented in a later development step.
        </p>

        <Link to="/" className="btn btn-dark rounded-pill px-4 mt-2">
          <i className="bi bi-arrow-left me-2"></i>
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default PlaceholderPage;