import React from 'react'
import styles from "./Home.module.css";
import { useRef, useEffect, useState } from "react";
import { ArrowDown, Speaker } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StatsSection from './StatsSection';
import Countdown from './Countdown';
import EventsSection from './EventsSection';
import SpeakersSection from './SpeakersSection';
import PastSpeakersSection from './PastSpeakers';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {

  const fadeRef = useRef(null);
  // Fade-in sections on scroll
  useEffect(() => {
    gsap.utils.toArray(".reveal-section").forEach((section) => {
      gsap.fromTo(
        section,
        { autoAlpha: 0, y: 100 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
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


  // Banner animation
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
      <div className="overflow-x-hidden w-full ">
        {/* banner  */}
        <div className={`flex flex-col justify-center items-center ${styles.background}`}>
          <div ref={fadeRef}>
            <section className="flex h-[50vh] justify-center items-center w-full">
              <img className="translate-y-10 mt-20" ref={fadeRef} src="/home/banner-logo.png" alt="banner-logo" width={1000} height={500} />
            </section>
            {/* <p style={{fontSize: '40px', fontWeight: 400, color: "#FFFFFF", fontFamily: "'STEPS', sans-serif", letterSpacing: "7%", lineHeight: "100%", textShadow: "0 0 6px #000000", marginBottom: "120px"}}>
            WHERE CREATIVITY MEETS CAPITAL
          </p> */}
            <img src="/home/tagline.png" alt="WHERE CREATIVITY MEETS CAPITAL" className="mt-20" />
          </div>
          {/* <ArrowDown className="text-white animate-bounce"/> */}
        </div>
        <div id="nav-trigger" className="h-px" />

        <div className={`w-full ${styles.background2} bg-black relative`}>

          {/* about  */}
          {/* <section className="w-full px-6 md:px-16 py-16">
          <div className="flex flex-col lg:flex-row gap-10 items-start ">


            <div className="max-w-md    bg-[#654321] backdrop-blur-md rounded-3xl p-6 text-white translate-y-[50px] ">
              <span className="inline-block -translate-y-10 bg-[#B0944B] text-white text-2xl px-6 py-2  rounded-full font-semibold mb-1">
                ABOUT US
              </span>

              <p className="text-sm md:text-base leading-relaxed ">
                E-Summit 2025, the flagship entrepreneurial event of IIT Patna,
                is a vibrant platform that brings together innovators, investors,
                startups, and industry leaders to foster entrepreneurship and
                business growth.
              </p>
            </div>



          </div>
        </section> */}


          <section className="w-full max-w-[1300px] flex px-4 md:px-16 pt-[180px] pb-16 flex-col mx-auto">

            <section className="absolute top-0 left-0 w-full flex justify-center z-20" style={{ backdropFilter: "blur(20px)", backgroundColor: "rgba(53, 42, 23, 0.45)", borderRadius: "0px" }}>
              <Countdown />
            </section>

            {/* TOP ROW */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-4">

              {/* RIGHT BADGE */}
              <div className="flex md:justify-start h-full w-fit py-4 px-10  bg-[#352A17] rounded-t-2xl border-r-3 border-t-3 border-l-3 border-white">
                <div className={`bg-[#b0944b] text-white px-10 py-2 rounded-full text-2xl md:text-2xl font-bold tracking-widest uppercase ${styles.chopsicText}`}>
                  <h2 >About Us</h2>
                </div>

              </div>

            </div>
            <div className='relative  w-full p-5 bg-[#352A17] rounded-b-2xl rounded-r-2xl border-b-3 border-t-3 border-l-3 border-r-3 border-white'>
              <div className="absolute -top-[3px] left-0 h-1.5 w-[324px] bg-[#352A17] z-20"></div>

              {/* DESCRIPTION */}
              <p className=" text-sm md:text-xl leading-relaxed tracking-wide text-white ">
                E-Summit 2025, the flagship entrepreneurial event of IIT Patna,
                is a vibrant platform that brings together innovators, investors,
                startups, and industry leaders to foster entrepreneurship and
                business growth.
              </p>
            </div>

          </section>

          {/* MOBILE VIEW */}
          <section className="md:hidden w-full px-4 py-10 mt-4 bg-[#352A17] border border-white rounded-2xl flex flex-col items-center gap-4">


            {/* CREATIVITY MEETS CAPITAL */}
            <div
              className={`bg-[#b0944b] text-white w-fit px-4 py-3 rounded-xl flex flex-col items-start ${styles.chopsicText}`}
            >
              <span className="text-sm font-bold tracking-widest uppercase">
                About Us
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm leading-relaxed tracking-wide text-white">
              E-Summit 2025, the flagship entrepreneurial event of IIT Patna,
              is a vibrant platform that brings together innovators, investors,
              startups, and industry leaders to foster entrepreneurship and
              business growth.
            </p>

          </section>



          <section className="w-full flex justify-center overflow-hidden md:overflow-visible py-10">
            <div
              className="
      flex
      gap-0
      w-max
      translate-x-[-120px] md:translate-x-0
    "
            >
              <img
                src="/home/card.png"
                className="w-40 md:w-[200px] h-[360px] md:h-[448px] translate-y-10"
                alt=""
              />
              <img
                src="/home/card.png"
                className="w-40 md:w-[200px] h-[360px] md:h-[448px] z-20"
                alt=""
              />
              <img
                src="/home/card.png"
                className="w-40 md:w-[200px] h-[360px] md:h-[448px] translate-y-10"
                alt=""
              />
              <img
                src="/home/card.png"
                className="w-40 md:w-[200px] h-[360px] md:h-[448px]"
                alt=""
              />
            </div>
          </section>


          {/* 
        <section className="w-full px-6 md:px-16 py-20 flex gap-5">
          <div>
            <img className="translate-y-10 " ref={fadeRef} src="/home/banner-logo.png" alt="banner-logo" width={500} height={500} />
          </div>
          <div className="max-w-5xl bg-[#654321] backdrop-blur-md rounded-3xl p-8 text-white flex flex-col items-center justify-center">

            <div className=" bg-[#B0944B] text-white px-6 py-2 rounded-full font-semibold  text-2xl -translate-y-12">
              E-SUMMIT'26: WHERE CREATIVITY MEETS CAPITAL
            </div>

            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-3xl">
              In the world of entrepreneurship, great ideas need more than just vision —
              they need the right support to grow. The theme of E-Summit 2026,
              "Where Creativity Meets Capital", embodies the fusion of innovation
              and investment, highlighting how groundbreaking ideas flourish
              when paired with strategic funding.
            </p>

          </div>
        </section> */}

          <section className="w-full max-w-[1300px] hidden md:flex px-4 md:px-16 py-16  flex-col mx-auto">

            {/* TOP ROW */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-4">

              {/* LEFT TEXT */}
              <div className="flex flex-col ">
                <span className={`text-lg md:text-base text-white tracking-widest font-semibold uppercase ${styles.stepsText}`}>
                  IITP's
                </span>
                <span className={`text-2xl md:text-4xl text-white font-bold tracking-widest uppercase ${styles.chopsicText}`}>
                  E Summit'26
                </span>
              </div>

              {/* RIGHT BADGE */}
              <div className="flex md:justify-center h-full p-2   bg-[#352A17] rounded-t-2xl border-r-3 border-t-3 border-l-3 border-white">
                <div className={`bg-[#b0944b] text-white px-10 py-2 rounded-full text-2xl md:text-2xl font-bold tracking-widest uppercase ${styles.chopsicText}`}>
                  <h2 >E-Summit'26: Where</h2>
                  <h2>Creativity <span className='text-[#352A17]'>Meets</span> Capital</h2>
                </div>

              </div>

            </div>
            <div className='relative  w-full p-5 bg-[#352A17] rounded-b-2xl rounded-l-2xl border-b-3 border-t-3 border-l-3 border-r-3 border-white'>
              <div className="absolute -top-[3px] right-0 h-1.5 w-[573px] bg-[#352A17] z-20"></div>

              {/* DESCRIPTION */}
              <p className=" text-sm md:text-xl leading-relaxed tracking-wide text-white ">
                In the world of entrepreneurship, great ideas need more than just vision —
                they need the right support to grow. The theme of E-Summit 2026,
                "Where Creativity Meets Capital", embodies the fusion of innovation and
                investment, highlighting how groundbreaking ideas flourish when paired
                with strategic funding.
              </p>
            </div>

          </section>

          {/* MOBILE VIEW */}
          <section className="md:hidden w-full px-4 py-10 bg-[#352A17] border border-white rounded-2xl flex flex-col gap-4">

            {/* IITP + E SUMMIT */}
            <div className="flex flex-col">
              <span
                className={`text-sm text-white tracking-widest font-semibold uppercase ${styles.stepsText}`}
              >
                IITP's
              </span>
              <span
                className={`text-2xl text-white font-bold tracking-widest uppercase ${styles.chopsicText}`}
              >
                E Summit'26
              </span>
            </div>

            {/* CREATIVITY MEETS CAPITAL */}
            <div
              className={`bg-[#b0944b] text-white px-4 py-3 rounded-xl flex flex-col items-start ${styles.chopsicText}`}
            >
              <span className="text-sm font-bold tracking-widest uppercase">
                E-Summit'26 : Where
              </span>
              <span className="text-sm font-bold tracking-widest uppercase">
                Creativity{" "}
                <span className="text-[#352A17]">Meets</span>{" "}
                Capital
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm leading-relaxed tracking-wide text-white">
              In the world of entrepreneurship, great ideas need more than just vision —
              they need the right support to grow. The theme of E-Summit 2026,
              "Where Creativity Meets Capital", embodies the fusion of innovation and
              investment, highlighting how groundbreaking ideas flourish when paired
              with strategic funding.
            </p>

          </section>

          <StatsSection />
          <EventsSection />
          <PastSpeakersSection />
        </div>





        <div className={`${styles.background4} relative`}>
          <img src="/home/investors.png" alt="investors" />
          <img src="/home/investors-list.png" alt="investors" style={{ marginTop: '60px', marginBottom: '60px' }} />
          <img src="/home/sponsors.png" alt="sponsors" />
          <img src="/home/sponsors-list.png" alt="sponsors" style={{ marginTop: '60px' }} />
        </div>

      </div>


    </>



  )
}

export default Page
