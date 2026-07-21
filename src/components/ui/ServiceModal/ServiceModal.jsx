import React, { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './ServiceModal.module.css';
import appData from '../../../data/appData.json';

export const ServiceModal = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    vehicle: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '910000000000'; // Replace with actual number
    
    const message = `Hi, I would like to book a service.%0a%0a` +
      `*Service:* ${service.title}%0a` +
      `*Name:* ${formData.name}%0a` +
      `*Phone:* ${formData.phone}%0a` +
      `*Date:* ${formData.date}%0a` +
      `*Vehicle:* ${formData.vehicle}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!service) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>
        
        <div className={styles.content}>
          {/* Left Side: Service Details */}
          <div className={styles.leftPanel}>
            <div 
              className={styles.imageBackground} 
              style={{ backgroundImage: `url('${service.image}')` }} 
            />
            <div className={styles.serviceInfo}>
              <h2 className={styles.title}>{service.title}</h2>
              <p className={styles.description}>{service.description}</p>
            </div>
          </div>

          {/* Right Side: Booking Form */}
          <div className={styles.rightPanel}>
            <h3 className={styles.formTitle}>Book Appointment</h3>
            <p className={styles.formSubtitle}>Fill out the details below and we'll connect via WhatsApp.</p>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              {appData.formFields.map((field) => (
                <div key={field.id} className={styles.formGroup}>
                  <label htmlFor={field.id}>{field.label}</label>
                  <input 
                    type={field.type} 
                    id={field.id} 
                    name={field.name} 
                    required={field.required} 
                    value={formData[field.name] || ''} 
                    onChange={handleChange} 
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <Button type="submit" className={styles.submitBtn}>
                Book Now via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
