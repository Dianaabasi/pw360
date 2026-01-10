'use client';

import Navbar from '@/components/Navbar';
import SignupForm from '@/components/auth/SignupForm';

export default function Signup() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/assets/signup-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <Navbar />

      {/* Main Content */}
      <main
        className="signup-main"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '9rem 2rem 3rem 4rem',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1
            className="signup-title"
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              color: '#0066CC',
              marginBottom: '0.75rem',
              letterSpacing: '-0.025em',
              fontStyle: 'italic'
            }}
          >
            Sign Up
          </h1>
          <p
            className="signup-subtitle"
            style={{
              color: '#5B2C9D',
              fontSize: '1.125rem',
              fontWeight: 500
            }}
          >
            Submit your personal details to create your account and get started
          </p>
        </div>

        {/* Form Component */}
        <SignupForm />
      </main>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .signup-main {
            padding: 6rem 1rem 2rem 1rem !important;
          }
          .signup-title {
            font-size: 2.5rem !important;
          }
          .signup-subtitle {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}