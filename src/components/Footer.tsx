'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0A1628',
      color: 'white',
      padding: '80px 24px 32px 24px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '48px',
          marginBottom: '48px'
        }}>
          
          {/* Left Section - Logo & Social */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px'
            }}>
              <Image 
                src="/assets/footer-logo.svg" 
                alt="PW360" 
                width={50} 
                height={50}
                style={{ objectFit: 'contain' }}
              />
              <span style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: 'white'
              }}>
                PW360 Academy
              </span>
            </div>
            <p style={{
              fontSize: '0.875rem',
              color: '#9CA3AF',
              marginBottom: '28px',
              fontStyle: 'italic'
            }}>
              Dream. Learn. Earn.
            </p>
            
            {/* Social Icons - Vertical List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <Link href="#" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#9CA3AF',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                <Image src="/assets/twitter.svg" alt="Twitter" width={18} height={18} />
                <span>Twitter(X)</span>
              </Link>
              <Link href="#" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#9CA3AF',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                <Image src="/assets/discord.svg" alt="Discord" width={18} height={18} />
                <span>Discord</span>
              </Link>
              <Link href="#" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#9CA3AF',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                <Image src="/assets/linkedin.svg" alt="LinkedIn" width={18} height={18} />
                <span>LinkedIn</span>
              </Link>
              <Link href="#" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#9CA3AF',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                <Image src="/assets/instagram.svg" alt="Instagram" width={18} height={18} />
                <span>Instagram</span>
              </Link>
            </div>
          </div>

          {/* Middle Section - Column 1 */}
          <div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white'
            }}>
              Explore Courses
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <Link href="#" style={{
                color: '#9CA3AF',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                Learning Track
              </Link>
              <Link href="#" style={{
                color: '#9CA3AF',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                Student Dashboard
              </Link>
              <Link href="#" style={{
                color: '#9CA3AF',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                Leaderboard
              </Link>
            </div>
          </div>

          {/* Middle Section - Column 2 */}
          <div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white'
            }}>
              Help Center
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <Link href="#" style={{
                color: '#9CA3AF',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                Contact Us
              </Link>
              <Link href="#" style={{
                color: '#9CA3AF',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                Privacy Policy
              </Link>
              <Link href="#" style={{
                color: '#9CA3AF',
                textDecoration: 'none',
                fontSize: '0.875rem',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#9CA3AF'}
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Right Section - Newsletter */}
          <div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '20px',
              color: 'white',
              lineHeight: '1.5'
            }}>
              Get the latest Web3 opportunities in your inbox.
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <input 
                type="email" 
                placeholder="Enter Email..." 
                style={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '14px 16px',
                  fontSize: '0.875rem',
                  outline: 'none',
                  color: '#1F2937',
                  width: '100%'
                }}
              />
              <button style={{
                backgroundColor: '#3B82F6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '14px 24px',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                width: '100%'
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '24px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.875rem',
            color: '#6B7280'
          }}>
            © 2025 PW360. Built for the Next Billion.
          </p>
        </div>
      </div>
    </footer>
  );
}
