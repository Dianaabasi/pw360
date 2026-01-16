'use client';

import Navbar from '@/components/Navbar';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import Image from 'next/image';

export default function ForgotPasswordPage() {
  return (
    <div 
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/assets/forgotpass-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        fontFamily: "'Satoshi', system-ui, -apple-system, sans-serif",
        overflow: 'hidden'
      }}
    >
      <Navbar />

      {/* Main Content Container */}
      <main 
        className="forgotpass-main"
        style={{
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 2rem 2rem 2rem',
          position: 'relative'
        }}
      >
        {/* Content Wrapper */}
        <div 
          className="content-wrapper"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '900px',
            height: '580px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Blue Rectangle Background */}
          <div
            className="blue-rect"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
              zIndex: 1
            }}
          >
            <Image
              src="/assets/forgotpass-bluerec.png"
              alt="Blue Background"
              fill
              style={{ objectFit: 'cover', borderRadius: '1.5rem' }}
              priority
            />
          </div>

          {/* White Text Area */}
          <div
            className="text-area"
            style={{
              position: 'absolute',
              left: '50%',
              top: '52%',
              transform: 'translate(-50%, -50%)',
              width: '92%',
              height: '85%',
              zIndex: 2
            }}
          >
            <Image
              src="/assets/forgotpass-text-area.png"
              alt="Form Background"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Form Content */}
          <div 
            className="form-content"
            style={{
              position: 'relative',
              zIndex: 3,
              width: '70%',
              maxWidth: '450px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <h1 
                style={{
                  fontSize: '2.25rem',
                  fontWeight: 700,
                  color: '#0066CC',
                  marginBottom: '0.5rem',
                  fontStyle: 'italic'
                }}
              >
                Forgot Password
              </h1>
              <p 
                style={{
                  color: '#38007F',
                  fontSize: '0.9rem'
                }}
              >
                Don't Worry, We Can Help You Regain Access To Your Account Quickly.
              </p>
            </div>

            {/* Form Component */}
            <ForgotPasswordForm />
          </div>
        </div>
      </main>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .forgotpass-main {
            padding: 6rem 1rem 2rem 1rem !important;
          }
          .content-wrapper {
            max-width: 100% !important;
            height: auto !important;
            min-height: 520px;
          }
          .blue-rect {
            border-radius: 1rem !important;
          }
          .text-area {
            width: 95% !important;
            height: 85% !important;
            top: 55% !important;
          }
          .form-content {
            width: 90% !important;
            padding: 1rem !important;
            margin-top: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
