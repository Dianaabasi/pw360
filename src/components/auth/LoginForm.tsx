'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard/home');
    } catch (err: any) {
      setError('Invalid email or password.');
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
    textAlign: 'left'
  };

  return (
    <form onSubmit={handleLogin} style={{ width: '100%', maxWidth: '400px' }}>
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
        <label style={labelStyle}>Email</label>
        <input
          type="email"
          required
          placeholder="Enter Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <label style={labelStyle}>Password</label>
        <input
          type="password"
          required
          placeholder="Enter Passsword..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
        <span>{loading ? 'Logging in...' : 'Continue Login'}</span>
        <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
      </button>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
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

      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <Link
          href="/forgot-password"
          style={{
            color: '#38007F',
            fontSize: '0.875rem',
            fontWeight: 500,
            textDecoration: 'none'
          }}
        >
          Forgot Password??
        </Link>
      </div>
    </form>
  );
}