import { motion } from "framer-motion";
import storeFront from "@/assets/store-front.jpg";
import storeShake from "@/assets/store-shake.jpg";
import storeInterior from "@/assets/store-interior.jpg";
import storeOutdoor from "@/assets/store-outdoor.jpg";

const images = [
  { src: storeFront, alt: "Heaven Shakes store front", span: "col-span-2 row-span-2" },
  { src: storeShake, alt: "Heaven Shakes branded shake", span: "" },
  { src: storeInterior, alt: "Cafe interior with honeycomb decor", span: "" },
  { src: storeOutdoor, alt: "Outdoor seating area", span: "col-span-2" },
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
