import React, { useState, useEffect, useRef } from 'react';
import { SectionTitle } from '../../../components/ui/SectionTitle/SectionTitle';
import { Button } from '../../../components/ui/Button/Button';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import { ScrollDown } from '../../../components/ui/ScrollDown/ScrollDown';
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

    const whatsappNumber = '919677767123'; // Keeping the user-selected WhatsApp number
    
    const message =
      `Hi, I would like to book a slot for detailing.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Vehicle:* ${formData.vehicle}\n` +
      `*Services:* ${selectedServices.join(', ')}\n` +
      `*Doorstep Pickup & Drop:* ${formData.doorstepService}\n` +
      `*Preferred Date:* ${formData.date || 'Not specified'}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear form after submission
    setFormData({
      name: '',
      phone: '',
      vehicle: '',
      date: '',
      doorstepService: 'No',
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
                  6, Annai Velankkaani nagar Ganapathy maanagar , Coimbatore
                </p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.iconBox}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h4 className={styles.detailTitle}>CALL US</h4>
                <p className={styles.phoneText}>+91 96777 67123</p>
                <p className={styles.phoneText}>+91 99945 34744</p>
              </div>
            </div>
          </div>
          


          <div className={styles.mapWrapper}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://maps.google.com/maps?q=11%C2%B003'01.3%22N+77%C2%B000'05.4%22E&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
                  href="https://maps.google.com/?q=11%C2%B003'01.3%22N+77%C2%B000'05.4%22E"
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
                <label htmlFor="contact-doorstep">Need Doorstep Pickup & Drop Service?</label>
                <select
                  id="contact-doorstep"
                  name="doorstepService"
                  value={formData.doorstepService}
                  onChange={handleChange}
                >
                  <option value="No">No, I will drop off my vehicle</option>
                  <option value="Yes">Yes, I need pickup & drop service</option>
                </select>
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
        
      </div>
      <ScrollDown targetId="footer" />
    </section>
  );
};
