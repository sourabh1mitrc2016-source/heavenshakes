import { motion } from "framer-motion";
import { Leaf, Heart, Award, Coffee } from "lucide-react";
import cafeInterior from "@/assets/cafe-interior.jpg";

const highlights = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Hum sirf fresh aur quality ingredients use karte hain" },
  { icon: Heart, title: "Made with Love", desc: "Har shake mein pyaar aur passion ka tadka" },
  { icon: Award, title: "Premium Quality", desc: "Top-class quality jo aapko aur kahin nahi milegi" },
  { icon: Coffee, title: "100+ Flavors", desc: "Har mood ke liye perfect shake ya coffee" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src={cafeInterior}
                alt="Heaven Shakes cafe interior"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 sm:right-6 glass-card p-5 max-w-[200px]"
            >
              <p className="font-display text-3xl font-bold text-caramel">500+</p>
              <p className="text-sm text-muted-foreground font-body">Happy Customers Har Din! 🎉</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-caramel font-body font-semibold text-sm uppercase tracking-widest">
              Hamari Kahani
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
              About Heaven Shakes
            </h2>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-4">
              Heaven Shakes ki shuruaat ek simple dream se hui — ek aisi jagah banana jahan log 
              best quality thick shakes aur cold coffee enjoy kar sake, apne dost aur family ke saath.
            </p>
            <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
              Ghanta Ghar pe humara cozy cafe aapka favourite hangout spot hai. Fresh ingredients, 
              unique recipes, aur bohot saara love — yahi hai Heaven Shakes ka secret! 💫
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-card p-4 text-center"
                >
                  <item.icon size={28} className="mx-auto text-caramel mb-2" />
                  <h4 className="font-body font-semibold text-sm text-primary">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
