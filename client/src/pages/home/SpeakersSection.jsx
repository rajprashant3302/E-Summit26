import styles from "./Speakers.module.css";

export default function SpeakersSection() {
  return (
    <section className={styles.speakersSection}>
      <div className={styles.sectionHeader}>
        <div>
          <img
            src="/images/arrowleft.png"
            alt="Previous"
            className={styles.arrowImageleft}
          />
        </div>

        <div className={styles.headerBox}>
          <span className={styles.headerText}>SPEAKERS</span>
        </div>

        <div>
          <img
            src="/images/arrowright.png"
            alt="Next"
            className={styles.arrowImageright}  
          />
        </div>
      </div>

      <div className={styles.speakerCards}>
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
      </div>
    </section>
  );
}

function SpeakerCard() {
  return (
    <div className={styles.speakerCard}>
      <img
        src="/images/speakerframe.png"
        alt="Speaker"
        className={styles.speakerImage}
      />
    </div>
  );
}
