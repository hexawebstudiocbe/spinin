import React from 'react';
import { SectionTitle } from '../../../components/ui/SectionTitle/SectionTitle';
import { Button } from '../../../components/ui/Button/Button';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './PickupSection.module.css';

export const PickupSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const handleBookNow = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      num: '01',
      title: 'Schedule Your Slot',
      desc: 'Book your service online or instantly via WhatsApp. Choose a pickup time and location that fits your schedule.'
    },
    {
      num: '02',
      title: 'Premium Transit',
      desc: 'Our trained, professional, and fully-insured handlers pick up your vehicle from your doorstep with absolute care.'
    },
    {
      num: '03',
      title: 'Spotless Delivery',
      desc: 'Following world-class detailing treatments, we deliver your vehicle back to your doorstep in pristine showroom condition.'
    }
  ];

  return (
    <section id="pickup" className={`section-padding ${styles.section}`} ref={elementRef}>
      <div className={`container ${styles.grid}`}>
        {/* Left Column: Info */}
        <div className={`${styles.content} animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
          <SectionTitle 
            subtitle="EXCLUSIVE CONVENIENCE" 
            title={<span>Effortless Detailing at your <span className="text-red">Doorstep.</span></span>}
            align="left"
          />
          <p className={styles.introText}>
            We redefine convenience. Experience premium detailing without leaving your home or office. 
            Our signature Doorstep Pickup & Drop service ensures your vehicle gets world-class care 
            while you focus on what matters most.
          </p>

          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.benefitTitle}>100% Insured & Safe Transit</h4>
                <p className={styles.benefitDesc}>Your vehicle is handled with elite precision by our certified professional valets.</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.benefitTitle}>Flexible & Timely Booking</h4>
                <p className={styles.benefitDesc}>Choose date and time windows that align perfectly with your daily routine.</p>
              </div>
            </div>

            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.benefitTitle}>Coimbatore Coverage</h4>
                <p className={styles.benefitDesc}>Providing seamless doorstep pickup and drop across all major neighborhoods in Coimbatore.</p>
              </div>
            </div>
          </div>

          <Button onClick={handleBookNow} className={styles.actionBtn}>
            Book Doorstep Detailing
          </Button>
        </div>

        {/* Right Column: Timeline Steps Graphic */}
        <div className={`${styles.graphicWrapper} animate-slide-in-right ${isVisible ? 'is-visible' : ''}`}>
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            {steps.map((step, idx) => (
              <div key={idx} className={styles.stepCard}>
                <div className={styles.stepBadge}>
                  <span>{step.num}</span>
                </div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.glowOverlay} />
        </div>
      </div>
    </section>
  );
};
