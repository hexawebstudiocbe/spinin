import styles from './Card.module.css';
import { Button } from '../Button/Button';

export const Card = ({ icon, title, description, linkText, onClick, className = '' }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {linkText && (
        <Button onClick={onClick} variant="outline" className={styles.cardBtn}>
          {linkText}
        </Button>
      )}
    </div>
  );
};
