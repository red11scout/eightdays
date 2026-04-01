import { DAYS } from "@/lib/holyWeekData";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface JourneyTimelineProps {
  activeDay: string;
  onDayClick: (dayId: string) => void;
}

export default function JourneyTimeline({ activeDay, onDayClick }: JourneyTimelineProps) {
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll the active day into view in the horizontal nav
  useEffect(() => {
    if (!scrollRef.current) return;
    const activeEl = scrollRef.current.querySelector(`[data-timeline-id="${activeDay}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeDay]);

  const activeIndex = DAYS.findIndex((d) => d.id === activeDay);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: scrolled ? 0 : -80 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backgroundColor: "rgba(250, 248, 243, 0.97)", backdropFilter: "blur(12px)", borderColor: "#D4C5A950" }}
    >
      <div className="container py-2">
        <div className="flex items-center gap-2">
          <span
            className="text-[10px] font-semibold tracking-[0.2em] uppercase shrink-0 hidden sm:block"
            style={{ fontFamily: "'Playfair Display', serif", color: "#8B7355" }}
          >
            Holy Week
          </span>
          <div
            ref={scrollRef}
            className="flex items-center gap-0 flex-1 min-w-0 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {DAYS.map((day, i) => {
              const isActive = day.id === activeDay;
              const isPast = i <= activeIndex;
              return (
                <div key={day.id} className="flex items-center shrink-0" data-timeline-id={day.id}>
                  <button
                    onClick={() => onDayClick(day.id)}
                    className="flex flex-col items-center gap-0.5 px-1.5 sm:px-2.5 py-1 rounded-md transition-all hover:bg-secondary/50 group"
                  >
                    <div
                      className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 transition-all"
                      style={{
                        borderColor: day.color,
                        backgroundColor: isPast ? day.color : "transparent",
                        boxShadow: isActive ? `0 0 0 3px ${day.color}25` : "none",
                      }}
                    />
                    <span
                      className="text-[8px] sm:text-[10px] leading-tight font-medium whitespace-nowrap transition-colors"
                      style={{ color: isActive ? day.color : "#A0A0A0" }}
                    >
                      <span className="hidden sm:inline">{day.dayName}</span>
                      <span className="sm:hidden">{day.dayName.slice(0, 3)}</span>
                    </span>
                  </button>
                  {i < DAYS.length - 1 && (
                    <div
                      className="w-2 sm:w-4 h-0.5 shrink-0"
                      style={{ backgroundColor: isPast && i < activeIndex ? DAYS[i + 1].color : "#E0D8C8" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
