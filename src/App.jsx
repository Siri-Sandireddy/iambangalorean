import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>I Am Bangalorean</h2>
        <div style={styles.navLinks}>
          <button style={styles.navBtn} onClick={() => setActiveTab('home')}>Home</button>
          <button style={styles.navBtn} onClick={() => setActiveTab('about')}>About</button>
          <button style={styles.primaryBtn} onClick={() => setActiveTab('register')}>Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={styles.heroTitle}>Welcome to the Heart of Bengaluru</h1>
        <p style={styles.heroSubtitle}>
          Discover local events, connect with fellow Bangaloreans, and celebrate the culture of Bengaluru.
        </p>
        <button style={styles.ctaBtn} onClick={() => setActiveTab('register')}>
          Get Started / Join Us
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
          <div style={styles.card}>
            <h3>📝 Easy Registration</h3>
            <p>Quick registration for upcoming events and community initiatives.</p>
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
  footer: {
    textAlign: 'center',
    padding: '2rem',
    borderTop: '1px solid #1e293b',
    color: '#64748b',
  },
};