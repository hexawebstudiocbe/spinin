import React, { useState } from 'react';
import { SectionTitle } from '../../../components/ui/SectionTitle/SectionTitle';
import { Card } from '../../../components/ui/Card/Card';
import { ServiceModal } from '../../../components/ui/ServiceModal/ServiceModal';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { ScrollDown } from '../../../components/ui/ScrollDown/ScrollDown';
import styles from './ServicesSection.module.css';

import appData from '../../../data/appData.json';

const services = appData.services;

export const ServicesSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <section id="services" className={`section-padding ${styles.section}`} ref={elementRef}>
        <div className={`container ${styles.headerWrapper}`}>
          <SectionTitle 
            subtitle="OUR EXPERTISE" 
            title="SPECIALIZED SERVICES" 
            className={`animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}
          />
          <p className={`${styles.headerText} animate-fade-in-up stagger-1 ${isVisible ? 'is-visible' : ''}`}>
            From daily drivers to exotic supercars, we provide tailored protection packages for every automotive need.
          </p>
        </div>

        <div className={`container ${styles.grid}`}>
          {services.map((service, index) => (
            <div 
              key={index}
              className={`animate-fade-in-up stagger-${(index % 4) + 1} ${isVisible ? 'is-visible' : ''}`}
            >
              <Card 
                image={service.image}
                title={service.title}
                linkText="View"
                onClick={() => setSelectedService(service)}
              />
            </div>
          ))}
        </div>
        <ScrollDown targetId="about" />
      </section>
      
      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </>
  );
};
