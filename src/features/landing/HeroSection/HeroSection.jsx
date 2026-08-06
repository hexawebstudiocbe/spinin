import { Button } from '../../../components/ui/Button/Button';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="home" className={styles.hero} ref={elementRef}>

      {/* Right Side: Car Image */}
      <div className={`${styles.imageWrapper} animate-slide-in-right ${isVisible ? 'is-visible' : ''}`}>
        <img src="/ferrari_bg.png" alt="Premium Sports Car" className={styles.carImage} />
      </div>

      <div className={styles.heroContainer}>

        {/* Left Side: Text Content */}
        <div className={styles.content}>

          <div className={`${styles.pickupBadge} animate-fade-in ${isVisible ? 'is-visible' : ''}`}>
            <span className={styles.badgeDot} />
            <span>DOORSTEP PICKUP & DROP SERVICE</span>
          </div>

          <h1 className={`${styles.title} animate-flip-in stagger-1 ${isVisible ? 'is-visible' : ''}`}>
            <span style={{ color: "red" }}>D</span>rive Clean, <span style={{ color: "red" }}>D</span>rive Proud!
          </h1>

          <div className={`${styles.descriptionBlock} animate-typewriter stagger-2 ${isVisible ? 'is-visible' : ''}`}>
            <span className={styles.highlightText}>Clean | Protect | Perfect </span><br />
            <span className={styles.descriptionText}>
              Experience the ultimate standard in premium automotive care.<br />
              Effortless luxury with our signature doorstep pickup & drop service<br />
              in the heart of Coimbatore.
            </span>
          </div>

          <div className={`${styles.actions} animate-premium stagger-3 ${isVisible ? 'is-visible' : ''}`}>
            <Button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              View Services
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
              Our Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
