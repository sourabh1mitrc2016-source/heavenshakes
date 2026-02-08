import { Instagram, Facebook, MessageCircle, Phone, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">
              Heaven <span className="text-caramel">Shakes</span>
            </h3>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
              Taste the Heaven in Every Sip ☕🍫<br />
              Ghanta Ghar ka sabse favourite cafe!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-base mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const el = document.querySelector(`#${link.toLowerCase()}`);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block font-body text-sm text-primary-foreground/70 hover:text-caramel transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-body font-semibold text-base mb-4">Connect With Us</h4>
            <div className="space-y-3 mb-6">
              <a href="tel:9828820550" className="flex items-center gap-2 text-sm font-body text-primary-foreground/70 hover:text-caramel transition-colors">
                <Phone size={16} /> +91 9828820550
              </a>
              <a
                href="https://wa.me/919828820550"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-body text-primary-foreground/70 hover:text-caramel transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-caramel/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-caramel/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://wa.me/919828820550"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-caramel/20 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="font-body text-xs text-primary-foreground/50 flex items-center justify-center gap-1">
            Made with <Heart size={12} className="text-accent fill-accent" /> Heaven Shakes © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
