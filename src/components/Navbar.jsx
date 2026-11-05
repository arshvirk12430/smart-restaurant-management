import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active fw-semibold" : ""}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span className="brand-icon">
            <i className="bi bi-egg-fried"></i>
          </span>
          <span>
            <strong>Olive & Ember</strong>
            <small className="brand-subtitle d-block">RESTAURANT</small>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/menu" className={navLinkClass}>
                Menu
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/reservations" className={navLinkClass}>
                Reservations
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/my-orders" className={navLinkClass}>
                My Orders
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/cart" className={navLinkClass}>
                <i className="bi bi-bag me-1"></i>
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
          <NavLink to="/admin" className={navLinkClass}>
               <i className="bi bi-speedometer2 me-1"></i>
                 Admin
         </NavLink>
              </li>

            <li className="nav-item ms-lg-2">
              <Link to="/login" className="btn btn-dark rounded-pill px-4">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;