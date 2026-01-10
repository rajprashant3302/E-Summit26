import styles from "./Speakers.module.css";

const speakers = [
  {
    name: "Dr. Buddha Chandrasekhar",
    image: "/images/speakers/buddha.png",
    linkedin: "https://linkedin.com/in/bhanu",
    twitter: "https://twitter.com/bhanu",
  },
  {
    name: "Varun Varunesh",
    image: "/images/speakers/varun.png",
    linkedin: "https://linkedin.com/in/chirag",
    twitter: "https://twitter.com/chirag",
  },
  {
    name: "Satyajit",
    image: "/images/speakers/satyajit.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "Mausumi",
    image: "/images/speakers/mausumi.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "haren",
    image: "/images/speakers/haren.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "chirag",
    image: "/images/speakers/chirag.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "sriparna",
    image: "/images/speakers/sriparna.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "kamlesh",
    image: "/images/speakers/kamlesh.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "suman",
    image: "/images/speakers/suman.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "kadiyali",
    image: "/images/speakers/srivatsa.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "bhanu",
    image: "/images/speakers/bhanu.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "sambit",
    image: "/images/speakers/sambit.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "Ashish",
    image: "/images/speakers/ashish.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "nidhi",
    image: "/images/speakers/nidhi.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "siddhartha",
    image: "/images/speakers/siddhartha.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
  {
    name: "Amit",
    image: "/images/speakers/amit.png",
    linkedin: "https://linkedin.com/in/ashish",
    twitter: "https://twitter.com/ashish",
  },
];


export default function SpeakersSection() {
  return (
    <section className={styles.speakersSection}>
      
      {/* ===== HEADER ===== */}
      <div className={styles.sectionHeader}>
        <img src="/images/arrowleft.png" alt="" className={styles.arrow} />

        <div className={styles.headerBox}>
          <span className={styles.headerText}>SPEAKERS</span>
        </div>

        <img src="/images/arrowright.png" alt="" className={styles.arrow} />
      </div>

     <div className={styles.cardsRow}>
  {speakers.map((speaker) => (
    <div key={speaker.name} className={styles.cardWrap}>
      
      {/* Speaker card image */}
      <img
        src={speaker.image}
        alt={speaker.name}
        className={styles.cardImage}
      />

      {/* Clickable overlays */}
      <div className={styles.socials}>
        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${speaker.name} LinkedIn`}
        />
        <a
          href={speaker.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${speaker.name} Twitter`}
        />
      </div>

    </div>
  ))}
</div>


    </section>
  );
}
