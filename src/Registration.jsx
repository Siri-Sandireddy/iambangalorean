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
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '', age: '', phone: '', email: '', test: '',
      hospital: '', location: '', referred_by: '', referred_by_other: '', terms_accepted: false
    });
    setAvailableLocations([]);
    setIsSubmitted(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '30px auto', padding: '20px', fontFamily: 'Inter, sans-serif' }}>
      <button onClick={onBack} style={{ background: 'none', border: '1px solid #cbd5e1', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', marginBottom: '20px' }}>
        ← Back to Hrdaya Siddhi
      </button>

      <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', color: '#1a365d', marginTop: 0 }}>Event Screening Sign-Up</h2>
        
        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
            <h3 style={{ color: '#16a34a', marginBottom: '0.5rem' }}>Registration Successful!</h3>
            <p style={{ color: '#475569', marginBottom: '1.5rem' }}>Thank you for registering. We have recorded your details successfully.</p>
            <button onClick={resetForm} style={{ backgroundColor: '#d97706', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
              Register Another Person
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Enter your full name" required />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>Age</label>
              <input type="number" name="age" min="1" max="120" value={formData.age} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Enter your age" required />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>Mobile Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="e.g., +91 9876543210" required />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="e.g., name@example.com" required />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>Select Test</label>
              <select name="test" value={formData.test} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} required>
                <option value="">-- Select Test --</option>
                <option value="CAC">CAC (Coronary Artery Calcium)</option>
                <option value="CCTA">CCTA (Coronary CT Angiography)</option>
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>Select Hospital / Center</label>
              <select name="hospital" value={formData.hospital} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} required>
                <option value="">-- Select Hospital / Center --</option>
                <option value="Tenet Diagnostics">Tenet Diagnostics</option>
                <option value="Narayana Hospital">Narayana Hospital</option>
                <option value="Canva Diagnostics">Canva Diagnostics</option>
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>Select Location</label>
              <select name="location" value={formData.location} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} required>
                <option value="">-- Select Hospital First --</option>
                {availableLocations.map((loc, idx) => (
                  <option key={idx} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>How did you hear about this event?</label>
              <select name="referred_by" value={formData.referred_by} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} required>
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
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9rem' }}>Please specify:</label>
                <input type="text" name="referred_by_other" value={formData.referred_by_other} onChange={handleInputChange} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} placeholder="Type how you got to know" required />
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

            <button type="submit" style={{ width: '100%', backgroundColor: '#1a365d', color: '#fff', border: 'none', padding: '12px', borderRadius: '4px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>
              Submit Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
}