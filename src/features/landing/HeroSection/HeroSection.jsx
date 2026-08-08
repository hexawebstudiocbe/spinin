import { useState, useEffect } from 'react';
import { Button } from '../../../components/ui/Button/Button';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { ScrollDown } from '../../../components/ui/ScrollDown/ScrollDown';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  
  const carouselImages = [
    '/car1.jpg',
    '/hd_carousel_1.png',
    '/hd_carousel_3.png',
    '/car4.webp'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={styles.hero} ref={elementRef}>

      {/* Right Side: Car Image Carousel */}
      <div className={`${styles.imageWrapper} animate-slide-in-right ${isVisible ? 'is-visible' : ''}`}>
        {carouselImages.map((src, index) => (
          <img 
            key={src} 
            src={src} 
            alt="Premium Sports Car" 
            className={`${styles.carImage} ${index === currentImageIndex ? styles.activeImage : styles.inactiveImage} ${src !== '/car1.jpg' ? styles.alignBottom : ''}`} 
          />
        ))}
      </div>

      <div className={styles.heroContainer}>

        {/* Left Side: Text Content */}
        <div className={styles.content}>
          <h1 className={`${styles.title} animate-flip-in stagger-1 ${isVisible ? 'is-visible' : ''}`}>
            <span style={{ color: "red" }}>D</span>rive Clean, <span style={{ color: "red" }}>D</span>rive Proud!
          </h1>

          <div className={`${styles.descriptionBlock} animate-typewriter stagger-2 ${isVisible ? 'is-visible' : ''}`}>
            <span className={styles.highlightText}>Clean | Protect | Perfect </span><br />
            <span className={styles.descriptionText}>
              Discover the pinnacle of automotive refinement.<br />
              Experience uncompromising excellence with our bespoke doorstep concierge service,<br />
              redefining luxury car care in the heart of Coimbatore.
            </span>
          </div>

          <div className={`${styles.pickupCard} animate-premium stagger-3 ${isVisible ? 'is-visible' : ''}`}>
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
          </div>

          <div className={`${styles.actions} animate-premium stagger-4 ${isVisible ? 'is-visible' : ''}`}>
            <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              View Services
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Our Process
            </Button>
          </div>
        </div>
      </div>

      <ScrollDown targetId="story" />
    </section>
  );
};
