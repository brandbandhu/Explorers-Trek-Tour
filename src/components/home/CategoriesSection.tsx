import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { experienceCategories } from "@/data/siteData";

const CategoriesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="font-heading text-sm font-black uppercase tracking-[0.22em] text-accent">Curated Experiences For Everyone</p>
          <h2 className="mt-3 font-heading text-3xl font-black text-foreground md:text-5xl">Choose Your Kind of Adventure</h2>
        </div>
        <div className="grid auto-rows-[13rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experienceCategories.map((category, index) => {
            const tall = index % 7 === 0 || index % 7 === 4;
            const wide = index % 5 === 1;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className={`${tall ? "sm:row-span-2" : ""} ${wide ? "lg:col-span-2" : ""}`}
              >
                <Link to={category.link} className="group relative flex h-full overflow-hidden rounded-lg border border-border bg-black">
                  <img src={category.image} alt={category.name} className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative mt-auto flex w-full items-end justify-between gap-4 p-5">
                    <h3 className="font-heading text-xl font-black leading-tight text-white">{category.name}</h3>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
