import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Render Hrdaya Siddhi Page
  if (currentPage === 'hrdaya-siddhi') {
    return (
      <div style={styles.container}>
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

        <main style={styles.pageContent}>
          <h1 style={styles.pageTitle}>Hrdaya Siddhi</h1>
          <p style={styles.pageSubtitle}>
            Welcome to Hrdaya Siddhi. Discover holistic wellness, spiritual growth, and community initiatives in Bengaluru.
          </p>

          <div style={styles.detailsCard}>
            <h3>About Hrdaya Siddhi</h3>
            <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
              This section is dedicated to sharing details, programs, and updates about Hrdaya Siddhi. Tell me what content, images, or forms you want to add here!
            </p>
          </div>
        </main>

        <footer style={styles.footer}>
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
          <button style={styles.primaryBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>
            Hrdaya Siddhi
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to the Heart of Namma Bengaluru</h1>
        <p style={styles.heroSubtitle}>
          Discover local events, connect with fellow Bangaloreans, and celebrate the culture of Bengaluru.
        </p>
        <button style={styles.ctaBtn} onClick={() => setCurrentPage('hrdaya-siddhi')}>
          Explore Hrdaya Siddhi
        </button>
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
            <p>Explore Hrdaya Siddhi programs, initiatives, and community updates. Click to view more.</p>
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
    padding: '1.5rem 3rem',
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
  primaryBtn: {
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    border: 'none',
    padding: '0.5rem 1.25rem',
    borderRadius: '0.375rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  hero: {
    textAlign: 'center',
    padding: '5rem 2rem',
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
    marginBottom: '2rem',
  },
  ctaBtn: {
    backgroundColor: '#0284c7',
    color: '#ffffff',
    border: 'none',
    padding: '0.875rem 2rem',
    fontSize: '1.1rem',
    borderRadius: '0.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
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
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
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
  pageContent: {
    padding: '4rem 2rem',
    maxWidth: '900px',
    margin: '0 auto',
    flex: 1,
    width: '100%',
    boxSizing: 'border-box',
  },
  pageTitle: {
    fontSize: '2.5rem',
    color: '#38bdf8',
    marginBottom: '0.5rem',
  },
  pageSubtitle: {
    fontSize: '1.2rem',
    color: '#94a3b8',
    marginBottom: '2rem',
  },
  detailsCard: {
    backgroundColor: '#1e293b',
    padding: '2.5rem',
    borderRadius: '0.75rem',
    border: '1px solid #334155',
  },
  footer: {
    textAlign: 'center',
    padding: '2rem',
    borderTop: '1px solid #1e293b',
    color: '#64748b',
  },
};