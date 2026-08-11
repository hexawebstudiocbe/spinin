import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../Button/Button';
import styles from './BookSlotModal.module.css';
import appData from '../../../data/appData.json';

export const BookSlotModal = ({ isOpen, onClose, initialService }) => {
  const dropdownRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    date: '',
    doorstepService: 'No',
  });
  
  const [selectedServices, setSelectedServices] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const servicesList = [
    "General Consultation / Custom Quote",
    ...appData.services.map((s) => s.title)
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
      if (initialService) {
        setSelectedServices([initialService]);
      }
    } else {
      document.body.style.overflow = '';
      if (initialService) {
        setSelectedServices([]);
      }
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen, initialService]);

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

    const whatsappNumber = '919677767123';
    
    const message =
      `Hi, I would like to book a slot for detailing.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Vehicle:* ${formData.vehicle}\n` +
      `*Services:* ${selectedServices.join(', ')}\n` +
      `*Doorstep Service:* ${formData.doorstepService}\n` +
      `*Preferred Date:* ${formData.date || 'Not specified'}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setFormData({ name: '', phone: '', vehicle: '', date: '', doorstepService: 'No' });
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
                {selectedServices.slice(0, 2).map((service, index) => (
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
                {selectedServices.length > 2 && (
                  <span className={styles.tag} style={{ paddingRight: '8px' }}>
                    +{selectedServices.length - 2} more
                  </span>
                )}
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="modal-doorstep">Need Doorstep Pickup & Drop Service?</label>
            <select
              id="modal-doorstep"
              name="doorstepService"
              value={formData.doorstepService}
              onChange={handleChange}
            >
              <option value="No">No, I will drop off my vehicle</option>
              <option value="Yes">Yes, I need pickup & drop service</option>
            </select>
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
              fill="#25D366"
              className={styles.whatsappIcon}
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span>Book Slot via WhatsApp</span>
          </Button>
        </form>
      </div>
    </div>
  );
};
