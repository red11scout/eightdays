/*
 * FourCups.tsx — The Four Cups of Passover
 * Sacred Cartography Design
 *
 * Maps the four cups of the Passover Seder (Exodus 6:6-7)
 * to the Last Supper, showing how Jesus identified His blood
 * with the Cup of Redemption and reserved the Cup of Praise.
 */

import { FOUR_CUPS_DATA } from "@/lib/holyWeekData";
import { motion } from "framer-motion";
import { Wine } from "lucide-react";
import { useState } from "react";

export default function FourCups() {
  const [activeCup, setActiveCup] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#2C1810" }}>
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#8B735540" }} />
            <Wine className="w-5 h-5" style={{ color: "#B8860B" }} />
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#8B735540" }} />
          </div>
          <h2
            className="text-xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F5E6B8" }}
          >
            The Four Cups of Passover
          </h2>
          <p
            className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif", color: "rgba(255,255,255,0.65)" }}
          >
            The Passover Seder includes four cups of wine, each drawn from God&apos;s fourfold promise in Exodus 6:6&ndash;7.
            Jesus transformed the third cup &mdash; the Cup of Redemption &mdash; into the cup of the new covenant.
            The fourth cup He left undrunk, reserving it for the eschatological feast.
          </p>
        </motion.div>

        {/* Four cups grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {FOUR_CUPS_DATA.map((cup, i) => {
            const isActive = activeCup === i;
            const isThird = cup.cup === 3;
            const isFourth = cup.cup === 4;

            return (
              <motion.div
                key={cup.cup}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActiveCup(isActive ? null : i)}
                className="relative rounded-xl border p-4 md:p-5 cursor-pointer transition-all duration-300"
                style={{
                  borderColor: isActive ? cup.color : "rgba(255,255,255,0.1)",
                  backgroundColor: isActive ? `${cup.color}15` : "rgba(255,255,255,0.03)",
                  boxShadow: isThird ? `0 0 20px ${cup.color}20` : "none",
                }}
              >
                {/* Cup number badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: `${cup.color}25`, color: cup.color }}
                  >
                    {cup.cup}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-sm font-bold leading-tight"
                      style={{ fontFamily: "'Playfair Display', serif", color: "#F5E6B8" }}
                    >
                      {cup.name}
                    </h3>
                    <p className="text-[10px] italic" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {cup.hebrew}
                    </p>
                  </div>
                </div>

                {/* Exodus promise */}
                <blockquote
                  className="text-xs italic leading-relaxed mb-3 pl-3 border-l-2"
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    color: "rgba(255,255,255,0.7)",
                    borderColor: `${cup.color}50`,
                  }}
                >
                  &ldquo;{cup.exodus}&rdquo;
                  <cite className="block text-[10px] mt-1 not-italic" style={{ color: cup.color }}>
                    &mdash; {cup.reference}
                  </cite>
                </blockquote>

                {/* Connection to Last Supper */}
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    fontFamily: "'Source Serif 4', serif",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {cup.connection}
                </p>

                {/* Special indicators */}
                {isThird && (
                  <div
                    className="mt-3 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-center"
                    style={{ backgroundColor: `${cup.color}20`, color: cup.color }}
                  >
                    &ldquo;This is my blood of the covenant&rdquo;
                  </div>
                )}
                {isFourth && (
                  <div
                    className="mt-3 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-center"
                    style={{ backgroundColor: `${cup.color}20`, color: cup.color }}
                  >
                    Reserved for the Kingdom
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-10 text-center"
        >
          <p
            className="text-xs md:text-sm max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif", color: "rgba(255,255,255,0.5)" }}
          >
            The undrunk fourth cup connects the Last Supper to the Marriage Supper of the Lamb (Revelation 19:9).
            Every celebration of communion is an anticipation of that final cup &mdash;
            &ldquo;until he comes&rdquo; (1 Corinthians 11:26).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
