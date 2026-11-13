import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Point this to your running Flask backend URL
  const flaskRegistrationUrl = 'http://localhost:5000/';

  const openRegistrationForm = () => {
    window.open(flaskRegistrationUrl, '_blank', 'noopener,noreferrer');
  };

  // Header Component for Hrdaya Siddhi Pages
  const HrdayaHeader = () => (
    <header style={styles.pageHeader}>
      <div style={styles.logoRow}>
        <div style={styles.logoWrapper}>
          <img src="/lions-logo.png" alt="Lions International Logo" style={styles.logoImg} />
        </div>
        <div style={styles.logoWrapper}>
          <img src="/hrdaya-siddhi.jpeg" alt="Hrdaya Siddhi Logo" style={styles.logoImg} />
        </div>
        <div style={styles.logoWrapper}>
          <img src="/lions-association.png" alt="Lions Association Logo" style={styles.logoImg} />
        </div>
        <div style={styles.logoWrapper}>
          <img src="/district-logo.png" alt="Lions District 317F Logo" style={styles.logoImgScaled} />
        </div>
      </div>

      <div style={styles.orgTitles}>
        <h2 style={styles.orgMain}>LIONS INTERNATIONAL DISTRICT 317F</h2>
        <h3 style={styles.orgSub}>LIONS CLUB OF BANGALORE BRIGADE (LIONS BRIGADE)</h3>
      </div>

      <h1 style={styles.pageTitle} onClick={() => setCurrentPage('hrdaya-siddhi')}>
        Hrdaya Siddhi
      </h1>
      <p style={styles.tagline}>Cleanse Your Heart • Early Detection Saves Lives</p>
    </header>
  );

  // Sub-Page 1: AWARENESS
  if (currentPage === 'awareness') {
    return (
      <div style={styles.unifiedContainer}>
        <nav style={styles.topNav}>
          <img 
            src="/iambangalorean.jpeg" 
            alt="I Am Bangalorean" 
            style={styles.navBrandImg} 
            onClick={() => setCurrentPage('home')} 
          />
          <button style={styles.navOutlineBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>← Back to Hrdaya Siddhi</button>
        </nav>
        <HrdayaHeader />
        <main style={styles.pageContent}>
          <div style={{ ...styles.lightCard, borderColor: '#dc2626' }}>
            <div style={styles.badgeDanger}>AWARENESS</div>
            <h2 style={{ ...styles.cardHeading, color: '#dc2626' }}>1. Heart Attack Awareness & Silent Risk Factors</h2>
            
            <p style={styles.paragraph}>
              Cardiovascular diseases (CVDs) remain the leading cause of mortality worldwide, taking an estimated 17.9 to 20.5 million lives every year. Heart attacks and strokes account for over 85% of these fatalities. India currently bears a massive portion of the global burden, accounting for nearly 20% of all heart attack deaths worldwide. Alarmingly, heart disease in urban India is striking individuals a decade earlier than in Western populations, with a sharp spike among young adults aged 25 to 45.
            </p>

            <h3 style={styles.subHeading}>The Threat of Silent Ischemia</h3>
            <p style={styles.paragraph}>
              Nearly 1 in 4 heart attacks occur silently, without the classic crushing chest pain or left arm numbness. Arterial plaque can accumulate inside the coronary arteries gradually over decades without causing noticeable shortness of breath or discomfort. By the time noticeable symptoms appear, arterial blockages have often progressed beyond 70%, putting the patient at immediate risk of acute myocardial infarction or sudden cardiac arrest.
            </p>

            <h3 style={styles.subHeading}>Key Risk Indicators</h3>
            <ul style={styles.featureList}>
              <li><strong>Sedentary Lifestyle & Chronic Stress:</strong> Extended desk hours, elevated cortisol levels, and minimal physical exertion accelerate arterial inflammation.</li>
              <li><strong>Metabolic Markers:</strong> Uncontrolled HbA1c (diabetes), elevated LDL cholesterol, and hypertension significantly damage blood vessel linings.</li>
              <li><strong>Genetic Predisposition:</strong> Family history of premature coronary artery disease drastically increases baseline risk.</li>
            </ul>

            <div style={styles.actionRow}>
              <button style={styles.ctaGoldBtn} onClick={openRegistrationForm}>
                Register For Screening →
              </button>
            </div>
          </div>
        </main>
        <footer style={styles.footer}><p>© 2026 iambangalorean.com</p></footer>
      </div>
    );
  }

  // Sub-Page 2: CCTA / CAC TESTS
  if (currentPage === 'ccta-tests') {
    return (
      <div style={styles.unifiedContainer}>
        <nav style={styles.topNav}>
          <img 
            src="/iambangalorean.jpeg" 
            alt="I Am Bangalorean" 
            style={styles.navBrandImg} 
            onClick={() => setCurrentPage('home')} 
          />
          <button style={styles.navOutlineBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>← Back to Hrdaya Siddhi</button>
        </nav>
        <HrdayaHeader />
        <main style={styles.pageContent}>
          <div style={{ ...styles.lightCard, borderColor: '#16a34a' }}>
            <div style={styles.badgeSuccess}>DIAGNOSTICS</div>
            <h2 style={{ ...styles.cardHeading, color: '#16a34a' }}>2. What is CAC + CCTA? Advanced Cardiac Diagnostics</h2>
            
            <p style={styles.paragraph}>
              Traditional diagnostic tools such as routine ECGs or basic Treadmill Stress Tests (TMT) often fail to identify early-stage coronary artery disease because they only detect abnormalities when arterial flow is severely restricted. Modern preventive cardiology relies on <strong>CAC (Coronary Artery Calcium) Scoring</strong> and <strong>CCTA (Coronary CT Angiography)</strong> to visualize the coronary arteries non-invasively with over 99% accuracy.
            </p>

            <h3 style={styles.subHeading}>1. Coronary Artery Calcium (CAC) Score</h3>
            <p style={styles.paragraph}>
              A CAC scan is a fast, low-radiation CT scan performed without contrast dye. It measures calcified plaque deposits inside the walls of your coronary arteries. Your Agatston score provides an immediate risk profile:
            </p>
            <ul style={styles.featureList}>
              <li><strong>Score 0:</strong> No calcified plaque detected; very low 10-year cardiac risk.</li>
              <li><strong>Score 1–99:</strong> Mild plaque build-up; early intervention recommended.</li>
              <li><strong>Score 100–399:</strong> Moderate plaque build-up; requires proactive medical guidance.</li>
              <li><strong>Score 400+:</strong> Severe calcification; high risk of blockage, requiring immediate follow-up.</li>
            </ul>

            <h3 style={styles.subHeading}>2. Coronary CT Angiography (CCTA)</h3>
            <p style={styles.paragraph}>
              CCTA combines advanced multi-slice CT technology with an IV contrast dye to create detailed 3D maps of your heart’s blood vessels. Unlike CAC alone, CCTA detects non-calcified "soft" plaque—the unstable type of plaque most prone to sudden rupture causing unexpected heart attacks.
            </p>

            <h3 style={styles.subHeading}>Why Choose CAC + CCTA Early Screening?</h3>
            <ul style={styles.featureList}>
              <li><strong>5-Minute Non-Invasive Procedure:</strong> Completed quickly without hospital admission or groin catheterization.</li>
              <li><strong>5 to 10 Year Advance Warning:</strong> Identifies subtle arterial narrowing long before symptoms or heart damage occur.</li>
              <li><strong>99% Accuracy:</strong> Gold-standard precision for ruling out major coronary artery blockages.</li>
            </ul>

            <div style={styles.actionRow}>
              <button style={styles.ctaGoldBtn} onClick={openRegistrationForm}>
                Register For CCTA / CAC Screening →
              </button>
            </div>
          </div>
        </main>
        <footer style={styles.footer}><p>© 2026 iambangalorean.com</p></footer>
      </div>
    );
  }

  // Main Hrdaya Siddhi Landing Page
  if (currentPage === 'hrdaya-siddhi') {
    return (
      <div style={styles.unifiedContainer}>
        <nav style={styles.topNav}>
          <img 
            src="/iambangalorean.jpeg" 
            alt="I Am Bangalorean" 
            style={styles.navBrandImg} 
            onClick={() => setCurrentPage('home')} 
          />
          <button style={styles.navOutlineBtn} onClick={() => setCurrentPage('home')}>← Back to Home</button>
        </nav>

        <HrdayaHeader />

        <main style={styles.pageContent}>
          <div style={styles.summaryCard}>
            <div style={styles.badgeInfo}>INITIATIVE SUMMARY</div>
            <p style={styles.summaryText}>
              Cardiovascular diseases claim roughly 17.9 to 20.5 million lives globally each year, with India accounting for 20% of all heart attack deaths worldwide. 1 in 4 heart attacks occur without warning signs, but blockages can be detected 5 to 10 years earlier through non-invasive CCTA screening. Spearheaded by Lions District 317F, Lions Club of Bangalore Brigade, and LEO Club Asraya, the Hrdaya Siddhi initiative is dedicated to saving lives by providing community awareness, non-invasive risk assessment, and organized early cardiac screening programs across Bengaluru.
            </p>
          </div>

          <div style={styles.cardGrid}>
            <div 
              style={{ ...styles.actionCard, borderColor: '#dc2626' }} 
              onClick={() => setCurrentPage('awareness')}
            >
              <span style={{ ...styles.cardNumber, color: '#dc2626' }}>01</span>
              <h3 style={{ ...styles.actionTitle, color: '#dc2626' }}>AWARENESS →</h3>
              <p style={styles.actionDesc}>Understand heart attack risks, silent symptoms, and global warning statistics.</p>
            </div>

            <div 
              style={{ ...styles.actionCard, borderColor: '#16a34a' }} 
              onClick={() => setCurrentPage('ccta-tests')}
            >
              <span style={{ ...styles.cardNumber, color: '#16a34a' }}>02</span>
              <h3 style={{ ...styles.actionTitle, color: '#16a34a' }}>CCTA / CAC TESTS →</h3>
              <p style={styles.actionDesc}>Learn about non-invasive 5-minute CCTA screening with 99% accuracy.</p>
            </div>

            <div 
              style={{ ...styles.actionCard, borderColor: '#d97706' }} 
              onClick={openRegistrationForm}
            >
              <span style={{ ...styles.cardNumber, color: '#d97706' }}>03</span>
              <h3 style={{ ...styles.actionTitle, color: '#d97706' }}>REGISTRATION ↗</h3>
              <p style={styles.actionDesc}>Click to open your Flask registration form and sign up for screenings.</p>
            </div>
          </div>
        </main>

        <footer style={styles.footer}>
          <p>Presented by Lions Club of Bangalore Brigade (LIONS BRIGADE) & LEO Club Asraya</p>
          <p>© 2026 iambangalorean.com</p>
        </footer>
      </div>
    );
  }

  // Default Homepage
  return (
    <div style={styles.unifiedContainer}>
      {/* Top Navbar */}
      <nav style={styles.topNav}>
        <img 
          src="/iambangalorean.jpeg" 
          alt="I Am Bangalorean" 
          style={styles.navBrandImg} 
          onClick={() => setCurrentPage('home')} 
        />
        <div style={styles.navLinksRow}>
          <button style={styles.activeNavLink} onClick={() => setCurrentPage('home')}>Home</button>
          <button style={styles.navLink}>Stories</button>
          <button style={styles.navLink}>Events</button>
          <button style={styles.navLink}>Explore</button>
          <button style={styles.navLink}>About</button>
          <button style={styles.navLink}>Contact</button>
        </div>
        <div style={styles.navRight}>
          <input type="text" placeholder="Search Bengaluru..." style={styles.searchInput} />
        </div>
      </nav>

      {/* Hero Banner Section */}
      <header style={styles.heroBannerWithSkyline}>
        <div style={styles.heroStack}>
          <div style={styles.heroLeftSplit}>
            <span style={styles.heroSubHeader}>🍃 PEOPLE | PLACES | STORIES | A STRONGER BENGALURU 🍃</span>
            <h1 style={styles.heroMainTitle}>
              I Am <span style={styles.heroHighlight}>Bangalorean</span>
            </h1>
            <h2 style={styles.heroTagline}>Proud To Be One</h2>
            <p style={styles.heroBody}>
              Discover Bengaluru's stories, culture, food, startups, events and the people who make this city extraordinary.
            </p>
            <div style={styles.heroButtons}>
              <button style={styles.ctaGoldBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>
                Explore Hrdaya Siddhi →
              </button>
            </div>
          </div>

          <div style={styles.heroBannerImageWrapper}>
            <img 
              src="/bengaluru-skyline.jpeg" 
              alt="Namma Bengaluru Vidhana Soudha & Skyline Buildings" 
              style={styles.skylineImg} 
            />
          </div>
        </div>
      </header>

      {/* Categories Grid */}
      <section style={styles.sectionContainer}>
        <div style={styles.sectionHeader}>
          <div>
            <h2 style={styles.sectionTitle}>Explore What Makes Bengaluru Special</h2>
            <p style={styles.sectionSubtitle}>From filter coffee to global startups — Bengaluru is a feeling. Dive into what you love.</p>
          </div>
          <span style={styles.viewLink}>View All Categories →</span>
        </div>
        <div style={styles.categoryGrid}>
          <div style={styles.categoryCard}>
            <span style={styles.categoryIcon}>☕</span>
            <h4>Food & Cafés</h4>
          </div>
          <div style={styles.categoryCard}>
            <span style={styles.categoryIcon}>🚇</span>
            <h4>Metro & Traffic</h4>
          </div>
          <div style={styles.categoryCard}>
            <span style={styles.categoryIcon}>🏛️</span>
            <h4>Culture & Heritage</h4>
          </div>
          <div style={styles.categoryCard}>
            <span style={styles.categoryIcon}>🚀</span>
            <h4>Startups & Business</h4>
          </div>
          <div style={{ ...styles.categoryCard, borderColor: '#d97706', backgroundColor: '#fffbe0' }} onClick={() => setCurrentPage('hrdaya-siddhi')}>
            <span style={styles.categoryIcon}>❤️</span>
            <h4 style={{ color: '#b45309' }}>Hrdaya Siddhi</h4>
          </div>
          <div style={styles.categoryCard}>
            <span style={styles.categoryIcon}>📷</span>
            <h4>Photography</h4>
          </div>
          <div style={styles.categoryCard}>
            <span style={styles.categoryIcon}>🍃</span>
            <h4>Environment</h4>
          </div>
          <div style={styles.categoryCard}>
            <span style={styles.categoryIcon}>👥</span>
            <h4>People & Community</h4>
          </div>
        </div>
      </section>

      {/* Content + Sidebar Layout */}
      <section style={styles.flexSectionContainer}>
        {/* Left Column: Trending Stories */}
        <div style={{ flex: '2', minWidth: '280px' }}>
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Trending Initiatives & Stories</h2>
            <span style={styles.viewLink}>View All Stories →</span>
          </div>
          <div style={styles.storiesGrid}>
            <div style={styles.storyCard} onClick={() => setCurrentPage('hrdaya-siddhi')}>
              <div style={styles.storyTagRed}>HEALTH INITIATIVE</div>
              <h3>Hrdaya Siddhi - Heart Attack Awareness & CCTA Screening</h3>
              <p>Learn about Lions District 317F early detection cardiac screening initiative.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Upcoming Events */}
        <div style={{ flex: '1', minWidth: '260px' }}>
          <div style={styles.eventsSidebar}>
            <div style={styles.sectionHeader}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b' }}>Upcoming Events</h3>
              <span style={styles.viewLink}>View All →</span>
            </div>
            <div style={styles.eventItem} onClick={() => setCurrentPage('hrdaya-siddhi')}>
              <div style={styles.eventDate}>
                <span style={styles.eventMonth}>NOV</span>
                <span style={styles.eventDay}>15</span>
              </div>
              <div style={styles.eventInfo}>
                <h4>Hrdaya Siddhi CCTA Camp</h4>
                <p>Lions Club Brigade • 9:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Bar */}
      <footer style={styles.subscribeBar}>
        <div>
          <h3>Stay Connected To Namma Bengaluru 🍃</h3>
          <p style={{ margin: 0, color: '#475569' }}>Get the latest stories, events and city updates in your inbox.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <input type="email" placeholder="Enter your email address" style={styles.emailInput} />
          <button style={styles.ctaGoldBtn}>Subscribe</button>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  unifiedContainer: {
    fontFamily: 'Inter, system-ui, sans-serif',
    backgroundColor: '#f8fafc',
    color: '#0f172a',
    minHeight: '100vh',
    width: '100%',
    boxSizing: 'border-box',
    overflowX: 'hidden',
  },
  topNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.75rem 1.25rem',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e2e8f0',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  navBrandImg: {
    height: '32px',
    objectFit: 'contain',
    cursor: 'pointer',
  },
  navLinksRow: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: '#475569',
    fontSize: '0.85rem',
    cursor: 'pointer',
    fontWeight: '500',
  },
  activeNavLink: {
    background: 'none',
    border: 'none',
    color: '#16a34a',
    fontSize: '0.85rem',
    cursor: 'pointer',
    fontWeight: '700',
    borderBottom: '2px solid #16a34a',
  },
  navOutlineBtn: {
    background: 'none',
    border: '1px solid #cbd5e1',
    color: '#475569',
    padding: '0.35rem 0.85rem',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: '500',
  },
  navRight: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  searchInput: {
    padding: '0.35rem 0.75rem',
    borderRadius: '2rem',
    border: '1px solid #cbd5e1',
    backgroundColor: '#f1f5f9',
    outline: 'none',
    fontSize: '0.8rem',
  },
  heroBannerWithSkyline: {
    backgroundColor: '#edf7ed',
    padding: '2rem 1.25rem',
    borderBottom: '1px solid #e2e8f0',
  },
  heroStack: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
    gap: '1.5rem',
  },
  heroLeftSplit: {
    width: '100%',
    textAlign: 'center',
  },
  heroBannerImageWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  skylineImg: {
    width: '100%',
    maxWidth: '850px',
    maxHeight: '320px',
    objectFit: 'contain',
    borderRadius: '0.5rem',
  },
  heroSubHeader: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#166534',
    letterSpacing: '0.08em',
  },
  heroMainTitle: {
    fontSize: '2.5rem',
    margin: '0.5rem 0 0 0',
    color: '#0f172a',
    fontWeight: '800',
    lineHeight: '1.2',
  },
  heroHighlight: {
    color: '#d97706',
  },
  heroTagline: {
    fontSize: '1.4rem',
    margin: '0 0 0.75rem 0',
    color: '#1e293b',
    fontWeight: '600',
  },
  heroBody: {
    fontSize: '0.95rem',
    color: '#475569',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  },
  ctaGoldBtn: {
    backgroundColor: '#d97706',
    color: '#ffffff',
    border: 'none',
    padding: '0.65rem 1.25rem',
    borderRadius: '0.5rem',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
  sectionContainer: {
    padding: '2rem 1.25rem',
    maxWidth: '1100px',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  flexSectionContainer: {
    padding: '2rem 1.25rem',
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    margin: 0,
    color: '#0f172a',
  },
  sectionSubtitle: {
    margin: '0.25rem 0 0 0',
    color: '#64748b',
    fontSize: '0.85rem',
  },
  viewLink: {
    color: '#16a34a',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '0.85rem',
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
    gap: '0.85rem',
  },
  categoryCard: {
    backgroundColor: '#ffffff',
    padding: '0.85rem',
    borderRadius: '0.75rem',
    border: '1px solid #e2e8f0',
    textAlign: 'center',
    cursor: 'pointer',
  },
  categoryIcon: {
    fontSize: '1.5rem',
    display: 'block',
    marginBottom: '0.35rem',
  },
  storiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1rem',
  },
  storyCard: {
    backgroundColor: '#ffffff',
    padding: '1.25rem',
    borderRadius: '0.75rem',
    border: '1px solid #e2e8f0',
    cursor: 'pointer',
  },
  storyTagRed: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#dc2626',
    marginBottom: '0.5rem',
  },
  eventsSidebar: {
    backgroundColor: '#ffffff',
    padding: '1.25rem',
    borderRadius: '0.75rem',
    border: '1px solid #e2e8f0',
  },
  eventItem: {
    display: 'flex',
    gap: '0.75rem',
    alignItems: 'center',
    padding: '0.75rem 0',
    cursor: 'pointer',
  },
  eventDate: {
    backgroundColor: '#fef3c7',
    padding: '0.4rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    minWidth: '40px',
  },
  eventMonth: {
    fontSize: '0.6rem',
    fontWeight: '700',
    color: '#d97706',
    display: 'block',
  },
  eventDay: {
    fontSize: '1rem',
    fontWeight: '800',
    color: '#0f172a',
  },
  subscribeBar: {
    backgroundColor: '#fef3c7',
    padding: '1.75rem 1.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.25rem',
    maxWidth: '1100px',
    margin: '1.5rem auto 0 auto',
    borderRadius: '0.75rem',
  },
  emailInput: {
    padding: '0.6rem 0.85rem',
    borderRadius: '0.5rem',
    border: '1px solid #cbd5e1',
    minWidth: '200px',
    outline: 'none',
  },
  pageHeader: {
    textAlign: 'center',
    padding: '2rem 1.25rem 1rem 1.25rem',
    maxWidth: '1000px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box',
  },
  logoRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.25rem',
    marginBottom: '1.5rem',
  },
  logoWrapper: {
    width: '75px',
    height: '75px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  logoImg: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  logoImgScaled: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    transform: 'scale(1.25)',
  },
  orgTitles: {
    textAlign: 'center',
    marginBottom: '1rem',
    padding: '0 0.5rem',
  },
  orgMain: {
    fontSize: '1.15rem',
    color: '#d97706',
    margin: '0 0 0.25rem 0',
    fontWeight: '700',
  },
  orgSub: {
    fontSize: '0.85rem',
    color: '#16a34a',
    margin: 0,
    fontWeight: '600',
  },
  pageTitle: {
    fontSize: '2.5rem',
    color: '#dc2626',
    margin: '0.5rem 0 0.25rem 0',
    fontWeight: '800',
    cursor: 'pointer',
  },
  tagline: {
    fontSize: '0.95rem',
    color: '#475569',
    margin: 0,
  },
  pageContent: {
    padding: '1.25rem',
    maxWidth: '960px',
    margin: '0 auto',
    flex: 1,
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  summaryCard: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid #e2e8f0',
    borderLeft: '4px solid #16a34a',
  },
  summaryText: {
    color: '#334155',
    lineHeight: '1.6',
    fontSize: '0.95rem',
    margin: 0,
  },
  lightCard: {
    backgroundColor: '#ffffff',
    padding: '1.75rem',
    borderRadius: '0.75rem',
    border: '1px solid #e2e8f0',
  },
  subHeading: {
    fontSize: '1.1rem',
    color: '#1e293b',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
    fontWeight: '700',
  },
  actionRow: {
    marginTop: '1.75rem',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  badgeInfo: {
    display: 'inline-block',
    fontSize: '0.7rem',
    fontWeight: '700',
    color: '#16a34a',
    backgroundColor: '#dcfce7',
    padding: '0.2rem 0.5rem',
    borderRadius: '0.25rem',
    marginBottom: '0.75rem',
  },
  badgeDanger: {
    display: 'inline-block',
    fontSize: '0.7rem',
    fontWeight: '700',
    color: '#dc2626',
    backgroundColor: '#fee2e2',
    padding: '0.2rem 0.5rem',
    borderRadius: '0.25rem',
    marginBottom: '0.75rem',
  },
  badgeSuccess: {
    display: 'inline-block',
    fontSize: '0.7rem',
    fontWeight: '700',
    color: '#16a34a',
    backgroundColor: '#dcfce7',
    padding: '0.2rem 0.5rem',
    borderRadius: '0.25rem',
    marginBottom: '0.75rem',
  },
  cardHeading: {
    marginTop: 0,
    marginBottom: '0.85rem',
    fontSize: '1.35rem',
    fontWeight: '700',
  },
  paragraph: {
    color: '#334155',
    lineHeight: '1.65',
    fontSize: '0.95rem',
    margin: 0,
  },
  featureList: {
    color: '#334155',
    lineHeight: '1.8',
    paddingLeft: '1.25rem',
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.25rem',
  },
  actionCard: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    border: '1.5px solid #e2e8f0',
    cursor: 'pointer',
  },
  cardNumber: {
    fontSize: '0.8rem',
    fontWeight: '800',
    display: 'block',
    marginBottom: '0.4rem',
  },
  actionTitle: {
    marginTop: 0,
    marginBottom: '0.4rem',
    fontSize: '1.1rem',
    fontWeight: '700',
  },
  actionDesc: {
    color: '#64748b',
    margin: 0,
    fontSize: '0.9rem',
    lineHeight: '1.4',
  },
  footer: {
    textAlign: 'center',
    padding: '1.5rem',
    borderTop: '1px solid #e2e8f0',
    color: '#64748b',
    fontSize: '0.8rem',
    backgroundColor: '#ffffff',
  },
};