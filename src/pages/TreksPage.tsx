import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import { seasonTabs, treks } from "@/data/siteData";

const seasonMonths = {
  monsoon: ["Jun", "Jul", "Aug", "Sep"],
  winter: ["Oct", "Nov", "Dec", "Jan"],
  summer: ["Feb", "Mar", "Apr", "May"],
};

const TreksPage = () => {
  const [searchParams] = useSearchParams();
  const [season, setSeason] = useState<keyof typeof seasonTabs>("monsoon");
  const selectedType = searchParams.get("type");

  const visibleTreks = useMemo(() => {
    const base = selectedType ? treks.filter((trek) => trek.tourType === selectedType) : treks;
    return base.filter((trek) => trek.month.some((month) => seasonMonths[season].includes(month)));
  }, [season, selectedType]);

  const active = seasonTabs[season];

  return (
    <Layout>
      <section className="gradient-primary px-4 py-12 text-foreground md:py-16">
        <div className="container mx-auto">
          <p className="font-heading text-sm font-black uppercase tracking-[0.24em] text-accent">Weekend Treks Page</p>
          <h1 className="mt-3 max-w-4xl font-heading text-3xl font-black sm:text-4xl md:text-5xl">Sahyadri Weekend Treks From Pune-Mumbai</h1>
          <p className="mt-5 max-w-4xl text-sm leading-7 text-foreground/78 md:text-base">
            Explorers Group offers professionally guided Treks in Sahyadri, covering one-day and multi-day trekking experiences across summer, monsoon and winter seasons. Discover treks from Pune-Mumbai, Sahyadri treks Pune, one day treks near Pune, best trekking groups in Maharashtra, guided treks Pune, weekend treks near Pune, monsoon treks near Pune, winter treks Maharashtra, summer treks Pune, offbeat treks Maharashtra, beginner trekking routes, and fort treks near Pune/Mumbai.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="mb-8">
            <div>
              <h2 className="font-heading text-3xl font-black text-foreground">Season Planner</h2>
              <p className="mt-2 text-muted-foreground">Click a season to update trek details below without opening a new page.</p>
            </div>
          </div>

          <Tabs value={season} onValueChange={(value) => setSeason(value as keyof typeof seasonTabs)} className="w-full">
            <TabsList className="h-auto w-full flex-col gap-2 rounded-lg bg-muted p-2 md:flex-row">
              {Object.entries(seasonTabs).map(([key, item]) => (
                <TabsTrigger key={key} value={key} className="w-full rounded-md px-4 py-3 font-heading font-black data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  {item.title} - {item.period}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="mt-8 rounded-lg border border-border bg-card p-6 shadow-sm">
            <p className="font-heading text-sm font-black uppercase tracking-widest text-accent">{active.period}</p>
            <h3 className="mt-2 font-heading text-2xl font-black text-foreground">{active.title}</h3>
            <p className="mt-2 text-muted-foreground">{active.intro}</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleTreks.map((trek) => (
              <article key={trek.id} className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
                <Link to={`/treks/${trek.id}`} className="group block">
                  <div className="relative h-56 overflow-hidden">
                    <img src={trek.image} alt={trek.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <Badge className="absolute left-4 top-4 gradient-highlight text-highlight-foreground">{trek.tag}</Badge>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-xl font-black text-foreground">{trek.title}</h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> {trek.location}</p>
                    <div className="mt-4 flex items-end justify-between gap-3">
                      <div>
                        <div className="font-heading text-2xl font-black text-primary">Rs.{trek.price}</div>
                        <div className="text-xs font-bold text-muted-foreground">{trek.duration} | {trek.reporting}</div>
                      </div>
                      <span className="text-sm font-black text-highlight">View Details</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TreksPage;
