import React, { useState } from 'react';

const HOSPITAL_LOCATIONS = {
  'Tenet Diagnostics': ['Jayanagar', 'Sadashivya'],
  'Narayana Hospital': ['Banashakari'],
  'Canva Diagnostics': ['Rajajinagar', 'Nagarbhavi', 'Kormangala'],
};

const ALLOWED_TESTS = ['CAC', 'CCTA'];
const ALLOWED_REFERRALS = [
  'Social Media',
  'WhatsApp',
  'Friends & Family',
  'Hospital Poster / Pamphlet',
];

const INITIAL_FORM = {
  name: '',
  age: '',
  phone: '',
  email: '',
  test: '',
  hospital: '',
  location: '',
  referred_by: '',
  referred_by_other: '',
  terms_accepted: false,
};

export default function Registration({ onBack }) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const locationOptions = HOSPITAL_LOCATIONS[formData.hospital] || [];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'hospital') {
      setFormData((prev) => ({
        ...prev,
        hospital: value,
        location: '',
      }));
      return;
    }

    if (name === 'referred_by') {
      setFormData((prev) => ({
        ...prev,
        referred_by: value,
        referred_by_other: value === 'Other' ? prev.referred_by_other : '',
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    if (!formData.terms_accepted) {
      return 'Error: You must accept the terms and conditions to register.';
    }
    if (!/^[A-Za-z\s]{2,100}$/.test(formData.name.trim())) {
      return 'Error: Invalid name. Use only letters and spaces (2–100 characters).';
    }
    const ageNum = Number(formData.age.trim());
    if (!Number.isInteger(ageNum) || ageNum < 1 || ageNum > 120) {
      return 'Error: Age must be a valid number between 1 and 120.';
    }
    const phoneTrimmed = formData.phone.trim();
    const digitsOnly = phoneTrimmed.replace(/\D/g, '');
    if (
      !/^\+?[\d\s\-()]{7,20}$/.test(phoneTrimmed) ||
      digitsOnly.length < 7 ||
      digitsOnly.length > 15
    ) {
      return 'Error: Phone number must contain between 7 and 15 digits.';
    }
    if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}$/.test(
        formData.email.trim()
      )
    ) {
      return 'Error: Please enter a valid email address with a proper domain (e.g., user@example.com).';
    }
    if (!ALLOWED_TESTS.includes(formData.test)) {
      return 'Error: Invalid test selection.';
    }
    if (!locationOptions.includes(formData.location)) {
      return 'Error: Invalid hospital or location selection.';
    }
    if (formData.referred_by === 'Other') {
      if (!formData.referred_by_other.trim()) {
        return 'Error: Please specify how you heard about the event.';
      }
    } else if (!ALLOWED_REFERRALS.includes(formData.referred_by)) {
      return 'Error: Invalid referral source.';
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const errorMessage = validateForm();
    if (errorMessage) {
      setStatus({ type: 'error', message: errorMessage });
      return;
    }

    const payload = {
      name: formData.name.trim(),
      age: Number(formData.age.trim()),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      test: formData.test,
      hospital: formData.hospital,
      location: formData.location,
      referred_by:
        formData.referred_by === 'Other'
          ? formData.referred_by_other.trim()
          : formData.referred_by,
      referred_by_other: formData.referred_by_other.trim(),
      terms_accepted: formData.terms_accepted,
    };

    setSubmitting(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const contentType = res.headers.get('content-type') || '';
      const data = contentType.includes('application/json')
        ? await res.json()
        : { message: await res.text() };

      if (!res.ok) {
        setStatus({
          type: 'error',
          message: data.error || data.message || 'Registration failed. Please try again.',
        });
        return;
      }

      setStatus({
        type: 'success',
        message: data.message || 'Registration Successful! Your details have been securely saved.',
      });
      setFormData(INITIAL_FORM);
    } catch {
      setStatus({
        type: 'error',
        message: 'Registration failed due to a network error. Please try again later.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      {typeof onBack === 'function' && (
        <div style={styles.headerBar}>
          <button type="button" onClick={onBack} style={styles.backBtn}>
            ← Back to Hrdaya Siddhi
          </button>
        </div>
      )}

      <div style={styles.formCard}>
        <h2 style={styles.heading}>Hrdaya Siddhi Registration</h2>
        <p style={styles.subheading}>
          Complete the form below to register for cardiac screening.
        </p>

        {status && (
          <div
            role="alert"
            style={{
              ...styles.alert,
              ...(status.type === 'success' ? styles.alertSuccess : styles.alertError),
            }}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div style={styles.fieldGroup}>
            <label htmlFor="name" style={styles.label}>
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.fieldGroup}>
            <label htmlFor="age" style={styles.label}>
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              min="1"
              max="120"
              value={formData.age}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.fieldGroup}>
            <label htmlFor="phone" style={styles.label}>
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.fieldGroup}>
            <label htmlFor="email" style={styles.label}>
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.fieldGroup}>
            <label htmlFor="test" style={styles.label}>
              Test
            </label>
            <select
              id="test"
              name="test"
              value={formData.test}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select test</option>
              <option value="CAC">CAC</option>
              <option value="CCTA">CCTA</option>
            </select>
          </div>

          <div style={styles.fieldGroup}>
            <label htmlFor="hospital" style={styles.label}>
              Hospital
            </label>
            <select
              id="hospital"
              name="hospital"
              value={formData.hospital}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select hospital</option>
              <option value="Tenet Diagnostics">Tenet Diagnostics</option>
              <option value="Narayana Hospital">Narayana Hospital</option>
              <option value="Canva Diagnostics">Canva Diagnostics</option>
            </select>
          </div>

          <div style={styles.fieldGroup}>
            <label htmlFor="location" style={styles.label}>
              Location
            </label>
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              disabled={!formData.hospital}
              style={styles.input}
              required
            >
              <option value="">
                {formData.hospital ? 'Select location' : 'Select hospital first'}
              </option>
              {locationOptions.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          <div style={styles.fieldGroup}>
            <label htmlFor="referred_by" style={styles.label}>
              Referred By
            </label>
            <select
              id="referred_by"
              name="referred_by"
              value={formData.referred_by}
              onChange={handleChange}
              style={styles.input}
              required
            >
              <option value="">Select referral source</option>
              <option value="Social Media">Social Media</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Friends & Family">Friends &amp; Family</option>
              <option value="Hospital Poster / Pamphlet">
                Hospital Poster / Pamphlet
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          {formData.referred_by === 'Other' && (
            <div style={styles.fieldGroup}>
              <label htmlFor="referred_by_other" style={styles.label}>
                Please Specify
              </label>
              <input
                id="referred_by_other"
                name="referred_by_other"
                type="text"
                value={formData.referred_by_other}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
          )}

          <div style={styles.termsBox}>
            <label htmlFor="terms_accepted" style={styles.checkboxLabel}>
              <input
                id="terms_accepted"
                name="terms_accepted"
                type="checkbox"
                checked={formData.terms_accepted}
                onChange={handleChange}
                required
              />
              <span>I accept the terms and conditions.</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{
              ...styles.submitBtn,
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? 'Submitting...' : 'Submit Registration'}
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
    padding: '1.75rem',
    borderRadius: '0.75rem',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    boxSizing: 'border-box',
  },
  heading: {
    margin: '0 0 0.35rem 0',
    color: '#0f172a',
    fontSize: '1.5rem',
  },
  subheading: {
    margin: '0 0 1.25rem 0',
    color: '#64748b',
    fontSize: '0.95rem',
  },
  fieldGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.375rem',
    color: '#1e293b',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  input: {
    width: '100%',
    padding: '0.625rem 0.75rem',
    borderRadius: '0.375rem',
    border: '1px solid #cbd5e1',
    fontSize: '0.95rem',
    color: '#0f172a',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
  },
  termsBox: {
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    borderRadius: '0.375rem',
    padding: '0.75rem 1rem',
    margin: '1.25rem 0',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    color: '#1e293b',
    cursor: 'pointer',
  },
  submitBtn: {
    width: '100%',
    padding: '0.75rem 1rem',
    backgroundColor: '#1e3a8a',
    color: '#ffffff',
    border: 'none',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
  },
  alert: {
    padding: '0.75rem 1rem',
    borderRadius: '0.375rem',
    marginBottom: '1rem',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  alertSuccess: {
    backgroundColor: '#dcfce7',
    color: '#166534',
    border: '1px solid #86efac',
  },
  alertError: {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    border: '1px solid #fca5a5',
  },
};