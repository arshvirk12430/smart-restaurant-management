import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer mt-auto">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-5">
            <h4 className="text-white fw-bold">Olive & Ember</h4>
            <p className="footer-description">
              Fresh ingredients, thoughtfully prepared dishes, and a dining
              experience worth coming back for.
            </p>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="text-white mb-3">Explore</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h6 className="text-white mb-3">Contact</h6>
            <p className="footer-description mb-2">
              <i className="bi bi-envelope me-2"></i>
              hello@oliveandember.example
            </p>
            <p className="footer-description">
              <i className="bi bi-clock me-2"></i>
              Open daily: 11:00 AM – 10:00 PM
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
          <small className="footer-description">
            © {new Date().getFullYear()} Olive & Ember. All rights reserved.
          </small>
          <small className="footer-description">
            Restaurant Management System — Academic Project
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;                                                                                                                      