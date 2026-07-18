import styles from './SectionTitle.module.css';

export const SectionTitle = ({ subtitle, title, align = 'left', className = '' }) => {
  return (
    <div className={`${styles.container} ${styles[align]} ${className}`}>
      {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
      {title && <h2 className={styles.title}>{title}</h2>}
    </div>
  );
};
