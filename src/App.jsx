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
