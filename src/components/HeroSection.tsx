import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-shake.jpg";
import { Diya, RangoliCorner } from "./DiwaliDecorations";

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
        {/* Diwali golden overlay */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, hsl(var(--diwali-gold) / 0.3), transparent 70%)",
          }}
        />
      </div>

      {/* Rangoli corners */}
      <RangoliCorner position="top-left" />
      <RangoliCorner position="top-right" />
      <RangoliCorner position="bottom-left" />
      <RangoliCorner position="bottom-right" />

      {/* Diyas at the bottom */}
      <Diya delay={0.5} x="5%" bottom="40px" />
      <Diya delay={0.8} x="20%" bottom="30px" />
      <Diya delay={1.1} x="75%" bottom="35px" />
      <Diya delay={1.4} x="92%" bottom="45px" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Diwali special badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-diwali-gold/20 text-diwali-gold text-sm font-body font-semibold mb-4 backdrop-blur-sm border border-diwali-gold/30">
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🪔
            </motion.span>
            Diwali Special Offers
            <motion.span
              animate={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              🪔
            </motion.span>
          </span>
        </motion.div>

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
          className="font-body text-lg sm:text-xl md:text-2xl text-cream/90 mb-4 max-w-2xl mx-auto"
        >
          Taste the Heaven in Every Sip ☕🍫
        </motion.p>

        {/* Diwali tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-base sm:text-lg text-diwali-gold/90 mb-10"
        >
          ✨ Is Diwali, meetha ho jaaye! ✨
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
