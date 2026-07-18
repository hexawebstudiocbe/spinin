import { SectionTitle } from '../../../components/ui/SectionTitle/SectionTitle';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className={`section-padding ${styles.section}`} ref={elementRef}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.content} animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
          <SectionTitle 
            subtitle="WHO WE ARE" 
            title={<span>Driven by <span className="text-red">Passion.</span></span>}
          />
          <p className={styles.text}>
            At Spin In, we believe your vehicle is more than just transportation; it's a statement. 
            Our team of certified detailers brings years of expertise, utilizing only the finest 
            chemicals and cutting-edge techniques to ensure your investment is protected and looks 
            flawless for years to come.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5k+</span>
              <span className={styles.statLabel}>Cars Protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
