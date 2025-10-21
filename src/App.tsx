import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { QualificationsSection } from "./components/QualificationsSection";
import { InitiativesSection } from "./components/InitiativesSection";
import { VisionSection } from "./components/VisionSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="qualifications">
        <QualificationsSection />
      </div>
      <div id="initiatives">
        <InitiativesSection />
      </div>
      <div id="vision">
        <VisionSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}