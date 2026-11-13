import React, { useState } from 'react';

export default function Registration() {
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
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage({ text: data.message, isError: false });
        setFormData({
          name: '', age: '', phone: '', email: '', test: '',
          hospital: '', location: '', referred_by: '', referred_by_other: '', terms_accepted: false
        });
        setAvailableLocations([]);
      } else {
        setStatusMessage({ text: data.error || 'Registration failed.', isError: true });
      }
    } catch (err) {
      setStatusMessage({ text: 'Unable to connect to Flask server. Make sure app.py is running on port 5000.', isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '30px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#1a365d' }}>Hrudaya Siddhi Registration</h2>
      <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>Hospital Event Registration</p>

      {statusMessage.text && (
        <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '4px', background: statusMessage.isError ? '#ffe6e6' : '#e6f4ea', color: statusMessage.isError ? '#c00' : '#137333', textAlign: 'center', fontWeight: '500' }}>
          {statusMessage.text}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Full Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Age</label>
          <input type="number" name="age" min="1" max="120" value={formData.age} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Mobile Number</label>
          <input type="tel" name="phone" placeholder="e.g., +91 9876543210" value={formData.phone} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Email Address</label>
          <input type="email" name="email" placeholder="e.g., name@example.com" value={formData.email} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Select Test</label>
          <select name="test" value={formData.test} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} required>
            <option value="">-- Select Test --</option>
            <option value="CAC">CAC</option>
            <option value="CCTA">CCTA</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Select Hospital / Center</label>
          <select name="hospital" value={formData.hospital} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} required>
            <option value="">-- Select Hospital / Center --</option>
            <option value="Tenet Diagnostics">Tenet Diagnostics</option>
            <option value="Narayana Hospital">Narayana Hospital</option>
            <option value="Canva Diagnostics">Canva Diagnostics</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Select Location</label>
          <select name="location" value={formData.location} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} required>
            <option value="">-- Select Hospital First --</option>
            {availableLocations.map((loc, idx) => (
              <option key={idx} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>How did you hear about this event?</label>
          <select name="referred_by" value={formData.referred_by} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} required>
            <option value="">-- Select Option --</option>
            <option value="Social Media">Social Media (Instagram/Facebook/LinkedIn)</option>
            <option value="WhatsApp">WhatsApp Message / Group</option>
            <option value="Friends & Family">Friends & Family</option>
            <option value="Hospital Poster / Pamphlet">Hospital Poster / Pamphlet</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {formData.referred_by === 'Other' && (
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Please specify:</label>
            <input type="text" name="referred_by_other" value={formData.referred_by_other} onChange={handleInputChange} placeholder="Type how you got to know" style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }} required />
          </div>
        )}

        <div style={{ margin: '20px 0', fontSize: '0.85rem', color: '#333', background: '#f9f9f9', padding: '12px', borderRadius: '6px', border: '1px solid #ddd' }}>
          <p style={{ marginTop: 0, fontWeight: 'bold' }}>Terms & Privacy Notice:</p>
          <p style={{ lineHeight: '1.4', marginBottom: '10px' }}>The information collected will be used strictly for event coordination, communication, and keeping your data secure.</p>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 500 }}>
            <input type="checkbox" name="terms_accepted" checked={formData.terms_accepted} onChange={handleInputChange} style={{ width: 'auto' }} required />
            I have read and agree to the terms above.
          </label>
        </div>

        <button type="submit" disabled={isSubmitting} style={{ width: '100%', background: '#1a365d', color: '#fff', padding: '12px', border: 'none', borderRadius: '4px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
          {isSubmitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
}