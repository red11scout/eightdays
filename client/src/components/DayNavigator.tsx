import { DAYS } from "@/lib/holyWeekData";
import { motion } from "framer-motion";

interface DayNavigatorProps {
  activeDay: string;
  onDayClick: (dayId: string) => void;
}

export default function DayNavigator({ activeDay, onDayClick }: DayNavigatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="hidden xl:block fixed right-6 top-1/2 -translate-y-1/2 z-40"
    >
      <div className="flex flex-col items-end gap-1.5">
        {DAYS.map((day) => {
          const isActive = day.id === activeDay;
          return (
            <button
              key={day.id}
              onClick={() => onDayClick(day.id)}
              className="flex items-center gap-2 group"
            >
              <span
                className="text-[10px] font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
                style={{ color: day.color }}
              >
                {day.dayName}
              </span>
              <div
                className="rounded-full transition-all duration-200"
                style={{
                  width: isActive ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: isActive ? day.color : "#D4C5A9",
                }}
              />
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}
