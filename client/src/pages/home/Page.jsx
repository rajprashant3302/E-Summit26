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

        <section id="home" className="relative w-full">
          <img
            src="/home/banner.jpeg"
            alt=""
            className="w-full h-auto"
          />
        </section>


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
          <section className="absolute top-0 left-0 w-full flex justify-center z-20" style={{ backdropFilter: "blur(20px)", backgroundColor: "rgba(53, 42, 23, 0.45)", borderRadius: "0px" }}>
            <Countdown />
          </section>


          <section id="about" className="w-full max-w-[1300px] flex px-4 md:px-16 pt-[100px] sm:pt-[140px] md:pt-[180px] pb-16 flex-col mx-auto">


            {/* TOP ROW */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-4">

              {/* RIGHT BADGE */}
              <div className="flex md:justify-start h-full w-fit py-2 md:py-4 px-4 md:px-10  bg-[#352A17] rounded-t-2xl border-r-3 border-t-3 border-l-3 border-white">
                <div className={`bg-[#b0944b] text-white px-5 md:px-10 py-2 rounded-full text-sm md:text-2xl font-bold tracking-widest uppercase ${styles.chopsicText}`}>
                  <h2 >About Us</h2>
                </div>

              </div>

            </div>
            <div className='relative  w-full p-5 bg-[#352A17] rounded-b-2xl rounded-r-2xl border-b-3 border-t-3 border-l-3 border-r-3 border-white'>
              <div
                className="
    absolute -top-[3px] left-0 h-1.5 bg-[#352A17] z-20
    w-[166px]
    sm:w-[167px]
    md:w-[324px]
    lg:w-[324px]
  "
              ></div>


              {/* DESCRIPTION */}
              <p className=" text-sm md:text-xl leading-relaxed tracking-wide text-white ">
                E-Summit 2025, the flagship entrepreneurial event of IIT Patna,
                is a vibrant platform that brings together innovators, investors,
                startups, and industry leaders to foster entrepreneurship and
                business growth.
              </p>
            </div>

          </section>



          <section className="w-full flex justify-center py-10 overflow-hidden">
            <div
              className="
      grid
      grid-cols-2
      sm:grid-cols-3
      lg:grid-cols-4
      gap-4 sm:gap-10
    "
            >
              {/* CARD 1 */}
              <div className="relative flex justify-center">
                <img
                  src="/home/card.png"
                  className="w-40 md:w-[200px] h-[360px] md:h-[448px]"
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 mx-5 my-6 md:mx-7 md:my-9">
                  <p className=" text-[#922724] text-xl md:text-2xl font-bold tracking-widest text-center font-['Noto_Serif_Devanagari'] leading-snug">
                    उद्यमेन विचारः नवोन्मेषः च विकासः सिद्ध्यति
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="relative flex justify-center">
                <img
                  src="/home/card.png"
                  className="w-40 md:w-[200px] h-[360px] md:h-[448px]"
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 mx-5 my-6 md:mx-7 md:my-9">
                  <p className="text-[#007f66] text-xl md:text-2xl font-bold tracking-widest text-center font-['Noto_Serif_Devanagari'] leading-snug">
                    ज्ञानं साहसं नेतृत्वं च भविष्यं निर्माति
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="hidden relative sm:flex justify-center">
                <img
                  src="/home/card.png"
                  className="w-40 md:w-[200px] h-[360px] md:h-[448px]"
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 mx-5 my-6 md:mx-7 md:my-9">
                  <p className="text-[#d70040] text-xl md:text-2xl font-bold tracking-widest text-center font-['Noto_Serif_Devanagari'] leading-snug">
                    दृष्टिः कर्म च मिलित्वा महान् परिवर्तनं जनयतः
                  </p>
                </div>
              </div>

              {/* CARD 4 */}
              <div className="hidden lg:flex relative justify-center">
                <img
                  src="/home/card.png"
                  className="w-40 md:w-[200px] h-[360px] md:h-[448px]"
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 mx-5 my-6 md:mx-7 md:my-9">
                  <p className="text-[#b06500]  text-xl md:text-2xl font-bold tracking-widest text-center font-['Noto_Serif_Devanagari'] leading-snug">
                    स्वप्नाः परिश्रमः विश्वासः च सफलता नयन्ति
                  </p>
                </div>
              </div>
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
          <section id="events">

            <EventsSection />
          </section>
          <section id="speakers">

          <PastSpeakersSection />
          </section>
        </div>





        <div id="sponsors" className={`${styles.background4} relative`}>
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
