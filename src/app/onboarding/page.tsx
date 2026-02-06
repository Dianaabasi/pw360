'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import OnboardingNavbar from '@/components/OnboardingNavbar';
import OnboardingScreen1 from '@/components/onboarding/OnboardingScreen1';
import OnboardingScreen2 from '@/components/onboarding/OnboardingScreen2';
import OnboardingScreen3 from '@/components/onboarding/OnboardingScreen3';
import OnboardingScreen4 from '@/components/onboarding/OnboardingScreen4';
import OnboardingScreen5 from '@/components/onboarding/OnboardingScreen5';

export default function OnboardingPage() {
    const router = useRouter();
    const [currentScreen, setCurrentScreen] = useState(1);

    const handleNext = () => {
        if (currentScreen < 5) {
            setCurrentScreen(currentScreen + 1);
        }
    };

    const handleSkip = () => {
        router.push('/dashboard/home');
    };

    // Background colors for each screen
    const getBackgroundColor = () => {
        switch (currentScreen) {
            case 1:
                return 'linear-gradient(180deg, #0ea5e9 0%, #1e40af 100%)';
            case 2:
                return 'linear-gradient(180deg, #7c3aed 0%, #4c1d95 100%)';
            case 3:
                return 'linear-gradient(180deg, #0ea5e9 0%, #1e40af 100%)';
            case 4:
                return 'linear-gradient(180deg, #4c1d95 0%, #1e1b4b 100%)';
            case 5:
                return 'linear-gradient(180deg, #0ea5e9 0%, #1e40af 100%)';
            default:
                return 'linear-gradient(180deg, #0ea5e9 0%, #1e40af 100%)';
        }
    };

    const renderScreen = () => {
        switch (currentScreen) {
            case 1:
                return <OnboardingScreen1 onNext={handleNext} />;
            case 2:
                return <OnboardingScreen2 onNext={handleNext} />;
            case 3:
                return <OnboardingScreen3 onNext={handleNext} />;
            case 4:
                return <OnboardingScreen4 onNext={handleNext} />;
            case 5:
                return <OnboardingScreen5 />;
            default:
                return <OnboardingScreen1 onNext={handleNext} />;
        }
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#E3F1FF',
                position: 'relative',
                fontFamily: "'Satoshi', system-ui, -apple-system, sans-serif",
                overflow: 'hidden'
            }}
        >
            {/* Navbar */}
            <OnboardingNavbar />

            {/* Header Section */}
            <div
                style={{
                    paddingTop: '6rem',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10,
                    marginBottom: '2rem'
                }}
            >
                {/* Get Started Title */}
                <h2
                    style={{
                        color: '#2563eb',
                        fontSize: '2rem',
                        fontWeight: 600,
                        margin: 0
                    }}
                >
                    Get Started
                </h2>
            </div>

            {/* Main Content Area */}
            <main
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingBottom: '2rem',
                    flex: 1
                }}
            >
                {/* Render screen with props */}
                {currentScreen === 1 && <OnboardingScreen1 onNext={handleNext} onSkip={handleSkip} />}
                {currentScreen === 2 && <OnboardingScreen2 onNext={handleNext} onSkip={handleSkip} />}
                {currentScreen === 3 && <OnboardingScreen3 onNext={handleNext} onSkip={handleSkip} />}
                {currentScreen === 4 && <OnboardingScreen4 onNext={handleNext} onSkip={handleSkip} />}
                {currentScreen === 5 && <OnboardingScreen5 />}
            </main>

        </div>
    );
}
