import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import spinLogo from '../../../assets/SPIN IN Logo.jpg.jpeg';
import { BookSlotModal } from '../../ui/BookSlotModal/BookSlotModal';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBookSlot, setShowBookSlot] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${
          isMobileMenuOpen ? styles.headerMenuOpen : ''
        }`}
      >
        <div className={`container ${styles.headerContainer}`}>
          <div className={styles.logo} onClick={handleLogoClick}>
            <img src={spinLogo} alt="Spin In Logo" className={styles.logoImage} />
          </div>

          <nav className={styles.nav}>
            <button onClick={() => scrollToSection('story')} className={styles.navLink}>
              Our Story
            </button>
            {/* <button onClick={() => scrollToSection('products')} className={styles.navLink}>
              Brands We Use
            </button> */}
            <button onClick={() => scrollToSection('services')} className={styles.navLink}>
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className={styles.navLink}>
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className={styles.navLink}>
              Contact
            </button>
          </nav>

          <div className={styles.cta}>
            <button onClick={() => scrollToSection('contact')} className={styles.ctaBtn}>
              Contact Us
            </button>
            <button onClick={() => setShowBookSlot(true)} className={styles.bookBtn}>
              Book Slot
            </button>
          </div>

          <button
            className={`${styles.hamburgerBtn} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              <button onClick={() => scrollToSection('story')} className={styles.mobileNavLink}>
                <span>Our Story</span>
                <svg
                  className={styles.mobileNavArrow}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button onClick={() => scrollToSection('products')} className={styles.mobileNavLink}>
                <span>Brands We Use</span>
                <svg
                  className={styles.mobileNavArrow}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button onClick={() => scrollToSection('services')} className={styles.mobileNavLink}>
                <span>Services</span>
                <svg
                  className={styles.mobileNavArrow}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button onClick={() => scrollToSection('about')} className={styles.mobileNavLink}>
                <span>About Us</span>
                <svg
                  className={styles.mobileNavArrow}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <button onClick={() => scrollToSection('contact')} className={styles.mobileNavLink}>
                <span>Contact</span>
                <svg
                  className={styles.mobileNavArrow}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </nav>

            <div className={styles.mobileCtaWrapper}>
              <button onClick={() => scrollToSection('contact')} className={styles.mobileCtaBtnSecondary}>
                Contact Us
              </button>
              <button onClick={() => { setIsMobileMenuOpen(false); setShowBookSlot(true); }} className={styles.mobileCtaBtn}>
                Book Slot
              </button>
            </div>
          </div>
        )}
      </header>

      <BookSlotModal isOpen={showBookSlot} onClose={() => setShowBookSlot(false)} />
    </>
  );
};
