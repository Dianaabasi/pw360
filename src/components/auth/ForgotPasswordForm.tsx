'use client';

import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import Link from 'next/link';
import { ArrowRight, Link as LinkIcon } from 'lucide-react';

export default function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/user-not-found') {
        setError('No account found with this email address.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else {
        setError('Failed to send reset email. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem 1.5rem',
    borderRadius: '0.75rem',
    border: '1px solid #bfdbfe',
    backgroundColor: 'white',
    color: '#374151',
    fontSize: '1rem',
    fontWeight: 500,
    outline: 'none',
    transition: 'all 0.2s'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    color: '#38007F',
    fontWeight: 600,
    fontSize: '0.875rem',
    marginBottom: '0.5rem',
    textAlign: 'center'
  };

  if (success) {
    return (
      <div style={{ width: '100%', textAlign: 'center' }}>
        <div 
          style={{
            padding: '1rem',
            backgroundColor: '#ecfdf5',
            color: '#059669',
            borderRadius: '0.5rem',
            border: '1px solid #a7f3d0',
            marginBottom: '1.5rem'
          }}
        >
          Reset link sent! Check your email inbox.
        </div>
        <Link 
          href="/login"
          style={{
            color: '#0066CC',
            fontWeight: 600,
            textDecoration: 'none'
          }}
        >
          Back to Login
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      {error && (
        <div 
          style={{ 
            padding: '0.75rem', 
            backgroundColor: '#fef2f2', 
            color: '#dc2626', 
            fontSize: '0.875rem', 
            borderRadius: '0.5rem', 
            border: '1px solid #fecaca',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}
        >
          {error}
        </div>
      )}
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={labelStyle}>Enter Email</label>
        <input
          type="email"
          required
          placeholder="Enter Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          background: 'linear-gradient(to right, #0ea5e9, #2563eb)',
          color: 'white',
          fontWeight: 600,
          padding: '1rem 1.5rem',
          borderRadius: '0.75rem',
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1,
          fontSize: '1rem',
          transition: 'all 0.2s',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
        <span>{loading ? 'Sending...' : 'Send Reset Link'}</span>
      </button>

      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        <p style={{ color: '#38007F', fontSize: '0.875rem' }}>
          Not Yet Part Of PW30?{' '}
          <Link 
            href="/signup" 
            style={{ 
              color: '#FFC500', 
              fontWeight: 600, 
              textDecoration: 'none' 
            }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}
