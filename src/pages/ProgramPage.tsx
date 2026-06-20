import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CheckCircle2, MapPin, MessageCircle, Sparkles, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { programDirectory, specialPrograms, tourCategoryFilters } from "@/data/siteData";

const pageContent = {
  "group-tours": {
    eyebrow: "Tours",
    heading: "Handpicked Tours Across India and Beyond",
    intro:
      "Choose from fixed departures, family holidays, heritage circuits, pilgrim routes, wildlife breaks, coastal escapes and fully customised domestic or international tours.",
    enquiryTitle: "Plan a Tour",
    filters: ["Domestic Tour", "International Tour", "Wildlife Safari", "Corporate Tour", "School Tour", "Honeymoon Tour"],
    highlights: [
      "Fixed departure group tours with clear dates",
      "Customised domestic and international packages",
      "Hotel, transport, food and sightseeing coordination",
      "Family, school, corporate and private group planning",
      "Wildlife, heritage, coastal and pilgrimage itineraries",
      "Experienced Explorers support from enquiry to return",
    ],
    cards: [
      { title: "Malvan Tarkarli", meta: "Kokan beaches | 3-4 days", desc: "Snorkelling, beaches, seafood, Sindhudurg Fort and relaxed coastal stays." },
      { title: "Gokarna-Murudeshwar", meta: "Coastal Karnataka | 4 days", desc: "Temple visits, beaches, viewpoints and comfortable road-trip style travel." },
      { title: "Hampi-Badami", meta: "Heritage circuit | 4-5 days", desc: "UNESCO ruins, caves, temples, stories and expert-led sightseeing." },
      { title: "Ujjain-Omkareshwar", meta: "Pilgrimage | 3 days", desc: "Jyotirlinga darshan, comfortable travel planning and group coordination." },
      { title: "Wildlife Tours", meta: "Tadoba, Pench, Kanha", desc: "Safari bookings, nature stays and wildlife-focused group experiences." },
      { title: "Customised International", meta: "Private groups", desc: "Nepal, Bhutan, Bali, Maldives and international holidays shaped around your dates." },
    ],
    process: ["Select destination", "Share date and group size", "Get itinerary and costing", "Confirm booking", "Travel with Explorers support"],
  },
  "lady-explorers": {
    eyebrow: "Speciality Tours",
    heading: "Curated Experiences For Every Explorer",
    intro:
      "Speciality Tours are designed around age, comfort, confidence, community and style of travel: Junior Explorers, Lady Explorers, Silver Explorers and Explorers on Wheels.",
    enquiryTitle: "Join a Speciality Batch",
    filters: ["Lady Explorers", "Junior Explorers", "Silver Explorers", "Explorers on Wheels", "Mountain Run", "Camping"],
    highlights: [
      "Women-only treks and tours with trusted group support",
      "Junior Explorers programs for 8-16 years",
      "Silver Explorers batches for 40+ travellers",
      "Bicycle, bike and caravan trips under Explorers on Wheels",
      "Mountain Run events for fitness and trail lovers",
      "Safe, friendly batches with clear communication",
    ],
    cards: [
      { title: "Lady Explorers", meta: "Women special", desc: "Treks, tours and camps planned for comfort, confidence and community." },
      { title: "Junior Explorers", meta: "8-16 years", desc: "Outdoor learning, camps, discipline, nature education and adventure activities." },
      { title: "Silver Explorers", meta: "40+ years", desc: "Comfortable pace, thoughtful itineraries and carefully managed travel plans." },
      { title: "Explorers on Wheels", meta: "Bike | Bicycle | Caravan", desc: "Road journeys, cycling plans and scenic routes for wheels-based adventures." },
      { title: "Mountain Run", meta: "Trail running", desc: "Fitness, trail movement and mountain events in natural terrain." },
      { title: "Custom Special Batches", meta: "Private groups", desc: "Special group plans for families, communities, schools and organisations." },
    ],
    process: ["Choose program type", "Check age and comfort level", "Pick batch or custom date", "Confirm pickup and payment", "Explore with the right group"],
  },
};

const ProgramPage = () => {
  const { programId } = useParams();
  const program = specialPrograms.find((p) => p.id === programId);
  const [form, setForm] = useState({ name: "", phone: "", category: "One Day Trek", message: "" });
  const content = pageContent[programId as keyof typeof pageContent];
  const filters = content?.filters || tourCategoryFilters;

  const relatedPrograms = useMemo(
    () => programDirectory.filter((item) => !item.link.endsWith(`/${programId}`)).slice(0, 8),
    [programId],
  );

  const submitEnquiry = (event: React.FormEvent) => {
    event.preventDefault();
    const details = [
      `Hi Explorers, I want details for ${program?.title}.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Category: ${form.category}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/919850504437?text=${encodeURIComponent(details)}`, "_blank", "noopener,noreferrer");
  };

  if (!program) {
    return (
      <Layout>
        <div className="container mx-auto flex min-h-[44vh] items-center justify-center px-4 py-16">
          <div className="rounded-lg border border-border bg-card p-8 text-center card-shadow">
            <h1 className="mb-4 font-heading text-2xl font-bold text-foreground">Program Not Found</h1>
            <Link to="/">
              <Button className="rounded-lg gradient-highlight text-highlight-foreground">Go Home</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative min-h-[44vh] overflow-hidden md:min-h-[54vh]">
        <img src={program.image} alt={program.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        <div className="relative z-10 flex min-h-[44vh] items-end px-4 pb-10 pt-24 md:min-h-[54vh] md:pb-12 md:pt-28">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 font-heading text-xs font-bold uppercase tracking-widest text-white/85 backdrop-blur">
                {program.ageGroup}
              </span>
              <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
                {content?.heading || program.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{content?.intro || program.description}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,380px)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {content && (
                <div className="rounded-lg border border-border bg-card p-6 card-shadow">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-accent">{content.eyebrow}</p>
                      <h2 className="mt-2 font-heading text-2xl font-extrabold text-foreground">
                        {program.title === "Group Tours" ? "Popular Tour Experiences" : "Speciality Programs"}
                      </h2>
                    </div>
                    <Sparkles className="h-6 w-6 shrink-0 text-primary" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {content.cards.map((card) => (
                      <article key={card.title} className="rounded-lg border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-md">
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full gradient-highlight text-sm font-heading font-extrabold text-highlight-foreground">
                          {card.title.slice(0, 2)}
                        </div>
                        <h3 className="font-heading text-lg font-extrabold text-foreground">{card.title}</h3>
                        <p className="mt-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-accent">
                          <MapPin className="h-3.5 w-3.5" />
                          {card.meta}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-lg border border-border bg-card p-6 card-shadow">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {content ? "Related Explorers Pages" : "Same filter for all internal pages"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {relatedPrograms.map((item) => (
                    <Link key={item.title} to={item.link}>
                      <Badge variant="secondary" className="rounded-full px-3 py-1.5">
                        {item.title}
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 card-shadow">
                <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">{content?.eyebrow || "Camp / Tour Category"}</p>
                    <h2 className="mt-2 font-heading text-2xl font-extrabold text-foreground">
                      {content ? "Choose Your Interest" : "Choose Your Plan"}
                    </h2>
                  </div>
                  <Link to="/treks">
                    <Button variant="outline" className="rounded-full font-heading font-bold">
                      View Upcoming Events
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                  {filters.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, category }))}
                      className={`min-h-28 rounded-lg border p-4 text-left transition-all ${
                        form.category === category
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-background text-foreground hover:border-primary/50"
                      }`}
                    >
                      <CheckCircle2 className="mb-3 h-5 w-5" />
                      <span className="font-heading text-sm font-bold">{category}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-border bg-card p-6 card-shadow">
                <h2 className="font-heading text-2xl font-extrabold text-foreground">
                  {content ? "What Makes This Page Different" : "Program Details"}
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {(content?.highlights || [
                    `Age Group: ${program.ageGroup}`,
                    "Expert certified instructors",
                    "Safety equipment and first-aid support",
                    "Certificate of completion",
                    "Photo and video documentation",
                    "Custom plans for groups available",
                  ]).map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-3 rounded-lg bg-background p-4 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {content && (
                <div className="rounded-lg border border-border bg-card p-6 card-shadow">
                  <div className="mb-5 flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <h2 className="font-heading text-2xl font-extrabold text-foreground">How It Works</h2>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {content.process.map((step, index) => (
                      <div key={step} className="rounded-lg bg-background p-4 text-center">
                        <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-extrabold text-primary">
                          {index + 1}
                        </div>
                        <p className="text-sm font-semibold text-muted-foreground">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-40 lg:self-start"
            >
              <form onSubmit={submitEnquiry} className="rounded-lg border border-border bg-card p-6 card-shadow">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">{content?.eyebrow || "One Day Trekking Plan"}</p>
                <h2 className="mt-2 font-heading text-2xl font-extrabold text-foreground">{content?.enquiryTitle || "Fill Enquiry Form"}</h2>
                {content && (
                  <div className="mt-4 rounded-lg bg-background p-4">
                    <div className="flex items-center gap-2 font-heading text-sm font-bold text-foreground">
                      <Users className="h-4 w-4 text-primary" />
                      Best for
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{program.ageGroup}</p>
                  </div>
                )}
                <div className="mt-5 space-y-4">
                  <Input
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-background"
                  />
                  <Input
                    required
                    type="tel"
                    placeholder="Mobile Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-background"
                  />
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {filters.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                  </select>
                  <Textarea
                    placeholder="Tell us your preferred date, group size, or destination"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-background"
                    rows={4}
                  />
                  <Button type="submit" className="w-full font-heading font-bold text-highlight-foreground gradient-highlight">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Send on WhatsApp
                  </Button>
                  <Link to="/contact" className="flex flex-wrap items-center justify-center gap-2 text-center text-sm font-semibold text-primary">
                    Contact office directly <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </form>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-accent">Explore More</p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold text-foreground">More Explorers Categories</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programDirectory.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group rounded-lg border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramPage;
