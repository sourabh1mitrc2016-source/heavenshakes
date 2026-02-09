import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Store as StoreIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { stores, getDistance, type Store } from "@/data/stores";
import StoreCard from "@/components/store-locator/StoreCard";
import StoreMap from "@/components/store-locator/StoreMap";
import SearchFilter from "@/components/store-locator/SearchFilter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const StoreLocator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [activeStore, setActiveStore] = useState<Store | null>(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  const filteredStores = useMemo(() => {
    let result = stores;

    if (selectedState) {
      result = result.filter((s) => s.state === selectedState);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.city.toLowerCase().includes(q) ||
          s.state.toLowerCase().includes(q) ||
          s.name.toLowerCase().includes(q) ||
          s.address.toLowerCase().includes(q)
      );
    }

    // Sort by distance if user location available
    if (userLocation) {
      result = [...result].sort(
        (a, b) =>
          getDistance(userLocation.lat, userLocation.lng, a.lat, a.lng) -
          getDistance(userLocation.lat, userLocation.lng, b.lat, b.lng)
      );
    }

    return result;
  }, [searchQuery, selectedState, userLocation]);

  const distances = useMemo(() => {
    if (!userLocation) return null;
    const map: Record<string, number> = {};
    stores.forEach((s) => {
      map[s.id] = getDistance(userLocation.lat, userLocation.lng, s.lat, s.lng);
    });
    return map;
  }, [userLocation]);

  const handleFindNearest = useCallback(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserLocation(loc);

        // Find and highlight nearest
        let nearest: Store | null = null;
        let minDist = Infinity;
        stores.forEach((s) => {
          const d = getDistance(loc.lat, loc.lng, s.lat, s.lng);
          if (d < minDist) {
            minDist = d;
            nearest = s;
          }
        });
        if (nearest) {
          setActiveStore(nearest);
          setSelectedState("");
          setSearchQuery("");
        }
        setIsLocating(false);
      },
      () => {
        alert("Location access denied. Please enable location permissions.");
        setIsLocating(false);
      }
    );
  }, []);

  return (
    <main className="overflow-x-hidden min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-12 section-padding bg-gradient-to-b from-pastel-peach/30 to-background">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-caramel font-body font-semibold text-sm uppercase tracking-widest">
              Find Us Near You
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3">
              Store <span className="gradient-text">Locator</span>
            </h1>
            <p className="text-muted-foreground font-body mt-3 max-w-lg">
              Apne nearest Heaven Shakes outlet ko dhundho aur fresh shakes ka maza lo! 🍹📍
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <SearchFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedState={selectedState}
              onStateChange={setSelectedState}
              onFindNearest={handleFindNearest}
              isLocating={isLocating}
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content: Store List + Map */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Store List */}
            <div className="lg:col-span-2 space-y-4 max-h-[700px] overflow-y-auto pr-1 custom-scrollbar">
              <div className="flex items-center gap-2 mb-2">
                <StoreIcon size={16} className="text-caramel" />
                <span className="font-body text-sm font-semibold text-muted-foreground">
                  {filteredStores.length} store{filteredStores.length !== 1 ? "s" : ""} found
                </span>
              </div>

              {filteredStores.length === 0 ? (
                <div className="glass-card p-8 text-center">
                  <p className="font-body text-muted-foreground">
                    Koi store nahi mila. Try a different search! 🔍
                  </p>
                </div>
              ) : (
                filteredStores.map((store) => (
                  <StoreCard
                    key={store.id}
                    store={store}
                    isActive={activeStore?.id === store.id}
                    distance={distances ? distances[store.id] : null}
                    onSelect={setActiveStore}
                  />
                ))
              )}
            </div>

            {/* Map */}
            <div className="lg:col-span-3 sticky top-28">
              <StoreMap stores={filteredStores} activeStore={activeStore} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  );
};

export default StoreLocator;
