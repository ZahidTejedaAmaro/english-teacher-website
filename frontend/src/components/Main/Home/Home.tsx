import styles from "./style.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.introductionSection}>
        <p className={styles.strapline}>Personalized English Classes</p>
        <h1 className={styles.catchphrase}>
          Learn English with Confidence. Speak with Purpose.
        </h1>
        <p className={styles.description}>
          Build real-world English skills through personalized lessons designed
          around your goals, your schedule, and your learning pace.
        </p>{" "}
        <div className={styles.introductionButtonsSection}>
          <Link to="/classes" className={styles.introductionButton}>
            About our classes
          </Link>

          <Link to="/book" className={styles.introductionButton}>
            Book a class
          </Link>
        </div>
        <p className={styles.discoverText}>Discover more</p>
      </div>
    </section>
  );
}

export default Home;
