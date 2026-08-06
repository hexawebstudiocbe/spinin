import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../Button/Button';
import styles from './BookSlotModal.module.css';
import appData from '../../../data/appData.json';

export const BookSlotModal = ({ isOpen, onClose }) => {
  const dropdownRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    date: '',
  });
  
  const [selectedServices, setSelectedServices] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const servicesList = [
    ...appData.services.map((s) => s.title),
    "DOORSTEP PICKUP & DROP SERVICE",
    "General Consultation / Custom Quote"
  ];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) => {
      const isSelected = prev.includes(service);
      const newSelection = isSelected
        ? prev.filter((item) => item !== service)
        : [...prev, service];
      return newSelection.sort((a, b) => servicesList.indexOf(a) - servicesList.indexOf(b));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (selectedServices.length === 0) {
      alert('Please select at least one service.');
      return;
    }

    const whatsappNumber = '919994534744';
    
    const message =
      `Hi, I would like to book a slot for detailing.%0a%0a` +
      `*Name:* ${formData.name}%0a` +
      `*Phone:* ${formData.phone}%0a` +
      `*Vehicle:* ${formData.vehicle}%0a` +
      `*Services:* ${selectedServices.join(', ')}%0a` +
      `*Preferred Date:* ${formData.date || 'Not specified'}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', phone: '', vehicle: '', date: '' });
    setSelectedServices([]);
    setIsDropdownOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          &times;
        </button>

        <h3 className={styles.formTitle}>Book a Slot</h3>
        <p className={styles.formSubtitle}>
          Select your services, choose a preferred date, and submit to book via WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="modal-name">Full Name</label>
            <input
              type="text"
              id="modal-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="modal-phone">Phone Number</label>
            <input
              type="tel"
              id="modal-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="modal-vehicle">Vehicle Make & Model</label>
            <input
              type="text"
              id="modal-vehicle"
              name="vehicle"
              required
              value={formData.vehicle}
              onChange={handleChange}
              placeholder="e.g. BMW M3 or Porsche 911"
            />
          </div>

          {/* Multi-Select Dropdown */}
          <div className={styles.formGroup} ref={dropdownRef}>
            <label>Services Required</label>
            <div className={styles.multiSelectContainer}>
              <button
                type="button"
                className={styles.multiSelectToggle}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className={styles.selectedServicesText}>
                  {selectedServices.length === 0
                    ? 'Select Services'
                    : selectedServices.length === 1
                    ? selectedServices[0]
                    : `${selectedServices.length} Services Selected`}
                </span>
                <svg
                  className={`${styles.selectArrow} ${isDropdownOpen ? styles.arrowOpen : ''}`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className={styles.multiSelectDropdown}>
                  {servicesList.map((service, index) => (
                    <label key={index} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className={styles.checkboxInput}
                      />
                      <span className={styles.checkboxText}>{service}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {selectedServices.length > 0 && (
              <div className={styles.tagsContainer}>
                {selectedServices.map((service, index) => (
                  <span key={index} className={styles.tag}>
                    {service}
                    <button
                      type="button"
                      className={styles.tagCloseBtn}
                      onClick={() => handleServiceToggle(service)}
                      aria-label={`Remove ${service}`}
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="modal-date">Preferred Date</label>
            <input
              type="date"
              id="modal-date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className={styles.submitBtn}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.whatsappIcon}
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            <span>Book Slot via WhatsApp</span>
          </Button>
        </form>
      </div>
    </div>
  );
};
