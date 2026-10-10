import { SectionTitle } from '../../../components/ui/SectionTitle/SectionTitle';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { ScrollDown } from '../../../components/ui/ScrollDown/ScrollDown';
import { Button } from '../../../components/ui/Button/Button';
import styles from './AboutSection.module.css';



export const AboutSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="about" className={`section-padding ${styles.section}`} ref={elementRef}>
      <div className={styles.grid}>
        <div className={styles.content}>
          <div className={`animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
            <SectionTitle 
              subtitle="About us" 
              title={<span>Driven by <span className="text-red">Passion.</span></span>}
              align="left"
            />
          </div>
          <p className={`${styles.leadText} animate-fade-in-up stagger-1 ${isVisible ? 'is-visible' : ''}`}>
            We don’t just clean cars. <span className="text-red">We care for them.</span>
          </p>

          <div className={`${styles.highlightCard} animate-fade-in-up stagger-2 ${isVisible ? 'is-visible' : ''}`}>
            <p className={styles.highlightCardText}>
              At <span className={styles.brandHighlight}>Spin In</span>, everything started with one simple truth — <span className="text-red">we love cars</span>.
            </p>
          </div>

          <p className={`${styles.paragraph} animate-fade-in-up stagger-3 ${isVisible ? 'is-visible' : ''}`}>
            There’s a special feeling in seeing a car transform from <span className="text-red">dull to stunning</span>. The shine, the clean interior, the fresh paint finish, and the pride of driving something that feels <span className="text-red">brand new</span> — that’s what drives us every day.
          </p>

          <p className={`${styles.paragraph} animate-fade-in-up stagger-3 ${isVisible ? 'is-visible' : ''}`}>
            We started Spin In in Coimbatore, our hometown, with a clear purpose: to make every car that comes to us look its best, feel protected, and leave its owner genuinely happy and proud.
          </p>

          <p className={`${styles.paragraph} animate-fade-in-up stagger-4 ${isVisible ? 'is-visible' : ''}`}>
            We are also deeply grateful for the learning and guidance we received from <span className="text-red"> Team Car Glow</span>, Chennai. With over <span className="text-red"><br />20 years of combined detailing experience</span>, their knowledge helped shape our foundation. It taught us discipline, precision, and the right way to approach detailing — values we carry into every car we work on.
          </p>

          <p className={`${styles.paragraph} animate-fade-in-up stagger-5 ${isVisible ? 'is-visible' : ''}`}>
            Our goal is not just to grow bigger or open more branches. <span className={styles.boldTransition}>Our real goal is to build a <span className="text-red">stronger car culture</span>.</span>
          </p>

          <p className={`${styles.paragraph} animate-fade-in-up stagger-5 ${isVisible ? 'is-visible' : ''}`}>
            Coimbatore already has a passionate community of car lovers, and we want to be part of it — helping it grow, connect, and thrive through better care and detailing. We believe every car deserves attention, whether it’s new, old, luxury, or a daily drive.
          </p>

          <p className={`${styles.paragraph} animate-fade-in-up stagger-6 ${isVisible ? 'is-visible' : ''}`}>
            As we grow, we aim to bring Spin In across Tamil Nadu, not just as a business, but as a standard of care and passion.
          </p>

          <div className={`${styles.finalQuoteBox} animate-fade-in-up stagger-6 ${isVisible ? 'is-visible' : ''}`}>
            <p className={styles.finalQuoteText}>
              Your car. Your passion. Our care.<br/>
              Welcome to Spin In.
            </p>
          </div>
          <div className={`${styles.timeline} animate-fade-in-up stagger-2 ${isVisible ? 'is-visible' : ''}`}>
            <p className={styles.paragraph} style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#ccc' }}>
              We appreciate your enthusiasm on protecting your car. On behalf of Spin In, we give you packages up to a year worth saving big money. Check below!
            </p>
            <div style={{ background: 'linear-gradient(145deg, rgba(20,20,20,0.9) 0%, rgba(40,10,10,0.9) 100%)', border: '1px solid rgba(255, 0, 0, 0.3)', borderRadius: '16px', padding: '1.5rem', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', maxWidth: '550px', margin: '0 auto' }}>
              <h3 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
                <span className="text-red">Personalized</span> Detailor
              </h3>
              <p style={{ color: '#ccc', fontSize: '1rem', marginBottom: '1.2rem', lineHeight: '1.5' }}>
                Every vehicle has unique needs based on its current condition and usage.<br />
                Let our experts inspect your car and recommend a personalized detailing package.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button 
                  href="https://wa.me/919677767123?text=Hi!%20I%20would%20like%20to%20book%20a%20personalized%20detailer%20for%20my%20car."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.actionBtn}
                >
                  Book Your Personalized Detailor
                </Button>
              </div>
            </div>
          </div>
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
