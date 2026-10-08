import React, { useEffect } from 'react';
import { Button } from '../Button/Button';
import styles from './ServiceModal.module.css';

export const ServiceModal = ({ service, onClose, onBookNow }) => {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [service]);

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

            {service.prices && (
              <div className={styles.sectionBlock}>
                <h4 className={styles.sectionHeader}>PRICING</h4>
                <div className={styles.pricingTable}>
                  {Object.entries(service.prices).map(([vehicle, price]) => (
                    <div key={vehicle} className={styles.pricingRow} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid #333' }}>
                      <span style={{ fontWeight: '500', color: '#ccc' }}>{vehicle}</span>
                      <span style={{ color: '#00ff00', fontWeight: 'bold' }}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service.isMembership && service.memberships && (
              <div className={styles.sectionBlock}>
                <h4 className={styles.sectionHeader}>PACKAGES</h4>
                <div className={styles.membershipsList}>
                  {service.memberships.map((pkg, idx) => (
                    <div key={idx} style={{ background: '#111', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ff0000', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ minWidth: '110px', textAlign: 'center', borderRight: '1px solid #333', paddingRight: '1rem' }}>
                        <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '1rem', display: 'block', marginBottom: '0.2rem' }}>{pkg.duration}</span>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.2' }}>
                          <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '0.75rem' }}>{pkg.originalPrice}</span>
                          <span style={{ color: '#ff0000', fontWeight: 'bold', fontSize: '1rem' }}>{pkg.discountedPrice}</span>
                        </div>
                      </div>
                      <ul style={{ listStyleType: 'none', padding: 0, margin: 0, flex: 1, display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem' }}>
                        {pkg.features.map((feature, fIdx) => (
                          <li key={fIdx} style={{ color: '#aaa', fontSize: '0.8rem', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                            <span style={{ color: '#ff0000', marginRight: '0.3rem' }}>✓</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
