import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from '../pages/home/Home.module.css'


const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }
};


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="w-full bg-[#382D1B] text-white">
      
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img src="/logo.png" alt="logo" className="w-10 h-10" />
          <span className={`text-xl font-semibold tracking-widest ${styles.chopsicText}`}>
            E SUMMIT’26
          </span>
        </div>

        {/* desktop  */}
        <nav className={`hidden md:flex items-center gap-9 uppercase text-sm tracking-wider `}>
          <button onClick={() => scrollToSection("home")}>HOME</button>
          <button onClick={() => scrollToSection("events")}>EVENTS</button>
          <button onClick={() => scrollToSection("speakers")}>SPEAKERS</button>
          <button onClick={() => scrollToSection("sponsors")}>SPONSORS</button>

          <button className={`border-2 border-white px-5 py-2 rounded-lg text-sm tracking-widest ${styles.stepsText}`}>
            LOGIN
          </button>
        </nav>

        
        <button
          className="md:hidden flex flex-col justify-between w-7 h-5 relative"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-[3px] w-full bg-white transition-all duration-300
              ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`h-[3px] w-full bg-white transition-all duration-300
              ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[3px] w-full bg-white transition-all duration-300
              ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* mobile  */}
      <div
        className={`md:hidden bg-[#2a2116] overflow-hidden transition-all duration-300
          ${open ? "max-h-[400px] py-6" : "max-h-0 py-0"}`}
      >
        <div className="flex flex-col items-center gap-6 uppercase tracking-wider text-sm">

           <button onClick={() => {scrollToSection("home"); setOpen(false)}}>HOME</button>
          <button onClick={() =>  {scrollToSection("events"); setOpen(false)}}>EVENTS</button>
          <button onClick={() =>  {scrollToSection("speakers"); setOpen(false)}}>SPEAKERS</button>
          <button onClick={() =>  {scrollToSection("sponsors"); setOpen(false)}}>SPONSORS</button>

          <button className={`border-2 border-white px-6 py-1 rounded-full text-xs tracking-widest ${styles.stepsText}`}>
            LOGIN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
