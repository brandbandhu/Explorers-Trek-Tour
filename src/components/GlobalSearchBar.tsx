import { useMemo, useState } from "react";
import { CalendarDays, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { globalSchedule } from "@/data/siteData";

interface GlobalSearchBarProps {
  reserveTop?: boolean;
}

const GlobalSearchBar = ({ reserveTop = true }: GlobalSearchBarProps) => {
  const [type, setType] = useState("all");
  const [year, setYear] = useState("all");
  const [month, setMonth] = useState("all");

  const years = Array.from(new Set(globalSchedule.map((item) => item.year)));
  const months = Array.from(new Set(globalSchedule.map((item) => item.month)));
  const types = Array.from(new Set(globalSchedule.map((item) => item.type)));

  const filtered = useMemo(() => {
    return globalSchedule.filter((item) => {
      if (type !== "all" && item.type !== type) return false;
      if (year !== "all" && item.year !== year) return false;
      if (month !== "all" && item.month !== month) return false;
      return true;
    });
  }, [month, type, year]);

  return (
    <section className={`relative z-30 border-y border-border bg-background/95 shadow-sm backdrop-blur md:sticky md:top-20 ${reserveTop ? "mt-16 md:mt-20" : ""}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="grid gap-3 rounded-lg border border-border bg-card p-3 card-shadow sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="h-11 rounded-lg bg-background">
              <SelectValue placeholder="Tour Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tour Type</SelectItem>
              {types.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
            </SelectContent>
          </Select>

          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="h-11 rounded-lg bg-background">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Year</SelectItem>
              {years.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
            </SelectContent>
          </Select>

          <Select value={month} onValueChange={setMonth}>
            <SelectTrigger className="h-11 rounded-lg bg-background">
              <SelectValue placeholder="Month" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Month</SelectItem>
              {months.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
            </SelectContent>
          </Select>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="h-11 w-full rounded-lg gradient-highlight text-highlight-foreground sm:col-span-2 lg:col-span-1">
                <CalendarDays className="mr-2 h-4 w-4" />
                View Full Calendar
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">Complete Event Schedule</DialogTitle>
              </DialogHeader>
              <div className="space-y-3">
                {filtered.map((item) => (
                  <div key={`${item.date}-${item.title}`} className="grid gap-2 rounded-lg border border-border bg-background p-4 sm:grid-cols-[9rem_1fr_auto] sm:items-center">
                    <span className="font-heading text-sm font-bold text-primary">{item.date}</span>
                    <span className="font-semibold text-foreground">{item.title}</span>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">{item.type}</span>
                  </div>
                ))}
                {filtered.length === 0 && (
                  <div className="rounded-lg border border-dashed border-border p-8 text-center text-muted-foreground">
                    <Search className="mx-auto mb-2 h-5 w-5" />
                    No events match the selected filters.
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default GlobalSearchBar;
