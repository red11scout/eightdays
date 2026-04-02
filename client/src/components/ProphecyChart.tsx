/*
 * ProphecyChart.tsx — Sacred Cartography Design
 * Bar chart showing prophecy fulfillment density across each day of Holy Week.
 * Uses Chart.js via react-chartjs-2 with the existing palette.
 */

import { DAYS } from "@/lib/holyWeekData";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { motion } from "framer-motion";
import { useMemo, useRef, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function ProphecyChart() {
  const chartRef = useRef<ChartJS<"bar"> | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const labels = useMemo(() => DAYS.map((d) => d.dayName), []);
  const counts = useMemo(() => DAYS.map((d) => d.prophecies.length), []);
  const colors = useMemo(() => DAYS.map((d) => d.color), []);

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "OT Prophecies Fulfilled",
          data: counts,
          backgroundColor: colors.map((c) => `${c}CC`),
          borderColor: colors,
          borderWidth: 1,
          borderRadius: 4,
          borderSkipped: false as const,
        },
      ],
    }),
    [labels, counts, colors]
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "rgba(44, 24, 16, 0.92)",
          titleFont: { family: "'Playfair Display', serif", size: 14, weight: "bold" as const },
          bodyFont: { family: "'Source Serif 4', serif", size: 13 },
          padding: 12,
          cornerRadius: 6,
          callbacks: {
            title: (items: any[]) => {
              const idx = items[0]?.dataIndex;
              return idx !== undefined ? DAYS[idx].dayName : "";
            },
            label: (item: any) => {
              const count = item.raw as number;
              return count === 0
                ? "  No specific prophecy highlighted"
                : `  ${count} prophecy fulfillment${count > 1 ? "s" : ""}`;
            },
            afterLabel: (item: any) => {
              const idx = item.dataIndex;
              const day = DAYS[idx];
              if (day.prophecies.length === 0) return "";
              return day.prophecies
                .slice(0, 3)
                .map((p) => `  • ${p.ot}`)
                .join("\n");
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            color: "#8B7355",
            font: { family: "'Source Serif 4', serif", size: 11 },
          },
          grid: { color: "#D4C5A930" },
          title: {
            display: !isMobile,
            text: "Number of Prophecies",
            color: "#3D4F2F",
            font: { family: "'Playfair Display', serif", size: 12, weight: "bold" as const },
          },
        },
        x: {
          ticks: {
            color: "#2C1810",
            font: { family: "'Playfair Display', serif", size: isMobile ? 9 : 11, weight: "bold" as const },
            maxRotation: isMobile ? 45 : 0,
          },
          grid: { display: false },
        },
      },
    }),
    [isMobile]
  );

  const totalProphecies = counts.reduce((a, b) => a + b, 0);

  return (
    <section
      className="py-12 md:py-20"
      style={{ backgroundColor: "#F5F2EC" }}
    >
      <div className="container max-w-5xl">
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
            Prophetic Fulfillments by Day
          </h2>
          <p
            className="max-w-2xl mx-auto text-sm md:text-base text-foreground/70 leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            This visualization quantifies the {totalProphecies} specific Old Testament prophecies fulfilled on each day of Passion Week. It demonstrates the extraordinary prophetic density concentrated on Good Friday — the day of the Crucifixion.
          </p>
        </motion.div>

        {/* Chart card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-4 md:p-6 rounded-xl border shadow-sm"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#D4C5A930" }}
        >
          <div className="relative w-full" style={{ height: isMobile ? "300px" : "380px" }}>
            <Bar ref={chartRef} data={data} options={options} />
          </div>
        </motion.div>

        {/* Insight note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-8 max-w-2xl mx-auto"
        >
          <div className="p-4 md:p-5 rounded-lg border" style={{ borderColor: "#D4C5A930", backgroundColor: "#FAF8F3" }}>
            <div className="flex items-start gap-3">
              <span className="text-lg shrink-0" style={{ color: "#8B0000" }}>✦</span>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: "#3D4F2F" }}>
                  The Prophetic Density of Good Friday
                </h4>
                <p className="text-sm text-foreground/75 leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  Good Friday alone accounts for the fulfillment of more Old Testament prophecies than any other day — from Isaiah 53's Suffering Servant to Psalm 22's cry of dereliction, from the casting of lots for His garments to the piercing without broken bones. Every detail was foretold centuries in advance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
