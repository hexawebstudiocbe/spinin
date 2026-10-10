import { useState, useEffect } from 'react';
import { Button } from '../../../components/ui/Button/Button';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { ScrollDown } from '../../../components/ui/ScrollDown/ScrollDown';
import { BookSlotModal } from '../../../components/ui/BookSlotModal/BookSlotModal';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  const carouselImages = [
    '/car5.webp',
    '/hd_carousel_1.png',
    '/hd_carousel_3.png',
    '/car4.webp'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showBookSlot, setShowBookSlot] = useState(false);
  const [isPickupExpanded, setIsPickupExpanded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className={styles.hero} ref={elementRef}>

      {/* Right Side: Car Image Carousel */}
      <div className={`${styles.imageWrapper} animate-slide-in-right ${isVisible ? 'is-visible' : ''}`}>
        {carouselImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Spinin Premium Sports Car Detailing"
            className={`${styles.carImage} ${index === currentImageIndex ? styles.activeImage : styles.inactiveImage} ${src !== '/car5.webp' ? styles.alignBottom : ''}`}
          />
        ))}
      </div>

      <div className={styles.heroContainer}>

        {/* Left Side: Text Content */}
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1 className={`${styles.mainTitle} animate-premium stagger-1 ${isVisible ? 'is-visible' : ''}`}>
              <span className={styles.premiumShimmer}>PREMIUM</span> Car Detailing,
            </h1>
            <h2 className={`${styles.subTitle} animate-premium stagger-2 ${isVisible ? 'is-visible' : ''}`}>
              Originating from Coimbatore
            </h2>
            <div className={`${styles.driveProudContainer} stagger-2 ${isVisible ? 'is-visible' : ''}`}>
              <p className={styles.driveProudText}>
                <span className={styles.premiumShimmer}>D</span>rive Clean, <span className={styles.premiumShimmer}>D</span>rive Proud!
              </p>
            </div>
          </div>

          <div className={`${styles.descriptionBlock} animate-typewriter stagger-2 ${isVisible ? 'is-visible' : ''}`}>
            <span className={styles.highlightText}>Clean | Protect | Perfect </span><br />
            <span className={styles.descriptionText}>
              Discover the pinnacle of automotive refinement.<br />
              Experience uncompromising excellence with our bespoke doorstep concierge service,<br />
              redefining luxury car care in the heart of Coimbatore.
            </span>
          </div>

          <div style={{ position: 'relative', display: 'inline-block', width: '100%', maxWidth: '540px', marginBottom: 'var(--spacing-lg)' }}>
            <div
              className={`${styles.pickupCard} animate-premium stagger-3 ${isVisible ? 'is-visible' : ''}`}
              style={{ marginBottom: 0, minHeight: '135px' }}
              onClick={() => setIsPickupExpanded(!isPickupExpanded)}
            >
              <div className={styles.pickupCardHeader}>
                <div className={styles.pickupCardIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div className={styles.pickupCardContent}>
                  <h4 className={styles.pickupCardTitle}>Doorstep Pickup & Drop</h4>
                  <p className={styles.pickupCardText}>
                    We pick up, detail to perfection, and return your vehicle safely. Unmatched convenience.
                  </p>
                </div>
                <div className={`${styles.chevron} ${isPickupExpanded ? styles.chevronUp : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              {isPickupExpanded && (
                <div className={styles.pickupDropdown}>
                  <ol className={styles.pickupList}>
                    <li><span>1</span> Book a slot</li>
                    <li><span>2</span> Schedule for pick up</li>
                    <li><span>3</span> Report your delivery time according to the service chosen</li>
                    <li><span>4</span> Deliver at same location on time</li>
                  </ol>
                </div>
              )}
            </div>

            <div 
              className={`${styles.pickupCard} animate-premium stagger-3 ${isVisible ? 'is-visible' : ''} ${styles.personalizedCardAbsolute}`} 
              style={{ cursor: 'default', display: 'flex', flexDirection: 'column', gap: '8px', minHeight: '135px', marginBottom: 0 }}
            >
              <div className={styles.pickupCardHeader} style={{ alignItems: 'flex-start' }}>
                <div className={styles.pickupCardIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className={styles.pickupCardContent}>
                  <h4 className={styles.pickupCardTitle}>Personalized Detailor</h4>
                  <p className={styles.pickupCardText}>
                    Every vehicle has unique needs based on its current condition and usage. Let our experts recommend a personalized package.
                  </p>
                </div>
              </div>
              <Button 
                href="https://wa.me/919677767123?text=Hi!%20I%20would%20like%20to%20book%20a%20personalized%20detailer%20for%20my%20car."
                target="_blank"
                rel="noopener noreferrer"
                style={{ padding: '8px 16px', fontSize: '0.75rem', alignSelf: 'center', marginTop: 'auto', display: 'inline-flex' }}
              >
                Book Your Personalized Detailor
              </Button>
            </div>
          </div>

          <div className={`${styles.actions} animate-premium stagger-4 ${isVisible ? 'is-visible' : ''}`}>
            <Button href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Services
            </Button>
            <Button variant="outline" onClick={() => setShowBookSlot(true)}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <BookSlotModal isOpen={showBookSlot} onClose={() => setShowBookSlot(false)} />
    </section>
  );
};
