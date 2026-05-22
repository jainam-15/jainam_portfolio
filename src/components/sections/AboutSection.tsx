"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center bg-black py-24 select-none"
    >
      <div className="mx-auto max-w-6xl w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[3/4] max-w-[400px] rounded-lg overflow-hidden border border-white/[0.06] bg-zinc-950"
            >
              {/* Vignette overlays for film look */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
              <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/20 via-transparent to-black/20 pointer-events-none" />
              
              <Image
                src="/founder_portrait.png"
                alt="Jainam Shah"
                fill
                priority
                className="object-cover grayscale contrast-[1.1] scale-102"
              />
            </motion.div>
          </div>

          {/* Right Column: Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 max-w-xl"
            >
              <span className="text-[10px] tracking-[0.3em] text-zinc-600 font-mono uppercase">
                {"02 // Identity"}
              </span>
              
              <h2 className="text-[clamp(3.5rem,8vw,6.5rem)] font-black tracking-[-0.05em] leading-[0.82] text-white uppercase">
                Engineering <br />
                With Taste.
              </h2>
              
              <p className="text-xl md:text-2xl leading-relaxed text-zinc-400 font-light">
                Obsessed with sub-millisecond API response latency and visual perfection. Designing interfaces that feel expensive. Operating at the intersection of deep engineering and elite product design.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
