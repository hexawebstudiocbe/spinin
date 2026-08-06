import React, { useState, useEffect, useRef } from 'react';
import { SectionTitle } from '../../../components/ui/SectionTitle/SectionTitle';
import { Button } from '../../../components/ui/Button/Button';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './ContactSection.module.css';
import appData from '../../../data/appData.json';

export const ContactSection = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
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
      
      // Sort selection according to the original sequence in servicesList
      return newSelection.sort((a, b) => servicesList.indexOf(a) - servicesList.indexOf(b));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (selectedServices.length === 0) {
      alert('Please select at least one service.');
      return;
    }

    const whatsappNumber = '919994534744'; // Keeping the user-selected WhatsApp number
    
    const message =
      `Hi, I would like to book a slot for detailing.%0a%0a` +
      `*Name:* ${formData.name}%0a` +
      `*Phone:* ${formData.phone}%0a` +
      `*Vehicle:* ${formData.vehicle}%0a` +
      `*Services:* ${selectedServices.join(', ')}%0a` +
      `*Preferred Date:* ${formData.date || 'Not specified'}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear form after submission
    setFormData({
      name: '',
      phone: '',
      vehicle: '',
      date: '',
    });
    setSelectedServices([]);
    setIsDropdownOpen(false);
  };

  return (
    <section id="contact" className={`section-padding ${styles.section}`} ref={elementRef}>
      <div className={`container ${styles.grid}`}>
        
        {/* Left Column: Contact Info & Map */}
        <div className={`${styles.info} animate-fade-in-up ${isVisible ? 'is-visible' : ''}`}>
          <SectionTitle 
            subtitle="READY TO ELEVATE YOUR RIDE?" 
            title={<span>Let's <span className="text-red">Connect.</span></span>}
          />
          
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <div className={styles.iconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h4 className={styles.detailTitle}>SPIN IN STUDIO</h4>
                <p className={styles.detailText}>
                  14, Anna Valankam Nagar, Ganapathy Managar,<br />
                  Coimbatore - 641 006
                </p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.iconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4 className={styles.detailTitle}>CALL US</h4>
                <p className={styles.phoneText}>+91 97877 12345</p>
              </div>
            </div>
          </div>
          
          <div className={styles.socials}>
            <button className={styles.socialBtn} aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </button>
            <button className={styles.socialBtn} aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </button>
          </div>

          <div className={styles.mapWrapper}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://maps.google.com/maps?q=14%2C+Anna+Valankam+Nagar%2C+Ganapathy+Managar%2C+Coimbatore+-+641+006&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Spin In Studio Location Map"
                className={styles.mapFrame}
              />
              <div className={styles.mapOverlayBtn}>
                <a
                  href="https://maps.google.com/?q=14,+Anna+Valankam+Nagar,+Ganapathy+Managar,+Coimbatore+-+641+006"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className={styles.mapBtn}>
                    Open in Maps
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Book a Slot Form */}
        <div id="book-slot" className={`${styles.bookingContainer} animate-fade-in-up stagger-2 ${isVisible ? 'is-visible' : ''}`}>
          <div className={styles.bookingCard}>
            <h3 className={styles.formTitle}>Book a Slot</h3>
            <p className={styles.formSubtitle}>
              Select your services, choose a preferred date, and submit to book via WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name">Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contact-vehicle">Vehicle Make & Model</label>
                <input
                  type="text"
                  id="contact-vehicle"
                  name="vehicle"
                  required
                  value={formData.vehicle}
                  onChange={handleChange}
                  placeholder="e.g. BMW M3 or Porsche 911"
                />
              </div>

              {/* Custom Multi-Select Dropdown Container */}
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

                {/* Selected Services Tags */}
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
                <label htmlFor="contact-date">Preferred Date</label>
                <input
                  type="date"
                  id="contact-date"
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
        
      </div>
    </section>
  );
};
