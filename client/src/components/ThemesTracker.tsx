import { THEOLOGICAL_THEMES, DAYS } from "@/lib/holyWeekData";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

export default function ThemesTracker() {
  const dayLabels = DAYS.map((d) => d.dayName);

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#F0EBE0" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#C4B896" }} />
            <Compass className="w-5 h-5" style={{ color: "#B8860B" }} />
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#C4B896" }} />
          </div>
          <h2 className="text-xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}>
            Theological Themes Across Holy Week
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
            Six major themes weave through the eight days, building toward their climax on Good Friday and resolution on Resurrection Sunday.
          </p>
        </motion.div>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <div className="rounded-xl border border-border shadow-sm min-w-[800px]" style={{ backgroundColor: "#FAF8F3" }}>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-left font-bold text-foreground border-b border-border text-xs uppercase tracking-wider" style={{ backgroundColor: "#D4C5A940", minWidth: "130px" }}>
                    Theme
                  </th>
                  {dayLabels.map((label, i) => (
                    <th
                      key={i}
                      className="px-2 py-3 text-center font-bold text-[10px] uppercase tracking-wider border-b border-border whitespace-nowrap"
                      style={{ color: DAYS[i].color, backgroundColor: "#D4C5A940", minWidth: "100px" }}
                    >
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {THEOLOGICAL_THEMES.map((row, ri) => (
                  <tr key={ri} className="border-b border-border/30">
                    <td className="px-3 py-2.5 font-semibold text-foreground text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {row.theme}
                    </td>
                    {row.days.map((cell, ci) => (
                      <td
                        key={ci}
                        className="px-2 py-2.5 text-center text-xs leading-snug"
                        style={{
                          color: cell ? DAYS[ci].color : "#D0D0D0",
                          backgroundColor: cell ? `${DAYS[ci].color}06` : "transparent",
                          fontFamily: "'Source Serif 4', serif",
                        }}
                      >
                        {cell || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
