'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
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
                        src="/assets/logo.png"
                        alt="Profunda Logo"
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
                <Link
                    href="/login"
                    style={{
                        backgroundColor: 'white',
                        color: '#2563eb',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '9999px',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                        textDecoration: 'none'
                    }}
                >
                    Join PW360
                </Link>
                <Link
                    href="/about"
                    style={{
                        color: '#1f2937',
                        padding: '0.5rem 1.5rem',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        textDecoration: 'none'
                    }}
                >
                    About Us
                </Link>
                <Link
                    href="/courses"
                    style={{
                        color: '#1f2937',
                        padding: '0.5rem 1.5rem',
                        fontWeight: 500,
                        fontSize: '0.875rem',
                        textDecoration: 'none'
                    }}
                >
                    Courses
                </Link>
            </div>

            {/* Right Action - Desktop */}
            <div style={{ display: 'flex' }} className="desktop-nav">
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
                    <Link
                        href="/join"
                        style={{
                            backgroundColor: '#2563eb',
                            color: 'white',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '0.5rem',
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}
                    >
                        Join PW360
                    </Link>
                    <Link
                        href="/about"
                        style={{
                            color: '#1f2937',
                            padding: '0.75rem 1.5rem',
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/courses"
                        style={{
                            color: '#1f2937',
                            padding: '0.75rem 1.5rem',
                            fontWeight: 500,
                            fontSize: '0.875rem',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}
                    >
                        Courses
                    </Link>
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
