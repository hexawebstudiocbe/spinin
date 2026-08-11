import { Button } from '../../ui/Button/Button';
import styles from './Footer.module.css';
import spinLogo from '../../../assets/SPIN IN Logo.jpg.jpeg';

export const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.brandSection}>
          <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={spinLogo} alt="Spin In Logo" className={styles.logoImage} />
          </div>
          <p className={styles.description}>
            Coimbatore's premier destination for high-end automotive protection and aesthetic restoration.
          </p>
        </div>

        <div className={styles.navSection}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.links}>
            <li><button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}>Our Story</button></li>
            <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Services</button></li>
            <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About Us</button></li>
            <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
          </ul>
        </div>

        <div className={styles.socialSection}>
          <h4 className={styles.heading}>Follow Our Work</h4>
          <p className={styles.socialText}>See our daily detailing transformations and ceramic coating results.</p>
          <div className={styles.socialButtons}>
            <a href="https://www.instagram.com/spin_in_garage?utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/share/1G9Mx5F9gs/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              <span>Facebook</span>
            </a>
            <a href="mailto:Spiningarage@gmail.com" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className={`container ${styles.bottomBar}`}>
        <p>&copy; {new Date().getFullYear()} Spin In. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
