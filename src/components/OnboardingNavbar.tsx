'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

interface OnboardingNavbarProps {
    onSkip?: () => void;
}

export default function OnboardingNavbar({ onSkip }: OnboardingNavbarProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.5rem 2rem',
                backgroundColor: 'transparent'
            }}
        >
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link href="/">
                    <Image
                        src="/assets/logo.svg"
                        alt="PW360 Logo"
                        width={120}
                        height={40}
                        style={{ objectFit: 'contain' }}
                    />
                </Link>
            </div>

            {/* Center Navigation - Desktop */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '9999px',
                    padding: '0.375rem 0.5rem',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                }}
                className="desktop-nav"
            >
                <span
                    style={{
                        color: '#1f2937',
                        padding: '0.5rem 1.5rem',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        cursor: 'default'
                    }}
                >
                    Dashboard
                </span>
                <span
                    style={{
                        color: '#1f2937',
                        padding: '0.5rem 1.5rem',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        cursor: 'default'
                    }}
                >
                    Learning Track
                </span>
                <span
                    style={{
                        color: '#1f2937',
                        padding: '0.5rem 1.5rem',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        cursor: 'default'
                    }}
                >
                    Courses
                </span>
            </div>

            {/* Right Actions - Desktop */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="desktop-nav">
                <Link
                    href="/contact"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        backgroundColor: 'white',
                        color: '#2563eb',
                        padding: '0.625rem 1.25rem',
                        borderRadius: '9999px',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        border: '1px solid rgba(255,255,255,0.5)',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                        textDecoration: 'none'
                    }}
                >
                    <Phone style={{ width: '1rem', height: '1rem' }} />
                    <span>Contact Us</span>
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-menu-btn"
                style={{
                    display: 'none',
                    padding: '0.5rem',
                    backgroundColor: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
            >
                {mobileMenuOpen ? (
                    <X style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} />
                ) : (
                    <Menu style={{ width: '1.5rem', height: '1.5rem', color: '#2563eb' }} />
                )}
            </button>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div
                    className="mobile-menu"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(12px)',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                >
                    <span
                        style={{
                            color: '#1f2937',
                            padding: '0.75rem 1.5rem',
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            textAlign: 'center'
                        }}
                    >
                        Dashboard
                    </span>
                    <span
                        style={{
                            color: '#1f2937',
                            padding: '0.75rem 1.5rem',
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            textAlign: 'center'
                        }}
                    >
                        Learning Track
                    </span>
                    <span
                        style={{
                            color: '#1f2937',
                            padding: '0.75rem 1.5rem',
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            textAlign: 'center'
                        }}
                    >
                        Courses
                    </span>
                    <Link
                        href="/contact"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            color: '#2563eb',
                            padding: '0.75rem 1.5rem',
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            textDecoration: 'none',
                            border: '1px solid #2563eb',
                            borderRadius: '0.5rem'
                        }}
                    >
                        <Phone style={{ width: '1rem', height: '1rem' }} />
                        <span>Contact Us</span>
                    </Link>
                    {onSkip && (
                        <button
                            onClick={onSkip}
                            style={{
                                color: '#6b7280',
                                padding: '0.75rem 1.5rem',
                                fontWeight: 500,
                                fontSize: '0.875rem',
                                textAlign: 'center',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            SKIP
                        </button>
                    )}
                </div>
            )}

            {/* CSS for responsive behavior */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                }
            `}</style>
        </nav>
    );
}
