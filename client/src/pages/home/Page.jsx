import React from 'react'
import styles from "./Home.module.css";
import { useRef, useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    <div className="overflow-x-hidden w-full">
      {/* banner  */}
      <div className={`flex flex-col justify-center items-center ${styles.background}`}>
        <section className="flex h-[90vh] justify-center items-center w-full">
          <img className="translate-y-10 " ref={fadeRef} src="/home/banner-logo.png" alt="banner-logo" width={1000} height={500} />
        </section>
        <ArrowDown className="text-white animate-bounce" />
      </div>
      <div id="nav-trigger" className="h-px" />

      <div className={`w-full ${styles.background2}`}>

        {/* about  */}
        <section className="w-full px-6 md:px-16 py-16">
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

            <div className="flex gap-0 w-full justify-end">
              {/* <div className="bg-gray-400/80 w-[180px] translate-y-[50px] h-[448px] rounded-xl " > */}
              <img src="/home/card.png" className="w-[200px]  translate-y-[50px] h-[448px]" />
              {/* </div> */}
              <img src="/home/card.png" className="w-[200px]  h-[448px]" />
              <img src="/home/card.png" className="w-[200px]  translate-y-[50px] h-[448px]" />
              <img src="/home/card.png" className="w-[200px]  h-[448px]" />
            </div>

          </div>
        </section>


        <section className="w-full px-6 md:px-16 py-20 flex gap-5">
          <div>
            <img className="translate-y-10 " ref={fadeRef} src="/home/banner-logo.png" alt="banner-logo" width={500} height={500} />
          </div>
          <div className="max-w-5xl bg-[#654321] backdrop-blur-md rounded-3xl p-8 text-white flex flex-col items-center justify-center">

            <div className=" bg-[#B0944B] text-white px-6 py-2 rounded-full font-semibold  text-2xl -translate-y-12">
              E-SUMMIT’26: WHERE CREATIVITY MEETS CAPITAL
            </div>

            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-3xl">
              In the world of entrepreneurship, great ideas need more than just vision —
              they need the right support to grow. The theme of E-Summit 2026,
              “Where Creativity Meets Capital”, embodies the fusion of innovation
              and investment, highlighting how groundbreaking ideas flourish
              when paired with strategic funding.
            </p>

          </div>
        </section>
      </div>

      {/* stats section  */}
      <div className="w-full flex flex-col items-center py-12 bg-black">

        {/* aroow  */}
        <div className="w-full flex justify-center mb-2">
          <div
            className="w-full h-[90px]"
            style={{
              backgroundImage: "url('/home/arrow.png')",
              backgroundSize: "contain",
            }}
          />
        </div>


        <div className="relative w-full flex justify-center items-center h-[260px]">

          <div className={styles.background3} />


          <div className="relative flex gap-24 z-10">

            <div
              style={{
                boxShadow: "0 0 35px rgba(212, 175, 55, 0.6)",
              }}
              className={`${styles.circleChain} relative flex items-center justify-center text-white`}>


              <div
                className="absolute flex flex-col items-center justify-center 
                  w-[230px] h-[230px] 
                  bg-[#d4af37] rounded-full text-black text-center">

                <h3 className="text-2xl font-bold">1000+</h3>
                <p className="text-xs tracking-wide">ATTENDEES</p>

              </div>

            </div>


            <div
              style={{
                boxShadow: "0 0 35px rgba(212, 175, 55, 0.6)",
              }}
              className={`${styles.circleChain} relative flex items-center justify-center text-white`}>


              <div className="absolute flex flex-col items-center justify-center 
                  w-[230px] h-[230px] 
                  bg-[#d4af37] rounded-full text-black text-center">

                <h3 className="text-2xl font-bold">100+</h3>
                <p className="text-xs tracking-wide">STARTUPS</p>

              </div>

            </div>


            <div
              style={{
                boxShadow: "0 0 35px rgba(212, 175, 55, 0.6)",
              }}
              className={`${styles.circleChain} relative flex items-center justify-center text-white`}>


              <div
                className="absolute flex flex-col items-center justify-center 
                  w-[230px] h-[230px] 
                  bg-[#d4af37] rounded-full text-black text-center">

                <h3 className="text-2xl font-bold">25+</h3>
                <p className="text-xs tracking-wide">COMPETITION EVENTS</p>

              </div>

            </div>

          </div>
        </div>



        {/* arrow  */}
        <div className="w-full flex justify-center mt-2">
          <div
            className="w-full h-[90px]  rotate-180"
            style={{
              backgroundImage: "url('/home/arrow.png')",
              backgroundSize: "contain",
            }}
          />
        </div>

      </div>




    </div>



  )
}

export default Page
