/*
 * DiscussionQuestions.tsx — Sacred Cartography Design
 * Interactive discussion questions for group Bible study.
 * Warm stone palette, Playfair Display headings, Source Serif 4 body.
 */

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { useState } from "react";

const QUESTIONS = [
  {
    question: "What kind of Messiah did the crowds seem to want, and how does that differ from the Messiah Jesus actually reveals Himself to be?",
    dayLink: "Palm Sunday",
    hint: "Consider the contrast between a conquering nationalist hero and a king who enters on a donkey, weeps over the city, and goes to the cross.",
  },
  {
    question: "How do the fig tree and the temple cleansing interpret one another?",
    dayLink: "Monday",
    hint: "The fig tree had leaves but no fruit; the temple had activity but lacked holiness, prayer, and justice. Both are pictures of religious display without inward reality.",
  },
  {
    question: "Which Tuesday teaching of Jesus most exposes the modern heart: hypocrisy, judgment, watchfulness, or love?",
    dayLink: "Tuesday",
    hint: "Tuesday is the longest teaching day. Jesus tears away masks and exposes the gap between profession and obedience, religion and righteousness.",
  },
  {
    question: "What does Judas teach us about nearness to Jesus without true surrender?",
    dayLink: "Wednesday",
    hint: "Judas walked with Jesus for three years, heard every teaching, saw every miracle — yet bargained cheaply with what was infinitely precious.",
  },
  {
    question: "How do the Lord's Supper and the cross interpret each other?",
    dayLink: "Thursday & Friday",
    hint: "At the table, Jesus interprets His coming death as covenant sacrifice. On the cross, the sacrifice is accomplished. The meal gives meaning to the death; the death gives power to the meal.",
  },
  {
    question: "What does Holy Saturday teach about waiting when God seems silent?",
    dayLink: "Holy Saturday",
    hint: "The promise had been spoken, but the answer was not yet seen. Many believers know that terrain: promise given, fulfillment not yet visible. Yet the silence of Saturday is not the failure of God.",
  },
  {
    question: "What changes in daily life if Jesus truly rose from the dead?",
    dayLink: "Resurrection Sunday",
    hint: "The resurrection is not merely a happy ending. It is the dawn of new creation, the Father's vindication of the Son, and the declaration that the cross has truly accomplished redemption.",
  },
];

export default function DiscussionQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: "#F5F0E8" }}>
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
            <MessageCircle className="w-5 h-5" style={{ color: "#B8860B" }} />
            <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
          </div>
          <h2
            className="text-xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
          >
            Discussion Questions
          </h2>
          <p
            className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Source Serif 4', serif" }}
          >
            For personal reflection, family devotion, or group Bible study. Click each question to reveal a guiding thought.
          </p>
        </motion.div>

        <div className="space-y-3">
          {QUESTIONS.map((q, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-4 md:p-5 rounded-xl border transition-all hover:shadow-md"
                  style={{
                    backgroundColor: isOpen ? "#FFFCF5" : "#FAF8F3",
                    borderColor: isOpen ? "#B8860B40" : "#D4C5A930",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold mt-0.5"
                      style={{
                        backgroundColor: isOpen ? "#B8860B" : "#B8860B15",
                        color: isOpen ? "#FFFFFF" : "#B8860B",
                      }}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p
                          className="text-sm md:text-base font-medium leading-snug"
                          style={{
                            fontFamily: "'Source Serif 4', serif",
                            color: "#2C1810",
                          }}
                        >
                          {q.question}
                        </p>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 shrink-0 text-muted-foreground mt-1" />
                        ) : (
                          <ChevronDown className="w-4 h-4 shrink-0 text-muted-foreground mt-1" />
                        )}
                      </div>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wider mt-1 inline-block"
                        style={{ color: "#B8860B" }}
                      >
                        {q.dayLink}
                      </span>
                    </div>
                  </div>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 ml-10 pl-4 border-l-2"
                      style={{ borderColor: "#B8860B40" }}
                    >
                      <p
                        className="text-sm italic leading-relaxed text-foreground/75"
                        style={{ fontFamily: "'Source Serif 4', serif" }}
                      >
                        {q.hint}
                      </p>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
