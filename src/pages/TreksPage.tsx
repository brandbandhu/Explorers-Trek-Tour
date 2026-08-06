import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BadgeCheck, Calendar, ChevronRight, Clock, Filter, Grid, ListFilter, MapPin, MessageCircle, Sparkles, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { seasonTabs, treks, Trek } from "@/data/siteData";

// Full 12-month order sequence
const monthNamesOrder = [
  "June 2026",
  "July 2026",
  "August 2026",
  "September 2026",
  "October 2026",
  "November 2026",
  "December 2026",
  "January 2027",
  "February 2027",
  "March 2027",
  "April 2027",
  "May 2027",
];

const seasonMonthMap: Record<string, string[]> = {
  monsoon: ["June 2026", "July 2026", "August 2026", "September 2026"],
  winter: ["October 2026", "November 2026", "December 2026", "January 2027"],
  summer: ["February 2027", "March 2027", "April 2027", "May 2027"],
};

export interface FlatBatchDeparture {
  id: string;
  trekId: string;
  title: string;
  location: string;
  duration: string;
  difficulty: string;
  tourType: string;
  image: string;
  tag: string;
  reporting: string;
  dateStr: string;
  dayOfWeek: string;
  monthYear: string;
  price: number;
  seats: string;
  trek: Trek;
}

// Convert "September 2026" to "month-9-2026"
const getMonthHashId = (monthYearStr: string) => {
  const parts = monthYearStr.split(" ");
  if (parts.length >= 2) {
    const monthName = parts[0];
    const year = parts[1];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const idx = months.indexOf(monthName);
    if (idx !== -1) {
      return `month-${idx + 1}-${year}`;
    }
  }
  return `month-${monthYearStr.toLowerCase().replace(/\s+/g, "-")}`;
};

const TreksPage = () => {
  const [searchParams] = useSearchParams();
  const [activeSeason, setActiveSeason] = useState<"monsoon" | "winter" | "summer" | "himalayan" | "all">("monsoon");
  const [selectedMonth, setSelectedMonth] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"timeline" | "grid">("timeline");
  const [searchQuery, setSearchQuery] = useState("");

  const urlTypeFilter = searchParams.get("type");

  // Handle URL Season parameter & Hash anchor (e.g. #month-9-2026)
  useEffect(() => {
    // 1. Check URL query params for season
    const seasonParam = searchParams.get("season");
    if (seasonParam && ["monsoon", "winter", "summer", "himalayan", "all"].includes(seasonParam.toLowerCase())) {
      setActiveSeason(seasonParam.toLowerCase() as any);
    }

    // 2. Check URL Hash (e.g. #month-9-2026 or #month-09-2026)
    const hash = window.location.hash;
    if (hash) {
      const cleanHash = hash.replace("#", "");
      const match = cleanHash.match(/^month-0*(\d+)-(\d{4})$/i);
      if (match) {
        const monthNum = parseInt(match[1], 10);
        const year = match[2];
        const monthNames = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        const monthName = monthNames[monthNum - 1];
        if (monthName) {
          const fullMonthYear = `${monthName} ${year}`;
          if (seasonMonthMap.monsoon.includes(fullMonthYear)) {
            setActiveSeason("monsoon");
          } else if (seasonMonthMap.winter.includes(fullMonthYear)) {
            setActiveSeason("winter");
          } else if (seasonMonthMap.summer.includes(fullMonthYear)) {
            setActiveSeason("summer");
          } else {
            setActiveSeason("all");
          }
          
          setTimeout(() => {
            const el = document.getElementById(cleanHash) || document.getElementById(`month-${monthNum}-${year}`) || document.getElementById(`month-section-${fullMonthYear.replace(/\s+/g, "-")}`);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }, 200);
        }
      }
    }
  }, [searchParams]);

  // Flatten all trek batches into date-wise departure items sorted chronologically
  const allFlatDepartures = useMemo(() => {
    const list: FlatBatchDeparture[] = [];

    treks.forEach((trek) => {
      // Apply URL type filter if present (e.g., ?type=Camping)
      if (urlTypeFilter && trek.tourType !== urlTypeFilter && !trek.title.toLowerCase().includes(urlTypeFilter.toLowerCase())) {
        return;
      }

      trek.batches.forEach((batch, idx) => {
        // Parse batch date string e.g. "06 September 2026"
        const parts = batch.date.split(" ");
        if (parts.length >= 3) {
          const dayNumStr = parts[0];
          const monthName = parts[1];
          const yearNum = parts[2];
          const monthYear = `${monthName} ${yearNum}`;
          
          // Determine day of week
          const dateNum = parseInt(dayNumStr, 10) || 1;
          const days = ["Saturday", "Sunday", "Saturday", "Sunday", "Friday", "Monday"];
          const dayOfWeek = days[dateNum % days.length];

          list.push({
            id: `${trek.id}-${idx}-${batch.date}`,
            trekId: trek.id,
            title: trek.title,
            location: trek.location,
            duration: trek.duration,
            difficulty: trek.difficulty,
            tourType: trek.tourType,
            image: trek.image,
            tag: trek.tag,
            reporting: trek.reporting,
            dateStr: batch.date,
            dayOfWeek,
            monthYear,
            price: batch.price || trek.price,
            seats: batch.seats || "Open",
            trek,
          });
        }
      });
    });

    // Sort chronologically by month order and date
    return list.sort((a, b) => {
      const idxA = monthNamesOrder.indexOf(a.monthYear);
      const idxB = monthNamesOrder.indexOf(b.monthYear);
      if (idxA !== idxB) return idxA - idxB;

      const dateA = parseInt(a.dateStr.split(" ")[0], 10) || 0;
      const dateB = parseInt(b.dateStr.split(" ")[0], 10) || 0;
      return dateA - dateB;
    });
  }, [urlTypeFilter]);

  // Filter departures by Active Season & Selected Month & Search Query
  const filteredDepartures = useMemo(() => {
    return allFlatDepartures.filter((item) => {
      // Season filter
      if (activeSeason === "himalayan") {
        if (item.tourType !== "Himalayan Trek") return false;
      } else if (activeSeason !== "all") {
        const validMonths = seasonMonthMap[activeSeason] || [];
        if (!validMonths.includes(item.monthYear)) return false;
      }

      // Quick Month Jump filter
      if (selectedMonth !== "All" && item.monthYear !== selectedMonth) {
        return false;
      }

      // Search Query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const fullText = `${item.title} ${item.location} ${item.tourType} ${item.dateStr}`.toLowerCase();
        if (!fullText.includes(query)) return false;
      }

      return true;
    });
  }, [allFlatDepartures, activeSeason, selectedMonth, searchQuery]);

  // Group departures by Month & Year for Yuvashakti-style Monthwise Flow
  const departuresByMonth = useMemo(() => {
    const groups: Record<string, FlatBatchDeparture[]> = {};
    filteredDepartures.forEach((item) => {
      if (!groups[item.monthYear]) {
        groups[item.monthYear] = [];
      }
      groups[item.monthYear].push(item);
    });
    return groups;
  }, [filteredDepartures]);

  // Available months list based on current active season
  const availableMonths = useMemo(() => {
    if (activeSeason === "all" || activeSeason === "himalayan") return monthNamesOrder;
    return seasonMonthMap[activeSeason] || [];
  }, [activeSeason]);

  const handleMonthJump = (month: string) => {
    setSelectedMonth(month);
    if (month !== "All") {
      const hashId = getMonthHashId(month);
      window.history.pushState(null, "", `#${hashId}`);
      const el = document.getElementById(hashId) || document.getElementById(`month-section-${month.replace(/\s+/g, "-")}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="gradient-primary px-4 py-8 text-foreground md:py-12">
        <div className="container mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-foreground/15 px-3.5 py-1 text-xs font-black uppercase tracking-[0.2em]">
            <Calendar className="h-3.5 w-3.5" /> Date-Wise & Month-Wise Treks Flow
          </span>
          <h1 className="mt-3 max-w-4xl font-heading text-3xl font-black uppercase tracking-wide sm:text-4xl md:text-5xl">
            {urlTypeFilter ? `${urlTypeFilter} Schedule` : "Upcoming Treks & Tours Schedule"}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-foreground/85 md:text-base">
            Explore safe, professionally guided Sahyadri & Himalayan treks. Select your preferred season and browse departures date-wise across every month.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          {/* Season Selector Bar (Monsoon, Winter, Summer, Himalayan, All) */}
          <div className="mb-6 flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Season Selector</p>
              <h2 className="mt-1 font-heading text-2xl font-black uppercase text-foreground">
                Season Wise Trek Flow
              </h2>
            </div>

            {/* Season Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setActiveSeason("monsoon");
                  setSelectedMonth("All");
                }}
                className={`rounded-lg px-4 py-2.5 text-xs font-heading font-black uppercase tracking-wider transition-colors ${
                  activeSeason === "monsoon"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Monsoon (Jun-Sep)
              </button>
              <button
                onClick={() => {
                  setActiveSeason("winter");
                  setSelectedMonth("All");
                }}
                className={`rounded-lg px-4 py-2.5 text-xs font-heading font-black uppercase tracking-wider transition-colors ${
                  activeSeason === "winter"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Winter (Oct-Jan)
              </button>
              <button
                onClick={() => {
                  setActiveSeason("summer");
                  setSelectedMonth("All");
                }}
                className={`rounded-lg px-4 py-2.5 text-xs font-heading font-black uppercase tracking-wider transition-colors ${
                  activeSeason === "summer"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Summer (Feb-May)
              </button>
              <button
                onClick={() => {
                  setActiveSeason("himalayan");
                  setSelectedMonth("All");
                }}
                className={`rounded-lg px-4 py-2.5 text-xs font-heading font-black uppercase tracking-wider transition-colors ${
                  activeSeason === "himalayan"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Himalayan Treks
              </button>
              <button
                onClick={() => {
                  setActiveSeason("all");
                  setSelectedMonth("All");
                }}
                className={`rounded-lg px-4 py-2.5 text-xs font-heading font-black uppercase tracking-wider transition-colors ${
                  activeSeason === "all"
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                All Seasons
              </button>
            </div>
          </div>

          {/* Quick Month Jump Navigation Strip (Yuvashakti Style) */}
          <div className="mb-6 rounded-xl border border-border bg-card p-4 card-shadow">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-primary" />
                <span className="font-heading text-xs font-black uppercase tracking-wider text-foreground">
                  Quick Month Jump (Date Flow):
                </span>
              </div>

              {/* View Switcher (Timeline Date Flow vs Grid View) */}
              <div className="flex items-center gap-1 rounded-lg border border-border bg-muted p-1">
                <button
                  onClick={() => setViewMode("timeline")}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-bold uppercase transition ${
                    viewMode === "timeline" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <ListFilter className="h-3.5 w-3.5" /> Monthwise Date Flow
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-bold uppercase transition ${
                    viewMode === "grid" ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Grid className="h-3.5 w-3.5" /> Grid View
                </button>
              </div>
            </div>

            {/* Month Jump Pills Strip */}
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              <button
                onClick={() => handleMonthJump("All")}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-heading font-extrabold uppercase tracking-wider transition ${
                  selectedMonth === "All"
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border bg-background text-foreground hover:border-primary/50"
                }`}
              >
                All Months
              </button>
              {availableMonths.map((month) => (
                <button
                  key={month}
                  onClick={() => handleMonthJump(month)}
                  className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-heading font-extrabold uppercase tracking-wider transition ${
                    selectedMonth === month
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-background text-foreground hover:border-primary/50"
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="mb-8">
            <Input
              type="text"
              placeholder="Search trek name, location, or fort (e.g. Andharban, Kalsubai, Manali)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md bg-card text-sm"
            />
          </div>

          {/* TIMELINE FLOW VIEW (Yuvashakti Style Month-wise & Date-wise) */}
          {viewMode === "timeline" ? (
            <div className="space-y-12">
              {Object.keys(departuresByMonth).length === 0 ? (
                <div className="rounded-xl border border-dashed border-border p-12 text-center text-muted-foreground">
                  <Calendar className="mx-auto mb-3 h-8 w-8 text-primary" />
                  <p className="font-heading text-lg font-bold text-foreground">No trek departures found for selected filter</p>
                  <p className="text-xs mt-1">Try selecting a different season tab or search keyword.</p>
                </div>
              ) : (
                Object.entries(departuresByMonth).map(([monthYear, items]) => {
                  const hashId = getMonthHashId(monthYear);
                  return (
                    <div
                      key={monthYear}
                      id={hashId}
                      className="space-y-4 month-card scroll-mt-24"
                    >
                      {/* Secondary anchor tags for fallback matching */}
                      <div id={`month-section-${monthYear.replace(/\s+/g, "-")}`} className="hidden" />

                      {/* Month Card Header - Yuvashakti Style Left Accent Border */}
                      <div className="flex items-center gap-3 border-l-4 border-primary pl-4 py-1">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-heading font-black text-sm shadow-sm">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-heading text-2xl font-black uppercase tracking-wide text-foreground">
                            {monthYear}
                          </h3>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            {items.length} Departure{items.length > 1 ? "s" : ""} Scheduled Date-Wise
                          </p>
                        </div>
                        <span className="ml-auto hidden rounded-full bg-primary/10 px-3 py-1 font-heading text-xs font-black uppercase tracking-wider text-primary sm:inline-block">
                          {activeSeason.toUpperCase()} SEASON
                        </span>
                      </div>

                      {/* Date-Wise List Items */}
                      <div className="grid gap-3.5 pt-2">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="group relative grid gap-4 rounded-xl border border-border bg-card p-4 card-shadow transition-all hover:border-primary/60 hover:shadow-xl md:grid-cols-[12rem_minmax(0,1fr)_12rem] md:items-center lg:p-5"
                          >
                            {/* Date Box Block (Left) - Yuvashakti Style Date Box */}
                            <div className="flex items-center gap-3 border-b border-border pb-3 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                              <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-primary text-primary-foreground font-heading shadow-md">
                                <span className="text-[0.65rem] font-black uppercase tracking-widest leading-tight">
                                  {item.dateStr.split(" ")[1]}
                                </span>
                                <span className="text-2xl font-black leading-none my-0.5">
                                  {item.dateStr.split(" ")[0]}
                                </span>
                                <span className="text-[0.6rem] font-extrabold text-primary-foreground/90 uppercase">
                                  {item.dateStr.split(" ")[2]}
                                </span>
                              </div>
                              <div>
                                <div className="font-heading text-xs font-black uppercase tracking-wider text-primary">
                                  {item.dateStr}
                                </div>
                                <div className="text-xs font-bold text-muted-foreground uppercase">
                                  {item.dayOfWeek}
                                </div>
                                <div className={`mt-1 inline-flex items-center gap-1 text-[0.68rem] font-black uppercase tracking-wider rounded-md px-2 py-0.5 ${
                                  item.seats.includes("Fast") || item.seats.includes("left")
                                    ? "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300"
                                    : "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
                                }`}>
                                  <BadgeCheck className="h-3 w-3" />
                                  {item.seats}
                                </div>
                              </div>
                            </div>

                            {/* Trek Info Block (Center) */}
                            <div className="flex items-start gap-4 min-w-0">
                              <img
                                src={item.image}
                                alt={item.title}
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src = "/images/hero-mountains.jpg";
                                }}
                                className="h-20 w-24 shrink-0 rounded-lg object-cover sm:h-22 sm:w-28 shadow-sm group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                  <Badge variant="secondary" className="text-[0.65rem] font-black uppercase tracking-wider">
                                    {item.tourType}
                                  </Badge>
                                  <Badge className="gradient-highlight text-highlight-foreground text-[0.65rem] font-black uppercase">
                                    {item.tag}
                                  </Badge>
                                </div>
                                <h4 className="font-heading text-lg sm:text-xl font-black text-foreground group-hover:text-primary transition-colors truncate">
                                  <Link to={`/treks/${item.trekId}`}>{item.title}</Link>
                                </h4>
                                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1 font-medium">
                                    <MapPin className="h-3.5 w-3.5 text-primary" /> {item.location}
                                  </span>
                                  <span className="flex items-center gap-1 font-medium">
                                    <Clock className="h-3.5 w-3.5 text-primary" /> {item.duration}
                                  </span>
                                  <span className="flex items-center gap-1 font-bold text-foreground">
                                    Pickup: {item.reporting}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Price & Booking Action Block (Right) */}
                            <div className="flex flex-col items-start gap-2 border-t border-border pt-3 md:items-end md:border-t-0 md:pt-0">
                              <div className="text-left md:text-right">
                                <div className="font-heading text-2xl font-black text-primary">
                                  Rs.{item.price}
                                </div>
                                <div className="text-[0.7rem] font-bold text-muted-foreground uppercase tracking-wider">
                                  Per Explorer
                                </div>
                              </div>

                              <div className="flex w-full items-center gap-2 md:w-auto">
                                <Link to={`/treks/${item.trekId}`} className="flex-1 md:flex-initial">
                                  <Button size="sm" className="w-full rounded-lg gradient-highlight text-highlight-foreground font-heading font-black text-xs uppercase tracking-wider shadow-sm">
                                    View Details
                                  </Button>
                                </Link>
                                <a
                                  href={`https://wa.me/919850504437?text=${encodeURIComponent(`Hi Explorers, I want to book ${item.title} on ${item.dateStr}`)}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm"
                                  title="Instant WhatsApp Booking"
                                >
                                  <MessageCircle className="h-4 w-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          ) : (
            /* GRID VIEW */
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredDepartures.map((item) => (
                <article key={item.id} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-lg transition">
                  <Link to={`/treks/${item.trekId}`} className="group block">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/images/hero-mountains.jpg";
                        }}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <Badge className="absolute left-4 top-4 gradient-highlight text-highlight-foreground font-black uppercase">{item.tag}</Badge>
                      <span className="absolute right-4 top-4 rounded-full bg-black/75 px-3 py-1 font-heading text-xs font-bold text-white backdrop-blur">
                        {item.dateStr}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-accent">
                        {item.tourType} • {item.dayOfWeek}
                      </div>
                      <h3 className="font-heading text-xl font-black text-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" /> {item.location}
                      </p>
                      <div className="mt-4 flex items-end justify-between gap-3 border-t border-border pt-4">
                        <div>
                          <div className="font-heading text-2xl font-black text-primary">Rs.{item.price}</div>
                          <div className="text-xs font-bold text-muted-foreground">{item.duration} | {item.reporting}</div>
                        </div>
                        <span className="inline-flex items-center text-sm font-black text-highlight">
                          View Details <ChevronRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TreksPage;

