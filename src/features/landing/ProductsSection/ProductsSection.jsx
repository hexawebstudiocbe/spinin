import React from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './ProductsSection.module.css';

const brands = [
  {
    name: 'MA-FRA',
    logoUrl: '/mafra.png',
  },
  {
    name: 'Fireball',
    logoUrl: '/fireball.png',
  },
  {
    name: 'Koch Chemie',
    logoUrl: '/kochchemie.png',
    isLarge: true,
  },
  {
    name: 'Menzerna',
    logoUrl: '/menzerna.png',
  },
  {
    name: 'Rupes',
    logoUrl: '/rupes.png',
  },
  {
    name: 'MaxShine',
    logoUrl: '/maxshine.png',
  },
  {
    name: 'Turtle Wax',
    logoUrl: '/turtltwax.png',
  }
];

export const ProductsSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section id="products" className={styles.section} ref={elementRef}>
      <div className={`container ${styles.container}`}>
        <h2 className={`${styles.title} animate-fade-in-up is-visible`}>
          Brands We Use
        </h2>
      </div>
        
      <div className={`${styles.marqueeContainer} animate-fade-in-up stagger-1 is-visible`}>
        <div className={styles.logoTrack}>
          {brands.map((brand, index) => (
            <div key={`set1-${index}`} className={styles.logoCard} title={brand.name}>
              <img src={brand.logoUrl} alt={`${brand.name} logo`} className={`${styles.logoImage} ${brand.isLarge ? styles.largeLogo : ''}`} />
            </div>
          ))}
          {brands.map((brand, index) => (
            <div key={`set2-${index}`} className={styles.logoCard} title={brand.name}>
              <img src={brand.logoUrl} alt={`${brand.name} logo`} className={`${styles.logoImage} ${brand.isLarge ? styles.largeLogo : ''}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
