/*
 * GospelMatrix.tsx — Sacred Cartography Design
 * Comparative Gospel Matrix: tabbed view showing how Matthew, Mark, Luke, and John
 * each emphasize different aspects of the same key events.
 */

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface MatrixEvent {
  event: string;
  matthew: string;
  mark: string;
  luke: string;
  john: string;
}

const MATRIX_DATA: MatrixEvent[] = [
  {
    event: "Institution of Lord's Supper",
    matthew: "Emphasis on the Covenant Blood — \"This is my blood of the covenant, which is poured out for many for the forgiveness of sins\" (Matt 26:28). Matthew alone adds the phrase \"for the forgiveness of sins,\" underscoring the atoning purpose.",
    mark: "Emphasis on Service & Preparation — Mark's account is concise and action-oriented, focusing on the practical preparations and Jesus' prophetic awareness of the betrayer (Mark 14:22-25).",
    luke: "Emphasis on the Cup and the Kingdom — Luke uniquely records two cups and Jesus' declaration: \"I will not drink again of the fruit of the vine until the kingdom of God comes\" (Luke 22:17-20), linking the Supper to eschatological hope.",
    john: "Omitted; replaced by Foot Washing — John does not record the institution of the Eucharist. Instead, he places the foot washing here (John 13:1-17), emphasizing servanthood as the model for the new community.",
  },
  {
    event: "Gethsemane Prayer",
    matthew: "Focus on the Father's Will — \"My Father, if it be possible, let this cup pass from me; nevertheless, not as I will, but as you will\" (Matt 26:39). Records three separate prayers, showing Jesus' persistent submission.",
    mark: "Focus on the \"Abba\" Relationship — Mark alone preserves the Aramaic \"Abba, Father\" (Mark 14:36), revealing the intimate, filial relationship even in the hour of deepest anguish.",
    luke: "Mention of \"Sweat like drops of blood\" — Luke the physician uniquely records the physical extremity: \"His sweat became like great drops of blood falling down to the ground\" (Luke 22:44), and the appearance of a strengthening angel.",
    john: "Focus on Jesus' Sovereignty & Identity — John omits the Gethsemane prayer but records Jesus' sovereign declaration \"I am he\" (ego eimi) at the arrest, causing the soldiers to fall back (John 18:6). Jesus is in command throughout.",
  },
  {
    event: "The Trials",
    matthew: "Detailed Jewish/Sanhedrin Trial — Matthew provides the most thorough account of the Sanhedrin proceedings, including the high priest tearing his robes and the formal charge of blasphemy (Matt 26:57-68).",
    mark: "Chronological Flow of the Night — Mark gives the tightest chronological sequence, weaving Peter's denials into the trial narrative with his characteristic \"immediately\" (Mark 14:53-72).",
    luke: "Herod Antipas' Involvement — Luke alone records the trial before Herod Antipas (Luke 23:6-12), noting that Herod and Pilate became friends that day — an ironic fulfillment of Psalm 2:2.",
    john: "In-depth Dialogue with Pilate — John records the most extensive exchange between Jesus and Pilate, including \"My kingdom is not of this world\" and \"What is truth?\" (John 18:28-19:16). This is theology through dialogue.",
  },
  {
    event: "The Last Words from the Cross",
    matthew: "\"My God, My God, why have you forsaken me?\" — Matthew records the cry of dereliction (Matt 27:46), quoting Psalm 22:1 in Aramaic (Eli, Eli, lema sabachthani), emphasizing the weight of sin-bearing.",
    mark: "\"My God, My God...\" — Mark also records this single cry (Mark 15:34), using the Aramaic Eloi. His spare account underscores the raw, unadorned suffering of the Servant.",
    luke: "\"Father, forgive them...\" — Luke records three unique words: forgiveness for the executioners (23:34), paradise for the thief (23:43), and the final commendation \"Father, into your hands I commit my spirit\" (23:46).",
    john: "\"It is finished\" (Tetelestai) — John records three unique words: care for His mother (19:26-27), \"I thirst\" (19:28), and the triumphant declaration \"It is finished\" (19:30) — a word meaning \"paid in full.\"",
  },
];

const GOSPEL_COLORS: Record<string, { bg: string; text: string; accent: string }> = {
  Matthew: { bg: "#2D6A4F08", text: "#2D6A4F", accent: "#2D6A4F" },
  Mark: { bg: "#CC550008", text: "#CC5500", accent: "#CC5500" },
  Luke: { bg: "#4A1A6B08", text: "#4A1A6B", accent: "#4A1A6B" },
  John: { bg: "#8B000008", text: "#8B0000", accent: "#8B0000" },
};

export default function GospelMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#FAF8F3" }}>
      <div className="container max-w-6xl">
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
            Comparative Gospel Matrix
          </h2>
          <p
            className="max-w-2xl mx-auto text-sm md:text-base text-foreground/70 leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            The four Gospels provide a multi-perspective view of the Passion narratives. Select an event below to see how Matthew, Mark, Luke, and John uniquely emphasize different aspects of the same historical moment.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="rounded-xl border shadow-sm overflow-hidden" style={{ borderColor: "#D4C5A930", backgroundColor: "#FFFFFF" }}>
          {/* Tab buttons */}
          <div className="flex overflow-x-auto border-b" style={{ borderColor: "#D4C5A930" }}>
            {MATRIX_DATA.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className="flex-1 min-w-[140px] py-3.5 px-3 text-center text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: activeTab === i ? "#2C1810" : "#8B7355",
                  backgroundColor: activeTab === i ? "#FAF8F3" : "transparent",
                  borderBottom: activeTab === i ? "2px solid #B8860B" : "2px solid transparent",
                }}
              >
                {item.event}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-5 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h3
                  className="text-lg md:text-2xl font-bold text-center mb-6 md:mb-8"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
                >
                  {MATRIX_DATA[activeTab].event}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                  {(["Matthew", "Mark", "Luke", "John"] as const).map((gospel) => {
                    const key = gospel.toLowerCase() as keyof MatrixEvent;
                    const colors = GOSPEL_COLORS[gospel];
                    const content = MATRIX_DATA[activeTab][key] as string;

                    return (
                      <motion.div
                        key={gospel}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * (["Matthew", "Mark", "Luke", "John"].indexOf(gospel)) }}
                        className="rounded-lg border overflow-hidden"
                        style={{ borderColor: `${colors.accent}20`, backgroundColor: colors.bg }}
                      >
                        {/* Accent bar */}
                        <div className="h-1" style={{ backgroundColor: colors.accent }} />
                        <div className="p-4">
                          <h4
                            className="text-sm font-bold mb-2.5"
                            style={{ fontFamily: "'Playfair Display', serif", color: colors.text }}
                          >
                            {gospel}
                          </h4>
                          <p
                            className="text-sm text-foreground/80 leading-relaxed"
                            style={{ fontFamily: "'Source Serif 4', serif" }}
                          >
                            {content}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
