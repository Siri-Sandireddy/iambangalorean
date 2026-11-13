import React, { useState } from 'react';

export default function Registration({ onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    test: '',
    hospital: '',
    location: '',
    referred_by: '',
    referred_by_other: '',
    terms_accepted: false
  });

  const [availableLocations, setAvailableLocations] = useState([]);
  const [statusMessage, setStatusMessage] = useState({ text: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hospital-first priority mapping
  const locationsByHospital = {
    "Tenet Diagnostics": ["Jayanagar", "Sadashivya"],
    "Narayana Hospital": ["Banashakari"],
    "Canva Diagnostics": ["Rajajinagar", "Nagarbhavi", "Kormangala"]
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === "hospital") {
      setAvailableLocations(locationsByHospital[value] || []);
      setFormData({ ...formData, hospital: value, location: '' });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ text: '', isError: false });

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage({ text: data.message || 'Registration successful!', isError: false });
        setFormData({
          name: '', age: '', phone: '', email: '', test: '',
          hospital: '', location: '', referred_by: '', referred_by_other: '', terms_accepted: false
        });
        setAvailableLocations([]);
      } else {
        setStatusMessage({ text: data.error || 'Registration failed.', isError: true });
      }
    } catch (err) {
      setStatusMessage({ text: 'Unable to connect to server. Please try again later.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerBar}>
        <button onClick={onBack} style={styles.backBtn}>
          ← Back to Hrdaya Siddhi
        </button>
      </div>

      <div style={styles.formCard}>
        <h2 style={styles.title}>Event Screening Sign-Up</h2>
        <p style={styles.subtitle}>Fill in your details below to register for the Hrdaya Siddhi cardiac screening camp.</p>
        
        {statusMessage.text && (
          <div style={{
            padding: '12px',
            marginBottom: '1.5rem',
            borderRadius: '0.375rem',
            backgroundColor: statusMessage.isError ? '#fee2e2' : '#dcfce7',
            color: statusMessage.isError ? '#dc2626' : '#16a34a',
            textAlign: 'center',
            fontWeight: '600'
          }}>
            {statusMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={styles.inputField} placeholder="Enter your full name" required />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Age</label>
            <input type="number" name="age" min="1" max="120" value={formData.age} onChange={handleInputChange} style={styles.inputField} placeholder="Enter your age" required />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Mobile Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={styles.inputField} placeholder="e.g., +91 9876543210" required />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={styles.inputField} placeholder="e.g., name@example.com" required />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Select Test</label>
            <select name="test" value={formData.test} onChange={handleInputChange} style={styles.inputField} required>
              <option value="">-- Select Test --</option>
              <option value="CAC">CAC (Coronary Artery Calcium)</option>
              <option value="CCTA">CCTA (Coronary CT Angiography)</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Select Hospital / Center</label>
            <select name="hospital" value={formData.hospital} onChange={handleInputChange} style={styles.inputField} required>
              <option value="">-- Select Hospital / Center --</option>
              <option value="Tenet Diagnostics">Tenet Diagnostics</option>
              <option value="Narayana Hospital">Narayana Hospital</option>
              <option value="Canva Diagnostics">Canva Diagnostics</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Select Location</label>
            <select name="location" value={formData.location} onChange={handleInputChange} style={styles.inputField} required>
              <option value="">-- Select Hospital First --</option>
              {availableLocations.map((loc, idx) => (
                <option key={idx} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>How did you hear about this event?</label>
            <select name="referred_by" value={formData.referred_by} onChange={handleInputChange} style={styles.inputField} required>
              <option value="">-- Select Option --</option>
              <option value="Social Media">Social Media (Instagram/Facebook/LinkedIn)</option>
              <option value="WhatsApp">WhatsApp Message / Group</option>
              <option value="Friends & Family">Friends & Family</option>
              <option value="Hospital Poster / Pamphlet">Hospital Poster / Pamphlet</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {formData.referred_by === 'Other' && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Please specify:</label>
              <input type="text" name="referred_by_other" value={formData.referred_by_other} onChange={handleInputChange} style={styles.inputField} placeholder="Type how you got to know" required />
            </div>
          )}

          <div style={styles.termsBox}>
            <p style={{ marginTop: 0, fontWeight: 'bold', color: '#1e293b' }}>Terms & Privacy Notice:</p>
            <p style={{ lineHeight: '1.5', marginBottom: '10px', color: '#475569' }}>The information collected will be used strictly for event coordination, communication, and keeping your data secure.</p>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 500, color: '#0f172a' }}>
              <input type="checkbox" name="terms_accepted" checked={formData.terms_accepted} onChange={handleInputChange} style={{ width: 'auto' }} required />
              I have read and agree to the terms above.
            </label>
          </div>

          <button type="submit" disabled={isSubmitting} style={styles.submitBtn}>
            {isSubmitting ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
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
    padding: '2.5rem',
    borderRadius: '0.75rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    boxSizing: 'border-box',
  },
  title: {
    textAlign: 'center',
    color: '#0f172a',
    fontSize: '1.8rem',
    fontWeight: '800',
    marginTop: 0,
    marginBottom: '0.5rem',
  },
  subtitle: {
    textAlign: 'center',
    color: '#64748b',
    fontSize: '0.95rem',
    marginBottom: '2rem',
  },
  inputGroup: {
    marginBottom: '1.25rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '600',
    color: '#1e293b',
    fontSize: '0.9rem',
  },
  inputField: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #cbd5e1',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    backgroundColor: '#f8fafc',
    color: '#0f172a',
    boxSizing: 'border-box',
    outline: 'none',
  },
  termsBox: {
    margin: '1.5rem 0',
    fontSize: '0.9rem',
    backgroundColor: '#f1f5f9',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #e2e8f0',
  },
  submitBtn: {
    width: '100%',
    backgroundColor: '#d97706',
    color: '#ffffff',
    border: 'none',
    padding: '0.85rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
};