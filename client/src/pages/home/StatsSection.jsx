import { motion } from "framer-motion";
import styles from "./Home.module.css";

const StatsSection = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 overflow-hidden">

      {/* top arrow  */}
      {/* <div className="w-full overflow-hidden mb-2">
        <motion.div
          className="
            h-[90px]
            w-[200%]
            bg-repeat-x
            bg-center
          "
          style={{
            backgroundImage: "url('/home/arrow.png')",
            backgroundSize: "contain",
          }}
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div> */}

      {/* stats  */}
      <div className="relative w-full flex justify-center items-center bg-[#352A17] py-6">
        <div className="relative z-10 flex flex-col md:flex-row gap-0 sm:gap-6 md:gap-24 items-center">

          {[
  { value: "1000 +", label: "ATTENDEES" },
  { value: "100 +", label: "STARTUPS" },
  { value: "25 +", label: "COMPETITION EVENTS" },
].map((item, i) => (
  <div
    key={i}
    className="relative w-[350px] h-[350px] flex items-center justify-center"
  >
    <motion.div
      className="absolute inset-0 rounded-full"
      style={{
        backgroundImage: "url('/home/circular-chain.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      // whileHover={{ rotate: 90 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
    <div className={`relative w-[200px] h-[200px] bg-[#d4af37] rounded-full flex flex-col items-center justify-center text-white text-center z-10 pointer-events-none  `}>
      <h3 className={`text-2xl font-bold ${styles.stepsText} `}>{item.value}</h3>
      <p className={`text-xl tracking-wide font-bold ${styles.chopsicText}`}>{item.label}</p>
    </div>
  </div>
))}

        </div>
      </div>

     {/* bottom arrow  */}
      {/* <div className="w-full overflow-hidden mt-2">
        <motion.div
          className="
            h-[90px]
            w-[200%]
            rotate-180
            bg-repeat-x
            bg-center
          "
          style={{
            backgroundImage: "url('/home/arrow.png')",
            backgroundSize: "contain",
          }}
          animate={{ x: ["0%", "50%"] }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </div> */}

    </div>
  );
};

export default StatsSection;
