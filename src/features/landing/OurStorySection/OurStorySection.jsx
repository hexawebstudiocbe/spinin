import { SectionTitle } from '../../../components/ui/SectionTitle/SectionTitle';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { ScrollDown } from '../../../components/ui/ScrollDown/ScrollDown';
import styles from './OurStorySection.module.css';

export const OurStorySection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="story" className={styles.section} ref={elementRef}>
      <div className={styles.bgGlow} />

      <div className={`container ${styles.storyContainer}`}>
        
        {/* Left Side: Dummy Image (Replace src="/service_ceramic.png" with your own image path) */}
        <div className={`${styles.imageColumn} animate-slide-in-left ${isVisible ? 'is-visible' : ''}`}>
          <div className={styles.imageWrapper}>
            {/* DUMMY IMAGE: Change src to your custom story image */}
            <img 
              src="/service_ceramic.png" 
              alt="Spin In Detailing Studio Story" 
              className={styles.storyImage} 
            />
            <div className={styles.imageOverlay} />
            <div className={styles.imageBadge}>
              <span className={styles.badgeTitle}>SPIN IN DETAILING STUDIO</span>
              <span className={styles.badgeSubtitle}>Coimbatore, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Right Side: Our Story Content */}
        <div className={styles.textColumn}>
          <div className={`animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
            <SectionTitle 
              subtitle="HOW IT ALL STARTED" 
              title={<span>Our <span className="text-red">Story.</span></span>}
              align="left"
              className={styles.titleWrapper}
            />
          </div>

          <p className={`${styles.leadText} animate-fade-in-up stagger-1 ${isVisible ? 'is-visible' : ''}`}>
            Every one&apos;s journey has a seed.
          </p>

          <p className={`${styles.paragraph} animate-fade-in-up stagger-2 ${isVisible ? 'is-visible' : ''}`}>
            Mine started as a kid. I was the one who always wanted to clean vehicles—not because I had to, 
            but because I enjoyed bringing them back to life with its beauty. Watching a dusty, dull car 
            gave me a sense of pride to make it clean.
          </p>

          <p className={`${styles.paragraph} animate-fade-in-up stagger-2 ${isVisible ? 'is-visible' : ''}`}>
            That passion slowly became an obsession with learning how to care for vehicles the right way. 
            Not just making them look clean, but protecting their finish, preserving their value, and 
            giving every owner the feeling of driving a car that looks its absolute best.
          </p>

          <div className={`${styles.highlightCard} animate-fade-in-up stagger-3 ${isVisible ? 'is-visible' : ''}`}>
            <p className={styles.highlightCardText}>
              That is how <span className={styles.brandHighlight}>Spin In Detailing Studio</span> was born.
            </p>
          </div>

          <p className={`${styles.paragraph} animate-fade-in-up stagger-4 ${isVisible ? 'is-visible' : ''}`}>
            Today, our mission is simple: deliver premium detailing services with precision, honesty, 
            and attention to every detail. Every vehicle that enters our studio is treated with the same 
            care and dedication that inspired this journey from the very beginning.
          </p>

          <p className={`${styles.paragraph} animate-fade-in-up stagger-5 ${isVisible ? 'is-visible' : ''}`}>
            <span className={styles.boldTransition}>This is only the beginning. </span>
            Our vision is to build one of Tamil Nadu&apos;s most trusted automotive detailing brands, 
            expanding city by city while maintaining the same commitment to quality that started it all.
          </p>

          <div className={`${styles.finalQuoteBox} animate-fade-in-up stagger-5 ${isVisible ? 'is-visible' : ''}`}>
            <p className={styles.finalQuoteText}>
              “One passion. One studio. One goal—to make every car look its absolute best.”
            </p>
          </div>
        </div>

      </div>
      <ScrollDown targetId="services" />
    </section>
  );
};
