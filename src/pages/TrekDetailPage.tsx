import { Link, useParams } from "react-router-dom";
import { Calendar, Check, Clock, Facebook, Mail, MapPin, MessageCircle, Play, Share2, Star, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { awards, pickupPoints, treks } from "@/data/siteData";

const tabs = ["Photo/Video Gallery", "Overview", "Highlights", "Batches", "Itinerary", "Includes/Excludes", "Offers", "What To Bring", "Things To Know", "Share"];

const TrekDetailPage = () => {
  const { id } = useParams();
  const trek = treks.find((item) => item.id === id);

  if (!trek) {
    return (
      <Layout>
        <div className="flex min-h-[60vh] items-center justify-center px-4 text-center">
          <div>
            <h1 className="font-heading text-3xl font-black">Event Not Found</h1>
            <Link to="/treks"><Button className="mt-4">Browse Events</Button></Link>
          </div>
        </div>
      </Layout>
    );
  }

  const similar = treks.filter((item) => item.id !== trek.id).slice(0, 3);

  return (
    <Layout>
      <section className="relative min-h-[46vh] overflow-hidden bg-black md:min-h-[58vh]">
        <img src={trek.image} alt={trek.title} className="absolute inset-0 h-full w-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />
        <div className="container relative mx-auto flex min-h-[46vh] items-end px-4 py-10 md:min-h-[58vh] md:py-12">
          <div className="max-w-4xl text-white">
            <p className="font-heading text-sm font-black uppercase tracking-[0.24em] text-accent">{trek.tourType}</p>
            <h1 className="mt-3 font-heading text-3xl font-black sm:text-4xl md:text-5xl">{trek.title}</h1>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold text-white/85">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> {trek.duration}</span>
              <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4" /> {trek.difficulty}</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {trek.location}</span>
            </div>
          </div>
        </div>
      </section>

      <nav className="relative z-20 border-y border-border bg-white/95 backdrop-blur md:sticky md:top-[8.35rem]">
        <div className="container mx-auto flex gap-2 overflow-x-auto px-4 py-3 no-scrollbar">
          {tabs.map((tab) => (
            <a key={tab} href={`#${tab.toLowerCase().replaceAll("/", "-").replaceAll(" ", "-")}`} className="whitespace-nowrap rounded-full bg-muted px-4 py-2 text-xs font-black text-muted-foreground hover:bg-primary hover:text-primary-foreground">
              {tab}
            </a>
          ))}
        </div>
      </nav>

      <div className="container mx-auto grid gap-8 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <main className="space-y-8">
          <section id="photo-video-gallery" className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <div className="grid gap-3 sm:grid-cols-3">
              {trek.gallery.map((image, index) => (
                <div key={image} className="relative h-44 overflow-hidden rounded-lg">
                  <img src={image} alt={`${trek.title} gallery ${index + 1}`} className="h-full w-full object-cover" />
                  {index === 0 && <span className="absolute inset-0 flex items-center justify-center bg-black/20 text-white"><Play className="h-10 w-10" /></span>}
                </div>
              ))}
            </div>
          </section>

          <section id="overview" className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-black text-foreground">Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{trek.overview}</p>
          </section>

          <section id="highlights" className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-black text-foreground">Highlights</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {trek.highlights.map((item) => <div key={item} className="flex gap-3 font-semibold text-foreground"><Check className="h-5 w-5 text-highlight" /> {item}</div>)}
            </div>
          </section>

          <section id="batches" className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-black text-foreground">Batches</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-border">
              {trek.batches.map((batch) => (
                <div key={`${batch.label}-${batch.date}`} className="grid gap-3 border-b border-border p-4 last:border-b-0 sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-center">
                  <strong>{batch.label}</strong>
                  <span>{batch.date}</span>
                  <span className="font-heading font-black text-primary">Rs.{batch.price}</span>
                  <Button size="sm" className="rounded-full gradient-highlight text-highlight-foreground">Book Now</Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="mt-4 rounded-lg">View More Batches Month-wise</Button>
          </section>

          <section id="itinerary" className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-black text-foreground">Itinerary</h2>
            <div className="mt-5 space-y-4">
              {trek.itinerary.map((day) => (
                <div key={day.day} className="rounded-lg bg-background p-4">
                  <div className="font-heading font-black text-primary">Day {day.day}: {day.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{day.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="includes-excludes" className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="font-heading text-xl font-black">Includes</h2>
              <div className="mt-4 space-y-2">{trek.includes.map((item) => <p key={item} className="flex gap-2 text-sm"><Check className="h-4 w-4 text-highlight" /> {item}</p>)}</div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h2 className="font-heading text-xl font-black">Excludes</h2>
              <div className="mt-4 space-y-2">{trek.excludes.map((item) => <p key={item} className="flex gap-2 text-sm text-muted-foreground"><X className="h-4 w-4 text-destructive" /> {item}</p>)}</div>
            </div>
          </section>

          <section id="offers" className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-black">Offers, Video and Social Links</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="aspect-video overflow-hidden rounded-lg bg-black">
                <iframe className="h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Explorers event video" allowFullScreen />
              </div>
              <div className="grid gap-3">
                {["Early Bird", "Group Discount", "Membership Discount", "Repeater Discount"].map((offer) => <div key={offer} className="rounded-lg bg-secondary p-4 font-heading font-black text-primary">{offer}</div>)}
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp</Button>
                  <Button variant="outline"><Facebook className="mr-2 h-4 w-4" /> Facebook</Button>
                </div>
              </div>
            </div>
          </section>

          <section id="what-to-bring" className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-black">What To Bring / Things To Know</h2>
            <p className="mt-3 text-muted-foreground">Trekking shoes, rainwear, water bottle, personal medicines, small backpack, ID proof, and weather-appropriate clothing. Follow trek leader instructions throughout the event.</p>
          </section>

          <section className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-black">Similar Treks</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {similar.map((item) => (
                <Link key={item.id} to={`/treks/${item.id}`} className="overflow-hidden rounded-lg border border-border">
                  <img src={item.image} alt={item.title} className="h-32 w-full object-cover" />
                  <div className="p-3 font-heading text-sm font-black">{item.title}</div>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="font-heading text-2xl font-black">Awards Logos</h2>
            <div className="mt-4 flex flex-wrap gap-2">{awards.slice(0, 8).map((award) => <span key={award} className="rounded-full bg-muted px-3 py-1 text-xs font-black text-primary">{award}</span>)}</div>
          </section>
        </main>

        <aside className="space-y-5 lg:sticky lg:top-40 lg:self-start">
          <div className="rounded-lg border border-border bg-card p-6 shadow-xl">
            <div className="font-heading text-3xl font-black text-primary">Rs.{trek.price}</div>
            <p className="text-sm font-semibold text-muted-foreground">per person</p>
            <Button className="mt-5 w-full rounded-full gradient-highlight text-highlight-foreground">Book Now</Button>
            <div className="mt-5 space-y-2 text-sm">
              <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> {trek.duration}</p>
              <p className="flex items-center gap-2"><Star className="h-4 w-4 text-primary" /> {trek.difficulty}</p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <h3 className="font-heading font-black">Pickup Location</h3>
            <div className="mt-3 space-y-2">
              {pickupPoints.map((point) => <a key={point.name} href={point.map} target="_blank" rel="noopener noreferrer" className="block rounded-md bg-background px-3 py-2 text-sm font-semibold text-primary">{point.name}</a>)}
            </div>
          </div>

          <form className="rounded-lg border border-border bg-card p-5 shadow-sm">
            <h3 className="font-heading font-black">Enquiry Form</h3>
            <div className="mt-4 space-y-3">
              <Input placeholder="Name" />
              <Input placeholder="Phone" />
              <Input placeholder="Email" />
              <Textarea placeholder="Message" />
              <Button className="w-full rounded-full gradient-primary text-primary-foreground">Send Enquiry</Button>
            </div>
          </form>

          <div id="share" className="grid grid-cols-2 gap-3">
            <Button variant="outline"><Mail className="mr-2 h-4 w-4" /> Email</Button>
            <Button variant="outline"><Share2 className="mr-2 h-4 w-4" /> Share</Button>
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default TrekDetailPage;
