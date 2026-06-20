import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { trustStats } from "@/data/siteData";
import heroMountains from "@/assets/hero-mountains.jpg";
import heroWomen from "@/assets/hero-women.jpg";
import heroCamping from "@/assets/hero-camping.jpg";
import heroKids from "@/assets/hero-kids.jpg";
import { ShieldCheck, Users, Leaf } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroMountains} alt="Explorers in the mountains" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>
          <div className="relative">
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white/90">
                  About Explorers
                </span>
                <h1 className="mt-4 font-heading text-3xl font-extrabold text-white sm:text-4xl md:text-6xl">
                  Crafting Adventures That Last a Lifetime
                </h1>
                <p className="mt-4 text-base md:text-lg text-white/80 font-body">
                  Since 2001, we have helped thousands of explorers discover the mountains with confidence, comfort, and care.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col justify-center lg:min-h-[480px]">
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">
                  Our Story
                </h2>
                <div className="mt-5 space-y-4 text-justify font-body text-base leading-8 text-muted-foreground">
                <p>
                  Founded in 2001, Explorers Treks & Tours began as a small group of passionate trekkers who believed in the
                  transformative power of nature. What started as weekend hikes in the Sahyadri mountains has grown into one
                  of India's most trusted adventure travel organizations.
                </p>
                <p>
                  Today, we've taken over 2 lakh members on adventures ranging from beginner-friendly weekend treks to
                  challenging Himalayan expeditions. Our commitment to safety, quality, and unforgettable experiences remains
                  unwavering.
                </p>
                <p>
                  With certified trek leaders, first-aid trained guides, and careful route planning, every Explorers event is
                  designed to be safe, organised, and memorable.
                </p>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative grid min-h-[420px] grid-cols-12 grid-rows-6 gap-4 sm:min-h-[480px]">
                <div className="col-span-12 row-span-3 overflow-hidden rounded-lg border border-border bg-card card-shadow sm:col-span-7 sm:row-span-6">
                  <img src={heroWomen} alt="Explorers trek team" className="h-full min-h-56 w-full object-cover sm:min-h-72" />
                </div>
                <div className="col-span-6 row-span-2 overflow-hidden rounded-lg border border-border bg-card card-shadow sm:col-span-5 sm:row-span-3">
                  <img src={heroCamping} alt="Camp experience" className="h-full w-full object-cover" />
                </div>
                <div className="col-span-6 row-span-2 overflow-hidden rounded-lg border border-border bg-card card-shadow sm:col-span-5 sm:row-span-3">
                  <img src={heroKids} alt="Junior explorers" className="h-full w-full object-cover" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-border bg-card/95 p-4 shadow-xl backdrop-blur sm:left-auto sm:right-6 sm:w-64">
                  <p className="eyebrow">Why Us</p>
                  <h3 className="mt-2 font-heading text-xl font-extrabold text-foreground">Guided by Experts</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Certified trek leaders, safety-first planning, and thoughtful routes for every level.
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4">
                    <div>
                      <div className="font-heading text-xl font-extrabold text-primary">24+</div>
                      <p className="text-xs text-muted-foreground">Years</p>
                    </div>
                    <div>
                      <div className="font-heading text-xl font-extrabold text-primary">100%</div>
                      <p className="text-xs text-muted-foreground">Safety</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-5">
              {trustStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg border border-border bg-background p-6 text-center card-shadow"
                >
                  <div className="font-heading text-3xl font-extrabold text-foreground mb-2">{stat.number}</div>
                  <p className="text-muted-foreground font-body text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-foreground">Our Values</h2>
              <p className="text-muted-foreground font-body mt-3 max-w-2xl mx-auto">
                Every trek is crafted with a focus on safety, community, and respect for the mountains.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Safety First", desc: "Certified guides, first-aid support, and meticulous route planning for every adventure.", icon: ShieldCheck },
                { title: "Community", desc: "Building lasting friendships through shared adventures and a growing explorer family.", icon: Users },
                { title: "Sustainability", desc: "Leave No Trace principles, eco-friendly practices, and supporting local communities.", icon: Leaf },
              ].map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-lg border border-border bg-card p-8 text-center card-shadow"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-muted text-primary">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">{v.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/40">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <img src={heroCamping} alt="Group trek" className="h-72 w-full rounded-lg object-cover card-shadow sm:h-[360px]" />
            </div>
            <div className="lg:col-span-6">
              <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Our Promise
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl font-extrabold text-foreground">
                Adventures that feel personal, safe, and unforgettable
              </h2>
              <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                Whether it is your first trek or your fiftieth, we design every journey with care. Our teams manage logistics,
                safety, and support so you can focus on the trail, the views, and the memories.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
