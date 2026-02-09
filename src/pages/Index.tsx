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

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturedShakes />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
