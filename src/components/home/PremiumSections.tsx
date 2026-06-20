import { Facebook, Instagram, Settings, ShieldCheck, Star, Youtube } from "lucide-react";
import { adminModules, awards, offers, testimonials, trustStats } from "@/data/siteData";

export const StatsSection = () => (
  <section className="bg-background px-4 py-8">
    <div className="container mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {trustStats.map((stat) => (
        <div key={stat.label} className="rounded-lg border border-border bg-card p-5 text-center shadow-sm">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="font-heading text-2xl font-black text-primary">{stat.number}</div>
          <div className="mt-1 font-heading text-sm font-black text-foreground">{stat.label}</div>
          <div className="mt-1 text-xs font-semibold text-muted-foreground">{stat.note}</div>
        </div>
      ))}
    </div>
  </section>
);

export const AwardsSection = () => (
  <section className="section-padding bg-white">
    <div className="container mx-auto">
      <div className="mb-10 text-center">
        <p className="font-heading text-sm font-black uppercase tracking-[0.22em] text-accent">Awards & Affiliations</p>
        <h2 className="mt-3 font-heading text-3xl font-black text-foreground md:text-5xl">Trusted Travel Network</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
        {awards.map((award) => (
          <div key={award} className="flex min-h-24 items-center justify-center rounded-lg border border-border bg-secondary/50 p-4 text-center font-heading text-sm font-black text-primary">
            {award}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const SocialProofSection = () => (
  <section className="gradient-primary section-padding text-foreground">
    <div className="container mx-auto grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="font-heading text-sm font-black uppercase tracking-[0.22em] text-accent">Live Social Proof</p>
        <h2 className="mt-3 font-heading text-3xl font-black md:text-5xl">Follow the Community</h2>
        <p className="mt-4 max-w-xl text-foreground/75">Live updates, trip memories, reviews, and video stories from Explorers batches.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            ["Instagram", Instagram],
            ["Facebook", Facebook],
            ["YouTube", Youtube],
            ["Google Review", Star],
          ].map(([label, Icon]) => (
            <a key={label as string} href="#" className="flex items-center gap-3 rounded-lg border border-foreground/15 bg-foreground/10 p-4 font-heading font-black text-foreground transition hover:bg-foreground/15">
              <Icon className="h-5 w-5" />
              {label as string}
            </a>
          ))}
        </div>
      </div>
      <div className="rounded-lg bg-white p-6 text-foreground shadow-xl">
        <div className="mb-4 flex items-center gap-1 text-accent">
          {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-5 w-5 fill-current" />)}
        </div>
        <div className="grid gap-4">
          {testimonials.map((quote, index) => (
            <blockquote key={quote} className="rounded-lg border border-border bg-background p-4 text-sm font-semibold text-muted-foreground">
              "{quote}"
              <footer className="mt-2 font-heading text-xs font-black uppercase tracking-wide text-primary">Explorer Review {index + 1}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const OffersAdminSection = () => (
  <section className="section-padding bg-secondary/60">
    <div className="container mx-auto grid gap-8 lg:grid-cols-2">
      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <p className="font-heading text-sm font-black uppercase tracking-[0.22em] text-accent">Offers & Payment</p>
        <h2 className="mt-3 font-heading text-3xl font-black text-foreground">Common Offer Engine</h2>
        <div className="mt-6 grid gap-3">
          {offers.map((offer) => (
            <div key={offer.name} className="rounded-lg border border-border bg-background p-4">
              <div className="font-heading font-black text-primary">{offer.name}</div>
              <div className="mt-1 text-sm font-semibold text-muted-foreground">{offer.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Settings className="h-6 w-6 text-primary" />
          <p className="font-heading text-sm font-black uppercase tracking-[0.22em] text-accent">Admin Panel Ready</p>
        </div>
        <h2 className="mt-3 font-heading text-3xl font-black text-foreground">Editable Content Controls</h2>
        <div className="mt-6 grid gap-2 sm:grid-cols-2">
          {adminModules.map((module) => (
            <div key={module} className="rounded-lg bg-background px-3 py-2 text-sm font-semibold text-muted-foreground">
              {module}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
