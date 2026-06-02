"use client";

import { motion } from "framer-motion";

const initiatives = [
  {
    name: "Intent AI",
    mission: "Democratizing full-stack software creation through natural language.",
    stage: "Private Alpha",
    stageColor: "text-blue-500 dark:text-blue-400",
    stageDot: "bg-blue-500 dark:bg-blue-400",
  },
  {
    name: "Autonomous Lead Workflows",
    mission: "Removing human friction from B2B sales pipelines.",
    stage: "Active",
    stageColor: "text-green-600 dark:text-green-400",
    stageDot: "bg-green-500 dark:bg-green-400",
  },
];

export function CurrentlyBuilding() {
  return (
    <section className="relative py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground">
              Currently Building
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            What I&apos;m working on<span className="text-foreground/40">.</span>
          </h2>
        </motion.div>

        <div className="divide-y divide-border border-y border-border">
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * idx, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="py-8 grid grid-cols-12 gap-6 items-start"
            >
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`relative flex h-1.5 w-1.5 shrink-0 mt-px`}>
                    <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${item.stageDot}`} />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">{item.name}</h3>
                </div>
                <p className={`text-xs font-mono tracking-widest uppercase ${item.stageColor} pl-[18px]`}>
                  {item.stage}
                </p>
              </div>
              <p className="col-span-12 md:col-span-8 text-base text-muted-foreground leading-relaxed">
                {item.mission}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
