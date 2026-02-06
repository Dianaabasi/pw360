'use client';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender: '',
    dob: '',
    country: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      const res = await fetch('/api/auth/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firebaseUid: user.uid,
          email: user.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: phoneNumber,
        }),
      });

      if (!res.ok) throw new Error('Failed to sync user data');
      router.push('/onboarding');

    } catch (err: any) {
      console.error(err);
      const msg = err.code === 'auth/email-already-in-use'
        ? 'That email is already in use.'
        : err.message || 'Something went wrong.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem 1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid #bfdbfe',
    backgroundColor: 'transparent',
    color: '#374151',
    fontSize: '1rem',
    fontWeight: 500,
    outline: 'none',
    transition: 'all 0.2s'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    color: '#38007F',
    fontWeight: 700,
    fontSize: '0.875rem',
    marginBottom: '0.5rem'
  };

  // Comprehensive list of countries for the Country dropdown
  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia',
    'Australia', 'Austria', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Belarus', 'Belgium',
    'Benin', 'Bhutan', 'Bolivia', 'Bosnia', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria',
    'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Chad',
    'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', "Côte d'Ivoire",
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Ecuador',
    'Egypt', 'El Salvador', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji',
    'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece',
    'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
    'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyzstan',
    'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein',
    'Lithuania', 'Luxembourg', 'Macau', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives',
    'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco',
    'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nepal',
    'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea',
    'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama',
    'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saudi Arabia', 'Senegal', 'Serbia',
    'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Somalia',
    'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan',
    'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania',
    'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia',
    'Turkey', 'Turkmenistan', 'Uganda', 'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
    'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="signup-form"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem 5rem',
          width: '100%',
          maxWidth: '64rem'
        }}
      >
        {/* Error Message */}
        {error && (
          <div
            className="error-message"
            style={{
              gridColumn: 'span 2',
              padding: '0.75rem',
              backgroundColor: '#fef2f2',
              color: '#dc2626',
              fontSize: '0.875rem',
              borderRadius: '0.375rem',
              border: '1px solid #fecaca'
            }}
          >
            {error}
          </div>
        )}

        {/* Left Column */}
        <div className="form-column" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={labelStyle}>First Name</label>
            <input
              type="text"
              required
              placeholder="Enter..."
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Last Name</label>
            <input
              type="text"
              required
              placeholder="Enter..."
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              required
              placeholder="Enter..."
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              required
              placeholder="Enter Password..."
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="form-column" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={labelStyle}>Gender</label>
            <div style={{ position: 'relative' }}>
              <select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                style={{
                  ...inputStyle,
                  appearance: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <ChevronDown style={{
                position: 'absolute',
                right: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#4B0082',
                width: '1.25rem',
                height: '1.25rem',
                pointerEvents: 'none'
              }} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>DOB</label>
            <input
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              style={{ ...inputStyle, textAlign: 'center' }}
            />
          </div>

          <div>
            <label style={labelStyle}>Country</label>
            <div style={{ position: 'relative' }}>
              <select
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                style={{
                  ...inputStyle,
                  appearance: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="" disabled>Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <ChevronDown style={{
                position: 'absolute',
                right: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#4B0082',
                width: '1.25rem',
                height: '1.25rem',
                pointerEvents: 'none'
              }} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Phone Number</label>
            <PhoneInput
              international
              defaultCountry="US"
              value={phoneNumber}
              onChange={setPhoneNumber}
              className="phone-input-container"
            />
          </div>
        </div>

        {/* Submit Button - Full Width */}
        <div className="submit-btn-container" style={{ gridColumn: 'span 2', paddingTop: '1rem' }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              maxWidth: '320px',
              background: 'linear-gradient(to right, #017CF4, #017CF4)',
              color: 'white',
              fontWeight: 700,
              padding: '1rem',
              borderRadius: '0.5rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              fontSize: '1rem',
              transition: 'all 0.2s'
            }}
          >
            {loading ? 'Creating Account...' : 'Continue Registration'}
          </button>

          {/* Login Link */}
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <p style={{ color: '#38007F', fontSize: '0.875rem' }}>
              Already have an account?{' '}
              <Link
                href="/login"
                style={{
                  color: '#FFC500',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </form>

      {/* Responsive CSS + Phone Input Styling */}
      <style jsx global>{`
        .phone-input-container {
          display: flex;
          gap: 0.5rem;
        }
        .phone-input-container .PhoneInputCountry {
          padding: 0.75rem;
          border: 1px solid #bfdbfe;
          border-radius: 0.75rem;
          background: transparent;
        }
        .phone-input-container .PhoneInputInput {
          flex: 1;
          padding: 1rem 1.5rem;
          border-radius: 0.75rem;
          border: 1px solid #bfdbfe;
          background: transparent;
          color: #374151;
          font-size: 1rem;
          font-weight: 500;
          outline: none;
        }
        .phone-input-container .PhoneInputCountrySelect {
          border: none;
          background: transparent;
        }
        @media (max-width: 768px) {
          .signup-form {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 0 1rem;
          }
          .error-message {
            grid-column: span 1 !important;
          }
          .submit-btn-container {
            grid-column: span 1 !important;
          }
          .submit-btn-container button {
            max-width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}
