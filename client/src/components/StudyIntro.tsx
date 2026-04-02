/*
 * StudyIntro.tsx — Sacred Cartography Design
 * "A Study for the Ages" card from the pasted content — enriched intro
 * for both skeptics and believers with Isaiah 53:5 blockquote.
 */

import { motion } from "framer-motion";

export default function StudyIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto mt-6 md:mt-8 mb-2"
    >
      <div
        className="p-5 md:p-7 rounded-xl border shadow-sm"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#D4C5A930" }}
      >
        <h3
          className="text-base md:text-lg font-bold mb-3 pb-2 border-b"
          style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810", borderColor: "#D4C5A940" }}
        >
          A Study for the Ages
        </h3>
        <p
          className="text-sm text-foreground/75 leading-relaxed mb-3"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          Holy Week is the week in which the whole Bible seems to tighten like a drawn bow. The promises to Abraham, the lamb of Passover, the throne of David, the warnings of the prophets, the songs of the righteous sufferer, and the hope of the new covenant all converge here.
        </p>
        <p
          className="text-sm text-foreground/75 leading-relaxed mb-3"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          The week also searches the heart. Do we have leaves without fruit? Religious language without repentance? Admiration without surrender? Holy Week will not let religion stay ornamental. It forces a choice: either Jesus is the rejected Son, or He is the cornerstone.
        </p>
        <p
          className="text-sm text-foreground/75 leading-relaxed mb-4"
          style={{ fontFamily: "'Source Serif 4', serif" }}
        >
          At the center stands Good Friday. Here justice and mercy meet. Sin is neither excused nor minimized; it is judged. Love is neither sentimental nor abstract; it is costly. The cross is not merely a moving example. It is the decisive act in which the innocent dies for the guilty.
        </p>
        <div className="space-y-2.5 mb-5">
          <div className="flex items-start gap-2">
            <span className="text-xs font-bold shrink-0 mt-0.5 px-2 py-0.5 rounded" style={{ backgroundColor: "#B8860B12", color: "#B8860B" }}>
              For the Skeptic
            </span>
            <p className="text-sm text-foreground/80 leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Shows a man knowingly walking into his own death to fulfill ancient texts written centuries prior.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-xs font-bold shrink-0 mt-0.5 px-2 py-0.5 rounded" style={{ backgroundColor: "#2D6A4F12", color: "#2D6A4F" }}>
              For the Believer
            </span>
            <p className="text-sm text-foreground/80 leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
              Demonstrates the depth of God's love (Agape) where the King becomes the Servant, and the Judge becomes the Condemned, so that the Condemned might become the Justified.
            </p>
          </div>
        </div>
        <blockquote
          className="border-l-4 pl-4 py-3 rounded-r-lg"
          style={{ borderColor: "#8B0000", backgroundColor: "#8B000008" }}
        >
          <p className="text-sm italic text-foreground/80 leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif" }}>
            "He was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed."
          </p>
          <cite className="text-xs font-semibold mt-2 block" style={{ color: "#8B0000", fontStyle: "normal" }}>
            — Isaiah 53:5
          </cite>
        </blockquote>
      </div>
    </motion.div>
  );
}
