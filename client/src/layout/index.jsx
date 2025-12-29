import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gsap from "gsap";

const AuthLayouts = ({ children }) => {
  const navRef = useRef(null);
  const lastScroll = useRef(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById("nav-trigger");

    if (!trigger) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(trigger);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    const onScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll.current && current > 100) {
        
        gsap.to(navRef.current, {
          y: "-100%",
          duration: 0.6,
          ease: "power3.out",
        });
      } else {
        
        gsap.to(navRef.current, {
          y: "0%",
          duration: 0.8,
          ease: "elastic.out(1, 0.6)",
        });
      }

      lastScroll.current = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  return (
    <div className="flex flex-col min-h-screen">

      
      <div
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50"
      >
        <Navbar />
      </div>

      <main className="pt-[72px] grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default AuthLayouts;
