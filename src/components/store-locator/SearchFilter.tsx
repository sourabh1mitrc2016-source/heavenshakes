import { Search, MapPin, LocateFixed } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getUniqueStates } from "@/data/stores";

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedState: string;
  onStateChange: (value: string) => void;
  onFindNearest: () => void;
  isLocating: boolean;
}

const SearchFilter = ({
  searchQuery,
  onSearchChange,
  selectedState,
  onStateChange,
  onFindNearest,
  isLocating,
}: SearchFilterProps) => {
  const states = getUniqueStates();

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search by City or State..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 rounded-full bg-card border-border/60 font-body text-sm h-11"
        />
      </div>

      {/* State Filter */}
      <div className="relative">
        <MapPin size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <select
          value={selectedState}
          onChange={(e) => onStateChange(e.target.value)}
          className="appearance-none pl-10 pr-8 h-11 rounded-full bg-card border border-border/60 font-body text-sm text-foreground cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-full sm:w-auto"
        >
          <option value="">All States</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* Nearest Store Button */}
      <button
        onClick={onFindNearest}
        disabled={isLocating}
        className="inline-flex items-center justify-center gap-2 px-5 h-11 rounded-full font-body font-semibold text-sm bg-caramel text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-50 disabled:translate-y-0 whitespace-nowrap"
        style={{ boxShadow: "var(--shadow-soft)" }}
      >
        <LocateFixed size={16} className={isLocating ? "animate-spin" : ""} />
        {isLocating ? "Locating..." : "Nearest Store"}
      </button>
    </div>
  );
};

export default SearchFilter;
