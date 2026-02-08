import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedShakes from "@/components/FeaturedShakes";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import DiwaliDecorations from "@/components/DiwaliDecorations";
import DiwaliBanner from "@/components/DiwaliBanner";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <DiwaliBanner />
      <DiwaliDecorations />
      <Navbar />
      <HeroSection />
      {/* Diwali divider */}
      <div className="diwali-divider" />
      <FeaturedShakes />
      <div className="diwali-divider" />
      <AboutSection />
      <div className="diwali-divider" />
      <MenuSection />
      <div className="diwali-divider" />
      <GallerySection />
      <div className="diwali-divider" />
      <ReviewsSection />
      <div className="diwali-divider" />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
