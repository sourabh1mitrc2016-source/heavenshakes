import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Sparkle particles floating across the page
const Sparkle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1.2, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 4 + 2,
      ease: "easeInOut",
    }}
  >
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z"
        fill="hsl(var(--diwali-gold))"
        fillOpacity={0.8}
      />
    </svg>
  </motion.div>
);

// Floating Diya (oil lamp) component
const Diya = ({ delay, x, bottom }: { delay: number; x: string; bottom: string }) => (
  <motion.div
    className="absolute pointer-events-none z-10"
    style={{ left: x, bottom }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8 }}
  >
    <div className="relative">
      {/* Flame */}
      <motion.div
        className="absolute -top-4 left-1/2 -translate-x-1/2"
        animate={{
          scaleY: [1, 1.3, 1, 1.15, 1],
          scaleX: [1, 0.85, 1, 0.9, 1],
          opacity: [0.9, 1, 0.85, 1, 0.9],
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-3 h-5 rounded-full bg-gradient-to-t from-orange-500 via-yellow-400 to-yellow-200 blur-[1px]" />
        <div className="absolute inset-0 w-3 h-5 rounded-full bg-gradient-to-t from-orange-400 via-yellow-300 to-white opacity-70 blur-[2px]" />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full"
        style={{ background: "radial-gradient(circle, hsl(40 100% 60% / 0.4), transparent)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Diya body */}
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
        <ellipse cx="14" cy="6" rx="14" ry="6" fill="hsl(var(--diwali-terracotta))" />
        <ellipse cx="14" cy="6" rx="10" ry="4" fill="hsl(var(--diwali-terracotta-light))" />
        <ellipse cx="14" cy="8" rx="14" ry="8" fill="hsl(var(--diwali-terracotta))" opacity="0.6" />
      </svg>
    </div>
  </motion.div>
);

// Rangoli pattern (decorative corner element)
const RangoliCorner = ({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const posClasses = {
    "top-left": "top-0 left-0 rotate-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };

  return (
    <motion.div
      className={`absolute ${posClasses[position]} pointer-events-none opacity-20 hidden lg:block`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.15 }}
      transition={{ duration: 1.5 }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle cx="0" cy="0" r="100" stroke="hsl(var(--diwali-gold))" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="0" cy="0" r="70" stroke="hsl(var(--diwali-orange))" strokeWidth="1" strokeDasharray="3 5" />
        <circle cx="0" cy="0" r="40" stroke="hsl(var(--diwali-gold))" strokeWidth="1.5" strokeDasharray="2 4" />
        {/* Petals */}
        {[0, 30, 60, 90].map((angle) => (
          <ellipse
            key={angle}
            cx="0"
            cy="-50"
            rx="8"
            ry="20"
            fill="hsl(var(--diwali-orange))"
            fillOpacity="0.3"
            transform={`rotate(${angle})`}
          />
        ))}
      </svg>
    </motion.div>
  );
};

// Hanging lantern decoration
const Lantern = ({ x, delay, color }: { x: string; delay: number; color: string }) => (
  <motion.div
    className="absolute top-0 pointer-events-none z-10"
    style={{ left: x }}
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 1, ease: "easeOut" }}
  >
    {/* String */}
    <div className="w-px h-6 bg-foreground/20 mx-auto" />
    {/* Lantern body */}
    <motion.div
      animate={{ rotate: [-2, 2, -2] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className={`w-8 h-12 rounded-lg ${color} relative overflow-hidden shadow-lg`}>
        {/* Inner glow */}
        <motion.div
          className="absolute inset-1 rounded bg-white/30"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Bands */}
        <div className="absolute inset-x-0 top-0 h-1.5 bg-foreground/10 rounded-t-lg" />
        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-foreground/10 rounded-b-lg" />
      </div>
      {/* Bottom tassel */}
      <div className="w-2 h-3 bg-foreground/20 mx-auto rounded-b" />
    </motion.div>
  </motion.div>
);

// Light string (toran / string of lights)
const LightString = () => {
  const lights = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none overflow-hidden h-8">
      <svg className="w-full h-8" viewBox="0 0 1200 32" preserveAspectRatio="none">
        {/* Curved string */}
        <path
          d="M0,4 Q100,28 200,4 Q300,28 400,4 Q500,28 600,4 Q700,28 800,4 Q900,28 1000,4 Q1100,28 1200,4"
          stroke="hsl(var(--diwali-gold) / 0.3)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
      {/* Bulbs */}
      {lights.map((i) => {
        const colors = [
          "bg-yellow-400",
          "bg-orange-400",
          "bg-red-400",
          "bg-green-400",
          "bg-yellow-300",
          "bg-pink-400",
        ];
        const x = (i / 11) * 100;
        const y = i % 2 === 0 ? 2 : 20;

        return (
          <motion.div
            key={i}
            className={`absolute w-2.5 h-3 rounded-full ${colors[i % colors.length]} shadow-sm`}
            style={{ left: `${x}%`, top: `${y}px` }}
            animate={{
              opacity: [0.6, 1, 0.6],
              boxShadow: [
                `0 0 4px 1px currentColor`,
                `0 0 8px 3px currentColor`,
                `0 0 4px 1px currentColor`,
              ],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

const DiwaliDecorations = () => {
  const [sparkles] = useState(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      x: `${Math.random() * 95}%`,
      y: `${Math.random() * 90}%`,
      size: Math.random() * 12 + 8,
    }))
  );

  return (
    <>
      {/* Light string at the top */}
      <LightString />

      {/* Sparkles scattered across the page */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        {sparkles.map((s) => (
          <Sparkle key={s.id} delay={s.delay} x={s.x} y={s.y} size={s.size} />
        ))}
      </div>
    </>
  );
};

export default DiwaliDecorations;
export { Diya, RangoliCorner, Lantern };
