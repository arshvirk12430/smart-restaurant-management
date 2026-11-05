import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-hero">
            <div className="col-lg-7 py-5">
              <span className="eyebrow">
                <i className="bi bi-stars me-2"></i>
                GOOD FOOD. GOOD MOMENTS.
              </span>

              <h1 className="hero-title mt-4">
                A little taste of
                <span className="accent-text"> something special.</span>
              </h1>

              <p className="hero-description mt-4">
                Discover thoughtfully prepared dishes made with fresh
                ingredients. Whether you're dining in or ordering from home,
                there's always something delicious waiting for you.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/menu" className="btn btn-dark btn-lg rounded-pill px-4">
                  Explore Our Menu
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <Link
                  to="/reservations"
                  className="btn btn-outline-dark btn-lg rounded-pill px-4"
                >
                  Book a Table
                </Link>
              </div>

              <div className="hero-note mt-5">
                <i className="bi bi-check-circle-fill me-2"></i>
                Freshly prepared · Carefully selected ingredients · Made with care
              </div>
            </div>

            <div className="col-lg-5 py-5">
              <div className="hero-art">
                <div className="hero-art-circle">
                  <i className="bi bi-egg-fried"></i>
                </div>
                <div className="hero-art-label">
                  <span>FRESH</span>
                  <strong>Every single day.</strong>
                </div>
                <span className="floating-decoration decoration-one">✦</span>
                <span className="floating-decoration decoration-two">✧</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="eyebrow">THE OLIVE & EMBER EXPERIENCE</span>
            <h2 className="section-title mt-2">More than just a meal</h2>
            <p className="text-muted">
              Everything you need for a delightful dining experience.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="bi bi-basket2"></i>
                </div>
                <h5>Fresh Ingredients</h5>
                <p>
                  Explore a menu designed around flavour, freshness, and
                  carefully selected ingredients.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="bi bi-calendar-heart"></i>
                </div>
                <h5>Easy Reservations</h5>
                <p>
                  Plan your next visit with a convenient online table
                  reservation experience.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="feature-card h-100">
                <div className="feature-icon">
                  <i className="bi bi-chat-dots"></i>
                </div>
                <h5>Smart Food Assistant</h5>
                <p>
                  Get help discovering dishes and finding options that suit
                  your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section py-5">
        <div className="container text-center py-4">
          <h2 className="text-white fw-bold">Something delicious is waiting.</h2>
          <p className="text-white-50 mt-3">
            Find your next favourite dish today.
          </p>
          <Link to="/menu" className="btn btn-light rounded-pill px-4 mt-2">
            Browse the Menu
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;