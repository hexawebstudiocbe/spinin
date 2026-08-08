import React from 'react';
import styles from './ScrollDown.module.css';

export const ScrollDown = ({ targetId }) => {
  return (
    <div 
      className={styles.scrollDown} 
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
    >
      <span>Scroll Down</span>
      <svg className={styles.scrollArrow} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  );
};
