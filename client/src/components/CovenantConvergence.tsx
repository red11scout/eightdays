/*
 * CovenantConvergence.tsx — How the Covenants Converge at Calvary
 * Sacred Cartography Design
 *
 * Shows how every major biblical covenant finds its fulfillment
 * in the events of Holy Week.
 */

import { COVENANT_DATA } from "@/lib/holyWeekData";
import { motion } from "framer-motion";
import { Crown, Flame, Heart, ScrollText, Triangle } from "lucide-react";
import { useState } from "react";

const ICONS: Record<string, React.ReactNode> = {
  scroll: <ScrollText className="w-5 h-5" />,
  flame: <Flame className="w-5 h-5" />,
  crown: <Crown className="w-5 h-5" />,
  heart: <Heart className="w-5 h-5" />,
  triangle: <Triangle className="w-5 h-5" />,
};

export default function CovenantConvergence() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
            <ScrollText className="w-5 h-5" style={{ color: "#B8860B" }} />
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
          </div>
          <h2
            className="text-xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
          >
            How the Covenants Converge at Calvary
          </h2>
          <p
            className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-foreground/70"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            The entire Passion Week is the telos &mdash; the goal and fulfillment &mdash; of Israel&apos;s covenant history.
            Every covenant God made with His people finds its culmination in the death and resurrection of Christ.
          </p>
        </motion.div>

        {/* Covenant cards */}
        <div className="space-y-4">
          {COVENANT_DATA.map((cov, i) => {
            const isOpen = expanded === i;
            return (
              <motion.div
                key={cov.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border overflow-hidden transition-all duration-300"
                style={{
                  borderColor: isOpen ? `${cov.color}40` : "#D4C5A930",
                  backgroundColor: isOpen ? `${cov.color}06` : "#FFFFFF",
                  boxShadow: isOpen ? `0 4px 20px ${cov.color}12` : "none",
                }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="w-full flex items-center gap-3 md:gap-4 p-4 md:p-5 text-left"
                >
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${cov.color}12`, color: cov.color }}
                  >
                    {ICONS[cov.icon]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-sm md:text-base font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
                    >
                      {cov.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{cov.reference}</p>
                  </div>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-sm shrink-0 transition-transform duration-300"
                    style={{
                      backgroundColor: `${cov.color}12`,
                      color: cov.color,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="px-4 md:px-5 pb-4 md:pb-5"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-0 md:ml-16">
                      {/* Promise */}
                      <div
                        className="p-3 md:p-4 rounded-lg"
                        style={{ backgroundColor: `${cov.color}08`, border: `1px solid ${cov.color}15` }}
                      >
                        <p
                          className="text-[10px] font-bold uppercase tracking-wider mb-2"
                          style={{ color: cov.color }}
                        >
                          The Promise
                        </p>
                        <p
                          className="text-sm leading-relaxed text-foreground/80"
                          style={{ fontFamily: "'Source Serif 4', serif" }}
                        >
                          {cov.promise}
                        </p>
                      </div>
                      {/* Fulfillment */}
                      <div
                        className="p-3 md:p-4 rounded-lg"
                        style={{ backgroundColor: "#3D4F2F08", border: "1px solid #3D4F2F15" }}
                      >
                        <p
                          className="text-[10px] font-bold uppercase tracking-wider mb-2"
                          style={{ color: "#3D4F2F" }}
                        >
                          Fulfilled in Holy Week
                        </p>
                        <p
                          className="text-sm leading-relaxed text-foreground/80"
                          style={{ fontFamily: "'Source Serif 4', serif" }}
                        >
                          {cov.fulfillment}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
