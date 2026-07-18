import styles from "./style.module.css";
import { Link } from "react-router-dom";
import icon from "../../../../public/favicon.svg";

function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.introduction_section}>
        <p className={styles.strapline}>Personalized English Classes</p>

        <h1 className={styles.title}>
          Learn English with Confidence. Speak with Purpose.
        </h1>

        <p className={styles.description}>
          Build real-world English skills through personalized lessons designed
          around your goals, your schedule, and your learning pace.
        </p>

        <div className={styles.buttons}>
          <Link to="/classes" className={styles.button}>
            About our classes
          </Link>

          <Link to="/book" className={styles.button}>
            Book a class
          </Link>
        </div>

        <p className={styles.discover}>Discover more</p>
      </div>

      <div className={styles.why__section}>
        <div className={styles.why__container}>
          <p className={styles.strapline}>Why learn with me</p>
          <h2 className={styles.subtitle}>What do I offer?</h2>
        </div>
        <p className={styles.description}>
          Every lesson is designed around your goals, your schedule, and
          practical English you can use every day.
        </p>

        <div className={styles.reasons}>
          <div className={styles.reason}>
            <img className={styles.reason__icon} src={icon} alt="" />

            <h4 className={styles.reason__title}>Personalized classes</h4>

            <p className={styles.reason__description}>
              Every lesson is tailored to your goals, level, and learning style.
            </p>
          </div>

          <div className={styles.reason}>
            <img className={styles.reason__icon} src={icon} alt="" />

            <h4 className={styles.reason__title}>Learn at your own pace</h4>

            <p className={styles.reason__description}>
              Schedule lessons when it works for you and progress at a
              comfortable pace.
            </p>
          </div>

          <div className={styles.reason}>
            <img className={styles.reason__icon} src={icon} alt="" />

            <h4 className={styles.reason__title}>Practical English</h4>

            <p className={styles.reason__description}>
              Learn English you can use in real conversations, travel, work, or
              everyday situations.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.process__section}>
        <div className={styles.process__container}>
          <p className={styles.strapline}>How to start</p>
          <h2 className={styles.subtitle}>
            Getting started is as easy as 1-2-3.
          </h2>{" "}
        </div>
        <p className={styles.description}>
          Starting something new can sometimes feel overwhelming. That's why
          getting started is as easy as pie.
        </p>
      </div>

      <div className={styles.testimonials__section}>
        <div className={styles.testimonials__container}>
          <p className={styles.strapline}>Real Stories</p>
          <h2 className={styles.subtitle}>Hear it from my students</h2>
        </div>

        <p className={styles.description}>
          Every learning journey is different, but the goal is the same: gaining
          confidence in English. Here's what some of my current and former
          students have to say about their experience.
        </p>
      </div>
    </section>
  );
}

export default Home;
