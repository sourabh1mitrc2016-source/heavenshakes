import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const DiwaliBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -60, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[60] diwali-banner"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 relative">
        <motion.span
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-lg"
        >
          🪔
        </motion.span>
        <p className="font-body text-sm font-medium text-center">
          <span className="font-semibold">Happy Diwali!</span>{" "}
          <span className="hidden sm:inline">
            Diwali Special Shakes pe flat <span className="font-bold text-yellow-200">20% OFF</span> — sirf limited time! 🎆✨
          </span>
          <span className="sm:hidden">
            Flat <span className="font-bold text-yellow-200">20% OFF</span> on Special Shakes! 🎆
          </span>
        </p>
        <motion.span
          animate={{ rotate: [0, -15, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="text-lg"
        >
          🪔
        </motion.span>

        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close banner"
        >
          <X size={16} />
        </button>
      </div>
    </motion.div>
  );
};

export default DiwaliBanner;
