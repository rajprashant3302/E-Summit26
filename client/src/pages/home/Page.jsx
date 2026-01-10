import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Home.module.css";

import StatsSection from "./StatsSection";
import Countdown from "./Countdown";
import EventsSection from "./EventsSection";
import PastSpeakersSection from "./PastSpeakers";
import SpeakersSection from "./SpeakersSection";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const fadeRef = useRef(null);

  /* Fade-in sections on scroll */
  useEffect(() => {
    gsap.utils.toArray(".reveal-section").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  /* Banner animation */
  useEffect(() => {
    if (fadeRef.current) {
      gsap.fromTo(
        fadeRef.current,
        { y: 80, autoAlpha: 0 },
        { y: 25, autoAlpha: 1, duration: 1.5, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section id="home" className="relative w-full">
        <img src="/home/banner.jpeg" alt="Banner" className="w-full h-auto" />
      </section>

      <div id="nav-trigger" className="h-px" />

      {/* ================= MAIN CONTENT ================= */}
      <div className={`w-full ${styles.background2} bg-black relative`}>

        {/* Countdown */}
        <section
          className="absolute top-0 left-0 w-full flex justify-center z-20"
          style={{
            backdropFilter: "blur(20px)",
            backgroundColor: "rgba(53, 42, 23, 0.45)",
          }}
        >
          <Countdown />
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="w-full max-w-[1300px] flex px-4 md:px-16 pt-[100px] sm:pt-[140px] md:pt-[180px] pb-16 flex-col mx-auto"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex md:justify-start w-fit py-4 px-10 bg-[#352A17] rounded-t-2xl border border-white">
              <div className={`bg-[#b0944b] text-white px-10 py-2 rounded-full text-2xl font-bold tracking-widest uppercase ${styles.chopsicText}`}>
                About Us
              </div>
            </div>
          </div>

          <div className="relative w-full p-5 bg-[#352A17] rounded-b-2xl border border-white">
            <p className="text-sm md:text-xl text-white leading-relaxed">
              E-Summit 2025, the flagship entrepreneurial event of IIT Patna,
              brings together innovators, investors, startups, and industry leaders.
            </p>
          </div>
        </section>

        {/* ================= STATS / EVENTS / SPEAKERS ================= */}
        <StatsSection />
        <EventsSection />
        <SpeakersSection/>
        <PastSpeakersSection />
      </div>

      {/* ================= SPONSORS ================= */}
      <section id="sponsors" className="w-full">
        <img src="/home/sponsors.png" alt="Sponsors" className="w-full" />
      </section>
    </>
  );
};

export default Page;
