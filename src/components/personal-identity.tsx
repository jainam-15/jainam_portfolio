"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const insights = [
  {
    label: "The lesson",
    text: "I used to build in a vacuum — perfect architecture, no users. That changed how I think. Now I start with the problem, not the stack.",
  },
  {
    label: "The principle",
    text: "Ideas are free. Execution is everything. My entire toolkit is optimized for turning concepts into working products fast.",
  },
  {
    label: "The shift",
    text: "AI isn't a feature I add. It's an architectural layer that lets software reason, classify, and act — autonomously.",
  },
];

export function PersonalIdentity() {
  return (
    <section id="about" className="relative py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden border border-border bg-card relative">
              <Image
                src="/images/founder_portrait.png"
                alt="Jainam Shah"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 lg:col-start-6 flex flex-col justify-center"
          >
            <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-8">
              About
            </p>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8">
              I don't just write code.
              <br />
              <span className="text-foreground/40">I build businesses.</span>
            </h2>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed mb-12">
              <p>
                My obsession is human utility — software that solves real problems at scale.
                I combine engineering depth with product thinking to build things
                that work well and feel right.
              </p>
              <p>
                I&apos;m most effective at the intersection of AI infrastructure,
                full-stack systems, and product design. I care about every layer
                of the stack, and every second of the user experience.
              </p>
            </div>

            {/* Insights — clean list, no cards */}
            <div className="divide-y divide-border">
              {insights.map((item, idx) => (
                <div key={idx} className="py-5 grid grid-cols-12 gap-4">
                  <p className="col-span-3 text-xs font-mono tracking-widest uppercase text-muted-foreground/60 pt-0.5">
                    {item.label}
                  </p>
                  <p className="col-span-9 text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
