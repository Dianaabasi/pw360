'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface OnboardingScreen4Props {
    onNext: () => void;
    onSkip: () => void;
}

export default function OnboardingScreen4({ onNext, onSkip }: OnboardingScreen4Props) {
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
            {/* Dark Purple Card Background */}
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
                    src="/assets/onboarding/onboard4-darkpurple-rec.png"
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
                            src="/assets/onboarding/onboard4-mockup.png"
                            alt="Referral Program"
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
                        Earn<br />
                        while you<br />
                        <span style={{ fontWeight: 800 }}>LEARN</span>
                    </h1>

                    <p
                        style={{
                            fontSize: '1rem',
                            color: '#ede9fe',
                            lineHeight: 1.6,
                            marginBottom: '3rem',
                            maxWidth: '450px',
                            textAlign: 'right'
                        }}
                    >
                        Share the love, help someone learn and get started in web3 and watch your rewards grow. All from our personalized earning page
                    </p>

                    {/* People Icon */}
                    <div
                        style={{
                            width: '130px',
                            height: '110px',
                            position: 'relative',
                            marginRight: '80px',
                        }}
                    >
                        <Image
                            src="/assets/onboarding/onboard4-persons.png"
                            alt="People"
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
