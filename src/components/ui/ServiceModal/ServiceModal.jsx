import React from 'react';
import { Button } from '../Button/Button';
import styles from './ServiceModal.module.css';

export const ServiceModal = ({ service, onClose, onBookNow }) => {
  if (!service) return null;

  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow();
    } else {
      onClose();
      // Scroll to the book-slot section
      setTimeout(() => {
        document.getElementById('book-slot')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>

        <div className={styles.content}>
          {/* Service Image */}
          {service.image && (
            <div
              className={styles.imageSection}
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              <div className={styles.imageOverlay} />
            </div>
          )}

          {/* Service Details */}
          <div className={styles.detailsSection}>
            <h2 className={styles.title}>{service.title}</h2>

            <div className={styles.sectionBlock}>
              <h4 className={styles.sectionHeader}>WHAT IT DOES</h4>
              <p className={styles.description}>
                {service.whatItDoes || service.description}
              </p>
            </div>

            {service.realLifeExample && (
              <div className={styles.exampleBox}>
                <h4 className={styles.exampleHeader}>REAL-LIFE EXAMPLE</h4>
                <p className={styles.exampleText}>{service.realLifeExample}</p>
              </div>
            )}

            <Button className={styles.bookBtn} onClick={handleBookNow}>
              Book This Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
