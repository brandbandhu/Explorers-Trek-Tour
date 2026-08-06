import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { treks } from "@/data/siteData";

const FeaturedTreks = () => {
  const [page, setPage] = useState(0);
  const featured = treks.filter((event) => event.featured);
  const pages = useMemo(() => {
    const items = featured.slice(0, 6);
    const chunks = [];
    for (let index = 0; index < items.length; index += 3) {
      chunks.push(items.slice(index, index + 3));
    }
    return chunks;
  }, [featured]);

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="mt-2 font-heading text-2xl md:text-4xl font-black uppercase text-foreground">FEATURED EVENTS</h2>
          </div>
          <Link to="/treks">
            <Button variant="outline" className="rounded-lg border-primary text-primary hover:bg-primary hover:text-white">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setPage((current) => (current - 1 + pages.length) % pages.length)}
            className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-border bg-background/95 p-3 text-foreground shadow-lg transition-colors hover:bg-background md:inline-flex"
            aria-label="Previous featured events"
            disabled={pages.length <= 1}
          >
            <ArrowRight className="h-5 w-5 rotate-180" />
          </button>

          <button
            type="button"
            onClick={() => setPage((current) => (current + 1) % pages.length)}
            className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-border bg-background/95 p-3 text-foreground shadow-lg transition-colors hover:bg-background md:inline-flex"
            aria-label="Next featured events"
            disabled={pages.length <= 1}
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden pb-4">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, groupIndex) => (
                <div key={groupIndex} className="grid min-w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
                  {group.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <Link to={`/treks/${event.id}`} className="group block h-full overflow-hidden rounded-lg border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative h-52 overflow-hidden sm:h-60 lg:h-64">
                          <img
                            src={event.image}
                            alt={event.title}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/images/hero-mountains.jpg";
                            }}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
                            {event.tag}
                          </span>
                        </div>
                        <div className="relative mx-3 -mt-7 rounded-lg bg-white p-4 shadow-lg sm:mx-4 sm:p-5">
                          <h3 className="font-heading text-lg font-black leading-tight text-foreground sm:text-xl">{event.title}</h3>
                          <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {event.location}</span>
                            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {event.duration}</span>
                            <span className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> Every Weekend</span>
                          </div>
                          <div className="mt-5 flex items-end justify-between gap-3">
                            <div>
                              <div className="font-heading text-xl font-black text-primary sm:text-2xl">Rs.{event.price}</div>
                              <div className="text-xs font-bold text-muted-foreground">{event.reporting}</div>
                            </div>
                            <span className="inline-flex items-center text-sm font-black text-highlight">
                              Details <ArrowRight className="ml-1 h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreks;
