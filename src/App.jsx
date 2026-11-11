import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const googleFormUrl = 'https://forms.gle/BG8YLML8VYn59X7b9';

  const openRegistrationForm = () => {
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  // Clean, modern Header for Hrdaya Siddhi pages
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
      <div style={styles.container}>
        <nav style={styles.nav}>
          <h2 style={styles.logo} onClick={() => setCurrentPage('home')}>I Am Bangalorean</h2>
          <button style={styles.navBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>← Back to Hrdaya Siddhi</button>
        </nav>
        <HrdayaHeader />
        <main style={styles.pageContent}>
          <div style={{ ...styles.medicalCard, borderColor: '#f87171' }}>
            <div style={styles.badgeDanger}>AWARENESS</div>
            <h2 style={{ ...styles.cardHeading, color: '#f87171' }}>1. Heart Attack Awareness</h2>
            <p style={styles.paragraph}>
              Cardiovascular diseases cause between 17.9 million to 20.5 million deaths globally each year, with heart attacks and strokes accounting for roughly 85% of these fatalities. India accounts for 20% of all heart attack deaths worldwide, with an alarming rise in young adults. 1 in 4 heart attacks occur silently without prior symptoms.
            </p>
            
            <div style={styles.actionRow}>
              <button style={styles.primaryRegisterBtn} onClick={openRegistrationForm}>
                Register Here →
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
      <div style={styles.container}>
        <nav style={styles.nav}>
          <h2 style={styles.logo} onClick={() => setCurrentPage('home')}>I Am Bangalorean</h2>
          <button style={styles.navBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>← Back to Hrdaya Siddhi</button>
        </nav>
        <HrdayaHeader />
        <main style={styles.pageContent}>
          <div style={{ ...styles.medicalCard, borderColor: '#34d399' }}>
            <div style={styles.badgeSuccess}>DIAGNOSTICS</div>
            <h2 style={{ ...styles.cardHeading, color: '#34d399' }}>2. CCTA & CAC Tests</h2>
            <p style={styles.paragraph}>
              <strong>Coronary CT Angiography (CCTA)</strong> offers a non-invasive, 5-minute cardiac scan with 99% accuracy in identifying hidden coronary blockages 5 to 10 years before a heart attack happens.
            </p>
            <ul style={styles.featureList}>
              <li>Non-Invasive 5-minute scan</li>
              <li>No hospital admission required</li>
              <li>Detects hidden plaque build-up early</li>
            </ul>

            <div style={styles.actionRow}>
              <button style={styles.primaryRegisterBtn} onClick={openRegistrationForm}>
                Register Here →
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
      <div style={styles.container}>
        <nav style={styles.nav}>
          <h2 style={styles.logo} onClick={() => setCurrentPage('home')}>I Am Bangalorean</h2>
          <button style={styles.navBtn} onClick={() => setCurrentPage('home')}>← Back to Home</button>
        </nav>

        <HrdayaHeader />

        <main style={styles.pageContent}>
          {/* Medical Summary Paragraph */}
          <div style={styles.summaryCard}>
            <div style={styles.badgeInfo}>INITIATIVE SUMMARY</div>
            <p style={styles.summaryText}>
              Cardiovascular diseases claim roughly 17.9 to 20.5 million lives globally each year, with India accounting for 20% of all heart attack deaths worldwide. 1 in 4 heart attacks occur without warning signs, but blockages can be detected 5 to 10 years earlier through non-invasive CCTA screening. The Hrdaya Siddhi initiative by Lions District 317F aims to save lives through early detection and screening awareness.
            </p>
          </div>

          {/* 3 Medical Action Cards */}
          <div style={styles.cardGrid}>
            <div 
              style={{ ...styles.actionCard, borderColor: '#f87171' }} 
              onClick={() => setCurrentPage('awareness')}
            >
              <span style={{ ...styles.cardNumber, color: '#f87171' }}>01</span>
              <h3 style={{ ...styles.actionTitle, color: '#f87171' }}>AWARENESS →</h3>
              <p style={styles.actionDesc}>Understand heart attack risks, silent symptoms, and global warning statistics.</p>
            </div>

            <div 
              style={{ ...styles.actionCard, borderColor: '#34d399' }} 
              onClick={() => setCurrentPage('ccta-tests')}
            >
              <span style={{ ...styles.cardNumber, color: '#34d399' }}>02</span>
              <h3 style={{ ...styles.actionTitle, color: '#34d399' }}>CCTA / CAC TESTS →</h3>
              <p style={styles.actionDesc}>Learn about non-invasive 5-minute CCTA screening with 99% accuracy.</p>
            </div>

            <div 
              style={{ ...styles.actionCard, borderColor: '#38bdf8' }} 
              onClick={openRegistrationForm}
            >
              <span style={{ ...styles.cardNumber, color: '#38bdf8' }}>03</span>
              <h3 style={{ ...styles.actionTitle, color: '#38bdf8' }}>REGISTRATION ↗</h3>
              <p style={styles.actionDesc}>Click to open Google Form and sign up for early detection screening programs.</p>
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
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#e2e8f0',
    backgroundColor: '#070d1e',
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
    backgroundColor: '#0a1329',
  },
  logo: {
    margin: 0,
    fontSize: '1.4rem',
    color: '#38bdf8',
    cursor: 'pointer',
    fontWeight: '700',
    letterSpacing: '-0.02em',
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
  },
  navBtn: {
    background: 'none',
    border: '1px solid #334155',
    color: '#94a3b8',
    padding: '0.4rem 1rem',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  pageHeader: {
    textAlign: 'center',
    padding: '2.5rem 1.5rem 1rem 1.5rem',
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
    gap: '1.5rem',
    marginBottom: '1.75rem',
  },
  logoWrapper: {
    width: '85px',
    height: '85px',
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
    transform: 'scale(1.35)',
  },
  orgTitles: {
    textAlign: 'center',
    marginBottom: '1.25rem',
    padding: '0 0.5rem',
  },
  orgMain: {
    fontSize: '1.25rem',
    color: '#fbbf24',
    margin: '0 0 0.35rem 0',
    letterSpacing: '0.05em',
    fontWeight: '700',
  },
  orgSub: {
    fontSize: '0.95rem',
    color: '#38bdf8',
    margin: 0,
    fontWeight: '500',
    letterSpacing: '0.02em',
  },
  pageTitle: {
    fontSize: '2.75rem',
    color: '#f87171',
    margin: '0.5rem 0 0.35rem 0',
    fontWeight: '800',
    letterSpacing: '-0.03em',
    cursor: 'pointer',
  },
  tagline: {
    fontSize: '1.05rem',
    color: '#94a3b8',
    margin: 0,
    fontWeight: '400',
    letterSpacing: '0.02em',
  },
  pageContent: {
    padding: '1.5rem',
    maxWidth: '960px',
    margin: '0 auto',
    flex: 1,
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  summaryCard: {
    backgroundColor: '#0f172a',
    padding: '2rem',
    borderRadius: '0.75rem',
    border: '1px solid #1e293b',
    borderLeft: '4px solid #38bdf8',
  },
  summaryText: {
    color: '#cbd5e1',
    lineHeight: '1.7',
    fontSize: '1.05rem',
    margin: 0,
  },
  medicalCard: {
    backgroundColor: '#0f172a',
    padding: '2.25rem',
    borderRadius: '0.75rem',
    border: '1px solid',
  },
  actionRow: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  primaryRegisterBtn: {
    backgroundColor: '#0284c7',
    color: '#ffffff',
    border: 'none',
    padding: '0.75rem 1.75rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  badgeInfo: {
    display: 'inline-block',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#38bdf8',
    backgroundColor: '#0284c720',
    padding: '0.25rem 0.6rem',
    borderRadius: '0.25rem',
    marginBottom: '1rem',
    letterSpacing: '0.08em',
  },
  badgeDanger: {
    display: 'inline-block',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#f87171',
    backgroundColor: '#ef444420',
    padding: '0.25rem 0.6rem',
    borderRadius: '0.25rem',
    marginBottom: '1rem',
    letterSpacing: '0.08em',
  },
  badgeSuccess: {
    display: 'inline-block',
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#34d399',
    backgroundColor: '#10b98120',
    padding: '0.25rem 0.6rem',
    borderRadius: '0.25rem',
    marginBottom: '1rem',
    letterSpacing: '0.08em',
  },
  cardHeading: {
    marginTop: 0,
    marginBottom: '1rem',
    fontSize: '1.4rem',
    fontWeight: '700',
  },
  paragraph: {
    color: '#cbd5e1',
    lineHeight: '1.7',
    fontSize: '1.05rem',
    margin: 0,
  },
  featureList: {
    color: '#e2e8f0',
    lineHeight: '1.9',
    paddingLeft: '1.25rem',
    marginTop: '1rem',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
    gap: '1.5rem',
  },
  actionCard: {
    backgroundColor: '#0f172a',
    padding: '1.75rem',
    borderRadius: '0.75rem',
    border: '1px solid',
    cursor: 'pointer',
    position: 'relative',
  },
  cardNumber: {
    fontSize: '0.85rem',
    fontWeight: '800',
    display: 'block',
    marginBottom: '0.5rem',
    letterSpacing: '0.05em',
  },
  actionTitle: {
    marginTop: 0,
    marginBottom: '0.5rem',
    fontSize: '1.2rem',
    fontWeight: '700',
    letterSpacing: '-0.01em',
  },
  actionDesc: {
    color: '#94a3b8',
    margin: 0,
    fontSize: '0.95rem',
    lineHeight: '1.5',
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
    backgroundColor: '#0f172a',
    padding: '2rem',
    borderRadius: '0.75rem',
    border: '1px solid #1e293b',
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
    fontSize: '0.85rem',
    backgroundColor: '#050a17',
  },
};