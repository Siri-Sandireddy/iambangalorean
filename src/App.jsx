import { useState } from 'react';
import Registration from './Registration';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Header Component for Hrdaya Siddhi Pages
  const HrdayaHeader = () => (
    <header style={styles.pageHeader}>
      <div style={styles.logoRow}>
        <div style={styles.logoWrapper}><img src="/lions-logo.png" alt="Lions" style={styles.logoImg} /></div>
        <div style={styles.logoWrapper}><img src="/hrdaya-siddhi.jpeg" alt="Hrdaya" style={styles.logoImg} /></div>
        <div style={styles.logoWrapper}><img src="/lions-association.png" alt="Association" style={styles.logoImg} /></div>
        <div style={styles.logoWrapper}><img src="/district-logo.png" alt="District" style={styles.logoImgScaled} /></div>
      </div>
      <div style={styles.orgTitles}>
        <h2 style={styles.orgMain}>LIONS INTERNATIONAL DISTRICT 317F</h2>
        <h3 style={styles.orgSub}>LIONS CLUB OF BANGALORE BRIGADE (LIONS BRIGADE)</h3>
      </div>
      <h1 style={styles.pageTitle} onClick={() => setCurrentPage('hrdaya-siddhi')}>Hrdaya Siddhi</h1>
      <p style={styles.tagline}>Cleanse Your Heart • Early Detection Saves Lives</p>
    </header>
  );

  // If user navigated to the Registration Page
  if (currentPage === 'registration') {
    return <Registration onBack={() => setCurrentPage('hrdaya-siddhi')} />;
  }

  // Sub-Page 1: AWARENESS
  if (currentPage === 'awareness') {
    return (
      <div style={styles.unifiedContainer}>
        <nav style={styles.topNav}>
          <img src="/iambangalorean.jpeg" alt="Brand" style={styles.navBrandImg} onClick={() => setCurrentPage('home')} />
          <button style={styles.navOutlineBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>← Back to Hrdaya Siddhi</button>
        </nav>
        <HrdayaHeader />
        <main style={styles.pageContent}>
          <div style={{ ...styles.lightCard, borderColor: '#dc2626' }}>
            <div style={styles.badgeDanger}>AWARENESS</div>
            <h2 style={{ ...styles.cardHeading, color: '#dc2626' }}>1. Heart Attack Awareness & Silent Risk Factors</h2>
            <p style={styles.paragraph}>Cardiovascular diseases remain the leading cause of mortality worldwide...</p>
            <div style={styles.actionRow}>
              <button style={styles.ctaGoldBtn} onClick={() => setCurrentPage('registration')}>Register For Screening →</button>
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
          <img src="/iambangalorean.jpeg" alt="Brand" style={styles.navBrandImg} onClick={() => setCurrentPage('home')} />
          <button style={styles.navOutlineBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>← Back to Hrdaya Siddhi</button>
        </nav>
        <HrdayaHeader />
        <main style={styles.pageContent}>
          <div style={{ ...styles.lightCard, borderColor: '#16a34a' }}>
            <div style={styles.badgeSuccess}>DIAGNOSTICS</div>
            <h2 style={{ ...styles.cardHeading, color: '#16a34a' }}>2. What is CAC + CCTA? Advanced Cardiac Diagnostics</h2>
            <p style={styles.paragraph}>Modern preventive cardiology relies on CAC Scoring and CCTA...</p>
            <div style={styles.actionRow}>
              <button style={styles.ctaGoldBtn} onClick={() => setCurrentPage('registration')}>Register For CCTA / CAC Screening →</button>
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
          <img src="/iambangalorean.jpeg" alt="Brand" style={styles.navBrandImg} onClick={() => setCurrentPage('home')} />
          <button style={styles.navOutlineBtn} onClick={() => setCurrentPage('home')}>← Back to Home</button>
        </nav>
        <HrdayaHeader />
        <main style={styles.pageContent}>
          <div style={styles.summaryCard}>
            <div style={styles.badgeInfo}>INITIATIVE SUMMARY</div>
            <p style={styles.summaryText}>Cardiovascular diseases claim roughly 17.9 to 20.5 million lives globally each year...</p>
          </div>
          <div style={styles.cardGrid}>
            <div style={{ ...styles.actionCard, borderColor: '#dc2626' }} onClick={() => setCurrentPage('awareness')}>
              <span style={{ ...styles.cardNumber, color: '#dc2626' }}>01</span>
              <h3 style={{ ...styles.actionTitle, color: '#dc2626' }}>AWARENESS →</h3>
              <p style={styles.actionDesc}>Understand heart attack risks and silent symptoms.</p>
            </div>
            <div style={{ ...styles.actionCard, borderColor: '#16a34a' }} onClick={() => setCurrentPage('ccta-tests')}>
              <span style={{ ...styles.cardNumber, color: '#16a34a' }}>02</span>
              <h3 style={{ ...styles.actionTitle, color: '#16a34a' }}>CCTA / CAC TESTS →</h3>
              <p style={styles.actionDesc}>Learn about non-invasive CCTA screening.</p>
            </div>
            <div style={{ ...styles.actionCard, borderColor: '#d97706' }} onClick={() => setCurrentPage('registration')}>
              <span style={{ ...styles.cardNumber, color: '#d97706' }}>03</span>
              <h3 style={{ ...styles.actionTitle, color: '#d97706' }}>REGISTRATION ↗</h3>
              <p style={styles.actionDesc}>Fill out the camp sign-up form directly.</p>
            </div>
          </div>
        </main>
        <footer style={styles.footer}>
          <p>Presented by Lions Club of Bangalore Brigade & LEO Club Asraya</p>
          <p>© 2026 iambangalorean.com</p>
        </footer>
      </div>
    );
  }

  // Default Homepage
  return (
    <div style={styles.unifiedContainer}>
      <nav style={styles.topNav}>
        <img src="/iambangalorean.jpeg" alt="Brand" style={styles.navBrandImg} onClick={() => setCurrentPage('home')} />
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

      <header style={styles.heroBannerWithSkyline}>
        <div style={styles.heroStack}>
          <div style={styles.heroLeftSplit}>
            <span style={styles.heroSubHeader}>🍃 PEOPLE | PLACES | STORIES | A STRONGER BENGALURU 🍃</span>
            <h1 style={styles.heroMainTitle}>I Am <span style={styles.heroHighlight}>Bangalorean</span></h1>
            <h2 style={styles.heroTagline}>Proud To Be One</h2>
            <p style={styles.heroBody}>Discover Bengaluru's stories, culture, food, startups, events and people.</p>
            <div style={styles.heroButtons}>
              <button style={styles.ctaGoldBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>Explore Hrdaya Siddhi →</button>
            </div>
          </div>
          <div style={styles.heroBannerImageWrapper}>
            <img src="/bengaluru-skyline.jpeg" alt="Skyline" style={styles.skylineImg} />
          </div>
        </div>
      </header>

      <section style={styles.sectionContainer}>
        <div style={styles.sectionHeader}>
          <div><h2 style={styles.sectionTitle}>Explore What Makes Bengaluru Special</h2></div>
        </div>
      </section>

      <footer style={styles.subscribeBar}>
        <div>
          <h3>Stay Connected To Namma Bengaluru 🍃</h3>
          <p style={{ margin: 0, color: '#475569' }}>Get the latest stories and events.</p>
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