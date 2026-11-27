import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import Registration from "./Registration";
import "./App.css";

const TEST_VIDEOS = [
  {
    id: "ccta-cac-overview",
    title: "CT Calcium Scoring & CT Coronary Angiography — Doctor Overview",
    doctorNote:
      "Dr. Simmi Manocha explains CT calcium scoring and CT coronary angiography for diagnosing blockages.",
    embedUrl: "https://www.youtube.com/embed/LK8joGYi6jw",
    watchUrl: "https://www.youtube.com/watch?v=LK8joGYi6jw",
  },
  {
    id: "cac-score",
    title: "Coronary Artery Calcium Scan (Calcium Heart Score) Explained",
    doctorNote:
      "South Denver Cardiology walks through how coronary calcium scoring evaluates heart risk.",
    embedUrl: "https://www.youtube.com/embed/zg1hg0nWBjs",
    watchUrl: "https://www.youtube.com/watch?v=zg1hg0nWBjs",
  },
];

function DoctorTestVideoCard({ title, doctorNote, embedUrl, watchUrl }) {
  const [magnified, setMagnified] = useState(false);

  return (
    <div className="solution-video-card">
      <div className="solution-video-header">
        <div>
          <h3>{title}</h3>
          <p>{doctorNote}</p>
        </div>

        <button
          type="button"
          className="magnify-toggle-btn"
          onClick={() => setMagnified((prev) => !prev)}
        >
          {magnified ? "Reset View (1x)" : "Magnify View (1.4x)"}
        </button>
      </div>

      <div className={`video-frame youtube-frame ${magnified ? "is-magnified" : ""}`}>
        <iframe
          src={embedUrl}
          title={title}
          className="inline-youtube-iframe"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="video-card-footer">
        <a href={watchUrl} target="_blank" rel="noreferrer">
          Watch on YouTube ↗
        </a>
      </div>
    </div>
  );
}

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
          type="button"
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
                Heart health awareness helps people understand cardiovascular
                diseases, recognize possible warning signs, and take preventive
                steps. Many heart-related conditions may develop without obvious
                symptoms. Learning about risk factors and seeking timely medical
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
                  Warning signs can vary. Seek emergency medical attention if
                  you think someone may be having a heart attack.
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
                  Hrdaya Siddhi aims to spread awareness through community
                  education, health information and organized screening
                  initiatives across Bengaluru. The objective is to encourage
                  people to understand their heart health and consult healthcare
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
                Cardiac screening can help healthcare professionals assess
                certain aspects of heart health. Two tests that may be
                recommended in appropriate situations are Coronary CT
                Angiography (CCTA) and Coronary Artery Calcium (CAC) scoring.
              </p>
            </section>

            <div className="initiative-information-grid">
              <section className="information-card">
                <h2>What is CCTA?</h2>
                <p>
                  Coronary CT Angiography is a specialized CT scan that uses
                  contrast material to create images of the coronary arteries.
                  It helps doctors examine the arteries for narrowing or
                  blockages.
                </p>
              </section>

              <section className="information-card">
                <h2>What is CAC Scoring?</h2>
                <p>
                  A Coronary Artery Calcium scan is a CT-based examination that
                  measures calcium deposits in the coronary arteries. The
                  result can help healthcare professionals assess
                  cardiovascular risk.
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
                  The need for CCTA or CAC testing depends on individual risk
                  factors, symptoms and medical history. A qualified doctor
                  should decide whether either test is appropriate.
                </p>

                <p className="medical-note">
                  These tests are different and are not suitable for everyone.
                  Consult a healthcare professional before choosing a screening
                  test.
                </p>
              </section>
            </div>
          </>
        )}

        <section className="initiative-register-section">
          <h2>Take the Next Step Towards Heart Health</h2>

          <p>
            Be a part of the Hrdaya Siddhi initiative and learn more about our
            community screening programmes.
          </p>

          <button
            type="button"
            className="initiative-register-btn"
            onClick={() => navigate("/hrdayasiddhi#register")}
          >
            Register Now →
          </button>
        </section>

        <p className="medical-disclaimer">
          The information provided is for general awareness and educational
          purposes only. It is not a substitute for professional medical
          advice, diagnosis or treatment.
        </p>
      </main>
    </div>
  );
}

function HrdayaSiddhiPage() {
  const { hash } = useLocation();
  const [awarenessExpanded, setAwarenessExpanded] = useState(false);
  const [activeTestDetail, setActiveTestDetail] = useState(null);

  useEffect(() => {
    if (hash === "#register") {
      const el = document.getElementById("register");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const toggleTestDetail = (testKey) => {
    setActiveTestDetail((prev) => (prev === testKey ? null : testKey));
  };

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
        {/* 1st ORDER: LOGOS & REGISTER BUTTON */}
        <div className="top-branding-strip">
          <div className="header-branding">
            <div className="partner-logos">
              <img
                src="/lions-logo.png"
                alt="Lions Club"
                className="partner-logo"
              />
              <img
                src="/district-logo.png"
                alt="Lions District 317F"
                className="partner-logo district-logo"
              />
              <img
                src="/leologo.png"
                alt="LEO Club"
                className="partner-logo"
              />
            </div>

            <div className="main-event-logo">
              <img
                src="/hrdaya-siddhi.jpeg"
                alt="Hrdaya Siddhi"
                className="hrdaya-logo"
              />
            </div>

            <div className="header-right-action">
              <a href="#register" className="header-register-btn">
                Register Now →
              </a>
            </div>
          </div>
        </div>

        <section className="detail-title-section">
          <h2 className="district-title">LIONS INTERNATIONAL DISTRICT 317F</h2>

          <h3 className="club-title">
            LIONS CLUB OF BANGALORE BRIGADE (LIONS BRIGADE)
          </h3>

          <h1>Hrdaya Siddhi</h1>

          <p className="tagline">Cleanse Your Heart • Early Detection Saves Lives</p>
        </section>

        {/* 2nd ORDER: WHY HRDAYA SIDDHI (AWARENESS) */}
        <section className="initiative-summary why-hrdaya-section">
          <div className="summary-label">01 • WHY HRDAYA SIDDHI (AWARENESS)</div>

          <p>
            Cardiovascular diseases claim roughly 17.9 to 20.5 million lives
            globally each year, with India accounting for 20% of all heart
            attack deaths worldwide. 1 in 4 heart attacks occur without warning
            signs, but blockages can be detected earlier through appropriate
            medical screening. Spearheaded by Lions District 317F, Lions Club of
            Bangalore Brigade, and LEO Club , the Hrdaya Siddhi
            initiative is dedicated to promoting community awareness,
            non-invasive risk assessment, and organized early cardiac screening
            programmes across Bengaluru.
          </p>

          <div className="section-action-row">
            <button
              type="button"
              className="secondary-detail-btn"
              onClick={() => setAwarenessExpanded((prev) => !prev)}
            >
              {awarenessExpanded
                ? "Hide Heart Health Awareness Guide ↑"
                : "Read Full Heart Health Awareness Guide →"}
            </button>
          </div>

          {awarenessExpanded && (
            <div className="inline-awareness-magnified">
              <h3>Heart Health Awareness — Key Points</h3>

              <div className="inline-awareness-grid">
                <div className="inline-awareness-box">
                  <h4>Common Risk Factors</h4>
                  <ul>
                    <li>High blood pressure</li>
                    <li>High cholesterol</li>
                    <li>Diabetes</li>
                    <li>Smoking and tobacco use</li>
                    <li>Physical inactivity &amp; family history</li>
                  </ul>
                </div>

                <div className="inline-awareness-box">
                  <h4>Warning Signs &amp; Prevention</h4>
                  <ul>
                    <li>Chest discomfort, shortness of breath, or unusual sweating</li>
                    <li>Discomfort in arms, back, neck, jaw, or unusual fatigue</li>
                    <li>Regular physical activity, balanced diet &amp; check-ups</li>
                    <li>Seek urgent medical care if heart attack signs appear</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 3rd ORDER: SOLUTION (ABOUT THE TESTS + PLAYABLE DOCTOR VIDEOS + MAGNIFICATION) */}
        <section className="solution-tests-section">
          <div className="solution-header-block">
            <span className="solution-badge">
              02 • THE SOLUTION: CARDIAC SCREENING TESTS
            </span>
            <h2>Understanding the Screening Tests</h2>
            <p>
              Watch doctors explain how non-invasive cardiac evaluations work,
              and use <strong>Magnify View</strong> right inside the player to
              zoom into visuals and test details.
            </p>
          </div>

          <div className="solution-cards-row">
            <div className="solution-test-card">
              <h3>CCTA (Coronary CT Angiography)</h3>
              <p>
                Uses specialized CT imaging and contrast material to examine
                coronary arteries for narrowing or blockages when advised by a
                doctor.
              </p>
              <button
                type="button"
                className="inline-link-btn"
                onClick={() => toggleTestDetail("ccta")}
              >
                {activeTestDetail === "ccta"
                  ? "Hide CCTA Details ↑"
                  : "Explore CCTA / CAC Details →"}
              </button>
            </div>

            <div className="solution-test-card">
              <h3>CAC Scoring (Calcium Scan)</h3>
              <p>
                A non-invasive CT scan that measures calcified plaque in the
                coronary arteries to support cardiovascular risk evaluation.
              </p>
              <button
                type="button"
                className="inline-link-btn"
                onClick={() => toggleTestDetail("cac")}
              >
                {activeTestDetail === "cac"
                  ? "Hide CAC Details ↑"
                  : "Explore CCTA / CAC Details →"}
              </button>
            </div>
          </div>

          {activeTestDetail && (
            <div className="inline-test-magnified">
              <div className="inline-test-magnified-header">
                <h3>
                  {activeTestDetail === "ccta"
                    ? "CCTA (Coronary CT Angiography) — Magnified Details"
                    : "CAC Scoring (Calcium Scan) — Magnified Details"}
                </h3>
                <button
                  type="button"
                  className="inline-close-btn"
                  onClick={() => setActiveTestDetail(null)}
                >
                  Close ✕
                </button>
              </div>

              {activeTestDetail === "ccta" ? (
                <div className="inline-test-grid">
                  <div className="inline-test-box">
                    <h4>How CCTA Works</h4>
                    <ul>
                      <li>Specialized CT scan using contrast material to image coronary arteries.</li>
                      <li>Helps doctors check for narrowing or potential blockages.</li>
                      <li>Supports clearer medical evaluation when symptoms or risk warrant it.</li>
                    </ul>
                  </div>

                  <div className="inline-test-box">
                    <h4>When to Consider &amp; Medical Guidance</h4>
                    <ul>
                      <li>Suitability depends on symptoms, medical history, and risk factors.</li>
                      <li>Not every test fits every individual—a doctor must advise first.</li>
                      <li>Discuss contrast safety and allergies with your healthcare team.</li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="inline-test-grid">
                  <div className="inline-test-box">
                    <h4>How CAC Scoring Works</h4>
                    <ul>
                      <li>Non-invasive CT scan measuring calcified plaque in coronary arteries.</li>
                      <li>Helps healthcare professionals assess long-term cardiovascular risk.</li>
                      <li>Provides additional data to guide preventive care discussions.</li>
                    </ul>
                  </div>

                  <div className="inline-test-box">
                    <h4>When to Consider &amp; Medical Guidance</h4>
                    <ul>
                      <li>Recommended based on individual risk profile and doctor evaluation.</li>
                      <li>Different from CCTA and not automatically suitable for everyone.</li>
                      <li>Consult a qualified doctor to decide if screening is right for you.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="doctor-videos-grid">
            {TEST_VIDEOS.map((item) => (
              <DoctorTestVideoCard
                key={item.id}
                title={item.title}
                doctorNote={item.doctorNote}
                embedUrl={item.embedUrl}
                watchUrl={item.watchUrl}
              />
            ))}
          </div>
        </section>

        {/* 4th ORDER: PARTNERS FOR HRDAYA SIDDHI */}
        <section className="partners-for-hrdaya-section">
          <span className="partners-badge">03 • PARTNERS FOR HRDAYA SIDDHI</span>
          <h2>Organizing & Community Partners</h2>
          <p className="partners-subtitle">
            Working together across Bengaluru to support heart health education
            and screening initiatives.
          </p>

          <div className="partners-grid">
            <div className="partner-info-card">
              <h3>Lions International District 317F</h3>
              <p>Leading district-wide service and community health outreach.</p>
            </div>

            <div className="partner-info-card">
              <h3>Lions Club of Bangalore Brigade</h3>
              <p>Spearheading the Hrdaya Siddhi initiative in Bengaluru.</p>
            </div>

            <div className="partner-info-card">
              <h3>LEO Club Asraya</h3>
              <p>Mobilizing youth volunteers and community awareness drives.</p>
            </div>
          </div>
        </section>

        {/* 5th ORDER: REGISTRATION FORM */}
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
          <img src="/iambangalorean.jpeg" alt="I Am Bangalorean" />
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
          Discover Bengaluru's premier heart health initiative dedicated to early
          cardiac screening and heart health awareness.
        </p>

        <button
          type="button"
          className="hero-btn"
          onClick={() => navigate("/hrdayasiddhi")}
        >
          Explore Hrdaya Siddhi →
        </button>
      </section>

      <section className="bengaluru-banner">
        <img src="/bengaluru-skyline.jpeg" alt="Namma Bengaluru skyline" />
      </section>

      <main className="content" id="about">
        <div className="floating-card">
          <button
            type="button"
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
          <span className="initiative-label">HEALTH INITIATIVE</span>

          <h2>Hrdaya Siddhi</h2>

          <p>
            Hrdaya Siddhi is an initiative dedicated to heart attack awareness,
            early detection and cardiac screening.
          </p>

          <p>
            Spearheaded by Lions District 317F and Lions Club of Bangalore
            Brigade, this initiative promotes awareness and preventive heart care
            across Bengaluru.
          </p>

          <button
            type="button"
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
            <p>Discover stories and initiatives from Bengaluru.</p>
          </div>

          <a href="#contact">Explore More →</a>
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
              Encouraging people to take small steps towards a healthier
              lifestyle.
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
            Subscribe to receive updates about our initiatives and community
            activities.
          </p>

          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">Subscribe</button>
          </form>

          {subscribed && (
            <p className="success-message">Thank you for subscribing!</p>
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