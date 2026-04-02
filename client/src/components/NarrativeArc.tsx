/*
 * NarrativeArc.tsx — The Narrative Arc: From Selection to Vindication
 * Sacred Cartography Design
 *
 * A closing editorial sweep summarizing the entire week as one
 * continuous, divinely orchestrated drama.
 */

import { NARRATIVE_ARC } from "@/lib/holyWeekData";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function NarrativeArc() {
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#FAF8F3" }}>
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
            <MapPin className="w-5 h-5" style={{ color: "#B8860B" }} />
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
          </div>
          <h2
            className="text-xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
          >
            {NARRATIVE_ARC.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p
            className="text-[15px] md:text-base leading-[1.9] text-foreground/85"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            {NARRATIVE_ARC.text}
          </p>

          <blockquote
            className="border-l-4 pl-4 md:pl-5 py-3"
            style={{ borderColor: "#B8860B", backgroundColor: "#B8860B06" }}
          >
            <p
              className="text-[15px] md:text-base italic leading-[1.9] text-foreground/80"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              {NARRATIVE_ARC.closing}
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
