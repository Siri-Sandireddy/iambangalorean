import React from 'react';

export default function Registration({ onBack }) {
  return (
    <div style={styles.container}>
      <div style={styles.headerBar}>
        <button onClick={onBack} style={styles.backBtn}>
          ← Back to Hrdaya Siddhi
        </button>
      </div>

      <div style={styles.formCard}>
        <iframe
          src="https://forms.gle/hMXXD6ZHJgffNutH9"
          width="100%"
          height="850px"
          style={{ border: 'none', background: 'transparent' }}
          title="Hrdaya Siddhi Registration Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f8fafc',
    padding: '2rem 1rem',
    fontFamily: 'Inter, system-ui, sans-serif',
    boxSizing: 'border-box',
  },
  headerBar: {
    maxWidth: '800px',
    margin: '0 auto 1.5rem auto',
  },
  backBtn: {
    background: '#ffffff',
    border: '1px solid #cbd5e1',
    color: '#475569',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  },
  formCard: {
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    boxSizing: 'border-box',
  },
};