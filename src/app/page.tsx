'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useState, useEffect, useCallback } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function LandingPage() {
  const [faqs, setFaqs] = useState([
    { 
      question: "How does the 30-day subscription work?", 
      answer: "You pay one flat fee for 30 days of full access. You can learn as many courses as you want during this period.",
      isOpen: false 
    },
    { 
      question: "What is the daily lesson limit?", 
      answer: "To ensure you actually retain what you learn, we limit you to one lesson per course, per day. This prevents burnout and encour ages long-term mastery.",
      isOpen: false 
    },
    { 
      question: "Are the badges really on-chain?", 
      answer: "Yes! Upon completion, you can mint your badge as an NFT directly to your wallet as permanent proof of your skill.",
      isOpen: false 
    },
    { 
      question: "Can I earn rewards for referring friends?", 
      answer: "Absolutely. Visit your Referral Page to get your unique link. You earn rewards for every successful subscription made through your link.",
      isOpen: false 
    }
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : faq.isOpen
    })));
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );


  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F0F5FF', fontFamily: "'Satoshi', system-ui, -apple-system, sans-serif" }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '60px',
        minHeight: '750px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}>
          <Image 
            src="/assets/landing-page/hero-main-visual.png" 
            alt="Background" 
            fill 
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 24px',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {/* Main Logo with Float Animation */}
          <div style={{
            marginBottom: '16px',
            animation: 'float 4s ease-in-out infinite'
          }}>
            <Image 
              src="/assets/landing-page/home-logo.svg" 
              alt="3Sixty By Profunda" 
              width={300} 
              height={150}
              style={{ margin: '0 auto' }}
            />
          </div>

          {/* Tagline */}
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#017CF4',
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            Dream. Learn. Earn.
          </h2>

          {/* Description */}
          <p style={{
            fontSize: '1.125rem',
            color: '#1F2937',
            lineHeight: '1.6',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            We Built Pw360 To Help You Learn A Web3 Skill And Live The Life Of Your Dreams.
            <br />
            Your Choice, Your Time, Your WIN.
          </p>

          {/* Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="/login" style={{
              backgroundColor: '#017CF4',
              color: 'white',
              fontWeight: '600',
              padding: '16px 40px',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(45, 121, 255, 0.3)',
              transition: 'transform 0.2s',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Start Learning Now
            </a>
            <a href="/login" style={{
              backgroundColor: '#FFC107',
              color: '#FFFFFFF',
              fontWeight: '600',
              padding: '16px 40px',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(255, 193, 7, 0.3)',
              transition: 'transform 0.2s',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Explore Courses
            </a>
          </div>
        </div>

        {/* Bottom Banner */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          marginTop: 'auto',
          paddingTop: '40px'
        }}>
          <div style={{
            backgroundColor: '#017CF4',
            borderRadius: '16px',
            padding: '24px 48px',
            boxShadow: '0 8px 24px rgba(45, 121, 255, 0.3)'
          }}>
            <p style={{
              color: 'white',
              fontSize: '1.25rem',
              fontWeight: '600',
              margin: 0,
              textAlign: 'center'
            }}>
              Onboarding The Next 1M Users To The Base Ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 24px', backgroundColor: '#F0F5FF' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {/* Feature 1 - Blue */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
            {/* Text Panel (Left) */}
            <div style={{
              flex: '1 1 300px',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minWidth: '300px'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                position: 'relative',
                margin: '0 auto 24px'
              }}>
                <Image 
                  src="/assets/landing-page/clock-icon.png" 
                  alt="Clock" 
                  width={70} 
                  height={70}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#017CF4',
                marginBottom: '16px'
              }}>
                Learn At Your Own Pace
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#4B5563',
                lineHeight: '1.6',
                marginBottom: '24px',
                maxWidth: '350px'
              }}>
                Learn Anytime, Anywhere With Full Control Over Your Learning Speed; No Fixed Schedules, No Pressure.
              </p>
              <a href="/signup" style={{
                backgroundColor: '#017CF4',
                color: 'white',
                fontWeight: '600',
                padding: '12px 28px',
                borderRadius: '50px',
                border: 'none',
                fontSize: '0.9rem',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(45, 121, 255, 0.3)',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Start Learning
              </a>
            </div>
            
            {/* Image Panel (Right) */}
            <div style={{
              flex: '1.2 1 350px',
              position: 'relative',
              minHeight: '350px',
              background: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)'
            }}>
              <Image 
                src="/assets/landing-page/feature-1-learner.png"
                alt="Learn At Your Own Pace"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Feature 2 - Purple (Reversed) */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
            {/* Image Panel (Left on desktop, but will appear second on mobile) */}
            <div style={{
              flex: '1.2 1 350px',
              position: 'relative',
              minHeight: '350px',
              background: 'linear-gradient(135deg, #F3E8FF 0%, #E9D5FF 100%)',
              order: 0
            }}>
              <Image 
                src="/assets/landing-page/feature-2-learner.png"
                alt="One Subscription"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Text Panel (Right on desktop, appears first on mobile) */}
            <div style={{
              flex: '1 1 300px',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minWidth: '300px',
              order: 1
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                position: 'relative',
                margin: '0 auto 24px'
              }}>
                <Image 
                  src="/assets/landing-page/subscription-icon.png" 
                  alt="Subscription" 
                  width={70} 
                  height={70}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#7C3AED',
                marginBottom: '16px'
              }}>
                One Subscription, Multiple Courses
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#4B5563',
                lineHeight: '1.6',
                marginBottom: '24px',
                maxWidth: '350px'
              }}>
                Unlock Multiple Tech And Digital-Skills Courses Under A Single, Affordable Subscription.
              </p>
              <a href="/signup" style={{
                backgroundColor: '#7C3AED',
                color: 'white',
                fontWeight: '600',
                padding: '12px 28px',
                borderRadius: '50px',
                border: 'none',
                fontSize: '0.9rem',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Take A Course
              </a>
            </div>
          </div>

          {/* Feature 3 - Yellow */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
          }}>
            {/* Text Panel (Left) */}
            <div style={{
              flex: '1 1 300px',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minWidth: '300px'
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                position: 'relative',
                margin: '0 auto 24px'
              }}>
                <Image 
                  src="/assets/landing-page/badge-icon.png" 
                  alt="Badge" 
                  width={70} 
                  height={70}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#F59E0B',
                marginBottom: '16px'
              }}>
                Earn Blockchain-Based Badges
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#4B5563',
                lineHeight: '1.6',
                marginBottom: '24px',
                maxWidth: '350px'
              }}>
                Earn Blockchain-Based Badges That Prove Your Skills And Can Be Showcased Anywhere.
              </p>
              <a href="/signup" style={{
                backgroundColor: '#F59E0B',
                color: 'white',
                fontWeight: '600',
                padding: '12px 28px',
                borderRadius: '50px',
                border: 'none',
                fontSize: '0.9rem',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
                textDecoration: 'none',
                display: 'inline-block'
              }}>
                Let's EARN!!!
              </a>
            </div>
            
            {/* Image Panel (Right) */}
            <div style={{
              flex: '1.2 1 350px',
              position: 'relative',
              minHeight: '350px',
              background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)'
            }}>
              <Image 
                src="/assets/landing-page/feature-3-learner.png"
                alt="Blockchain Badges"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Single Rectangular Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            {/* Text Panel (Top) */}
            <div style={{
              padding: '48px 40px',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                color: '#017CF4',
                marginBottom: '16px',
                lineHeight: '1.3'
              }}>
                Don't Just Learn One Skill - Learn Them All
              </h2>
              <p style={{
                fontSize: '0.95rem',
                color: '#6B7280',
                lineHeight: '1.7',
                marginBottom: '24px',
                maxWidth: '700px',
                margin: '0 auto 24px'
              }}>
                In The Decentralized World, Your Value Is Your Versatility. We've Removed The Paywalls So You Can Follow Your Curiosity. One Subscription, Zero Limits—Learn Every Skill You Need To Win In Web3.
              </p>
              <a href="/signup" style={{
                backgroundColor: '#017CF4',
                color: 'white',
                fontWeight: '600',
                padding: '14px 36px',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(45, 121, 255, 0.3)',
                transition: 'transform 0.2s',
                textDecoration: 'none',
                display: 'inline-block'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Learn Now
              </a>
            </div>

            {/* Image Panel (Bottom) */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              background: 'linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%)'
            }}>
              <Image 
                src="/assets/landing-page/thumbnail.png"
                alt="Platform Preview"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section style={{ padding: '80px 24px', backgroundColor: '#F0F5FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Top Static Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '32px',
            padding: '48px 40px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#017CF4',
              marginBottom: '16px'
            }}>
              Why Choose Us! Your Path To Web3 Mastery
            </h2>
            <p style={{
              fontSize: '0.95rem',
              color: '#6B7280',
              lineHeight: '1.7',
              maxWidth: '900px',
              margin: '0 auto 24px'
            }}>
              At PW360, We Believe That Success In The Rapidly Evolving Web3 Space Demands More Than Just A Single Skill – It Requires Versatility, Continuous Growth, And A Supportive Ecosystem. We've Built A Learning Platform That Empowers You To Truly Thrive.
            </p>
            <a href="/signup" style={{
              backgroundColor: '#017CF4',
              color: 'white',
              fontWeight: '600',
              padding: '14px 36px',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(45, 121, 255, 0.3)',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              Join PW360
            </a>
          </div>

          {/* Bottom Slider Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            position: 'relative'
          }}>
            <div style={{ overflow: 'hidden' }} ref={emblaRef}>
              <div style={{ display: 'flex' }}>
                
                {/* Slide 1: Don't Just Learn One Skill */}
                <div style={{
                  flex: '0 0 100%',
                  minWidth: 0,
                  position: 'relative',
                  minHeight: '350px',
                  padding: '48px 40px',
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
                  {/* Decorative Circles - Slide 1: Blue top-left, Yellow+Purple bottom-left, Large Yellow right */}
                  <div className="slider-circle-sm" style={{ position: 'absolute', top: '-40px', left: '-40px', width: '100px', height: '100px', backgroundColor: '#017CF4', borderRadius: '50%' }} />
                  <div className="slider-circle-md" style={{ position: 'absolute', bottom: '-120px', left: '-100px', width: '300px', height: '300px', backgroundColor: '#FBBF24', borderRadius: '50%' }} />
                  <div className="slider-circle-sm" style={{ position: 'absolute', bottom: '-60px', left: '80px', width: '140px', height: '140px', backgroundColor: '#7C3AED', borderRadius: '50%' }} />
                  <div className="slider-circle-lg" style={{ position: 'absolute', top: '-150px', right: '-180px', width: '500px', height: '500px', backgroundColor: '#FBBF24', borderRadius: '50%' }} />
                  
                  
                  {/* Content */}
                  <div className="slider-content" style={{ position: 'relative', zIndex: 10, maxWidth: '500px', marginLeft: '25%' }}>
                    <h3 style={{
                      fontSize: '1.75rem',
                      fontWeight: 'bold',
                      color: '#017CF4',
                      marginBottom: '16px',
                      lineHeight: '1.3'
                    }}>
                      Don't Just Learn<br />One Skill -<br />Learn Them All
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#4B5563',
                      lineHeight: '1.6'
                    }}>
                      Web3 Moves Fast, And The Most Successful Builders Are Those Who Understand The Big Picture. Why Limit Yourself To Just One Discipline? With Your PW360 Subscription, You Get Unrestricted Access To Our Entire Library. Master DeFi, Switch To Web3 Marketing, And Then Dive Into Content Creation. All Under One Roof. At Your Own Pace.
                    </p>
                  </div>
                </div>

                {/* Slide 2: Earn While You Learn */}
                <div style={{
                  flex: '0 0 100%',
                  minWidth: 0,
                  position: 'relative',
                  minHeight: '350px',
                  padding: '48px 40px',
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
                  {/* Decorative Circles - Slide 2: Yellow top-left, Blue+Purple bottom-left, Large Blue right */}
                  <div className="slider-circle-sm" style={{ position: 'absolute', top: '-40px', left: '-40px', width: '100px', height: '100px', backgroundColor: '#FBBF24', borderRadius: '50%' }} />
                  <div className="slider-circle-md" style={{ position: 'absolute', bottom: '-120px', left: '-100px', width: '300px', height: '300px', backgroundColor: '#017CF4', borderRadius: '50%' }} />
                  <div className="slider-circle-sm" style={{ position: 'absolute', bottom: '-60px', left: '80px', width: '140px', height: '140px', backgroundColor: '#7C3AED', borderRadius: '50%' }} />
                  <div className="slider-circle-lg" style={{ position: 'absolute', top: '-150px', right: '-180px', width: '500px', height: '500px', backgroundColor: '#017CF4', borderRadius: '50%' }} />
                  
                  
                  {/* Content */}
                  <div className="slider-content" style={{ position: 'relative', zIndex: 10, maxWidth: '500px', marginLeft: '25%' }}>
                    <h3 style={{
                      fontSize: '1.75rem',
                      fontWeight: 'bold',
                      color: '#017CF4',
                      marginBottom: '16px',
                      lineHeight: '1.3'
                    }}>
                      Earn While<br />You Learn
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#4B5563',
                      lineHeight: '1.6'
                    }}>
                      We're Committed To Your Success. Our Unique Referral Program Allows You To Share The Opportunity To Learn With Friends And Earn Rewards As They Join The PW360 Community. It's A Win-Win - You Help Others Start Their Web3 Journey, And Your Own Learning Becomes Even More Rewarding.
                    </p>
                  </div>
                </div>

                {/* Slide 3: On-Chain Achievements */}
                <div style={{
                  flex: '0 0 100%',
                  minWidth: 0,
                  position: 'relative',
                  minHeight: '350px',
                  padding: '48px 40px',
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
                  {/* Decorative Circles - Slide 3: Purple top-left, Yellow+Blue bottom-left, Large Yellow right */}
                  <div className="slider-circle-sm" style={{ position: 'absolute', top: '-40px', left: '-40px', width: '100px', height: '100px', backgroundColor: '#7C3AED', borderRadius: '50%' }} />
                  <div className="slider-circle-md" style={{ position: 'absolute', bottom: '-120px', left: '-100px', width: '300px', height: '300px', backgroundColor: '#FBBF24', borderRadius: '50%' }} />
                  <div className="slider-circle-sm" style={{ position: 'absolute', bottom: '-60px', left: '80px', width: '140px', height: '140px', backgroundColor: '#06B6D4', borderRadius: '50%' }} />
                  <div className="slider-circle-lg" style={{ position: 'absolute', top: '-150px', right: '-180px', width: '500px', height: '500px', backgroundColor: '#FBBF24', borderRadius: '50%' }} />
                  
                  
                  {/* Content */}
                  <div className="slider-content" style={{ position: 'relative', zIndex: 10, maxWidth: '500px', marginLeft: '25%' }}>
                    <h3 style={{
                      fontSize: '1.75rem',
                      fontWeight: 'bold',
                      color: '#017CF4',
                      marginBottom: '16px',
                      lineHeight: '1.3'
                    }}>
                      On-Chain<br />Achievements &<br />Proof Of Work
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#4B5563',
                      lineHeight: '1.6'
                    }}>
                      Move Beyond Shareable Certificates: Mint Your Milestones As Soulbound (Non-Transferable) NFT Badges. Every Course You Complete Contributes To Your Living Resume On-Chain. Verifiable, Mint Able, And More Meaningful Than A PDF Can Ever Be. Permanent And Truly Verifiable As Soulbound (Non-Transferable) NFTs Showcasing Your Expertise.
                    </p>
                  </div>
                </div>

                {/* Slide 4: Flexible Learning */}
                <div style={{
                  flex: '0 0 100%',
                  minWidth: 0,
                  position: 'relative',
                  minHeight: '350px',
                  padding: '48px 40px',
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
                  {/* Decorative Circles - Slide 4: Blue top-left, Purple+Yellow bottom-left, Large Purple right */}
                  <div className="slider-circle-sm" style={{ position: 'absolute', top: '-40px', left: '-40px', width: '100px', height: '100px', backgroundColor: '#017CF4', borderRadius: '50%' }} />
                  <div className="slider-circle-md" style={{ position: 'absolute', bottom: '-120px', left: '-100px', width: '300px', height: '300px', backgroundColor: '#7C3AED', borderRadius: '50%' }} />
                  <div className="slider-circle-sm" style={{ position: 'absolute', bottom: '-60px', left: '80px', width: '140px', height: '140px', backgroundColor: '#FBBF24', borderRadius: '50%' }} />
                  <div className="slider-circle-lg" style={{ position: 'absolute', top: '-150px', right: '-180px', width: '500px', height: '500px', backgroundColor: '#7C3AED', borderRadius: '50%' }} />
                  
                  
                  {/* Content */}
                  <div className="slider-content" style={{ position: 'relative', zIndex: 10, maxWidth: '500px', marginLeft: '25%' }}>
                    <h3 style={{
                      fontSize: '1.75rem',
                      fontWeight: 'bold',
                      color: '#017CF4',
                      marginBottom: '16px',
                      lineHeight: '1.3'
                    }}>
                      Flexible Learning,<br />Structured<br />Progress
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#4B5563',
                      lineHeight: '1.6'
                    }}>
                      Life Happens, But Learning Shouldn't Stop. Our Platform Is Designed To Fit Your Schedule With A Simple Monthly Subscription. You Get Access To Learn As Many Courses As You Can. We Encourage Dedicated, Consistent Learning With A Smart Daily Track To Help You Build Powerful Habits And Track Your Performance.
                    </p>
                  </div>
                </div>

                {/* Slide 5: Tailored For Real-World */}
                <div style={{
                  flex: '0 0 100%',
                  minWidth: 0,
                  position: 'relative',
                  minHeight: '350px',
                  padding: '48px 40px',
                  display: 'flex',
                  alignItems: 'center',
                  overflow: 'hidden'
                }}>
                  {/* Decorative Circles - Slide 5: Yellow top-left, Blue+Purple bottom-left, Large Blue right */}
                  <div className="slider-circle-sm" style={{ position: 'absolute', top: '-40px', left: '-40px', width: '100px', height: '100px', backgroundColor: '#FBBF24', borderRadius: '50%' }} />
                  <div className="slider-circle-md" style={{ position: 'absolute', bottom: '-120px', left: '-100px', width: '300px', height: '300px', backgroundColor: '#017CF4', borderRadius: '50%' }} />
                  <div className="slider-circle-sm" style={{ position: 'absolute', bottom: '-60px', left: '80px', width: '140px', height: '140px', backgroundColor: '#7C3AED', borderRadius: '50%' }} />
                  <div className="slider-circle-lg" style={{ position: 'absolute', top: '-150px', right: '-180px', width: '500px', height: '500px', backgroundColor: '#017CF4', borderRadius: '50%' }} />
                
                  
                  {/* Content */}
                  <div className="slider-content" style={{ position: 'relative', zIndex: 10, maxWidth: '500px', marginLeft: '25%' }}>
                    <h3 style={{
                      fontSize: '1.75rem',
                      fontWeight: 'bold',
                      color: '#017CF4',
                      marginBottom: '16px',
                      lineHeight: '1.3'
                    }}>
                      Tailored For<br />Real-World<br />Web3 Skills
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#4B5563',
                      lineHeight: '1.6'
                    }}>
                      Our Curriculum Isn't Just Theoretical. We've Prepared Core, Skill-Based Web3 Courses Designed To Equip You With Practical Knowledge. Our Goal Is To Help You Capitalize On The Vast Opportunities In The Space And Start Earning Quickly. Turning Your Knowledge Into A Tangible Reality.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Navigation Buttons */}
            <button onClick={() => emblaApi?.scrollPrev()} style={{
              position: 'absolute',
              left: '24px',
              top: '24px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(45, 121, 255, 0.2)',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
              fontSize: '1.1rem',
              color: '#017CF4',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(45, 121, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              ←
            </button>
            <button onClick={() => emblaApi?.scrollNext()} style={{
              position: 'absolute',
              right: '24px',
              top: '24px',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(45, 121, 255, 0.2)',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
              fontSize: '1.1rem',
              color: '#017CF4',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(45, 121, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
              →
            </button>

            {/* Slide Indicators */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '40px',
              display: 'flex',
              gap: '8px',
              zIndex: 20
            }}>
              {[0, 1, 2, 3, 4].map((index) => (
                <div 
                  key={index}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(45, 121, 255, 0.3)',
                    cursor: 'pointer'
                  }}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            {[
              { icon: '/assets/landing-page/stat-icon-1.svg', value: '10,000+', label: 'Students Enrolled' },
              { icon: '/assets/landing-page/stat-icon-2.svg', value: '1,500+', label: 'Graduates Hired' },
              { icon: '/assets/landing-page/stat-icon-3.svg', value: '300+', label: 'Expert Mentors' },
              { icon: '/assets/landing-page/stat-icon-4.svg', value: '4.8/5', label: 'Average Rating' }
            ].map((stat, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '32px',
                textAlign: 'center',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                border: '1px solid #E5E7EB'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  position: 'relative',
                  margin: '0 auto 16px'
                }}>
                  <Image src={stat.icon} alt={stat.label} fill style={{ objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#38007F', marginBottom: '8px' }}>
                  {stat.value}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6B7280', fontWeight: '500' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 24px', backgroundColor: '#F0F5FF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Grid Container */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'auto auto',
            gap: '24px'
          }} className="testimonials-grid">
            
            {/* Top Left - Intro Card (White) */}
            <div style={{
              backgroundColor: 'white',
              borderRadius: '24px',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#017CF4',
                marginBottom: '16px',
                lineHeight: '1.3'
              }}>
                From Dreamers To<br />Earners: Real Stories<br />From Our Community
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: '#6B7280',
                lineHeight: '1.6'
              }}>
                Don't Just Take Our Word For It. See How Our Learners Are Transforming Their Lives. From Mastering DeFi To Landing Roles In Top Blockchain Startups, Read The Stories Of Students Who Turned Their Curiosity Into A Verified Career.
              </p>
            </div>

            {/* Top Right - Yellow Card (Vishu B.) */}
            <div style={{
              background: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
              borderRadius: '24px',
              padding: '32px',
              color: '#1F2937',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '280px',
              boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1F2937' }}>Vishu B., NFT Artist</span>
                <Image 
                  src="/assets/landing-page/testimonial-avatar-2.png" 
                  alt="Vishu B." 
                  width={50} 
                  height={50} 
                  style={{ borderRadius: '50%', border: '3px solid white' }}
                />
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '3rem', color: '#1F2937', opacity: 0.3, lineHeight: 1 }}>"</span>
                <p style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  fontStyle: 'italic',
                  color: '#1F2937',
                  lineHeight: '1.5',
                  marginTop: '-10px'
                }}>
                  PW360 Has Enhanced My<br />Understanding About NFTs, I Don't<br />Just Draw Them Again, I Deploy Them
                </p>
                <span style={{ fontSize: '2rem', color: '#1F2937', opacity: 0.3, lineHeight: 1 }}>"</span>
              </div>
            </div>

            {/* Bottom Left - Purple Card (Aisha K.) */}
            <div style={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
              borderRadius: '24px',
              padding: '32px',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '280px',
              boxShadow: '0 10px 30px rgba(124, 58, 237, 0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Image 
                  src="/assets/landing-page/testimonial-avatar-1.png" 
                  alt="Aisha K." 
                  width={50} 
                  height={50} 
                  style={{ borderRadius: '50%', border: '3px solid rgba(255,255,255,0.5)' }}
                />
                <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Aisha K., Web3 Developer</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '3rem', color: 'white', opacity: 0.3, lineHeight: 1 }}>"</span>
                <p style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  fontStyle: 'italic',
                  lineHeight: '1.5',
                  marginTop: '-10px'
                }}>
                  I Went From<br />Zero To Minting<br />My First DApp<br />In 30 Days.
                </p>
                <span style={{ fontSize: '2rem', color: 'white', opacity: 0.3, lineHeight: 1 }}>"</span>
              </div>
            </div>

            {/* Bottom Right - Blue Card (Danny A.) */}
            <div style={{
              background: 'linear-gradient(135deg, #017CF4 0%, #017CF4 100%)',
              borderRadius: '24px',
              padding: '32px',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '280px',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Image 
                  src="/assets/landing-page/testimonial-avatar-3.png" 
                  alt="Danny A." 
                  width={50} 
                  height={50} 
                  style={{ borderRadius: '50%', border: '3px solid rgba(255,255,255,0.5)' }}
                />
                <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>Danny A., Project Manager</span>
              </div>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '3rem', color: 'white', opacity: 0.3, lineHeight: 1 }}>"</span>
                <p style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  fontStyle: 'italic',
                  lineHeight: '1.5',
                  marginTop: '-10px'
                }}>
                  PW360 Has Enhanced My<br />Understanding About NFTs, I Don't<br />Just Draw Them Again, I Deploy Them
                </p>
                <span style={{ fontSize: '2rem', color: 'white', opacity: 0.3, lineHeight: 1 }}>"</span>
              </div>
            </div>
          </div>

          {/* Begin Your Journey Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
            <a href="/signup" style={{
              backgroundColor: '#5B21B6',
              color: 'white',
              fontWeight: '600',
              padding: '14px 32px',
              borderRadius: '50px',
              border: 'none',
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(91, 33, 182, 0.3)',
              transition: 'transform 0.2s',
              textDecoration: 'none',
              display: 'inline-block'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Begin Your Journey
            </a>
          </div>
        </div>
      </section>

      {/* Mobile Responsive Styles for Testimonials and Slider */}
      <style jsx>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          .slider-circle-sm {
            width: 60px !important;
            height: 60px !important;
            top: -30px !important;
            left: -30px !important;
          }
          .slider-circle-md {
            width: 120px !important;
            height: 120px !important;
            bottom: -60px !important;
            left: -60px !important;
          }
          .slider-circle-lg {
            width: 200px !important;
            height: 200px !important;
            top: -80px !important;
            right: -80px !important;
          }
          .slider-content {
            margin-left: 0 !important;
            padding: 0 16px !important;
          }
        }
      `}</style>

      {/* FAQ Section */}
      <section style={{ padding: '80px 24px', backgroundColor: '#E0EFFF' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#38007F', marginBottom: '40px' }}>FAQs</h2>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                marginBottom: '16px',
                overflow: 'hidden'
              }}>
                <button 
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    padding: '24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: faq.isOpen ? '#017CF4' : '#38007F',
                    paddingRight: '16px'
                  }}>
                    {faq.question}
                  </span>
                  {faq.isOpen ? (
                    <Minus style={{ color: '#017CF4', width: '20px', height: '20px', flexShrink: 0 }} />
                  ) : (
                    <Plus style={{ color: '#38007F', width: '20px', height: '20px', flexShrink: 0 }} />
                  )}
                </button>
                {faq.isOpen && (
                  <div style={{ padding: '0 24px 24px 24px' }}>
                    <p style={{ fontSize: '0.9375rem', color: '#6B7280', lineHeight: '1.6' }}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Float Animation */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
