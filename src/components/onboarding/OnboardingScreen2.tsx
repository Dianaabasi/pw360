'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface OnboardingScreen2Props {
    onNext: () => void;
    onSkip: () => void;
}

export default function OnboardingScreen2({ onNext, onSkip }: OnboardingScreen2Props) {
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
            {/* Purple Card Background */}
            <div
                style={{
                    position: 'absolute',
                    right: '-5%',
                    bottom: '-5%',
                    width: '65%',
                    height: '95%',
                    zIndex: 1,
                    borderRadius: '2rem',
                }}
            >
                <Image
                    src="/assets/onboarding/onboard2-purple-rec.png"
                    alt="Background"
                    fill
                    style={{ objectFit: 'fill' }}
                    priority
                />

                {/* SKIP Link */}
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

                {/* Next Button */}
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
                {/* Left Side - Phone Mockup - MUCH BIGGER */}
                <div
                    style={{
                        position: 'relative',
                        flex: '0 0 50%',
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
                            width: '550px',
                            height: '95vh',
                            maxHeight: '900px',
                            left: '-1rem',
                            transform: 'rotate(-8deg)',
                        }}
                    >
                        <Image
                            src="/assets/onboarding/onboard2-mockup.png"
                            alt="Subscription Plans"
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
                        One<br />
                        Subscription<br />
                        All<br />
                        <span style={{ fontWeight: 800 }}>COURSES</span>
                    </h1>

                    <p
                        style={{
                            fontSize: '1rem',
                            color: '#f3e8ff',
                            lineHeight: 1.6,
                            marginBottom: '3rem',
                            maxWidth: '450px',
                            textAlign: 'right'
                        }}
                    >
                        With a single monthly subscription, gain access to learn as many courses as you can. We believe web3 is not a respective or skill, so why learn one, when you can learn all
                    </p>

                    {/* Key Icon */}
                    <div
                        style={{
                            width: '130px',
                            height: '130px',
                            position: 'relative',
                            marginRight: '80px',
                        }}
                    >
                        <Image
                            src="/assets/onboarding/onboard2-key.png"
                            alt="Key"
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
