'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function OnboardingScreen5() {
    const router = useRouter();

    const handleDiveIn = () => {
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
            {/* Light Blue Card Background */}
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
                    src="/assets/onboarding/onboard5-lightblue-rec.png"
                    alt="Background"
                    fill
                    style={{ objectFit: 'fill' }}
                    priority
                />
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
                            src="/assets/onboarding/onboard5-mockup.png"
                            alt="Achievements"
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
                        You did<br />
                        good, now<br />
                        <span style={{ fontWeight: 800 }}>FLEX IT</span>
                    </h1>

                    <p
                        style={{
                            fontSize: '1rem',
                            color: '#f0f9ff',
                            lineHeight: 1.6,
                            marginBottom: '3rem',
                            maxWidth: '450px',
                            textAlign: 'right'
                        }}
                    >
                        Complete a course and earn yourself an onchain badge. Mint and share with your friends and employer as a proof of work
                    </p>

                    {/* Dive In Button & Star Icon Container */}
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            gap: '2rem',
                            paddingRight: '2rem'
                        }}
                    >
                        {/* Dive In Button */}
                        <button
                            onClick={handleDiveIn}
                            style={{
                                backgroundColor: 'white',
                                color: '#2563eb',
                                padding: '1rem 2.5rem',
                                borderRadius: '0.75rem',
                                border: 'none',
                                fontSize: '1rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                marginBottom: '1rem',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                transition: 'all 0.2s'
                            }}
                        >
                            Dive In
                        </button>

                        <div
                            style={{
                                width: '130px',
                                height: '130px',
                                position: 'relative'
                            }}
                        >
                            <Image
                                src="/assets/onboarding/onboard5-star.png"
                                alt="Star"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
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
