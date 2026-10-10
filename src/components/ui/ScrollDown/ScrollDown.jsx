import React, { useState, useEffect } from 'react';
import styles from './ScrollDown.module.css';

const SECTIONS = ['home', 'story', 'products', 'services', 'about', 'contact'];

export const ScrollDown = () => {
  const [nextSectionId, setNextSectionId] = useState(SECTIONS[1]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let currentIdx = 0;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adding a small offset so it switches right as the next section comes into view
          if (rect.top <= window.innerHeight / 2) {
            currentIdx = i;
            break;
          }
        }
      }
      
      if (currentIdx < SECTIONS.length - 1) {
        setNextSectionId(SECTIONS[currentIdx + 1]);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={styles.scrollDown}
      onClick={() => document.getElementById(nextSectionId)?.scrollIntoView({ behavior: 'smooth' })}
    >
      <span>Scroll Down</span>
      <svg className={styles.scrollArrow} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  );
};
