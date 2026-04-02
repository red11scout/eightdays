import type { DayData } from "@/lib/holyWeekData";
import { motion } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp, Clock, GraduationCap, Layers, ScrollText, Wheat } from "lucide-react";
import { useState } from "react";

interface DaySectionProps {
  day: DayData;
}

function GospelBadge({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  const colors: Record<string, string> = {
    Matt: "#2D6A4F",
    Mark: "#CC5500",
    Luke: "#4A1A6B",
    John: "#8B0000",
  };
  return (
    <span
      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] font-medium"
      style={{ backgroundColor: `${colors[label]}12`, color: colors[label], border: `1px solid ${colors[label]}25` }}
    >
      {label} {value}
    </span>
  );
}

function EventsList({ events }: { events: DayData["events"] }) {
  return (
    <div className="space-y-3">
      {events.map((event, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04 }}
          className="flex items-start gap-3 group"
        >
          <div className="w-5 h-5 rounded-full border-2 border-border flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-semibold text-muted-foreground group-hover:border-accent group-hover:text-accent transition-colors">
            {i + 1}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground leading-snug">{event.title}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              <GospelBadge label="Matt" value={event.refs.matthew} />
              <GospelBadge label="Mark" value={event.refs.mark} />
              <GospelBadge label="Luke" value={event.refs.luke} />
              <GospelBadge label="John" value={event.refs.john} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ProphecyCard({ prophecy }: { prophecy: DayData["prophecies"][0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className="border rounded-lg overflow-hidden transition-shadow hover:shadow-md"
      style={{ borderColor: "#D4C5A930", backgroundColor: "#FAF8F3" }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start justify-between p-3 text-left gap-2"
      >
        <div className="flex items-start gap-2 min-w-0 flex-1">
          <ScrollText className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#B8860B" }} />
          <div className="min-w-0">
            <span className="text-xs font-semibold block" style={{ color: "#3D4F2F" }}>{prophecy.ot}</span>
            <span className="text-muted-foreground text-[10px]">fulfilled in </span>
            <span className="text-xs font-semibold" style={{ color: "#8B0000" }}>{prophecy.nt}</span>
          </div>
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 shrink-0 text-muted-foreground mt-0.5" /> : <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground mt-0.5" />}
      </button>
      {expanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-3 pb-3 space-y-2"
        >
          <div className="p-2.5 rounded text-sm" style={{ backgroundColor: "#F5E6B820" }}>
            <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "#B8860B" }}>Prophecy</p>
            <p className="italic text-foreground/80 text-sm leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>"{prophecy.otText}"</p>
          </div>
          <div className="p-2.5 rounded text-sm" style={{ backgroundColor: "#B7E4C720" }}>
            <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: "#2D6A4F" }}>Fulfillment</p>
            <p className="text-foreground/80 text-sm leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>{prophecy.ntText}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function DataTable({ table }: { table: NonNullable<DayData["tables"]>[0] }) {
  return (
    <div className="mt-8">
      <h4 className="text-base font-bold mb-3 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif", color: "#3D4F2F" }}>
        <BookOpen className="w-4 h-4" />
        {table.title}
      </h4>
      <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
        <div className="rounded-lg border border-border shadow-sm min-w-[600px]">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "#D4C5A930" }}>
                {table.headers.map((h, i) => (
                  <th key={i} className="px-3 py-2.5 text-left font-semibold text-foreground whitespace-nowrap border-b border-border text-xs uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-border/30 hover:bg-secondary/20 transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-foreground/85 text-sm" style={{ fontFamily: "'Source Serif 4', serif" }}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function InsightCard({
  icon,
  label,
  color,
  text,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
  text: string;
}) {
  const [open, setOpen] = useState(false);
  const preview = text.length > 120 ? text.slice(0, 120) + "..." : text;

  return (
    <div
      className="p-3 md:p-4 rounded-lg border transition-all"
      style={{ borderColor: `${color}20`, backgroundColor: `${color}05` }}
    >
      <div className="flex items-start gap-2 mb-1.5">
        <div className="shrink-0 mt-0.5" style={{ color }}>
          {icon}
        </div>
        <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color }}>
          {label}
        </p>
      </div>
      <p
        className="text-sm leading-relaxed text-foreground/80"
        style={{ fontFamily: "'Source Serif 4', serif" }}
      >
        {open ? text : preview}
      </p>
      {text.length > 120 && (
        <button
          onClick={() => setOpen(!open)}
          className="text-xs font-medium mt-1.5 flex items-center gap-1"
          style={{ color }}
        >
          {open ? "Show less" : "Read more"}
          {open ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>
      )}
    </div>
  );
}

export default function DaySection({ day }: DaySectionProps) {
  return (
    <section
      id={`day-${day.id}`}
      className="scroll-mt-20"
    >
      {/* Day header with image */}
      {day.image ? (
        <div className="relative w-full overflow-hidden rounded-xl mb-8" style={{ height: "clamp(240px, 35vw, 360px)" }}>
          <img src={day.image} alt={day.title} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{
            background: `linear-gradient(135deg, ${day.color}E6 0%, ${day.color}80 50%, transparent 100%)`
          }} />
          <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-8">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>
                {day.dayName}
              </p>
              {day.nisanDate && (
                <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }}>
                  {day.nisanDate}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
              {day.title}
            </h2>
            <p className="text-sm md:text-base text-white/80" style={{ fontFamily: "'Source Serif 4', serif" }}>
              {day.subtitle}
            </p>
            <div className="mt-2">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-medium" style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "white", backdropFilter: "blur(4px)" }}>
                {day.theme}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-8">
          <div className="flex items-center gap-3 md:gap-4 mb-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg shrink-0" style={{ backgroundColor: day.color, fontFamily: "'Playfair Display', serif" }}>
              {day.dayNumber}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase" style={{ color: day.color }}>
                  {day.dayName}
                </p>
                {day.nisanDate && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: `${day.color}12`, color: day.color }}>
                    {day.nisanDate}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}>
                {day.title}
              </h2>
            </div>
          </div>
          <p className="text-sm md:text-base text-muted-foreground mb-2" style={{ fontFamily: "'Source Serif 4', serif" }}>
            {day.subtitle}
          </p>
          <span className="inline-block px-3 py-1 rounded-full text-[10px] md:text-xs font-medium" style={{ backgroundColor: `${day.color}12`, color: day.color }}>
            {day.theme}
          </span>
        </div>
      )}

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Main narrative column */}
        <div className="lg:col-span-7 space-y-4">
          {day.narrative.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-[15px] md:text-base leading-[1.8] text-foreground/88"
              style={{ fontFamily: "'Source Serif 4', serif" }}
            >
              {para}
            </motion.p>
          ))}

          {/* Study Insight */}
          {day.studyInsight && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4 md:p-5 rounded-lg border-l-4 my-6"
              style={{ borderColor: day.color, backgroundColor: `${day.color}06` }}
            >
              <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: day.color }}>Meaning &amp; Study Insight</p>
              <p className="text-sm md:text-[15px] leading-[1.8] text-foreground/85 italic" style={{ fontFamily: "'Source Serif 4', serif" }}>
                {day.studyInsight}
              </p>
            </motion.div>
          )}

          {/* Key verse */}
          {day.keyVerse && (
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border-l-4 pl-4 md:pl-5 py-3 my-6 md:my-8"
              style={{ borderColor: day.color, backgroundColor: `${day.color}06` }}
            >
              <p className="text-[15px] md:text-base italic text-foreground/85 leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                &ldquo;{day.keyVerse.text}&rdquo;
              </p>
              <cite className="text-sm font-semibold mt-2 block" style={{ color: day.color, fontStyle: "normal" }}>
                &mdash; {day.keyVerse.ref}
              </cite>
            </motion.blockquote>
          )}

          {/* Scholarly insight cards */}
          <div className="space-y-3 my-6">
            {day.lambTypologyNote && (
              <InsightCard
                icon={<Wheat className="w-4 h-4" />}
                label="Passover Lamb Typology"
                color="#B8860B"
                text={day.lambTypologyNote}
              />
            )}
            {day.timingNote && (
              <InsightCard
                icon={<Clock className="w-4 h-4" />}
                label="Timing as Theology"
                color="#8B0000"
                text={day.timingNote}
              />
            )}
            {day.gospelHarmonyNote && (
              <InsightCard
                icon={<Layers className="w-4 h-4" />}
                label="Gospel Harmony Note"
                color="#4A1A6B"
                text={day.gospelHarmonyNote}
              />
            )}
            {day.scholarlyInsight && (
              <InsightCard
                icon={<GraduationCap className="w-4 h-4" />}
                label="Scholarly Insight"
                color="#2D6A4F"
                text={day.scholarlyInsight}
              />
            )}
          </div>

          {/* Teachings (Thursday) */}
          {day.teachings && day.teachings.length > 0 && (
            <div className="mt-6 md:mt-8">
              <h4 className="text-base font-bold mb-4 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif", color: "#3D4F2F" }}>
                <BookOpen className="w-4 h-4" />
                Upper Room Discourse &mdash; Key Teachings
              </h4>
              <div className="space-y-3">
                {day.teachings.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-3 md:p-4 rounded-lg border border-border/40"
                    style={{ backgroundColor: "#FAF8F3" }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                      <h5 className="text-sm font-bold" style={{ color: "#4A1A6B" }}>{t.title}</h5>
                      <span className="text-[11px] text-muted-foreground font-medium">{t.ref}</span>
                    </div>
                    <p className="text-sm italic text-foreground/80 leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Tables */}
          {day.tables?.map((table, i) => (
            <DataTable key={i} table={table} />
          ))}
        </div>

        {/* Sidebar column */}
        <div className="lg:col-span-5 space-y-5">
          {/* Events timeline */}
          <div className="p-4 md:p-5 rounded-xl border" style={{ backgroundColor: "#FAF8F3", borderColor: "#D4C5A930" }}>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4" style={{ color: day.color }}>
              Events & References
            </h3>
            <EventsList events={day.events} />
          </div>

          {/* Prophecies */}
          {day.prophecies.length > 0 && (
            <div className="p-4 md:p-5 rounded-xl border" style={{ backgroundColor: "#FFFCF5", borderColor: "#B8860B15" }}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "#B8860B" }}>
                Prophecies Fulfilled ({day.prophecies.length})
              </h3>
              <div className="space-y-2">
                {day.prophecies.map((p, i) => (
                  <ProphecyCard key={i} prophecy={p} />
                ))}
              </div>
            </div>
          )}

          {/* Gospel emphasis */}
          {day.gospelEmphasis && (
            <div className="p-4 md:p-5 rounded-xl border" style={{ backgroundColor: "#F8FAF8", borderColor: "#2D6A4F15" }}>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] mb-4" style={{ color: "#3D4F2F" }}>
                Each Gospel&apos;s Emphasis
              </h3>
              <div className="space-y-3">
                {day.gospelEmphasis.map((g, i) => {
                  const colors: Record<string, string> = {
                    Matthew: "#2D6A4F",
                    Mark: "#CC5500",
                    Luke: "#4A1A6B",
                    John: "#8B0000",
                  };
                  return (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 mt-0.5" style={{ backgroundColor: `${colors[g.gospel]}12`, color: colors[g.gospel] }}>
                        {g.gospel}
                      </span>
                      <p className="text-sm text-foreground/80 leading-snug" style={{ fontFamily: "'Source Serif 4', serif" }}>{g.emphasis}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
