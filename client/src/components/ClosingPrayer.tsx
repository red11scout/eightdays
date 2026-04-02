/*
 * ClosingPrayer.tsx — Sacred Cartography Design
 * A closing prayer for Holy Week reflection.
 */

import { motion } from "framer-motion";

export default function ClosingPrayer() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#2C1810" }}>
      <div className="container max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#8B735540" }} />
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#B8860B" strokeWidth="1.5">
              <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeLinecap="round" />
            </svg>
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#8B735540" }} />
          </div>

          <h2
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F5E6B8" }}
          >
            A Closing Prayer
          </h2>

          <div className="space-y-5 text-left md:text-center">
            <p
              className="text-sm md:text-base leading-[1.9] italic"
              style={{ fontFamily: "'Source Serif 4', serif", color: "rgba(255,255,255,0.82)" }}
            >
              Lord Jesus, as we walk through this Holy Week, open our eyes to see what the disciples saw, what the prophets foretold, and what the Father accomplished through Your suffering, death, and resurrection.
            </p>
            <p
              className="text-sm md:text-base leading-[1.9] italic"
              style={{ fontFamily: "'Source Serif 4', serif", color: "rgba(255,255,255,0.82)" }}
            >
              Give us the humility of the donkey that carried You, the courage of the women who stayed at the cross, the faith of the centurion who confessed You, and the joy of Mary who first saw You risen.
            </p>
            <p
              className="text-sm md:text-base leading-[1.9] italic"
              style={{ fontFamily: "'Source Serif 4', serif", color: "rgba(255,255,255,0.82)" }}
            >
              May this study not merely inform our minds but transform our hearts. May we, like the disciples on the Emmaus road, find our hearts burning within us as You open the Scriptures and reveal Yourself in every page.
            </p>
            <p
              className="text-sm md:text-base leading-[1.9] italic font-medium"
              style={{ fontFamily: "'Source Serif 4', serif", color: "rgba(255,255,255,0.92)" }}
            >
              In the name of the Father, and of the Son, and of the Holy Spirit. Amen.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#B8860B60" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#B8860B" }} />
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#B8860B60" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
