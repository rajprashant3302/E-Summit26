import styles from './Speakers.module.css';

export default function PastSpeakersSection() {
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
                <span className={styles.headerText}>PAST SPEAKERS</span>
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
            <Card />
            <Card />
            <Card />
          </div>
      
      </section>
  );
}

function Card() {
  return (
    <div className={styles.card}>
      {/* Invisible clickable areas */}
      <a
        href="https://www.linkedin.com/in/mukeshbansal"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.socialLink} ${styles.linkedin}`}
        aria-label="LinkedIn"
      />

      <a
        href="https://twitter.com/mukeshbansal"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.socialLink} ${styles.twitter}`}
        aria-label="Twitter"
      />
    </div>
  );
}
