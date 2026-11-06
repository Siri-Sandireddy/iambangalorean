import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Render Hrdaya Siddhi Page
  if (currentPage === 'hrdaya-siddhi') {
    return (
      <div style={styles.container}>
        {/* Navigation */}
        <nav style={styles.nav}>
          <h2 style={styles.logo} onClick={() => setCurrentPage('home')}>
            I Am Bangalorean
          </h2>
          <div style={styles.navLinks}>
            <button style={styles.navBtn} onClick={() => setCurrentPage('home')}>
              ← Back to Home
            </button>
          </div>
        </nav>

        {/* Header with Logos & Organization Names */}
        <header style={styles.pageHeader}>
          <div style={styles.logoRow}>
            {/* Lions International Emblem */}
            <div style={styles.logoWrapper}>
              <img 
                src="/lions-logo.png" 
                alt="Lions International Logo" 
                style={styles.lionsLogo} 
              />
            </div>

            <div style={styles.orgTitles}>
              <h2 style={styles.orgMain}>LIONS INTERNATIONAL DISTRICT 317F</h2>
              <h3 style={styles.orgSub}>LIONS CLUB OF BANGALORE BRIGADE (LIONS BRIGADE)</h3>
            </div>

            {/* District 317F Heart Emblem */}
            <div style={styles.logoWrapper}>
              <img 
                src="/district-logo.png" 
                alt="Lions District 317F Logo" 
                style={styles.districtLogo} 
              />
            </div>
          </div>

          <h1 style={styles.pageTitle}>'Hrdaya Siddhi'</h1>
          <p style={styles.tagline}>Cleanse Your Heart • Early Detection Saves Lives</p>
        </header>

        {/* Content Section: The Heart Attack Problem & Early Detection */}
        <main style={styles.pageContent}>
          {/* Key Warning Statistics */}
          <div style={styles.problemBanner}>
            <h2 style={styles.sectionHeading}>THE PROBLEM: Heart Attacks are Silent Killers</h2>
            <div style={styles.statsGrid}>
              <div style={styles.statBox}>
                <span style={styles.statNumber}>1 in 4</span>
                <p style={styles.statText}>Heart attacks happen without prior warning signs.</p>
              </div>
              <div style={styles.statBox}>
                <span style={styles.statNumber}>#1 Cause</span>
                <p style={styles.statText}>Heart disease is the leading cause of mortality across India.</p>
              </div>
              <div style={styles.statBox}>
                <span style={styles.statNumber}>5-10 Years</span>
                <p style={styles.statText}>Blockages are detectable years before a fatal attack occurs.</p>
              </div>
            </div>
          </div>

          {/* Detailed Problem Explanation */}
          <div style={styles.detailsCard}>
            <h3 style={styles.cardHeading}>Understanding the Heart Attack Crisis</h3>
            <p style={styles.paragraph}>
              Cardiovascular diseases claim between 17.9 million to 20.5 million lives globally each year, with heart attacks and strokes accounting for roughly 85% of those totals. India accounts for approximately 20% of all heart attack deaths worldwide, with an alarming increase in cardiac arrest cases among young adults and working professionals.
            </p>
            <p style={styles.paragraph}>
              A major barrier in preventing sudden cardiac events is that awareness alone without early action fails to stop mortality. Arterial blockages build up silently over several years, but traditional awareness often comes after an emergency strikes.
            </p>
          </div>

          {/* The Solution - Early Detection */}
          <div style={styles.solutionCard}>
            <h3 style={styles.cardHeading}>The Solution: CCTA Screening</h3>
            <p style={styles.paragraph}>
              <strong>Coronary CT Angiography (CCTA)</strong> offers a non-invasive, 5-minute cardiac scan with 99% accuracy in identifying hidden coronary blockages early.
            </p>
            <ul style={styles.featureList}>
              <li>Non-Invasive 5-minute advanced scan</li>
              <li>No hospital admission required</li>
              <li>Detects coronary artery blockages before symptoms appear</li>
              <li>Enables proactive, preventive cardiac care</li>
            </ul>
          </div>
        </main>

        <footer style={styles.footer}>
          <p>Presented by Lions Club of Bangalore Brigade (LIONS BRIGADE) & LEO Club Asraya</p>
          <p>© 2026 iambangalorean.com. All rights reserved.</p>
        </footer>
      </div>
    );
  }

  // Render Default Homepage
  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <h2 style={styles.logo} onClick={() => setCurrentPage('home')}>
          I Am Bangalorean
        </h2>
        <div style={styles.navLinks}>
          <button style={styles.navBtn} onClick={() => setCurrentPage('home')}>Home</button>
          <button style={styles.navBtn} onClick={() => setCurrentPage('about')}>About</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to the Heart of Namma Bengaluru</h1>
        <p style={styles.heroSubtitle}>
          Discover local events, connect with fellow Bangaloreans, and celebrate the culture of Bengaluru.
        </p>
      </header>

      {/* Feature Section */}
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

          {/* Hrdaya Siddhi Box */}
          <div 
            style={{ ...styles.card, ...styles.clickableCard }} 
            onClick={() => setCurrentPage('hrdaya-siddhi')}
          >
            <div style={styles.cardHeader}>
              <h3>✨ Hrdaya Siddhi</h3>
              <span style={styles.arrow}>→</span>
            </div>
            <p>Lions District 317F & Lions Brigade Heart Attack Awareness and Early Detection Initiative.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 iambangalorean.com. All rights reserved.</p>
      </footer>
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
    width: '140px',
    height: '140px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  lionsLogo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  districtLogo: {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    transform: 'scale(1.4)', /* Enlarges the district logo graphic specifically to balance both */
  },
  orgTitles: {
    textAlign: 'center',
    flex: '1 1 260px',
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
  problemBanner: {
    backgroundColor: '#1e1b4b',
    padding: '2rem',
    borderRadius: '0.75rem',
    border: '1px solid #4338ca',
  },
  sectionHeading: {
    color: '#f87171',
    marginTop: 0,
    marginBottom: '1.5rem',
    fontSize: '1.5rem',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1.5rem',
  },
  statBox: {
    backgroundColor: '#0f172a',
    padding: '1.25rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    border: '1px solid #312e81',
  },
  statNumber: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#f87171',
    display: 'block',
    marginBottom: '0.5rem',
  },
  statText: {
    color: '#cbd5e1',
    margin: 0,
    fontSize: '0.95rem',
    lineHeight: '1.4',
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
  },
  featureList: {
    color: '#e2e8f0',
    lineHeight: '1.8',
    paddingLeft: '1.25rem',
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
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
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