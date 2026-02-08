import { motion } from "framer-motion";
import { Star } from "lucide-react";
import shakeChocolate from "@/assets/shake-chocolate.jpg";
import shakeOreo from "@/assets/shake-oreo.jpg";
import shakeStrawberry from "@/assets/shake-strawberry.jpg";
import coldCoffee from "@/assets/cold-coffee.jpg";

const featured = [
  {
    name: "Chocolate Blast",
    desc: "Rich chocolate shake with chocolate chips",
    price: "₹120",
    image: shakeChocolate,
    tag: "Bestseller 🔥",
  },
  {
    name: "Oreo Cream",
    desc: "Creamy oreo shake with cookie crumbs",
    price: "₹130",
    image: shakeOreo,
    tag: "Most Loved ❤️",
  },
  {
    name: "Strawberry Bliss",
    desc: "Fresh strawberry shake with real fruits",
    price: "₹110",
    image: shakeStrawberry,
    tag: "New ✨",
  },
  {
    name: "Classic Cold Coffee",
    desc: "Smooth iced coffee with cream swirl",
    price: "₹100",
    image: coldCoffee,
    tag: "Popular ⭐",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const FeaturedShakes = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-caramel font-body font-semibold text-sm uppercase tracking-widest">
            Our Specials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3">
            🪔 Diwali Best Sellers 🪔
          </h2>
          <p className="text-muted-foreground font-body mt-3 max-w-md mx-auto">
            Is tyohaar, special shakes ke saath celebrate karo Diwali! 🎆✨
          </p>
          {/* Diwali offer badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 mt-4 px-5 py-2 rounded-full font-body font-semibold text-sm diwali-glow"
            style={{ background: "var(--gradient-diwali)", color: "hsl(var(--warm-white))" }}
          >
            <span>🎁</span> Diwali Special — Flat 20% OFF on All Shakes! <span>🎁</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className="glass-card hover-lift overflow-hidden group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-body font-semibold text-primary">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-caramel text-caramel" />
                  ))}
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm font-body mt-1">
                  {item.desc}
                </p>
                <p className="text-caramel font-display text-xl font-bold mt-3">
                  {item.price}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedShakes;
