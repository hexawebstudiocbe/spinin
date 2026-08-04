import { SectionTitle } from '../../../components/ui/SectionTitle/SectionTitle';
import { Button } from '../../../components/ui/Button/Button';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './ContactSection.module.css';

export const ContactSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="contact" className={`section-padding ${styles.section}`} ref={elementRef}>
      <div className={`container ${styles.grid}`}>
        
        <div className={`${styles.info} animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
          <SectionTitle 
            subtitle="READY TO ELEVATE YOUR RIDE?" 
            title={<span>Let's <span className="text-red">Connect.</span></span>}
          />
          
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.iconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h4 className={styles.detailTitle}>SPIN IN STUDIO</h4>
                <p className={styles.detailText}>
                  14, Anna Valankam Nagar, Ganapathy Managar,<br />
                  Coimbatore - 641 006
                </p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.iconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4 className={styles.detailTitle}>CALL US</h4>
                <p className={styles.phoneText}>+91 97877 12345</p>
              </div>
            </div>
          </div>
          
          <div className={styles.socials}>
            <button className={styles.socialBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </button>
            <button className={styles.socialBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </button>
          </div>
        </div>
        
        <div className={`${styles.mapContainer} animate-fade-in-up stagger-2 ${isVisible ? 'is-visible' : ''}`}>
          <iframe
            src="https://maps.google.com/maps?q=14%2C+Anna+Valankam+Nagar%2C+Ganapathy+Managar%2C+Coimbatore+-+641+006&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Spin In Studio Location Map"
            className={styles.mapFrame}
          />
          <div className={styles.mapOverlayBtn}>
            <a
              href="https://maps.google.com/?q=14,+Anna+Valankam+Nagar,+Ganapathy+Managar,+Coimbatore+-+641+006"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className={styles.mapBtn}>
                Open in Maps
              </Button>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};
