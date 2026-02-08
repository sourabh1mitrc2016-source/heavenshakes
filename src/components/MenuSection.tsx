import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import shakeChocolate from "@/assets/shake-chocolate.jpg";
import shakeOreo from "@/assets/shake-oreo.jpg";
import shakeStrawberry from "@/assets/shake-strawberry.jpg";
import shakeMango from "@/assets/shake-mango.jpg";
import shakeButterscotch from "@/assets/shake-butterscotch.jpg";
import coldCoffee from "@/assets/cold-coffee.jpg";
import snacksImg from "@/assets/snacks.jpg";

type Category = "thick-shakes" | "chocolate-shakes" | "cold-coffee" | "snacks";

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: "thick-shakes", label: "Thick Shakes", emoji: "🥤" },
  { key: "chocolate-shakes", label: "Chocolate Shakes", emoji: "🍫" },
  { key: "cold-coffee", label: "Cold Coffee", emoji: "☕" },
  { key: "snacks", label: "Snacks", emoji: "🍟" },
];

const menuItems: Record<Category, { name: string; price: string; desc: string; image: string }[]> = {
  "thick-shakes": [
    { name: "Strawberry Thick Shake", price: "₹110", desc: "Fresh strawberry with creamy milk", image: shakeStrawberry },
    { name: "Mango Thick Shake", price: "₹120", desc: "Seasonal mango with rich cream", image: shakeMango },
    { name: "Butterscotch Thick Shake", price: "₹120", desc: "Caramel butterscotch delight", image: shakeButterscotch },
    { name: "Oreo Thick Shake", price: "₹130", desc: "Loaded oreo cookies with cream", image: shakeOreo },
  ],
  "chocolate-shakes": [
    { name: "Chocolate Blast", price: "₹120", desc: "Double chocolate with choco chips", image: shakeChocolate },
    { name: "Dark Chocolate", price: "₹130", desc: "Rich dark cocoa for chocolate lovers", image: shakeChocolate },
    { name: "Chocolate Oreo", price: "₹140", desc: "Chocolate meets oreo – ultimate combo", image: shakeOreo },
    { name: "Nutella Shake", price: "₹150", desc: "Premium Nutella blended with milk", image: shakeButterscotch },
  ],
  "cold-coffee": [
    { name: "Classic Cold Coffee", price: "₹90", desc: "Smooth and refreshing classic brew", image: coldCoffee },
    { name: "Hazelnut Cold Coffee", price: "₹110", desc: "Rich hazelnut flavored coffee", image: coldCoffee },
    { name: "Mocha Cold Coffee", price: "₹120", desc: "Chocolate + coffee = perfection", image: coldCoffee },
    { name: "Caramel Cold Coffee", price: "₹110", desc: "Sweet caramel swirl coffee", image: coldCoffee },
  ],
  snacks: [
    { name: "Loaded Fries", price: "₹80", desc: "Cheese loaded crispy french fries", image: snacksImg },
    { name: "Garlic Bread", price: "₹70", desc: "Buttery garlic bread with herbs", image: snacksImg },
    { name: "Sandwich", price: "₹90", desc: "Grilled veg sandwich with cheese", image: snacksImg },
    { name: "Pasta", price: "₹100", desc: "Creamy white sauce pasta", image: snacksImg },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<Category>("thick-shakes");

  return (
    <section id="menu" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-caramel font-body font-semibold text-sm uppercase tracking-widest">
            Explore
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3">
            Our Menu
          </h2>
          <p className="text-muted-foreground font-body mt-3 max-w-md mx-auto">
            Har craving ka ilaaj — choose your favourite category!
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2.5 rounded-full font-body font-medium text-sm transition-all duration-300 ${
                active === cat.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-background/80 text-muted-foreground hover:bg-background hover:text-primary border border-border"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {menuItems[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="glass-card hover-lift overflow-hidden group"
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold text-primary">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-xs font-body mt-1">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <p className="text-caramel font-display text-lg font-bold">
                      {item.price}
                    </p>
                    <a
                      href={`https://wa.me/919828820550?text=Hi!%20I%20want%20to%20order%20${encodeURIComponent(item.name)}%20from%20Heaven%20Shakes%20🍹`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-body font-semibold text-primary bg-secondary px-3 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      Order
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
