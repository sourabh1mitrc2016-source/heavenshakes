import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    review: "Best shakes in the city! Chocolate Blast is my all-time favourite. Har weekend aata hoon! 🍫",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Priya Gupta",
    review: "Oreo shake is heavenly! Literally taste the heaven in every sip. Amazing place for hangout ❤️",
    rating: 5,
    avatar: "PG",
  },
  {
    name: "Amit Singh",
    review: "Cold coffee yahan ki bohot smooth hai. Staff bhi friendly hai. Highly recommended! ⭐",
    rating: 5,
    avatar: "AS",
  },
  {
    name: "Sneha Jain",
    review: "Family ke saath gaye the, sabko bohot pasand aaya. Loaded fries aur mango shake — perfect combo! 🥭",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Vikash Kumar",
    review: "Ambience bohot accha hai, Instagram worthy! Aur prices bhi bohot reasonable hain 💯",
    rating: 4,
    avatar: "VK",
  },
  {
    name: "Neha Verma",
    review: "Date night ke liye perfect spot hai. Butterscotch shake try karo, you won't regret! 🦋",
    rating: 5,
    avatar: "NV",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-caramel font-body font-semibold text-sm uppercase tracking-widest">
            Love from Customers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3">
            Customer Reviews
          </h2>
          <p className="text-muted-foreground font-body mt-3 max-w-md mx-auto">
            Humein kya kaha customers ne — suniye unke experience! 💬
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-6 hover-lift relative"
            >
              <Quote size={32} className="text-caramel/20 absolute top-4 right-4" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-body font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-body font-semibold text-primary text-sm">{review.name}</h4>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} size={12} className="fill-caramel text-caramel" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                "{review.review}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
