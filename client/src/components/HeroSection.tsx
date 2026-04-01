import { IMAGES } from "@/lib/holyWeekData";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onExplore: () => void;
}

export default function HeroSection({ onExplore }: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Ancient Jerusalem at golden hour"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(26,20,14,0.3) 0%, rgba(26,20,14,0.15) 40%, rgba(26,20,14,0.5) 70%, rgba(250,248,243,1) 100%)"
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl"
        >
          <p className="text-sm md:text-base tracking-[0.35em] uppercase mb-6" style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Source Serif 4', serif" }}>
            A Harmonized Study Across All Four Gospels
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: "#FFFFFF", textShadow: "0 2px 40px rgba(0,0,0,0.3)" }}
          >
            The Passion Week
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Source Serif 4', serif" }}>
            A day-by-day journey through the most important week in human history
          </p>
          <p className="text-sm md:text-base max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Source Serif 4', serif", fontStyle: "italic" }}>
            From the Triumphal Entry to the Empty Tomb
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={onExplore}
          className="flex flex-col items-center gap-2 group"
        >
          <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.7)" }}>
            Begin the Journey
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6" style={{ color: "rgba(255,255,255,0.7)" }} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
