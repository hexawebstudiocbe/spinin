import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './HighlightSection.module.css';

const highlights = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: 'PREMIUM CARE',
    description: 'Meticulous attention to every square inch of your vehicle using world-class chemicals and tools.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'ENHANCED PROTECTION',
    description: 'Advanced Graphene and Ceramic coatings designed to shield your investment from the elements.'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <circle cx="12" cy="13" r="3" />
        <path d="m16 17-2.5-2.5" />
      </svg>
    ),
    title: 'SHOWROOM FINISH',
    description: 'Restoring that brand-new brilliance with multi-stage paint correction and interior rejuvenation.'
  }
];

export const HighlightSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className={`section-padding ${styles.section}`} ref={elementRef}>
      <div className={`container ${styles.grid}`}>
        {highlights.map((item, index) => (
          <div 
            key={index} 
            className={`${styles.item} animate-fade-in-up stagger-${index + 1} ${isVisible ? 'is-visible' : ''}`}
          >
            <div className={styles.iconWrapper}>{item.icon}</div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
