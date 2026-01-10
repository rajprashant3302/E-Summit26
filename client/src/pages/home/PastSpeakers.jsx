import styles from "./PastSpeakers.module.css";

const speakers = [
  {
    name: "DR. TANU JAIN",
    photo: "/images/tanujain.jpeg",
    linkedin: "https://linkedin.com/in/mukesh",
    twitter: "https://twitter.com/mukesh",
  },
  {
    name: "DR. SANDEEP JAIN",
    photo: "/images/sandeepjain.jpeg",
    linkedin: "https://linkedin.com/in/mukesh",
    twitter: "https://twitter.com/mukesh",
  },
  {
    name: "Mukesh Bansal",
    photo: "/images/mukesh.jpg",
    linkedin: "https://linkedin.com/in/mukesh",
    twitter: "https://twitter.com/mukesh",
  },
];

export default function PastSpeakersSection() {
  return (
    <section className={styles.speakersSection}>
      {/* HEADER */}
      <div className={styles.sectionHeader}>
        <img src="/images/arrowleft.png" className={styles.arrow} />
        <div className={styles.headerBox}>
          <span className={styles.headerText}>PAST SPEAKERS</span>
        </div>
        <img src="/images/arrowright.png" className={styles.arrow} />
      </div>

      {/* SUBTEXT */}
      <p className={styles.subtitle}>
        Partnering with visionary investors who share our commitment to
        fostering innovation and entrepreneurship
      </p>

      {/* CARDS */}
      <div className={styles.cardsRow}>
        {speakers.map((s, i) => (
          <div className={styles.card} key={i}>
            {/* PHOTO */}
            <img src={s.photo} className={styles.photo} />

            {/* NAME */}
            <div className={styles.name}>{s.name}</div>

            {/* SOCIAL */}
            <div className={styles.socials}>
            <a href={s.linkedin} target="_blank">
             <img src="/images/icons/linkedin.png" />
            </a>
            <a href={s.twitter} target="_blank">
             <img src="/images/icons/twitter.png" />
            </a>
          </div>

          </div>
        ))}
      </div>
    </section>
  );
}
