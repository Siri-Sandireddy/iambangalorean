import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Registration from "./Registration";
import "./App.css";

function AwarenessOrCctaPage({ mode }) {
  const navigate = useNavigate();
  const isAwareness = mode === "awareness";

  return (
    <div className="hrdaya-page">
      <header className="detail-header">
        <img
          src="/iambangalorean.jpeg"
          alt="Bangalorean.com"
          className="detail-site-logo"
        />

        <button
          className="back-home-btn"
          onClick={() => navigate("/hrdayasiddhi")}
        >
          ← Back to Hrdaya Siddhi
        </button>
      </header>

      <main className="initiative-detail-main">
        <div className={`detail-number ${isAwareness ? "red" : "green"}`}>
          {isAwareness ? "01" : "02"}
        </div>

        <h1 className={`initiative-detail-title ${isAwareness ? "red" : "green"}`}>
          {isAwareness ? "HEART HEALTH AWARENESS" : "CCTA / CAC TESTS"}
        </h1>

        <p className="initiative-detail-subtitle">
          {isAwareness
            ? "Awareness today can help protect hearts tomorrow."
            : "Understanding non-invasive cardiac screening."}
        </p>

        {isAwareness ? (
          <>
            <section className="initiative-detail-intro">
              <h2>Why Heart Health Awareness Matters</h2>
              <p>
                Heart health awareness helps people understand
                cardiovascular diseases, recognize possible warning
                signs, and take preventive steps. Many heart-related
                conditions may develop without obvious symptoms.
                Learning about risk factors and seeking timely medical
                advice can make an important difference.
              </p>
            </section>

            <div className="initiative-information-grid">
              <section className="information-card">
                <h2>Common Risk Factors</h2>
                <ul>
                  <li>High blood pressure</li>
                  <li>High cholesterol</li>
                  <li>Diabetes</li>
                  <li>Smoking and tobacco use</li>
                  <li>Physical inactivity</li>
                  <li>Family history of heart disease</li>
                </ul>
              </section>

              <section className="information-card">
                <h2>Possible Warning Signs</h2>
                <ul>
                  <li>Chest discomfort or pressure</li>
                  <li>Shortness of breath</li>
                  <li>Unusual sweating</li>
                  <li>Discomfort in the arms, back, neck or jaw</li>
                  <li>Unusual tiredness or dizziness</li>
                </ul>

                <p className="medical-note">
                  Warning signs can vary. Seek emergency medical
                  attention if you think someone may be having a
                  heart attack.
                </p>
              </section>

              <section className="information-card">
                <h2>Preventive Heart Care</h2>
                <ul>
                  <li>Maintain regular physical activity.</li>
                  <li>Choose a balanced and nutritious diet.</li>
                  <li>Monitor blood pressure and cholesterol.</li>
                  <li>Attend recommended health check-ups.</li>
                  <li>Follow advice from healthcare professionals.</li>
                </ul>
              </section>

              <section className="information-card">
                <h2>Our Awareness Initiative</h2>
                <p>
                  Hrdaya Siddhi aims to spread awareness through
                  community education, health information and
                  organized screening initiatives across Bengaluru.
                  The objective is to encourage people to understand
                  their heart health and consult healthcare
                  professionals when needed.
                </p>
              </section>
            </div>
          </>
        ) : (
          <>
            <section className="initiative-detail-intro">
              <h2>Understanding CCTA and CAC Tests</h2>
              <p>
                Cardiac screening can help healthcare professionals
                assess certain aspects of heart health. Two tests
                that may be recommended in appropriate situations
                are Coronary CT Angiography (CCTA) and Coronary
                Artery Calcium (CAC) scoring.
              </p>
            </section>

            <div className="initiative-information-grid">
              <section className="information-card">
                <h2>What is CCTA?</h2>
                <p>
                  Coronary CT Angiography is a specialized CT scan
                  that uses contrast material to create images of
                  the coronary arteries. It helps doctors examine
                  the arteries for narrowing or blockages.
                </p>
              </section>

              <section className="information-card">
                <h2>What is CAC Scoring?</h2>
                <p>
                  A Coronary Artery Calcium scan is a CT-based
                  examination that measures calcium deposits in
                  the coronary arteries. The result can help
                  healthcare professionals assess cardiovascular
                  risk.
                </p>
              </section>

              <section className="information-card">
                <h2>Why Are These Tests Used?</h2>
                <ul>
                  <li>To help assess coronary artery health.</li>
                  <li>To support cardiovascular risk assessment.</li>
                  <li>To provide additional information to doctors.</li>
                  <li>To guide further medical evaluation when appropriate.</li>
                </ul>
              </section>

              <section className="information-card">
                <h2>Who Should Consider Screening?</h2>
                <p>
                  The need for CCTA or CAC testing depends on
                  individual risk factors, symptoms and medical
                  history. A qualified doctor should decide
                  whether either test is appropriate.
                </p>

                <p className="medical-note">
                  These tests are different and are not suitable
                  for everyone. Consult a healthcare professional
                  before choosing a screening test.
                </p>
              </section>
            </div>
          </>
        )}

        <section className="initiative-register-section">
          <h2>Take the Next Step Towards Heart Health</h2>

          <p>
            Be a part of the Hrdaya Siddhi initiative and learn
            more about our community screening programmes.
          </p>

          <button
            className="initiative-register-btn"
            onClick={() => navigate("/hrdayasiddhi#register")}
          >
            Register Now →
          </button>
        </section>

        <p className="medical-disclaimer">
          The information provided is for general awareness and
          educational purposes only. It is not a substitute for
          professional medical advice, diagnosis or treatment.
        </p>
      </main>
    </div>
  );
}

function HrdayaSiddhiPage() {
  const navigate = useNavigate();

  return (
    <div className="hrdaya-page">
      <header className="detail-header">
        <img
          src="/iambangalorean.jpeg"
          alt="Bangalorean.com"
          className="detail-site-logo"
        />

        <Link className="back-home-btn" to="/">
          ← Back to Home
        </Link>
      </header>

      <main className="detail-main">
        <div className="organization-logos">
          <img src="/lions-association.png" alt="Lions Association" />
          <img src="/hrdaya-siddhi.jpeg" alt="Hrdaya Siddhi" />
          <img src="/lions-logo.png" alt="Lions Club" />
          <img
            src="/district-logo.png"
            alt="District Logo"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <section className="detail-title-section">
          <h2 className="district-title">
            LIONS INTERNATIONAL DISTRICT 317F
          </h2>

          <h3 className="club-title">
            LIONS CLUB OF BANGALORE BRIGADE (LIONS BRIGADE)
          </h3>

          <h1>Hrdaya Siddhi</h1>

          <p className="tagline">
            Cleanse Your Heart • Early Detection Saves Lives
          </p>
        </section>

        <section className="initiative-summary">
          <div className="summary-label">
            INITIATIVE SUMMARY
          </div>

          <p>
            Cardiovascular diseases claim roughly 17.9 to 20.5
            million lives globally each year, with India accounting
            for 20% of all heart attack deaths worldwide. 1 in 4
            heart attacks occur without warning signs, but blockages
            can be detected earlier through appropriate medical
            screening. Spearheaded by Lions District 317F,
            Lions Club of Bangalore Brigade, and LEO Club Asraya,
            the Hrdaya Siddhi initiative is dedicated to promoting
            community awareness, non-invasive risk assessment,
            and organized early cardiac screening programmes
            across Bengaluru.
          </p>
        </section>

        <section className="initiative-cards">
          <button
            className="initiative-card awareness-card"
            onClick={() => navigate("/hrdayasiddhi/awareness")}
          >
            <span className="card-number">01</span>

            <h2>AWARENESS →</h2>

            <p>
              Understand heart attack risks, warning signs,
              and preventive heart care.
            </p>

            <span className="card-read-more">
              Click to know more →
            </span>
          </button>

          <button
            className="initiative-card ccta-card"
            onClick={() => navigate("/hrdayasiddhi/ccta")}
          >
            <span className="card-number">02</span>

            <h2>CCTA / CAC TESTS →</h2>

            <p>
              Learn about cardiac CT scans and their role
              in heart health assessment.
            </p>

            <span className="card-read-more">
              Click to know more →
            </span>
          </button>

          <a
            href="#register"
            className="initiative-card registration-card"
          >
            <span className="card-number">03</span>

            <h2>REGISTRATION ↗</h2>

            <p>
              Click to open the camp sign-up form and
              register for screening programmes.
            </p>

            <span className="card-read-more">
              Register here →
            </span>
          </a>
        </section>

        <section id="register" className="initiative-register-section">
          <Registration />
        </section>
      </main>
    </div>
  );
}

function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <img
            src="/iambangalorean.jpeg"
            alt="I Am Bangalorean"
          />
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#stories">Stories</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button type="button">⌕</button>
        </div>
      </nav>

      <section className="hero" id="home">
        <h1>
          I Am <span>Bangalorean</span>
        </h1>

        <h2>Proud To Be One</h2>

        <p>
          Discover Bengaluru's premier heart health initiative
          dedicated to early cardiac screening and heart health awareness.
        </p>

        <button
          className="hero-btn"
          onClick={() => navigate("/hrdayasiddhi")}
        >
          Explore Hrdaya Siddhi →
        </button>
      </section>

      <section className="bengaluru-banner">
        <img
          src="/bengaluru-skyline.jpeg"
          alt="Namma Bengaluru skyline"
        />
      </section>

      <main className="content" id="about">
        <div className="floating-card">
          <button
            className="floating-logo-button"
            onClick={() => navigate("/hrdayasiddhi")}
            aria-label="Explore Hrdaya Siddhi"
          >
            <img
              src="/hrdaya-siddhi.jpeg"
              alt="Hrdaya Siddhi Logo"
              className="floating-logo"
            />
          </button>

          <h3>Hrdaya Siddhi</h3>
        </div>

        <section className="hrdaya-box">
          <span className="initiative-label">
            HEALTH INITIATIVE
          </span>

          <h2>Hrdaya Siddhi</h2>

          <p>
            Hrdaya Siddhi is an initiative dedicated to heart attack
            awareness, early detection and cardiac screening.
          </p>

          <p>
            Spearheaded by Lions District 317F and Lions Club of
            Bangalore Brigade, this initiative promotes awareness
            and preventive heart care across Bengaluru.
          </p>

          <button
            className="learn-btn"
            onClick={() => navigate("/hrdayasiddhi")}
          >
            Explore More →
          </button>
        </section>
      </main>

      <section className="stories" id="stories">
        <div className="story-header">
          <div>
            <h2>Our Stories</h2>
            <p>
              Discover stories and initiatives from Bengaluru.
            </p>
          </div>

          <a href="#contact">
            Explore More →
          </a>
        </div>

        <div className="story-grid">
          <div className="story-card">
            <div className="story-image">❤️</div>

            <span className="story-tag">HEALTH</span>

            <h3>Heart Health Awareness</h3>

            <p>
              Spreading awareness about heart health and preventive screening.
            </p>
          </div>

          <div className="story-card">
            <div className="story-image story-image-two">🌱</div>

            <span className="story-tag">COMMUNITY</span>

            <h3>Building a Healthier Community</h3>

            <p>
              Encouraging people to take small steps towards a healthier lifestyle.
            </p>
          </div>

          <div className="story-card">
            <div className="story-image story-image-three">🏙️</div>

            <span className="story-tag">BENGALURU</span>

            <h3>Proud To Be Bangalorean</h3>

            <p>
              Celebrating the spirit, culture and people of our beautiful city.
            </p>
          </div>
        </div>
      </section>

      <footer className="subscribe-section" id="contact">
        <div className="subscribe-content">
          <h3>Stay Connected With Us</h3>

          <p>
            Subscribe to receive updates about our initiatives
            and community activities.
          </p>

          <form
            className="subscribe-form"
            onSubmit={handleSubscribe}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="success-message">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hrdayasiddhi" element={<HrdayaSiddhiPage />} />
        <Route
          path="/hrdayasiddhi/awareness"
          element={<AwarenessOrCctaPage mode="awareness" />}
        />
        <Route
          path="/hrdayasiddhi/ccta"
          element={<AwarenessOrCctaPage mode="ccta" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;