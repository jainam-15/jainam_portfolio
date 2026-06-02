"use client";

import { motion } from "framer-motion";

const obsessions = [
  { title: "Autonomous Agents", description: "Software that acts on your behalf, not just responds to commands." },
  { title: "Hyper-Automation", description: "Removing friction between human intent and digital execution." },
  { title: "Human Behavior", description: "Why people actually use products, vs. why we think they do." },
  { title: "Considered Design", description: "The impact of a perfect micro-interaction or a well-chosen shadow." },
  { title: "Business Systems", description: "Software as a lever — one engineer, 100× output." },
  { title: "Scalable Architecture", description: "Foundations that hold when user 10,000 logs in." },
];

export function VisionObsessions() {
  return (
    <section className="relative py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6">
            Thinking
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6">
            Software is
            <br />
            <span className="text-foreground/40">digital leverage.</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            I build systems because they&apos;re the most efficient form of leverage.
            A well-designed workflow can automate the work of a dozen people and
            create new business models at scale. The gap between human ambition
            and autonomous execution is exactly where I work.
          </p>
        </motion.div>

        {/* Obsessions grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 divide-y divide-border border-y border-border"
        >
          {obsessions.map((item, idx) => (
            <div
              key={idx}
              className="py-6 sm:border-l sm:pl-8 first:border-l-0 sm:[&:nth-child(3n+1)]:border-l-0"
            >
              <h3 className="text-sm font-semibold text-foreground mb-1.5">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
