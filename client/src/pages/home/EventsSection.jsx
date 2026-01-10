// EventsSection.jsx
import styles from "./Event.module.css";

export default function EventsSection() {
  return (
   
      <section className={styles.eventsSection}>
      <div className={styles.sectionHeader}>
        <div>
          <img
            src="/images/arrowleft.png"
            alt="Previous"
            className={styles.arrowImageleft}
          />
        </div>

        <div className={styles.headerBox}>
          <span className={styles.headerText}>EVENTS</span>
        </div>

        <div>
          <img
            src="/images/arrowright.png"
            alt="Next"
            className={styles.arrowImageright}  
          />
        </div>
      </div>

      <div className={styles.eventCards}>
        <div className={styles.eventCard}>
      <img
        src="/images/event1.png"
        alt="Event"
        className={styles.eventImage}
      />
    </div>

     <div className={styles.eventCard}>
      <img
        src="/images/event2.png"
        alt="Event"
        className={styles.eventImage}
      />
    </div>

    <div className={styles.eventCard}>
      <img
        src="/images/event3.png"
        alt="Event"
        className={styles.eventImage}
      />
    </div>
      </div>
   
    </section>
  );
}

