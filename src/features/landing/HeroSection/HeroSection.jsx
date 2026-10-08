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
              <span className={styles.premiumTyping}>PREMIUM</span> Car Detailing & Ceramic Coating,
            </h1>
            <h2 className={`${styles.subTitle} animate-premium stagger-2 ${isVisible ? 'is-visible' : ''}`}>
              Originating from Coimbatore
            </h2>
            <div className={`${styles.typingContainer} stagger-2 ${isVisible ? 'is-visible' : ''}`}>
              <p className={styles.typingText}>
                <span className={styles.redLetter}>D</span>rive Clean, <span className={styles.redLetter}>D</span>rive Proud!
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

          <div 
            className={`${styles.pickupCard} animate-premium stagger-3 ${isVisible ? 'is-visible' : ''}`}
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

          <div className={`${styles.actions} animate-premium stagger-4 ${isVisible ? 'is-visible' : ''}`}>
            <Button href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>
              View Services
            </Button>
            {isMobile ? (
              <Button variant="outline" onClick={() => setShowBookSlot(true)}>
                Contact Us
              </Button>
            ) : (
              <Button variant="outline" href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Our Process
              </Button>
            )}
          </div>
        </div>
      </div>

      <ScrollDown targetId="story" />
      <BookSlotModal isOpen={showBookSlot} onClose={() => setShowBookSlot(false)} />
    </section>
  );
};
