import { Helmet } from 'react-helmet-async';
import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { HeroSection } from './features/landing/HeroSection/HeroSection';
import { OurStorySection } from './features/landing/OurStorySection/OurStorySection';
import { AboutSection } from './features/landing/AboutSection/AboutSection';
import { ProductsSection } from './features/landing/ProductsSection/ProductsSection';
import { ServicesSection } from './features/landing/ServicesSection/ServicesSection';
import { ContactSection } from './features/landing/ContactSection/ContactSection';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Helmet>
        <title>Spin In | Car Detailing & Ceramic Coating in Coimbatore</title>
        <meta name="description" content="Professional car detailing, ceramic coating, PPF, interior detailing and doorstep car care services in Coimbatore. Book your appointment today." />
        <link rel="canonical" href="https://www.spinindetailing.in/" />
        <meta property="og:title" content="Spin In | Car Detailing & Ceramic Coating in Coimbatore" />
        <meta property="og:description" content="Professional car detailing, ceramic coating, PPF, interior detailing and doorstep car care services in Coimbatore. Book your appointment today." />
        <meta property="twitter:title" content="Spin In | Car Detailing & Ceramic Coating in Coimbatore" />
        <meta property="twitter:description" content="Professional car detailing, ceramic coating, PPF, interior detailing and doorstep car care services in Coimbatore. Book your appointment today." />
      </Helmet>

      <Header />

      <main>
        <HeroSection />
        <OurStorySection />
        <ProductsSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
