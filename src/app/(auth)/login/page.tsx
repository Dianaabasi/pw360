'use client';

import Navbar from '@/components/Navbar';
import LoginForm from '@/components/auth/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: 'url(/assets/login-bg.png)',
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
        className="login-main"
        style={{
          minHeight: 'calc(100vh - 80px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 2rem 2rem 2rem',
          position: 'relative'
        }}
      >
        {/* Content Wrapper - Blue Rectangle + Form Area */}
        <div
          className="content-wrapper"
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '950px',
            height: '520px',
            display: 'flex'
          }}
        >
          {/* Blue Rectangle Background */}
          <div
            className="blue-rect"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '45%',
              height: '100%',
              zIndex: 1
            }}
          >
            <Image
              src="/assets/bluerec.png"
              alt="Blue Background"
              fill
              style={{ objectFit: 'cover', borderRadius: '1.5rem' }}
              priority
            />
          </div>

          {/* Field Area (White Card) */}
          <div
            className="field-area"
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: '65%',
              height: '100%',
              zIndex: 2
            }}
          >
            <Image
              src="/assets/field-area.png"
              alt="Form Background"
              fill
              style={{ objectFit: 'contain', objectPosition: 'right' }}
              priority
            />
          </div>

          {/* Man with Laptop - Positioned on top */}
          <div
            className="man-laptop"
            style={{
              position: 'absolute',
              left: '-5%',
              bottom: '-10%',
              width: '45%',
              height: '110%',
              zIndex: 3
            }}
          >
            <Image
              src="/assets/manlaptop.png"
              alt="Person with Laptop"
              fill
              style={{ objectFit: 'contain', objectPosition: 'bottom' }}
              priority
            />
          </div>

          {/* Form Content - Positioned on the right */}
          <div
            className="form-content"
            style={{
              position: 'relative',
              zIndex: 4,
              marginLeft: 'auto',
              width: '55%',
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
                Welcome Back
              </h1>
              <p
                style={{
                  color: '#38007F',
                  fontSize: '0.9rem'
                }}
              >
                Let's Lockin And Get Back To Learning.
              </p>
            </div>

            {/* Form Component */}
            <LoginForm />
          </div>
        </div>
      </main>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .login-main {
            padding: 6rem 1rem 2rem 1rem !important;
          }
          .content-wrapper {
            max-width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
          }
          .blue-rect {
            display: none !important;
          }
          .man-laptop {
            display: none !important;
          }
          .field-area {
            position: relative !important;
            width: 100% !important;
            height: auto !important;
            min-height: 500px;
          }
          .form-content {
            position: absolute !important;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100% !important;
            padding: 2rem 1rem !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
}