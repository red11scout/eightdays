/*
 * MajorTeachings.tsx — Sacred Cartography Design
 * A comprehensive table of Jesus' major teachings during Holy Week,
 * organized by day with references and significance.
 */

import { motion } from "framer-motion";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface Teaching {
  day: string;
  dayColor: string;
  teaching: string;
  reference: string;
  significance: string;
}

const TEACHINGS: Teaching[] = [
  {
    day: "Sunday",
    dayColor: "#3D4F2F",
    teaching: "Weeping over Jerusalem",
    reference: "Luke 19:41–44",
    significance: "Jesus laments the city's failure to recognize the time of God's visitation — a prophetic warning of the destruction to come in AD 70.",
  },
  {
    day: "Monday",
    dayColor: "#8B4513",
    teaching: "The Temple as a House of Prayer",
    reference: "Matt 21:13; Isa 56:7",
    significance: "The temple had become a marketplace exploiting worshippers. Jesus reclaims it as a place of prayer for all nations — foreshadowing His own body as the new temple.",
  },
  {
    day: "Tuesday",
    dayColor: "#CC5500",
    teaching: "Parable of the Wicked Tenants",
    reference: "Matt 21:33–46",
    significance: "Israel's leaders are the tenants who reject the owner's son. The vineyard will be given to others — the kingdom transferred to those who produce its fruit.",
  },
  {
    day: "Tuesday",
    dayColor: "#CC5500",
    teaching: "Render unto Caesar",
    reference: "Matt 22:15–22",
    significance: "A masterful response to a trap: earthly governments have legitimate claims, but God's claim on the whole person is supreme.",
  },
  {
    day: "Tuesday",
    dayColor: "#CC5500",
    teaching: "The Greatest Commandment",
    reference: "Matt 22:34–40",
    significance: "All of the Law and Prophets hang on two commands: love God with everything, and love your neighbor as yourself. The entire ethical system distilled.",
  },
  {
    day: "Tuesday",
    dayColor: "#CC5500",
    teaching: "The Seven Woes against the Pharisees",
    reference: "Matt 23:1–36",
    significance: "Jesus' most sustained denunciation of religious hypocrisy — outward show masking inward corruption. A mirror for every generation.",
  },
  {
    day: "Tuesday",
    dayColor: "#CC5500",
    teaching: "The Olivet Discourse",
    reference: "Matt 24–25; Mark 13; Luke 21",
    significance: "Jesus' longest prophetic teaching: the destruction of the temple, signs of the end, and the call to watchfulness. Contains the parables of the Ten Virgins, Talents, and Sheep & Goats.",
  },
  {
    day: "Tuesday",
    dayColor: "#CC5500",
    teaching: "The Widow's Two Mites",
    reference: "Mark 12:41–44; Luke 21:1–4",
    significance: "True generosity is measured not by amount but by sacrifice. The widow gave everything — a living parable of what Jesus Himself is about to do.",
  },
  {
    day: "Thursday",
    dayColor: "#4A1A6B",
    teaching: "Washing the Disciples' Feet",
    reference: "John 13:1–17",
    significance: "The Lord of the universe takes the role of the lowest servant. Leadership in the kingdom is defined by service, not status.",
  },
  {
    day: "Thursday",
    dayColor: "#4A1A6B",
    teaching: "The New Commandment",
    reference: "John 13:34–35",
    significance: "\"Love one another as I have loved you.\" The standard is no longer the Law but Christ's own sacrificial love. This is the mark of discipleship.",
  },
  {
    day: "Thursday",
    dayColor: "#4A1A6B",
    teaching: "\"I am the Way, the Truth, and the Life\"",
    reference: "John 14:6",
    significance: "The most exclusive and inclusive claim in history: exclusive in its singularity, inclusive in its invitation to all who come through Him.",
  },
  {
    day: "Thursday",
    dayColor: "#4A1A6B",
    teaching: "The Vine and the Branches",
    reference: "John 15:1–17",
    significance: "Fruitfulness depends entirely on abiding in Christ. Apart from Him, nothing of eternal value can be produced.",
  },
  {
    day: "Thursday",
    dayColor: "#4A1A6B",
    teaching: "The High Priestly Prayer",
    reference: "John 17",
    significance: "Jesus prays for His own glory, for His disciples' protection and unity, and for all future believers. The most intimate prayer ever recorded.",
  },
  {
    day: "Friday",
    dayColor: "#8B0000",
    teaching: "\"Father, forgive them\"",
    reference: "Luke 23:34",
    significance: "From the cross, Jesus practices what He preached — forgiving His executioners in the very act of being killed by them.",
  },
  {
    day: "Friday",
    dayColor: "#8B0000",
    teaching: "\"It is finished\" (Tetelestai)",
    reference: "John 19:30",
    significance: "A single word in Greek — a commercial term meaning \"paid in full.\" The debt of sin is settled. The work of redemption is complete.",
  },
  {
    day: "Sunday",
    dayColor: "#B8860B",
    teaching: "The Emmaus Road Exposition",
    reference: "Luke 24:25–27",
    significance: "The risen Christ opens all the Scriptures — Moses, Prophets, Psalms — showing that everything pointed to His suffering and glory. The hermeneutical key to the entire Bible.",
  },
  {
    day: "Sunday",
    dayColor: "#B8860B",
    teaching: "The Great Commission",
    reference: "Matt 28:18–20",
    significance: "\"All authority... all nations... all things... always.\" The marching orders of the church, grounded in the resurrection and sustained by His presence.",
  },
];

export default function MajorTeachings() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? TEACHINGS : TEACHINGS.slice(0, 8);

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
            <BookOpen className="w-5 h-5" style={{ color: "#B8860B" }} />
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
          </div>
          <h2
            className="text-xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
          >
            Major Teachings of Holy Week
          </h2>
          <p
            className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            Jesus delivered more recorded teaching during this single week than in any other period of His ministry. Here are the key teachings, organized by day.
          </p>
        </motion.div>

        <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <div
            className="rounded-xl border border-border shadow-sm min-w-[700px]"
            style={{ backgroundColor: "#FAF8F3" }}
          >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: "#D4C5A940" }}>
                  <th className="px-3 py-3 text-left font-bold text-foreground border-b border-border w-[80px] text-xs uppercase tracking-wider">
                    Day
                  </th>
                  <th className="px-3 py-3 text-left font-bold text-foreground border-b border-border text-xs uppercase tracking-wider">
                    Teaching
                  </th>
                  <th className="px-3 py-3 text-left font-bold text-foreground border-b border-border w-[140px] text-xs uppercase tracking-wider">
                    Reference
                  </th>
                  <th className="px-3 py-3 text-left font-bold text-foreground border-b border-border text-xs uppercase tracking-wider">
                    Significance
                  </th>
                </tr>
              </thead>
              <tbody>
                {visible.map((t, i) => (
                  <tr
                    key={i}
                    className="border-b border-border/30 hover:bg-secondary/20 transition-colors"
                  >
                    <td
                      className="px-3 py-2.5 font-bold text-[11px] uppercase tracking-wider align-top"
                      style={{ color: t.dayColor }}
                    >
                      {t.day}
                    </td>
                    <td
                      className="px-3 py-2.5 font-medium text-foreground/90"
                      style={{ fontFamily: "'Source Serif 4', serif" }}
                    >
                      {t.teaching}
                    </td>
                    <td className="px-3 py-2.5 text-xs font-medium whitespace-nowrap" style={{ color: "#5A6672" }}>
                      {t.reference}
                    </td>
                    <td
                      className="px-3 py-2.5 text-foreground/80 text-sm leading-relaxed"
                      style={{ fontFamily: "'Source Serif 4', serif" }}
                    >
                      {t.significance}
                    </td>
                  </tr>
                ))}
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
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show All {TEACHINGS.length} Teachings <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
