import { useMemo } from "react";
import type { Store } from "@/data/stores";

interface StoreMapProps {
  stores: Store[];
  activeStore: Store | null;
}

const StoreMap = ({ stores, activeStore }: StoreMapProps) => {
  const mapSrc = useMemo(() => {
    if (activeStore) {
      return `https://www.google.com/maps?q=${activeStore.lat},${activeStore.lng}&z=15&output=embed`;
    }

    // Show India overview with all store markers
    const center = "26.9,77.5";
    return `https://www.google.com/maps?q=${center}&z=5&output=embed`;
  }, [activeStore]);

  return (
    <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[350px] lg:min-h-[500px] border border-border/50">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 350 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Heaven Shakes Store Locations"
        className="w-full h-full"
      />
    </div>
  );
};

export default StoreMap;
