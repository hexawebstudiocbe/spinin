import { SectionTitle } from '../../../components/ui/SectionTitle/SectionTitle';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className={`section-padding ${styles.section}`} ref={elementRef}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <div className={`animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
            <SectionTitle 
              subtitle="About us" 
              title={<span>Driven by <span className="text-red">Passion.</span></span>}
              align="left"
            />
          </div>
          <p className={`${styles.text} animate-fade-in-up stagger-1 ${isVisible ? 'is-visible' : ''}`}>
            At Spin In, we believe your vehicle is more than just transportation; it&apos;s a statement. 
            Our team of certified detailers brings years of expertise, utilizing only the finest 
            chemicals and cutting-edge techniques to ensure your investment is protected and looks 
            flawless for years to come.
          </p>
        </div>

        <div className={`${styles.imageWrapper} animate-slide-in-right ${isVisible ? 'is-visible' : ''}`}>
          <div className={styles.imageBox}>
            <img 
              src="/ferrari_bg.png" 
              alt="Spin In Detailing Studio Passion" 
              className={styles.carImage} 
              loading="lazy"
            />
            <div className={styles.imageGlow} />
          </div>
        </div>
      </div>
    </section>
  );
};
