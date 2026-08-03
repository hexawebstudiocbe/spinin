import { Header } from './components/layout/Header/Header';
import { Footer } from './components/layout/Footer/Footer';
import { HeroSection } from './features/landing/HeroSection/HeroSection';
import { OurStorySection } from './features/landing/OurStorySection/OurStorySection';
import { HighlightSection } from './features/landing/HighlightSection/HighlightSection';
import { ServicesSection } from './features/landing/ServicesSection/ServicesSection';
import { AboutSection } from './features/landing/AboutSection/AboutSection';
import { ContactSection } from './features/landing/ContactSection/ContactSection';
import './App.css'; // Optional if Vite created it and we want to keep it, but I'll remove it since we use index.css

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      
      <main>
        <HeroSection />
        <OurStorySection />
        <HighlightSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
