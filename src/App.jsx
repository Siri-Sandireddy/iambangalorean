import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Common Header component for Hrdaya Siddhi pages
  const HrdayaHeader = () => (
    <header style={styles.pageHeader}>
      <div style={styles.logoRow}>
        <div style={styles.logoWrapper}>
          <img src="/lions-logo.png" alt="Lions International Logo" style={styles.logoImg} />
        </div>
        <div style={styles.logoWrapper}>
          <img src="/hrdaya-siddhi.png" alt="Hrdaya Siddhi Logo" style={styles.logoImg} />
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
      <div style={styles.container}>
        <nav style={styles.nav}>
          <h2 style={styles.logo} onClick={() => setCurrentPage('home')}>I Am Bangalorean</h2>
          <button style={styles.navBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>← Back to Hrdaya Siddhi</button>
        </nav>
        <HrdayaHeader />
        <main style={styles.pageContent}>
          <div style={styles.detailsCard}>
            <h2 style={styles.cardHeading}>1. Heart Attack Awareness</h2>
            <p style={styles.paragraph}>
              Cardiovascular diseases cause between 17.9 million to 20.5 million deaths globally each year, with heart attacks and strokes accounting for roughly 85% of these fatalities. India accounts for 20% of all heart attack deaths worldwide, with an alarming rise in young adults. 1 in 4 heart attacks occur silently without prior symptoms.
            </p>
          </div>
        </main>
        <footer style={styles.footer}><p>© 2026 iambangalorean.com</p></footer>
      </div>
    );
  }

  // Sub-Page 2: CCTA / CAC TESTS
  if (currentPage === 'ccta-tests') {
    return (
      <div style={styles.container}>
        <nav style={styles.nav}>
          <h2 style={styles.logo} onClick={() => setCurrentPage('home')}>I Am Bangalorean</h2>
          <button style={styles.navBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>← Back to Hrdaya Siddhi</button>
        </nav>
        <HrdayaHeader />
        <main style={styles.pageContent}>
          <div style={styles.solutionCard}>
            <h2 style={styles.cardHeading}>2. CCTA & CAC Tests</h2>
            <p style={styles.paragraph}>
              <strong>Coronary CT Angiography (CCTA)</strong> offers a non-invasive, 5-minute cardiac scan with 99% accuracy in identifying hidden coronary blockages 5 to 10 years before a heart attack happens.
            </p>
            <ul style={styles.featureList}>
              <li>Non-Invasive 5-minute scan</li>
              <li>No hospital admission required</li>
              <li>Detects hidden plaque build-up early</li>
            </ul>
          </div>
        </main>
        <footer style={styles.footer}><p>© 2026 iambangalorean.com</p></footer>
      </div>
    );
  }

  // Sub-Page 3: REGISTRATION
  if (currentPage === 'registration') {
    return (
      <div style={styles.container}>
        <nav style={styles.nav}>
          <h2 style={styles.logo} onClick={() => setCurrentPage('home')}>I Am Bangalorean</h2>
          <button style={styles.navBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>← Back to Hrdaya Siddhi</button>
        </nav>
        <HrdayaHeader />
        <main style={styles.pageContent}>
          <div style={styles.detailsCard}>
            <h2 style={styles.cardHeading}>3. Screening Registration</h2>
            <p style={styles.paragraph}>
              Register here for subsidized CCTA / CAC screening tests organized by Lions Club of Bangalore Brigade and partner hospitals.
            </p>
          </div>
        </main>
        <footer style={styles.footer}><p>© 2026 iambangalorean.com</p></footer>
      </div>
    );
  }

  // Main Hrdaya Siddhi Landing Page
  if (currentPage === 'hrdaya-siddhi') {
    return (
      <div style={styles.container}>
        <nav style={styles.nav}>
          <h2 style={styles.logo} onClick={() => setCurrentPage('home')}>I Am Bangalorean</h2>
          <button style={styles.navBtn} onClick={() => setCurrentPage('home')}>← Back to Home</button>
        </nav>

        <HrdayaHeader />

        <main style={styles.pageContent}>
          {/* Single Paragraph Overview */}
          <div style={styles.detailsCard}>
            <h3 style={styles.cardHeading}>About Hrdaya Siddhi Initiative</h3>
            <p style={styles.paragraph}>
              Cardiovascular diseases claim roughly 17.9 to 20.5 million lives globally each year, with India accounting for 20% of all heart attack deaths worldwide. 1 in 4 heart attacks occur without warning signs, but blockages can be detected 5 to 10 years earlier through non-invasive CCTA screening. The Hrdaya Siddhi initiative by Lions District 317F aims to save lives through early detection and screening awareness.
            </p>
          </div>

          {/* 3 Navigational Feature Boxes */}
          <div style={styles.cardGrid}>
            <div 
              style={{ ...styles.actionCard, borderColor: '#ef4444' }} 
              onClick={() => setCurrentPage('awareness')}
            >
              <h3 style={{ ...styles.actionTitle, color: '#ef4444' }}>1. AWARENESS →</h3>
              <p style={styles.actionDesc}>Understand heart attack risks, silent symptoms, and global warning statistics.</p>
            </div>

            <div 
              style={{ ...styles.actionCard, borderColor: '#10b981' }} 
              onClick={() => setCurrentPage('ccta-tests')}
            >
              <h3 style={{ ...styles.actionTitle, color: '#10b981' }}>2. CCTA / CAC TESTS →</h3>
              <p style={styles.actionDesc}>Learn about non-invasive 5-minute CCTA screening with 99% accuracy.</p>
            </div>

            <div 
              style={{ ...styles.actionCard, borderColor: '#38bdf8' }} 
              onClick={() => setCurrentPage('registration')}
            >
              <h3 style={{ ...styles.actionTitle, color: '#38bdf8' }}>3. REGISTRATION →</h3>
              <p style={styles.actionDesc}>Sign up for early detection screening programs and partner hospital tests.</p>
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
    <div style={styles.container}>
      <nav style={styles.nav}>
        <h2 style={styles.logo} onClick={() => setCurrentPage('home')}>I Am Bangalorean</h2>
        <div style={styles.navLinks}>
          <button style={styles.navBtn} onClick={() => setCurrentPage('home')}>Home</button>
          <button style={styles.navBtn} onClick={() => setCurrentPage('about')}>About</button>
        </div>
      </nav>

      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to the Heart of Namma Bengaluru</h1>
        <p style={styles.heroSubtitle}>Discover local events, connect with fellow Bangaloreans, and celebrate the culture of Bengaluru.</p>
      </header>

      <section style={styles.section}>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3>🌐 Local Community</h3>
            <p>Connect with people across Bengaluru working in tech, creative fields, and entrepreneurship.</p>
          </div>

          <div style={styles.card}>
            <h3>📍 City Events</h3>
            <p>Stay updated on upcoming meetups, workshops, and cultural events happening nearby.</p>
          </div>

          <div style={{ ...styles.card, ...styles.clickableCard }} onClick={() => setCurrentPage('hrdaya-siddhi')}>
            <div style={styles.cardHeader}>
              <h3>✨ Hrdaya Siddhi</h3>
              <span style={styles.arrow}>→</span>
            </div>
            <p>Lions District 317F & Lions Brigade Heart Attack Awareness and Early Detection Initiative.</p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}><p>© 2026 iambangalorean.com</p></footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
    color: '#ffffff',
    backgroundColor: '#0f172a',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.25rem 2rem',
    borderBottom: '1px solid #1e293b',
  },
  logo: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#38bdf8',
    cursor: 'pointer',
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  navBtn: {
    background: 'none',
    border: 'none',
    color: '#cbd5e1',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  pageHeader: {
    textAlign: 'center',
    padding: '2.5rem 1.5rem 1rem 1.5rem',
    maxWidth: '1100px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box',
  },
  logoRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  logoWrapper: {
    width: '90px',
    height: '90px',
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
    transform: 'scale(1.3)',
  },
  orgTitles: {
    textAlign: 'center',
    marginBottom: '1rem',
    padding: '0 0.5rem',
  },
  orgMain: {
    fontSize: '1.35rem',
    color: '#fbbf24',
    margin: '0 0 0.5rem 0',
    letterSpacing: '0.04em',
    lineHeight: '1.3',
  },
  orgSub: {
    fontSize: '1rem',
    color: '#38bdf8',
    margin: 0,
    fontWeight: '500',
    lineHeight: '1.4',
  },
  pageTitle: {
    fontSize: '3rem',
    color: '#ef4444',
    margin: '1rem 0 0.5rem 0',
    cursor: 'pointer',
  },
  tagline: {
    fontSize: '1.2rem',
    color: '#94a3b8',
    margin: 0,
  },
  pageContent: {
    padding: '1.5rem',
    maxWidth: '1000px',
    margin: '0 auto',
    flex: 1,
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  detailsCard: {
    backgroundColor: '#1e293b',
    padding: '2rem',
    borderRadius: '0.75rem',
    border: '1px solid #334155',
  },
  solutionCard: {
    backgroundColor: '#064e3b',
    padding: '2rem',
    borderRadius: '0.75rem',
    border: '1px solid #059669',
  },
  cardHeading: {
    marginTop: 0,
    fontSize: '1.4rem',
    color: '#38bdf8',
  },
  paragraph: {
    color: '#cbd5e1',
    lineHeight: '1.6',
    fontSize: '1.05rem',
    margin: 0,
  },
  featureList: {
    color: '#e2e8f0',
    lineHeight: '1.8',
    paddingLeft: '1.25rem',
    marginTop: '1rem',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
  },
  actionCard: {
    backgroundColor: '#1e293b',
    padding: '2rem',
    borderRadius: '0.75rem',
    border: '2px solid',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
  actionTitle: {
    marginTop: 0,
    marginBottom: '0.75rem',
    fontSize: '1.3rem',
  },
  actionDesc: {
    color: '#cbd5e1',
    margin: 0,
    fontSize: '0.95rem',
    lineHeight: '1.4',
  },
  hero: {
    textAlign: 'center',
    padding: '5rem 2rem 3rem 2rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
    lineHeight: '1.2',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#94a3b8',
    marginBottom: '1rem',
  },
  section: {
    padding: '3rem 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
    flex: 1,
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '2rem',
    borderRadius: '0.75rem',
    border: '1px solid #334155',
  },
  clickableCard: {
    cursor: 'pointer',
    borderColor: '#38bdf8',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow: {
    fontSize: '1.25rem',
    color: '#38bdf8',
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    padding: '2rem',
    borderTop: '1px solid #1e293b',
    color: '#64748b',
    fontSize: '0.9rem',
  },
};