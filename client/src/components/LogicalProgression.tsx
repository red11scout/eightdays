/*
 * LogicalProgression.tsx — Sacred Cartography Design
 * Flow diagram: OT Preparation → Presentation → Inspection → Preparation → Sacrifice → Rest → Victory
 * Uses the existing palette: earth tones, Playfair Display headings, Source Serif 4 body.
 */

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const STEPS = [
  {
    label: "Old Testament",
    sublabel: "Prophetic Preparation",
    bg: "#2C1810",
    text: "#F5E6B8",
    border: "#2C1810",
    accent: true,
  },
  {
    label: "Palm Sunday",
    sublabel: "Presentation of the Lamb",
    bg: "#2D6A4F10",
    text: "#2D6A4F",
    border: "#2D6A4F40",
  },
  {
    label: "Mon — Wed",
    sublabel: "Inspection of the Lamb",
    bg: "#B8860B10",
    text: "#B8860B",
    border: "#B8860B40",
  },
  {
    label: "Thursday",
    sublabel: "Preparation of the Lamb",
    bg: "#4A1A6B10",
    text: "#4A1A6B",
    border: "#4A1A6B40",
  },
  {
    label: "Friday",
    sublabel: "Sacrifice of the Lamb",
    bg: "#8B000010",
    text: "#8B0000",
    border: "#8B000040",
  },
  {
    label: "Saturday",
    sublabel: "Rest of the Lamb",
    bg: "#8B735510",
    text: "#8B7355",
    border: "#8B735540",
  },
  {
    label: "Sunday",
    sublabel: "Victory of the Lamb",
    bg: "#B8860B",
    text: "#FFFFFF",
    border: "#B8860B",
    accent: true,
  },
];

export default function LogicalProgression() {
  return (
    <section className="py-12 md:py-20 border-t border-b" style={{ borderColor: "#D4C5A940", backgroundColor: "#FFFFFF" }}>
      <div className="container max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#B8860B" }} />
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
          </div>
          <h2
            className="text-xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
          >
            The Logical Progression
          </h2>
          <p
            className="max-w-2xl mx-auto text-sm md:text-base text-foreground/70 leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            The theological and chronological flow of the week, moving from prophetic preparation in the Old Testament to the ultimate victory of the Resurrection. The Passover Lamb typology unfolds across every day.
          </p>
        </motion.div>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:flex items-center justify-center gap-2">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2"
            >
              <div
                className="px-4 py-4 rounded-lg text-center shadow-sm transition-transform hover:scale-105"
                style={{
                  backgroundColor: step.bg,
                  color: step.text,
                  border: `1px solid ${step.border}`,
                  minWidth: step.accent ? "140px" : "130px",
                }}
              >
                <span
                  className="block text-xs font-bold tracking-wider uppercase mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", opacity: step.accent ? 1 : 0.9 }}
                >
                  {step.label}
                </span>
                <span
                  className="block text-[11px] leading-tight"
                  style={{ fontFamily: "'Source Serif 4', serif", opacity: step.accent ? 0.85 : 0.7 }}
                >
                  {step.sublabel}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <ArrowRight
                  className="w-4 h-4 shrink-0"
                  style={{ color: i === STEPS.length - 2 ? "#B8860B" : "#D4C5A9" }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet: vertical flow */}
        <div className="lg:hidden flex flex-col items-center gap-2">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center"
            >
              <div
                className="px-5 py-3.5 rounded-lg text-center shadow-sm w-full max-w-[280px]"
                style={{
                  backgroundColor: step.bg,
                  color: step.text,
                  border: `1px solid ${step.border}`,
                }}
              >
                <span
                  className="block text-xs font-bold tracking-wider uppercase mb-0.5"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step.label}
                </span>
                <span
                  className="block text-[11px] leading-tight"
                  style={{ fontFamily: "'Source Serif 4', serif", opacity: 0.8 }}
                >
                  {step.sublabel}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <ChevronDown
                  className="w-4 h-4 my-1"
                  style={{ color: i === STEPS.length - 2 ? "#B8860B" : "#D4C5A9" }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Study note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 max-w-2xl mx-auto"
        >
          <div className="p-4 md:p-5 rounded-lg border" style={{ borderColor: "#D4C5A930", backgroundColor: "#FAF8F3" }}>
            <div className="flex items-start gap-3">
              <span className="text-lg shrink-0" style={{ color: "#B8860B" }}>✦</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "#3D4F2F" }}>
                  The Passover Lamb Typology
                </h4>
                <p className="text-sm text-foreground/75 leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  Just as the Passover lamb was selected on the 10th of Nisan (Palm Sunday), inspected for blemishes over four days (Monday through Wednesday), prepared on the 14th (Thursday), and slain at twilight (Friday), so Jesus followed this exact pattern — the ultimate Lamb "without blemish and without spot" (1 Peter 1:19).
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
