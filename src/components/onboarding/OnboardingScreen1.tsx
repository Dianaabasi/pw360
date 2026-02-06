'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface OnboardingScreen1Props {
    onNext: () => void;
    onSkip: () => void;
}

export default function OnboardingScreen1({ onNext, onSkip }: OnboardingScreen1Props) {
    const router = useRouter();

    const handleSkip = () => {
        router.push('/dashboard/home');
    };

    return (
        <div
            style={{
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 2rem',
                position: 'relative',
                height: 'calc(100vh - 180px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            className="onboarding-content"
        >
            {/* The Blue Card Background - Larger to cover right and bottom */}
            <div
                style={{
                    position: 'absolute',
                    right: '-5%',
                    bottom: '-5%',
                    width: '65%', // Covers more of the right side
                    height: '95%', // Almost full height
                    zIndex: 1,
                    borderRadius: '2rem',
                }}
            >
                <Image
                    src="/assets/onboarding/onboard1-blue-rec.png"
                    alt="Background"
                    fill
                    style={{ objectFit: 'fill' }}
                    priority
                />

                {/* SKIP Link - Top Right of Card */}
                <button
                    onClick={handleSkip}
                    style={{
                        position: 'absolute',
                        top: '2rem',
                        right: '3rem',
                        background: 'transparent',
                        border: '1px solid rgba(255,255,255,0.3)',
                        borderRadius: '9999px',
                        padding: '0.5rem 1.5rem',
                        color: 'white',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        zIndex: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    SKIP
                </button>

                {/* Next Button - Bottom Right of Card */}
                <button
                    onClick={onNext}
                    style={{
                        position: 'absolute',
                        bottom: '3rem',
                        right: '3rem',
                        width: '3.5rem',
                        height: '3.5rem',
                        borderRadius: '50%',
                        backgroundColor: 'transparent',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        color: 'white',
                        transition: 'all 0.2s'
                    }}
                >
                    <ArrowRight style={{ width: '1.5rem', height: '1.5rem' }} />
                </button>
            </div>

            {/* Content Container */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    height: '100%'
                }}
            >
                {/* Left Side - Phone Mockup - MUCH BIGGER (half screen) */}
                <div
                    style={{
                        position: 'relative',
                        flex: '0 0 50%', // Half the screen
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                    className="mockup-section"
                >
                    <div
                        style={{
                            position: 'relative',
                            width: '550px', // Much bigger
                            height: '95vh', // Almost full viewport height
                            maxHeight: '900px',
                            left: '-1rem',
                            transform: 'rotate(-8deg)',
                        }}
                    >
                        <Image
                            src="/assets/onboarding/onboard1-mockup.png"
                            alt="Explore Courses"
                            fill
                            style={{ objectFit: 'contain' }}
                            priority
                        />
                    </div>
                </div>

                {/* Right Side - Text Content */}
                <div
                    style={{
                        flex: '0 0 50%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        paddingRight: '6rem',
                        paddingTop: '2rem',
                        height: '100%',
                        justifyContent: 'center'
                    }}
                    className="content-section"
                >
                    <h1
                        style={{
                            fontSize: '4.5rem',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            lineHeight: 1,
                            marginBottom: '1.5rem',
                            textAlign: 'right',
                        }}
                    >
                        Start by<br />
                        Knowing<br />
                        what to<br />
                        <span style={{ fontWeight: 800 }}>LEARN</span>
                    </h1>

                    <p
                        style={{
                            fontSize: '1rem',
                            color: '#e0f2fe',
                            lineHeight: 1.6,
                            marginBottom: '3rem',
                            maxWidth: '400px',
                            textAlign: 'right'
                        }}
                    >
                        We have prepared core skill based web3 courses designed to help you make the best out of the opportunities in the space earning quickly.
                    </p>

                    {/* Book Icon */}
                    <div
                        style={{
                            width: '150px',
                            height: '130px',
                            position: 'relative',
                            marginRight: '80px',
                        }}
                    >
                        <Image
                            src="/assets/onboarding/onboard1-book.png"
                            alt="Book"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                     .onboarding-content {
                        flex-direction: column !important;
                        height: auto !important;
                    }
                    .mockup-section {
                        width: 100% !important;
                        justify-content: center !important;
                        margin-bottom: -100px !important;
                        z-index: 3 !important;
                    }
                     .content-section {
                        width: 100% !important;
                        padding: 2rem !important;
                        align-items: center !important;
                        text-align: center !important;
                    }
                    h1, p {
                        text-align: center !important;
                    }
                }
            `}</style>
        </div>
    );
}
