/*
 * TheologicalBridge.tsx — Sacred Cartography Design
 * Interactive flip cards: Old Testament shadows → New Testament realities.
 * Click to reveal the antitype. Uses the existing earth-toned palette.
 */

import { motion } from "framer-motion";
import { useState } from "react";

interface BridgeCard {
  shadow: string;
  shadowDetail: string;
  reality: string;
  realityDetail: string;
  otRef: string;
  ntRef: string;
  icon: string;
}

const BRIDGE_DATA: BridgeCard[] = [
  {
    shadow: "The Passover Lamb",
    shadowDetail: "A spotless lamb was selected on the 10th of Nisan, inspected for four days, and slain at twilight on the 14th. Its blood on the doorposts caused the angel of death to 'pass over.'",
    reality: "Christ, Our Passover",
    realityDetail: "Jesus entered Jerusalem on the 10th of Nisan, was tested for four days, and was crucified at the exact hour the Passover lambs were being slain in the temple.",
    otRef: "Exodus 12:3-13",
    ntRef: "1 Corinthians 5:7",
    icon: "🐑",
  },
  {
    shadow: "Abraham & Isaac",
    shadowDetail: "A father offered his only beloved son on Mount Moriah. Isaac carried the wood for his own sacrifice up the hill. At the last moment, God provided a substitute ram.",
    reality: "God the Father & Jesus",
    realityDetail: "The Father offered His only begotten Son on the same mountain range. Jesus carried His own cross up the hill. But this time, there was no substitute — He was the substitute.",
    otRef: "Genesis 22:1-14",
    ntRef: "John 3:16; Romans 8:32",
    icon: "⛰️",
  },
  {
    shadow: "The Scapegoat",
    shadowDetail: "On the Day of Atonement, the high priest laid both hands on a goat, confessing all the sins of Israel upon it. The goat was then sent away 'outside the camp' into the wilderness.",
    reality: "Jesus Bearing Our Sins",
    realityDetail: "Jesus was led outside the city gates to Golgotha. He bore the sins of the world upon Himself — not symbolically, but actually — becoming the curse for us.",
    otRef: "Leviticus 16:20-22",
    ntRef: "Hebrews 13:12; 2 Cor 5:21",
    icon: "🐐",
  },
  {
    shadow: "The Temple Veil",
    shadowDetail: "A massive curtain (60 feet tall, 4 inches thick) separated the Holy Place from the Most Holy Place. Only the high priest could pass through it, and only once a year, with blood.",
    reality: "Jesus' Body Torn Open",
    realityDetail: "At the moment of Jesus' death, the veil was torn from top to bottom — by God, not man. The barrier between God and humanity was permanently removed. All may now enter.",
    otRef: "Exodus 26:31-33",
    ntRef: "Matthew 27:51; Hebrews 10:19-20",
    icon: "🏛️",
  },
  {
    shadow: "The Bronze Serpent",
    shadowDetail: "When Israel was bitten by serpents in the wilderness, Moses lifted a bronze serpent on a pole. Anyone who looked upon it was healed and lived.",
    reality: "Jesus Lifted on the Cross",
    realityDetail: "Jesus Himself declared: 'As Moses lifted up the serpent in the wilderness, so must the Son of Man be lifted up, that whoever believes in him may have eternal life.'",
    otRef: "Numbers 21:8-9",
    ntRef: "John 3:14-15",
    icon: "✝️",
  },
  {
    shadow: "Jonah in the Whale",
    shadowDetail: "Jonah spent three days and three nights in the belly of the great fish before being brought back to life and delivered onto dry land.",
    reality: "Jesus in the Tomb",
    realityDetail: "Jesus said: 'For just as Jonah was three days and three nights in the belly of the great fish, so will the Son of Man be three days and three nights in the heart of the earth.'",
    otRef: "Jonah 1:17",
    ntRef: "Matthew 12:40",
    icon: "🐋",
  },
];

function FlipCard({ card, index }: { card: BridgeCard; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onClick={() => setFlipped(!flipped)}
      className="rounded-xl border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer group"
      style={{
        borderColor: flipped ? "#2D6A4F30" : "#D4C5A930",
        backgroundColor: flipped ? "#F0FAF4" : "#FFFFFF",
      }}
    >
      <div className="p-5 md:p-6 text-center">
        <motion.div
          key={flipped ? "reality" : "shadow"}
          initial={{ opacity: 0, rotateY: 15 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Icon */}
          <div className="text-3xl md:text-4xl mb-3">{card.icon}</div>

          {/* Label */}
          <span
            className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-2"
            style={{ color: flipped ? "#2D6A4F" : "#B8860B" }}
          >
            {flipped ? "New Testament Reality" : "Old Testament Shadow"}
          </span>

          {/* Title */}
          <h3
            className="text-base md:text-lg font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
          >
            {flipped ? card.reality : card.shadow}
          </h3>

          {/* Detail */}
          <p
            className="text-sm text-foreground/75 leading-relaxed mb-3"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            {flipped ? card.realityDetail : card.shadowDetail}
          </p>

          {/* Reference */}
          <span
            className="inline-block text-[11px] font-mono px-2.5 py-1 rounded"
            style={{
              backgroundColor: flipped ? "#2D6A4F12" : "#B8860B12",
              color: flipped ? "#2D6A4F" : "#B8860B",
            }}
          >
            {flipped ? card.ntRef : card.otRef}
          </span>

          {/* Hint */}
          <p className="text-[10px] text-muted-foreground mt-3 italic">
            {flipped ? "Click to return to the Shadow" : "Click to reveal the Reality"}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function TheologicalBridge() {
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: "#2C1810" }}>
      <div className="container max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#8B735540" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#B8860B" }} />
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#8B735540" }} />
          </div>
          <h2
            className="text-xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F5E6B8" }}
          >
            The Theological Bridge
          </h2>
          <p
            className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif", color: "rgba(255,255,255,0.65)" }}
          >
            Explore how Old Testament symbols (Types) find their ultimate fulfillment and reality (Antitypes) in the events of Holy Week. Click each card to bridge the Old and New Testaments.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {BRIDGE_DATA.map((card, i) => (
            <FlipCard key={i} card={card} index={i} />
          ))}
        </div>

        {/* Study note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-12 max-w-2xl mx-auto"
        >
          <blockquote className="border-l-4 pl-4 md:pl-5 py-3" style={{ borderColor: "#B8860B" }}>
            <p className="text-sm md:text-base italic leading-relaxed" style={{ fontFamily: "'Source Serif 4', serif", color: "rgba(255,255,255,0.75)" }}>
              "For the Skeptic: These patterns show a man knowingly walking into his own death to fulfill ancient texts written centuries prior. For the Believer: They demonstrate the depth of God's love — where the King becomes the Servant, and the Judge becomes the Condemned, so that the Condemned might become the Justified."
            </p>
            <cite className="text-sm font-semibold mt-2 block" style={{ color: "#B8860B", fontStyle: "normal" }}>
              — Isaiah 53:5
            </cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
