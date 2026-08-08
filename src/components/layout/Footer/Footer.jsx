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
            <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>Services</button></li>
            <li><button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}>Our Story</button></li>
            <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
            <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
          </ul>
        </div>

        <div className={styles.newsletterSection}>
          <h4 className={styles.heading}>Stay Updated</h4>
          <p className={styles.newsletterText}>Join our list for maintenance tips and seasonal offers.</p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" className={styles.input} />
            <Button variant="primary" type="submit" className={styles.submitBtn}>
              →
            </Button>
          </form>
        </div>
      </div>
      
      <div className={`container ${styles.bottomBar}`}>
        <p>&copy; {new Date().getFullYear()} Spin In. All Rights Reserved.</p>
        <div className={styles.legalLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
