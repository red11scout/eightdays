import { DAYS } from "@/lib/holyWeekData";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";

function GospelCell({ value }: { value?: string }) {
  if (!value) return <td className="px-2 py-1.5 text-center text-muted-foreground/25 text-xs">—</td>;
  return (
    <td className="px-2 py-1.5 text-center text-xs font-medium" style={{ color: "#3D4F2F" }}>
      {value}
    </td>
  );
}

export default function GospelHarmonyTable() {
  const [expanded, setExpanded] = useState(false);

  const dayGroups = DAYS.map((day) => ({
    dayName: day.dayName,
    color: day.color,
    events: day.events,
  }));

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
            <Layers className="w-5 h-5" style={{ color: "#B8860B" }} />
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
          </div>
          <h2 className="text-xl md:text-3xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}>
            The Gospel Harmony
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
            Every major event harmonized across Matthew, Mark, Luke, and John. Where a Gospel omits an event, the cell shows a dash, revealing each writer's distinct emphasis.
          </p>
        </motion.div>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <div className="rounded-xl border border-border shadow-sm min-w-[700px]" style={{ backgroundColor: "#FAF8F3" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#D4C5A940" }}>
                  <th className="px-3 py-3 text-left font-bold text-foreground border-b border-border w-[90px] text-xs uppercase tracking-wider">Day</th>
                  <th className="px-3 py-3 text-left font-bold text-foreground border-b border-border text-xs uppercase tracking-wider">Event</th>
                  <th className="px-2 py-3 text-center font-bold border-b border-border whitespace-nowrap text-xs" style={{ color: "#2D6A4F" }}>Matthew</th>
                  <th className="px-2 py-3 text-center font-bold border-b border-border whitespace-nowrap text-xs" style={{ color: "#CC5500" }}>Mark</th>
                  <th className="px-2 py-3 text-center font-bold border-b border-border whitespace-nowrap text-xs" style={{ color: "#4A1A6B" }}>Luke</th>
                  <th className="px-2 py-3 text-center font-bold border-b border-border whitespace-nowrap text-xs" style={{ color: "#8B0000" }}>John</th>
                </tr>
              </thead>
              <tbody>
                {dayGroups.map((group) => {
                  const visibleEvents = expanded ? group.events : group.events.slice(0, 3);
                  return visibleEvents.map((event, ei) => (
                    <tr key={`${group.dayName}-${ei}`} className="border-b border-border/30 hover:bg-secondary/20 transition-colors">
                      {ei === 0 && (
                        <td
                          className="px-3 py-1.5 font-bold text-[10px] uppercase tracking-wider align-top"
                          rowSpan={visibleEvents.length}
                          style={{ color: group.color, borderRight: `3px solid ${group.color}`, backgroundColor: `${group.color}05` }}
                        >
                          {group.dayName}
                        </td>
                      )}
                      <td className="px-3 py-1.5 text-sm text-foreground/85" style={{ fontFamily: "'Source Serif 4', serif" }}>{event.title}</td>
                      <GospelCell value={event.refs.matthew} />
                      <GospelCell value={event.refs.mark} />
                      <GospelCell value={event.refs.luke} />
                      <GospelCell value={event.refs.john} />
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all border hover:shadow-sm"
            style={{ color: "#5A6672", borderColor: "#D4C5A9" }}
          >
            {expanded ? (
              <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show All Events <ChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
