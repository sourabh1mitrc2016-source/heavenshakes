import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-caramel font-body font-semibold text-sm uppercase tracking-widest">
            Visit Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3">
            Order & Contact
          </h2>
          <p className="text-muted-foreground font-body mt-3 max-w-md mx-auto">
            Aaj hi order karo ya humse milne aao Ghanta Ghar pe! 🏪
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-pastel-peach/50 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-primary text-base">Address</h3>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  Ghanta Ghar, Near Main Market<br />
                  India
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-pastel-peach/50 flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-primary text-base">Phone</h3>
                <a href="tel:9828820550" className="text-caramel font-body font-semibold text-sm mt-1 block hover:underline">
                  +91 9828820550
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-pastel-peach/50 flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-primary text-base">Timings</h3>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  Mon - Sun: 11:00 AM – 11:00 PM<br />
                  <span className="text-caramel font-medium">Open All Days! 🎉</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919828820550?text=Hi!%20I%20want%20to%20order%20from%20Heaven%20Shakes%20🍹"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn text-sm justify-center flex-1"
              >
                <MessageCircle size={18} />
                WhatsApp Order
              </a>
              <a href="tel:9828820550" className="call-btn text-sm justify-center flex-1">
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[350px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5!2d75.8235!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDknMjQuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Heaven Shakes Location - Ghanta Ghar"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
