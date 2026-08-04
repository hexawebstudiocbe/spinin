import styles from './Card.module.css';
import { Button } from '../Button/Button';

export const Card = ({ image, icon, title, description, linkText, onClick, className = '' }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.cardImage} loading="lazy" />
        </div>
      )}
      {!image && icon && (
        <div className={styles.iconWrapper}>
          {icon}
        </div>
      )}
      <div className={styles.cardBody}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        {linkText && (
          <Button onClick={onClick} variant="outline" className={styles.cardBtn}>
            {linkText}
          </Button>
        )}
      </div>
    </div>
  );
};
