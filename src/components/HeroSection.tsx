import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-shake.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Heaven Shakes chocolate milkshake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-caramel/20 text-pastel-peach text-sm font-body font-medium mb-6 backdrop-blur-sm border border-caramel/20">
            📍 Ghanta Ghar, India
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-warm-white leading-tight mb-6"
        >
          Heaven
          <br />
          <span className="italic text-pastel-peach">Shakes</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="font-body text-lg sm:text-xl md:text-2xl text-cream/90 mb-10 max-w-2xl mx-auto"
        >
          Taste the Heaven in Every Sip ☕🍫
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/919828820550?text=Hi!%20I%20want%20to%20order%20from%20Heaven%20Shakes%20🍹"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn text-base"
          >
            <MessageCircle size={20} />
            WhatsApp Order
          </a>
          <a href="tel:9828820550" className="call-btn text-base bg-cream/20 text-warm-white border border-cream/30 backdrop-blur-sm hover:bg-cream/30">
            <Phone size={20} />
            Call 9828820550
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-cream/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-cream/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
