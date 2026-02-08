import { motion } from "framer-motion";
import shakeChocolate from "@/assets/shake-chocolate.jpg";
import shakeOreo from "@/assets/shake-oreo.jpg";
import shakeStrawberry from "@/assets/shake-strawberry.jpg";
import shakeMango from "@/assets/shake-mango.jpg";
import coldCoffee from "@/assets/cold-coffee.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import galleryFlatlay from "@/assets/gallery-flatlay.jpg";
import shakeButterscotch from "@/assets/shake-butterscotch.jpg";

const images = [
  { src: galleryFlatlay, alt: "Colorful shakes collection", span: "col-span-2 row-span-2" },
  { src: shakeChocolate, alt: "Chocolate shake", span: "" },
  { src: cafeInterior, alt: "Cafe interior", span: "" },
  { src: shakeStrawberry, alt: "Strawberry shake", span: "" },
  { src: coldCoffee, alt: "Cold coffee", span: "" },
  { src: shakeOreo, alt: "Oreo shake", span: "col-span-2" },
  { src: shakeMango, alt: "Mango shake", span: "" },
  { src: shakeButterscotch, alt: "Butterscotch shake", span: "" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-caramel font-body font-semibold text-sm uppercase tracking-widest">
            Vibes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3">
            Gallery
          </h2>
          <p className="text-muted-foreground font-body mt-3 max-w-md mx-auto">
            Heaven Shakes ke best moments aur delicious creations 📸
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`${img.span} overflow-hidden rounded-2xl group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[180px] object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
