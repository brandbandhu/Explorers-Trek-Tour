import heroMountains from "@/assets/hero-mountains.jpg";
import heroCamping from "@/assets/hero-camping.jpg";
import heroKids from "@/assets/hero-kids.jpg";
import heroWomen from "@/assets/hero-women.jpg";

export type TourType = "Weekend Trek" | "Himalayan Trek" | "Camping" | "Tour" | "Wildlife Tour" | "Speciality Tour";

export interface Batch {
  label: string;
  date: string;
  price: number;
  seats?: string;
}

export interface Trek {
  id: string;
  title: string;
  location: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Difficult" | "Extreme";
  endurance: "Low" | "Medium" | "High" | "Very High";
  ageGroup: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag: string;
  reporting: string;
  description: string;
  overview: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  includes: string[];
  excludes: string[];
  month: string[];
  tourType: TourType;
  gallery: string[];
  batches: Batch[];
  featured?: boolean;
}

export const brand = {
  name: "Explorers",
  fullName: "Explorers Treks & Tours",
  tagline: "The Name of Excellence Since 2001",
  logoText: "EXPLORERS",
  whatsapp: "9850504437",
  address: "1692, Bhagyadarshan Building, Shop No 5, Sadashiv Peth, Tilak Road, Pune 411030",
};

export const heroSlides = [
  { image: heroMountains, title: "Weekend Treks", subtitle: "Guided Sahyadri escapes from Pune and Mumbai.", link: "/treks?type=Weekend+Trek" },
  { image: heroKids, title: "Junior Explorers", subtitle: "Safe outdoor learning programs for young adventurers.", link: "/programs/junior-explorers" },
  { image: heroWomen, title: "Lady Explorers", subtitle: "Women-only treks, camps, tours, and friendships.", link: "/programs/lady-explorers" },
  { image: heroMountains, title: "Silver Explorers", subtitle: "Comfortable, carefully paced trips for 40+ explorers.", link: "/programs/silver-explorers" },
  { image: heroCamping, title: "Camping", subtitle: "Lake, forest, and mountain stays under open skies.", link: "/treks?type=Camping" },
  { image: heroWomen, title: "Himalayan Treks", subtitle: "High-altitude journeys led by trained teams.", link: "/treks?type=Himalayan+Trek" },
  { image: heroCamping, title: "Customise Your Tour", subtitle: "Private domestic, international, school, and corporate plans.", link: "/programs/customised-packages" },
  { image: heroKids, title: "Atlas", subtitle: "Adventure leadership training academy by Explorers.", link: "/atlas" },
  { image: heroMountains, title: "Jungle Safari", subtitle: "Wildlife tours across India's iconic national parks.", link: "/programs/wildlife-tours" },
];

export const globalSchedule = [
  { date: "01 June 2026", title: "Andharban", type: "Weekend Trek", month: "June", year: "2026" },
  { date: "10 June 2026", title: "Devkund Waterfall", type: "Weekend Trek", month: "June", year: "2026" },
  { date: "15 July 2026", title: "Madheghat Waterfall Rappelling", type: "Weekend Trek", month: "July", year: "2026" },
  { date: "25 August 2026", title: "Pavna Camping", type: "Camping", month: "August", year: "2026" },
  { date: "12 September 2026", title: "Lady Explorers Monsoon Special", type: "Speciality Tour", month: "September", year: "2026" },
  { date: "18 October 2026", title: "Himalayan Base Camp Briefing", type: "Himalayan Trek", month: "October", year: "2026" },
  { date: "01 January 2027", title: "Silver Explorers New Year Trail", type: "Speciality Tour", month: "January", year: "2027" },
];

export const trustStats = [
  { number: "24+", label: "Years Experience", note: "Since 2001", icon: "24+" },
  { number: "Certified", label: "Maharashtra Tourism", note: "Recognised operator", icon: "MT" },
  { number: "100%", label: "Safety Record", note: "Trained leaders", icon: "100" },
  { number: "4.7", label: "Google Rating", note: "5-star reviews", icon: "4.7" },
  { number: "5000+", label: "Treks Completed", note: "Across India", icon: "5K" },
];

export const treks: Trek[] = [
  {
    id: "andharban",
    title: "Andharban",
    location: "Bhira, Maharashtra",
    duration: "1 Day",
    difficulty: "Moderate",
    endurance: "Medium",
    ageGroup: "12-60",
    price: 1499,
    image: heroMountains,
    tag: "Trending",
    reporting: "Pune to Pune",
    description: "A misty forest descent through the famous dark forest route near Bhira.",
    overview: "Andharban is one of the most loved weekend treks near Pune-Mumbai, ideal for monsoon treks near Pune, guided treks Pune, and beginner trekking routes with a professional team. Explorers Group offers professionally guided Treks in Sahyadri, covering one-day and multi-day trekking experiences across summer, monsoon and winter seasons.",
    highlights: ["Dense Sahyadri forest trail", "Waterfalls and valley views", "Professional trek leader", "Great monsoon photography", "Beginner-friendly pacing"],
    itinerary: [{ day: 1, title: "Pune to Bhira and forest trek", description: "Early pickup from Pune, breakfast en route, guided Andharban trail walk, lunch, descent, and return by late evening." }],
    includes: ["Transport from Pune", "Breakfast and lunch", "Trek leader", "First aid", "Basic expertise charges"],
    excludes: ["Personal expenses", "Insurance", "Anything not mentioned in includes"],
    month: ["Jun", "Jul", "Aug", "Sep"],
    tourType: "Weekend Trek",
    gallery: [heroMountains, heroWomen, heroCamping],
    batches: [
      { label: "Batch 1", date: "01 June 2026", price: 1499, seats: "Filling Fast" },
      { label: "Batch 2", date: "10 June 2026", price: 1499, seats: "Open" },
      { label: "Batch 3", date: "15 July 2026", price: 1499, seats: "8 seats left" },
      { label: "Batch 4", date: "25 August 2026", price: 1499, seats: "Open" },
      { label: "Batch 5", date: "01 January 2027", price: 1499, seats: "Open" },
    ],
    featured: true,
  },
  {
    id: "devkund-waterfall",
    title: "Devkund Waterfall",
    location: "Bhira, Maharashtra",
    duration: "1 Day",
    difficulty: "Easy",
    endurance: "Low",
    ageGroup: "10-60",
    price: 1499,
    image: heroCamping,
    tag: "Must Do",
    reporting: "Pune to Pune",
    description: "A classic waterfall trail to the turquoise plunge pool of Devkund.",
    overview: "Devkund is a popular one day trek near Pune and Mumbai, perfect for guided treks Pune, weekend treks near Pune, and monsoon treks near Pune with safety-focused leaders.",
    highlights: ["Waterfall trail", "Forest walk", "Safe group management", "Ideal for first-time trekkers", "Scenic Bhira backwaters"],
    itinerary: [{ day: 1, title: "Waterfall trail", description: "Pickup, breakfast, forest walk to Devkund, lunch, return trek, evening drop." }],
    includes: ["Transport from Pune", "Meals as per plan", "Guide", "First aid"],
    excludes: ["Changing room charges", "Personal expenses", "Insurance"],
    month: ["Jun", "Jul", "Aug", "Sep", "Oct"],
    tourType: "Weekend Trek",
    gallery: [heroCamping, heroMountains, heroKids],
    batches: [
      { label: "Batch 1", date: "01 June 2026", price: 1499 },
      { label: "Batch 2", date: "10 June 2026", price: 1499 },
      { label: "Batch 3", date: "15 July 2026", price: 1499 },
      { label: "Batch 4", date: "25 August 2026", price: 1499 },
      { label: "Batch 5", date: "01 January 2027", price: 1499 },
    ],
    featured: true,
  },
  {
    id: "madheghat-rappelling",
    title: "Madheghat Waterfall Rappelling",
    location: "Kelad, Maharashtra",
    duration: "1 Day",
    difficulty: "Difficult",
    endurance: "High",
    ageGroup: "16-50",
    price: 800,
    image: heroWomen,
    tag: "Adventure Special",
    reporting: "Direct Reporting",
    description: "A high-adrenaline waterfall rappelling event in the Sahyadri.",
    overview: "Madheghat is built for adventure lovers looking for offbeat treks Maharashtra, fort treks near Pune/Mumbai, and a professionally managed technical activity.",
    highlights: ["Waterfall rappelling", "Technical safety briefing", "Helmet and harness support", "Experienced activity team", "Raw mountain setting"],
    itinerary: [{ day: 1, title: "Rappelling activity", description: "Report at Kelad, safety briefing, activity rotation, lunch break, certificate photo, and dispersal." }],
    includes: ["Activity gear", "Technical experts", "Basic first aid", "Activity charges"],
    excludes: ["Travel", "Meals", "Personal expenses"],
    month: ["Jul", "Aug", "Sep"],
    tourType: "Weekend Trek",
    gallery: [heroWomen, heroMountains, heroCamping],
    batches: [
      { label: "Batch 1", date: "01 June 2026", price: 800 },
      { label: "Batch 2", date: "10 June 2026", price: 800 },
      { label: "Batch 3", date: "15 July 2026", price: 800 },
      { label: "Batch 4", date: "25 August 2026", price: 800 },
      { label: "Batch 5", date: "01 January 2027", price: 800 },
    ],
    featured: true,
  },
  {
    id: "pavna-lake-camping",
    title: "Pavna Lake Camping",
    location: "Pavna, Maharashtra",
    duration: "1 Night",
    difficulty: "Easy",
    endurance: "Low",
    ageGroup: "5-70",
    price: 1299,
    image: heroCamping,
    tag: "Popular",
    reporting: "Direct Reporting",
    description: "Lakeside camping with tents, food, bonfire, and morning views.",
    overview: "A comfortable camping experience for families, school groups, and private groups near Pune.",
    highlights: ["Lakeside tents", "Bonfire evening", "Dinner and breakfast", "Family-friendly", "Customisable group dates"],
    itinerary: [{ day: 1, title: "Camp check-in", description: "Evening check-in, games, BBQ-style dinner, bonfire, tent stay, breakfast, and checkout." }],
    includes: ["Tent stay", "Dinner", "Breakfast", "Bonfire", "Camp coordinator"],
    excludes: ["Travel", "Extra activities", "Personal purchases"],
    month: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    tourType: "Camping",
    gallery: [heroCamping, heroKids, heroMountains],
    batches: [
      { label: "Batch 1", date: "25 August 2026", price: 1299 },
      { label: "Batch 2", date: "12 September 2026", price: 1299 },
      { label: "Batch 3", date: "01 January 2027", price: 1299 },
    ],
    featured: true,
  },
  {
    id: "kedarkantha",
    title: "Kedarkantha Trek",
    location: "Uttarakhand, Himalaya",
    duration: "6 Days",
    difficulty: "Moderate",
    endurance: "High",
    ageGroup: "14-55",
    price: 8999,
    originalPrice: 10999,
    image: heroMountains,
    tag: "Offbeat",
    reporting: "Dehradun to Dehradun",
    description: "A snow-season Himalayan summit trek with forest trails and wide mountain views.",
    overview: "A classic winter trek Maharashtra travellers love when graduating from Sahyadri treks Pune to guided Himalayan treks.",
    highlights: ["Snow summit", "Pine forests", "Camping experience", "Certified trek team", "High-altitude preparation"],
    itinerary: [
      { day: 1, title: "Dehradun to Sankri", description: "Drive to Sankri and briefing." },
      { day: 2, title: "Sankri to Juda Ka Talab", description: "Forest trek and campsite." },
      { day: 3, title: "Base camp", description: "Trek to Kedarkantha base." },
      { day: 4, title: "Summit day", description: "Early summit push and descent." },
      { day: 5, title: "Return to Sankri", description: "Descend and celebration dinner." },
      { day: 6, title: "Sankri to Dehradun", description: "Drive back." },
    ],
    includes: ["Meals on trek", "Camping equipment", "Trek leaders", "Forest permissions", "First aid"],
    excludes: ["Travel to Dehradun", "Personal gear", "Insurance", "Porter charges"],
    month: ["Dec", "Jan", "Feb", "Mar"],
    tourType: "Himalayan Trek",
    gallery: [heroMountains, heroWomen, heroCamping],
    batches: [
      { label: "Batch 1", date: "18 October 2026", price: 8999 },
      { label: "Batch 2", date: "01 January 2027", price: 8999 },
    ],
    featured: true,
  },
];

export const experienceCategories = [
  "Weekend Treks",
  "Junior Explorers",
  "Lady Explorers",
  "Silver Explorers",
  "Explorers on Wheels",
  "Camping",
  "Jungle Safari",
  "Himalayan Treks",
  "School Tours",
  "Corporate Tours",
  "Fix Departure Tours",
  "Customise Tour Packages",
  "Tours Out of Maharashtra",
  "Offbeat Tours",
  "Mountain Run",
  "ATLAS Training Academy",
  "Be A Part of Explorers",
].map((name, index) => ({
  name,
  image: [heroMountains, heroKids, heroWomen, heroCamping][index % 4],
  link: name.includes("ATLAS") ? "/atlas" : name.includes("Weekend") || name.includes("Himalayan") ? "/treks" : "/programs/customised-packages",
}));

export const awards = [
  "Maharashtra Tourism",
  "MSME",
  "NIDHI",
  "ETAA",
  "TAAP",
  "Bhartiya Paryatan Coop Society",
  "ATAOI",
  "TOI Award",
  "Paryatan Committee",
  "Innovative Tour Operator",
  "IIHM",
  "IHC London",
];

export const testimonials = [
  "Professional team, clear communication, and superb safety management.",
  "Our school tour was handled beautifully from pickup to drop.",
  "Best trekking group in Maharashtra for beginners and regular trekkers.",
  "The Lady Explorers batch felt safe, warm, and very well planned.",
];

export const pickupPoints = [
  { name: "Explorers Office", map: "https://www.google.com/maps/search/?api=1&query=Explorers+Office+Sadashiv+Peth+Pune" },
  { name: "Deccan", map: "https://www.google.com/maps/search/?api=1&query=Deccan+Pune" },
  { name: "Sancheti Hospital", map: "https://www.google.com/maps/search/?api=1&query=Sancheti+Hospital+Pune" },
  { name: "Nashik Phata", map: "https://www.google.com/maps/search/?api=1&query=Nashik+Phata+Pune" },
  { name: "Moshi", map: "https://www.google.com/maps/search/?api=1&query=Moshi+Pune" },
];

export const offers = [
  { name: "Early Bird", value: "Auto-applies for selected advance bookings" },
  { name: "Group Discount", value: "Rs.500 for 4-8, Rs.1000 for 8-15" },
  { name: "Membership Discount", value: "Lady and Silver Explorers voucher Rs.1000" },
  { name: "Repeater Discount", value: "Rs.1000 cashback after 10 treks in a financial year" },
];

export const adminModules = [
  "Hero sliders image/video",
  "Event categories and cards",
  "Seasonal tabs",
  "Detail pages and batches",
  "Prices and pickup points",
  "Itinerary and includes/excludes",
  "Offers and gallery",
  "Awards logos and testimonials",
  "Social links and calendar schedule",
  "Enquiries, bookings, users, payments, and contact details",
];

export const programDirectory = [
  { title: "Junior Explorers", subtitle: "8-16 years adventure camps and outdoor learning", link: "/programs/junior-explorers" },
  { title: "Lady Explorers", subtitle: "Women special treks, camps and tours", link: "/programs/lady-explorers" },
  { title: "Silver Explorers", subtitle: "40+ years comfortable treks and tours", link: "/programs/silver-explorers" },
  { title: "Explorers on Wheels", subtitle: "Bicycle, bike, caravan and road trips", link: "/programs/on-wheels" },
  { title: "Camping", subtitle: "Pavna, Panshet, Madheghat and Malshej stays", link: "/treks?type=Camping" },
  { title: "Jungle Safari", subtitle: "Forest safaris and wildlife learning tours", link: "/programs/wildlife-tours" },
  { title: "Himalayan Explorers", subtitle: "Guided Himalayan treks and expeditions", link: "/programs/himalayan-explorers" },
  { title: "School Tours", subtitle: "Safe educational trips and outdoor camps", link: "/programs/school-tours" },
  { title: "Corporate Tours", subtitle: "Team outings, offsites and leadership programs", link: "/programs/corporate-tours" },
  { title: "Group Tours", subtitle: "Fix departure domestic and international group tours", link: "/programs/group-tours" },
  { title: "Fix Departure Tours", subtitle: "Scheduled tours with confirmed batches", link: "/programs/fix-departure-tours" },
  { title: "Customised Packages", subtitle: "Domestic, international, honeymoon and private tours", link: "/programs/customised-packages" },
  { title: "Tours Out of Maharashtra", subtitle: "Kokan, South India, North India and pilgrimage tours", link: "/programs/tours-out-of-maharashtra" },
  { title: "Offbeat Tours", subtitle: "Hidden destinations and unusual travel experiences", link: "/programs/offbeat-tours" },
  { title: "Mountain Run", subtitle: "Trail running and Explorers Mountain Run events", link: "/programs/mountain-run" },
  { title: "ATLAS Training Academy", subtitle: "Become a part of Team Explorers", link: "/atlas" },
];

export const tourCategoryFilters = [
  "One Day Trek",
  "Camping",
  "Summer Camp",
  "Winter Camp",
  "Wildlife Safari",
  "Domestic Tour",
  "International Tour",
  "One Day Trekking Plan",
];

const programDetails: Record<string, { description: string; ageGroup: string }> = {
  "junior-explorers": {
    ageGroup: "8-16 years",
    description: "Junior Explorers programs combine safety, outdoor discipline, nature education, games, trekking basics, camping skills, and confidence-building activities for children.",
  },
  "lady-explorers": {
    ageGroup: "Women special",
    description: "Lady Explorers offers women-only treks, tours, camping batches, monsoon outings, and curated travel experiences with trusted planning and comfortable group support.",
  },
  "silver-explorers": {
    ageGroup: "40+ years",
    description: "Silver Explorers is designed for mature travellers who prefer comfortable pacing, thoughtful itineraries, reliable logistics, and nature-rich experiences.",
  },
  "on-wheels": {
    ageGroup: "All age groups",
    description: "Explorers on Wheels brings together bicycle rides, bike expeditions, caravan routes, and scenic road journeys with curated halts and support planning.",
  },
  "wildlife-tours": {
    ageGroup: "Families and nature lovers",
    description: "Explore Tadoba, Pench, Kanha, Bandhavgad, Ranthambore, Gir, Kaziranga and other wildlife destinations with safari planning and nature interpretation.",
  },
  "himalayan-explorers": {
    ageGroup: "14+ years",
    description: "Himalayan Explorers includes guided treks across Himachal, Uttarakhand, Jammu & Kashmir and Nepal, with preparation guidance and trained trek leadership.",
  },
  "school-tours": {
    ageGroup: "School groups",
    description: "School tours include educational trips, adventure camps, outdoor learning modules, leadership activities, safety-first logistics and teacher-friendly coordination.",
  },
  "corporate-tours": {
    ageGroup: "Corporate teams",
    description: "Corporate tours are built for team bonding, outbound training, leadership exercises, offsites, reward trips and customised employee engagement experiences.",
  },
  "group-tours": {
    ageGroup: "All age groups",
    description: "Group Tours include fixed departure tours such as Malvan Tarkarli, Suvarnadurga Panhalekaji, Gokarna-Murudeshwar, Hampi-Badami, Ujjain-Omkareshwar and more.",
  },
  "fix-departure-tours": {
    ageGroup: "All age groups",
    description: "Fix Departure Tours are scheduled, batch-wise trips for travellers who want confirmed dates, clear itineraries, transparent pricing and dependable Explorers coordination.",
  },
  "customised-packages": {
    ageGroup: "Private groups",
    description: "Customised packages cover domestic tours, international tours, honeymoon tours, corporate tours, school tours, family vacations and private group itineraries.",
  },
  "tours-out-of-maharashtra": {
    ageGroup: "Families and groups",
    description: "Tours Out of Maharashtra include curated travel across Kokan, South India, North India, heritage circuits, pilgrimage routes and nature destinations.",
  },
  "offbeat-tours": {
    ageGroup: "Curious travellers",
    description: "Offbeat Tours focus on lesser-known destinations, hidden trails, unusual landscapes, local experiences and routes beyond standard travel itineraries.",
  },
  "mountain-run": {
    ageGroup: "16+ years",
    description: "Mountain Run events are trail-running experiences in natural terrain, designed for fitness lovers, runners, trekkers and adventure-sport enthusiasts.",
  },
};

export const specialPrograms = programDirectory
  .filter((program) => program.link.startsWith("/programs/"))
  .map((program, index) => {
    const id = program.link.split("/").pop() || `program-${index}`;
    const details = programDetails[id] || { description: program.subtitle, ageGroup: program.subtitle };

    return {
      id,
      title: program.title,
      description: details.description,
      image: [heroKids, heroWomen, heroMountains, heroCamping][index % 4],
      ageGroup: details.ageGroup,
    };
  });

export const seasonTabs = {
  monsoon: {
    title: "Monsoon Treks & Tours",
    period: "June to September",
    intro: "Waterfalls, green valleys, misty ridges, and classic monsoon treks near Pune.",
  },
  winter: {
    title: "Winter Adventure",
    period: "October to January",
    intro: "Clear views, fort treks near Pune/Mumbai, camping, and beginner-friendly routes.",
  },
  summer: {
    title: "Summer Treks & Tours",
    period: "February to May",
    intro: "Early morning climbs, offbeat treks Maharashtra, school camps, and cool forest trails.",
  },
};
