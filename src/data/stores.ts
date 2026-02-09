export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
}

export const stores: Store[] = [
  {
    id: "1",
    name: "Heaven Shakes – Ghanta Ghar",
    address: "Near Main Market, Ghanta Ghar, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    phone: "9828820550",
    hours: "11:00 AM – 11:00 PM",
    lat: 26.9124,
    lng: 75.7873,
  },
  {
    id: "2",
    name: "Heaven Shakes – MI Road",
    address: "Shop No. 12, MI Road, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    phone: "9828820551",
    hours: "10:00 AM – 11:00 PM",
    lat: 26.9157,
    lng: 75.8014,
  },
  {
    id: "3",
    name: "Heaven Shakes – Vaishali Nagar",
    address: "Plot 45, Vaishali Nagar Main Road, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    phone: "9828820552",
    hours: "11:00 AM – 10:30 PM",
    lat: 26.9116,
    lng: 75.7264,
  },
  {
    id: "4",
    name: "Heaven Shakes – Connaught Place",
    address: "Block A, Inner Circle, Connaught Place, New Delhi",
    city: "New Delhi",
    state: "Delhi",
    phone: "9828820553",
    hours: "10:00 AM – 11:00 PM",
    lat: 28.6315,
    lng: 77.2167,
  },
  {
    id: "5",
    name: "Heaven Shakes – Saket",
    address: "Select Citywalk Mall, Saket, New Delhi",
    city: "New Delhi",
    state: "Delhi",
    phone: "9828820554",
    hours: "11:00 AM – 10:00 PM",
    lat: 28.5285,
    lng: 77.2190,
  },
  {
    id: "6",
    name: "Heaven Shakes – C Scheme",
    address: "Near Gaurav Tower, C Scheme, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    phone: "9828820555",
    hours: "10:30 AM – 11:00 PM",
    lat: 26.9060,
    lng: 75.7948,
  },
  {
    id: "7",
    name: "Heaven Shakes – SG Highway",
    address: "Shop 8, SG Highway, Near Iscon Temple, Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    phone: "9828820556",
    hours: "10:00 AM – 10:30 PM",
    lat: 23.0225,
    lng: 72.5714,
  },
  {
    id: "8",
    name: "Heaven Shakes – Bani Park",
    address: "Bani Park Main Road, Near Collectorate Circle, Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    phone: "9828820557",
    hours: "11:00 AM – 10:00 PM",
    lat: 26.9300,
    lng: 75.7900,
  },
  {
    id: "9",
    name: "Heaven Shakes – Udaipur",
    address: "Near Fateh Sagar Lake, Panchwati, Udaipur",
    city: "Udaipur",
    state: "Rajasthan",
    phone: "9828820558",
    hours: "10:00 AM – 10:30 PM",
    lat: 24.5854,
    lng: 73.6801,
  },
  {
    id: "10",
    name: "Heaven Shakes – Jodhpur",
    address: "Near Clock Tower, Sardar Market, Jodhpur",
    city: "Jodhpur",
    state: "Rajasthan",
    phone: "9828820559",
    hours: "11:00 AM – 11:00 PM",
    lat: 26.2967,
    lng: 73.0166,
  },
  {
    id: "11",
    name: "Heaven Shakes – Lucknow",
    address: "Hazratganj Main Road, Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    phone: "9828820560",
    hours: "10:00 AM – 10:30 PM",
    lat: 26.8467,
    lng: 80.9462,
  },
  {
    id: "12",
    name: "Heaven Shakes – Indore",
    address: "56 Dukan, Chappan Dukan Area, Indore",
    city: "Indore",
    state: "Madhya Pradesh",
    phone: "9828820561",
    hours: "11:00 AM – 11:00 PM",
    lat: 22.7196,
    lng: 75.8577,
  },
];

export const getUniqueStates = (): string[] => {
  return [...new Set(stores.map((s) => s.state))].sort();
};

export const getUniqueCities = (): string[] => {
  return [...new Set(stores.map((s) => s.city))].sort();
};

export function getDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}
