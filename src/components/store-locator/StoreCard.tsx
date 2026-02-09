import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import type { Store } from "@/data/stores";

interface StoreCardProps {
  store: Store;
  isActive: boolean;
  distance?: number | null;
  onSelect: (store: Store) => void;
}

const StoreCard = ({ store, isActive, distance, onSelect }: StoreCardProps) => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => onSelect(store)}
      className={`glass-card p-5 cursor-pointer transition-all duration-300 hover-lift ${
        isActive ? "ring-2 ring-caramel diwali-glow" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-display text-base font-bold text-primary leading-snug">
          {store.name}
        </h3>
        {distance != null && (
          <span className="text-xs font-body font-semibold text-caramel bg-pastel-peach/50 px-2.5 py-1 rounded-full whitespace-nowrap">
            {distance.toFixed(1)} km
          </span>
        )}
      </div>

      <div className="space-y-2.5">
        <div className="flex items-start gap-2.5">
          <MapPin size={15} className="text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{store.address}</p>
        </div>
        <div className="flex items-center gap-2.5">
          <Clock size={15} className="text-muted-foreground flex-shrink-0" />
          <p className="font-body text-sm text-muted-foreground">{store.hours}</p>
        </div>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <a
          href={`tel:${store.phone}`}
          onClick={(e) => e.stopPropagation()}
          className="call-btn text-xs py-2 px-4"
        >
          <Phone size={14} />
          Call Now
        </a>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-caramel text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <Navigation size={14} />
          Get Directions
        </a>
      </div>
    </motion.div>
  );
};

export default StoreCard;
