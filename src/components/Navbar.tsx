import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/heaven-shakes-logo.png";


const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-[0_2px_20px_0_rgba(0,0,0,0.08)] py-1"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Left spacer for balance */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          {navLinks.slice(0, 3).map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-body text-sm font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-caramel after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Center Logo */}
        <button
          onClick={() => handleNavClick("#home")}
          className="absolute left-1/2 -translate-x-1/2 flex items-center flex-shrink-0"
          aria-label="Go to top"
        >
          <img
            src={logo}
            alt="The Heaven's Shakes - Premium Juice & Shakes Cafe Since 1984"
            className="h-[110px] sm:h-[130px] md:h-[140px] w-auto object-contain drop-shadow-lg"
            loading="eager"
          />
        </button>

        {/* Right Nav */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          {navLinks.slice(3).map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-body text-sm font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-caramel after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white"}`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:9828820550"
            className="call-btn text-sm"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-primary" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-body text-base font-medium text-foreground/80 hover:text-primary transition-colors text-left py-2"
                >
                  {link.label}
                </button>
              ))}
              <a href="tel:9828820550" className="call-btn text-sm w-fit">
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
