import { useState, useEffect } from 'react';
import { Button } from '../../ui/Button/Button';
import styles from './Header.module.css';
import spinLogo from '../../../assets/SPIN IN Logo.jpg.jpeg';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={spinLogo} alt="Spin In Logo" className={styles.logoImage} />
        </div>
        
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('about')} className={styles.navLink}>About Us</button>
          <button onClick={() => scrollToSection('services')} className={styles.navLink}>Services</button>
          <button onClick={() => scrollToSection('contact')} className={styles.navLink}>Location</button>
        </nav>

        <div className={styles.cta}>
          <button onClick={() => scrollToSection('contact')} className={styles.ctaBtn}>Contact Us</button>
        </div>
      </div>
    </header>
  );
};
