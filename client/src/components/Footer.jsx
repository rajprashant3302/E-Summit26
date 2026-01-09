import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-[1400px] mx-auto px-6 pt-10">
        <div className="h-px bg-white/70 w-full" />
      </div>

      <div className="text-center text-sm text-white/80 px-6 py-6 tracking-wide">
        “E-CELL is not just a student body; it’s a medium responsible for
        diffusing the spirit of Entrepreneurship in the veins of every
        individual….”
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
  <h3 className="text-lg font-semibold mb-3">About Us</h3>

  <p className="text-sm text-white/80 leading-relaxed space-y-1">
    <span className="block font-semibold">CONTACT US</span>

    <a
      href="tel:7740929509"
      className="block hover:text-white transition"
    >
      Phone: 7740929509
    </a>

    <a
      href="tel:7355797206"
      className="block hover:text-white transition"
    >
      Phone: 7355797206
    </a>

    <a
      href="mailto:entrepreneurship@iitp.ac.in"
      className="block hover:text-white transition"
    >
      Email: entrepreneurship@iitp.ac.in
    </a>
  </p>
</div>


        <div>
          <h3 className="text-lg font-semibold mb-3">Important Links</h3>
          <ul className="text-sm text-white/80 space-y-1">
            <li><a href="#" className="text-white hover:text-sky-400">Home</a></li>
            <li><a href="#" className="text-white hover:text-sky-400">Campus Ambassador</a></li>
            <li><a href="#" className="text-white hover:text-sky-400">Entrepreneur</a></li>
            <li><a href="#" className="text-white hover:text-sky-400">Find Us Here</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Social Media</h3>
          <div className="flex gap-4">
            <a href="" className="w-10 h-10 rounded-full bg-linear-to-br from-pink-500 to-yellow-500 flex items-center justify-center">
              <FaInstagram />
            </a>
            <a href="" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
              <FaFacebookF />
            </a>
            <a href="" className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <FaLinkedinIn />
            </a>
            <a href="" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
              <FaXTwitter />
            </a>
          </div>
        </div>

      </div>
      {/* MAP LOCATION */}
<div className="max-w-[1400px] mx-auto px-6 py-8">
  <div className="w-full h-[220px] md:h-[300px] rounded-xl overflow-hidden border border-white/20">
    <iframe
      title="E-Cell IIT Patna Location"
      src="https://www.google.com/maps?q=Indian%20Institute%20of%20Technology%20Patna&output=embed"
      className="w-full h-full"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="h-px bg-white/70 w-full" />
      </div>
      <div className="text-center text-xs text-white/70 py-4">
        Copyright © 2023 – All rights reserved
      </div>

    </footer>
  );
};

export default Footer;
