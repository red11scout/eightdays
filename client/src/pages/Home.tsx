/*
 * Home.tsx — Sacred Cartography Design
 * The Passion Week: A Day-by-Day Study
 *
 * Design: Editorial cartographic style with earth-toned palette,
 * Playfair Display headings, Source Serif 4 body text,
 * journey timeline navigation, and field-guide reference cards.
 *
 * Sections (in order):
 *  1. Hero
 *  2. Introduction + StudyIntro card
 *  3. Logical Progression flow
 *  4. Day-by-day sections (8 days, with Four Cups after Thursday)
 *  5. Major Teachings of Holy Week
 *  6. Prophecy Chart
 *  7. Gospel Harmony Table
 *  8. Comparative Gospel Matrix
 *  9. Covenant Convergence
 * 10. Theological Themes Tracker
 * 11. Theological Bridge (OT/NT flip cards)
 * 12. Discussion Questions
 * 13. Narrative Arc (closing sweep)
 * 14. Closing Prayer
 * 15. Conclusion
 */

import ClosingPrayer from "@/components/ClosingPrayer";
import CovenantConvergence from "@/components/CovenantConvergence";
import DayNavigator from "@/components/DayNavigator";
import DaySection from "@/components/DaySection";
import DiscussionQuestions from "@/components/DiscussionQuestions";
import FourCups from "@/components/FourCups";
import GospelHarmonyTable from "@/components/GospelHarmonyTable";
import GospelMatrix from "@/components/GospelMatrix";
import HeroSection from "@/components/HeroSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import LogicalProgression from "@/components/LogicalProgression";
import MajorTeachings from "@/components/MajorTeachings";
import NarrativeArc from "@/components/NarrativeArc";
import ProphecyChart from "@/components/ProphecyChart";
import StudyIntro from "@/components/StudyIntro";
import TheologicalBridge from "@/components/TheologicalBridge";
import ThemesTracker from "@/components/ThemesTracker";
import { DAYS } from "@/lib/holyWeekData";
import { motion } from "framer-motion";
import { BookOpen, Share2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [activeDay, setActiveDay] = useState(DAYS[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const overviewRef = useRef<HTMLDivElement>(null);

  // Track active day based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const dayId = entry.target.getAttribute("data-day-id");
            if (dayId) setActiveDay(dayId);
          }
        }
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );

    DAYS.forEach((day) => {
      const el = sectionRefs.current[day.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToDay = useCallback((dayId: string) => {
    const el = sectionRefs.current[dayId];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const scrollToOverview = useCallback(() => {
    overviewRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: "The Passion Week: A Day-by-Day Study",
      text: "A comprehensive, harmonized study of Holy Week across all four Gospels.",
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard");
      }
    } catch {
      // User cancelled share
    }
  }, []);

  // Identify Thursday index to insert Four Cups after it
  const thursdayIndex = DAYS.findIndex((d) => d.id === "thursday");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF8F3" }}>
      {/* Fixed timeline nav */}
      <JourneyTimeline activeDay={activeDay} onDayClick={scrollToDay} />

      {/* Fixed side navigator (desktop only) */}
      <DayNavigator activeDay={activeDay} onDayClick={scrollToDay} />

      {/* Hero */}
      <HeroSection onExplore={scrollToOverview} />

      {/* Overview / Introduction */}
      <div ref={overviewRef} className="scroll-mt-16">
        <section className="py-12 md:py-20">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 md:mb-10"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
                <BookOpen className="w-5 h-5" style={{ color: "#B8860B" }} />
                <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#D4C5A9" }} />
              </div>
              <h2 className="text-xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}>
                The Most Important Week in Human History
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <p className="text-[15px] md:text-lg leading-[1.8] text-foreground/85" style={{ fontFamily: "'Source Serif 4', serif" }}>
                The final week of Jesus Christ&apos;s earthly ministry constitutes the most densely documented period in all of ancient literature. The four Gospel writers devote roughly one-third of their combined narratives to these eight days, underscoring the theological weight the early church placed upon the events stretching from the Triumphal Entry to the empty tomb.
              </p>
              <p className="text-[15px] md:text-lg leading-[1.8] text-foreground/85" style={{ fontFamily: "'Source Serif 4', serif" }}>
                This study harmonizes the accounts of Matthew, Mark, Luke, and John, tracing the chronological events, theological themes, key teachings, and the remarkable fulfillment of Old Testament prophecy across each day of Holy Week. It follows the Passover calendar, mapping each day to its Nisan date and showing how the Lamb typology of Exodus 12 is fulfilled with stunning precision.
              </p>

              <blockquote className="border-l-4 pl-4 md:pl-5 py-3 my-6 md:my-8" style={{ borderColor: "#B8860B", backgroundColor: "#B8860B06" }}>
                <p className="text-[15px] md:text-lg italic text-foreground/80 leading-[1.8]" style={{ fontFamily: "'Source Serif 4', serif" }}>
                  &ldquo;Was it not necessary that the Christ should suffer these things and enter into his glory?&rdquo; And beginning with Moses and all the Prophets, he interpreted to them in all the Scriptures the things concerning himself.
                </p>
                <cite className="text-sm font-semibold mt-2 block" style={{ color: "#B8860B", fontStyle: "normal" }}>
                  &mdash; Luke 24:26&ndash;27
                </cite>
              </blockquote>
            </motion.div>

            {/* Share button */}
            <div className="flex justify-center mt-8">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border transition-all hover:shadow-md"
                style={{ borderColor: "#D4C5A9", color: "#5A6672" }}
              >
                <Share2 className="w-4 h-4" />
                Share This Guide
              </button>
            </div>

            {/* Study Intro card */}
            <StudyIntro />
          </div>
        </section>
      </div>

      {/* Logical Progression — Lamb typology flow */}
      <LogicalProgression />

      {/* Day-by-day sections */}
      <div className="container max-w-6xl py-8 md:py-12">
        <div className="space-y-16 md:space-y-24">
          {DAYS.map((day, index) => (
            <div key={day.id}>
              <div
                ref={(el) => { sectionRefs.current[day.id] = el; }}
                data-day-id={day.id}
              >
                <DaySection day={day} />
              </div>

              {/* Insert Four Cups of Passover after Thursday */}
              {index === thursdayIndex && (
                <div className="mt-16 md:mt-24 -mx-4 md:-mx-8 lg:-mx-12">
                  <FourCups />
                </div>
              )}

              {/* Decorative divider between days */}
              {index < DAYS.length - 1 && (
                <div className="flex items-center justify-center gap-3 mt-12 md:mt-16">
                  <div className="h-px flex-1 max-w-[100px]" style={{ backgroundColor: "#D4C5A9" }} />
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: day.color }} />
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: DAYS[index + 1].color }} />
                  <div className="h-px flex-1 max-w-[100px]" style={{ backgroundColor: "#D4C5A9" }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Major Teachings of Holy Week */}
      <MajorTeachings />

      {/* Prophecy Fulfillments Chart */}
      <ProphecyChart />

      {/* Gospel Harmony Table */}
      <GospelHarmonyTable />

      {/* Comparative Gospel Matrix */}
      <GospelMatrix />

      {/* Covenant Convergence — How the covenants meet at Calvary */}
      <CovenantConvergence />

      {/* Theological Themes Tracker */}
      <ThemesTracker />

      {/* Theological Bridge — OT/NT flip cards */}
      <TheologicalBridge />

      {/* Discussion Questions for Group Study */}
      <DiscussionQuestions />

      {/* Narrative Arc — closing editorial sweep */}
      <NarrativeArc />

      {/* Closing Prayer */}
      <ClosingPrayer />

      {/* Conclusion */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#2C1810" }}>
        <div className="container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#8B735540" }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#B8860B" }} />
              <div className="h-px flex-1 max-w-[60px]" style={{ backgroundColor: "#8B735540" }} />
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: "#F5E6B8" }}>
              The Week That Changed Everything
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-[1.8] mb-4" style={{ fontFamily: "'Source Serif 4', serif", color: "rgba(255,255,255,0.75)" }}>
              In the span of eight days, Jesus of Nazareth fulfilled dozens of ancient prophecies written centuries before His birth, delivered the most profound teachings ever recorded, established a new covenant between God and humanity, endured the most unjust trial and brutal execution in history, and conquered death itself by rising from the grave.
            </p>
            <p className="text-sm md:text-base lg:text-lg leading-[1.8] mb-8" style={{ fontFamily: "'Source Serif 4', serif", color: "rgba(255,255,255,0.65)" }}>
              That is why Holy Week still towers over history. It is the week in which God answered sin, death, evil, guilt, and despair with one name: Jesus Christ.
            </p>
            <blockquote className="border-l-4 pl-4 md:pl-5 py-3 text-left mb-8" style={{ borderColor: "#B8860B" }}>
              <p className="text-sm md:text-base lg:text-lg italic leading-[1.8]" style={{ fontFamily: "'Source Serif 4', serif", color: "rgba(255,255,255,0.8)" }}>
                &ldquo;For I delivered to you as of first importance what I also received: that Christ died for our sins in accordance with the Scriptures, that he was buried, that he was raised on the third day in accordance with the Scriptures.&rdquo;
              </p>
              <cite className="text-sm font-semibold mt-2 block" style={{ color: "#B8860B", fontStyle: "normal" }}>
                &mdash; 1 Corinthians 15:3&ndash;4
              </cite>
            </blockquote>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:shadow-lg"
              style={{ backgroundColor: "#B8860B", color: "#FFFFFF" }}
            >
              <Share2 className="w-4 h-4" />
              Share This Study
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 border-t" style={{ borderColor: "#D4C5A940" }}>
        <div className="container text-center">
          <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Source Serif 4', serif" }}>
            Scripture quotations are from the ESV (English Standard Version).
          </p>
          <p className="text-xs text-muted-foreground mt-1" style={{ fontFamily: "'Source Serif 4', serif" }}>
            A harmonized study across Matthew, Mark, Luke, and John.
          </p>
        </div>
      </footer>
    </div>
  );
}
