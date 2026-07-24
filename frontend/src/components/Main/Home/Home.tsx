import typography from "../../../styles/typography.module.css";

import styles from "./style.module.css";
import { Link } from "react-router-dom";
import icon from "../../../../public/favicon.svg";
import arrowIcon from "../../../assets/icons/arrow.svg";

import Testimonials from "./Testimonials/Testimonials";
import FAQ from "../FAQ/FAQ";
import { es } from "../../../locales/faq/es";
import { en } from "../../../locales/faq/en";

import { useContext } from "react";

import { LanguageContext } from "../../../contexts/LanguageContext";

function Home() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts, language } = context;

  const questions = language === "es" ? es.home : en.home;

  return (
    <section id="home" className={styles.home}>
      <section
        className={`${typography.section} ${typography.section_introduction}`}
      >
        <p className={typography.strapline}>
          {texts.home.introduction.strapline}
        </p>

        <h1 className={typography.title}>{texts.home.introduction.title}</h1>

        <p className={typography.description}>
          {texts.home.introduction.description}
        </p>

        <div className={styles.buttons}>
          <Link to="/classes" className={styles.button}>
            {texts.home.introduction.aboutClasses}
          </Link>

          <Link to="/book" className={styles.button}>
            {texts.home.introduction.bookClass}
          </Link>
        </div>
      </section>

      <section className={typography.section}>
        <div className={styles.container}>
          <p className={typography.strapline}>{texts.home.why.strapline}</p>

          <h2 className={typography.subtitle}>{texts.home.why.title}</h2>
        </div>

        <p className={typography.description}>{texts.home.why.description}</p>

        <div className={styles.reasons}>
          <div className={styles.reason}>
            <img className={styles.reason__icon} src={icon} alt="" />

            <h4 className={styles.reason__title}>
              {texts.home.why.reasons.personalized.title}
            </h4>

            <p className={styles.reason__description}>
              {texts.home.why.reasons.personalized.description}
            </p>
          </div>

          <div className={styles.reason}>
            <img className={styles.reason__icon} src={icon} alt="" />

            <h4 className={styles.reason__title}>
              {texts.home.why.reasons.pace.title}
            </h4>

            <p className={styles.reason__description}>
              {texts.home.why.reasons.pace.description}
            </p>
          </div>

          <div className={styles.reason}>
            <img className={styles.reason__icon} src={icon} alt="" />

            <h4 className={styles.reason__title}>
              {texts.home.why.reasons.practical.title}
            </h4>

            <p className={styles.reason__description}>
              {texts.home.why.reasons.practical.description}
            </p>
          </div>

          <div className={styles.reason}>
            <img className={styles.reason__icon} src={icon} alt="" />

            <h4 className={styles.reason__title}>
              {texts.home.why.reasons.progress.title}
            </h4>

            <p className={styles.reason__description}>
              {texts.home.why.reasons.progress.description}
            </p>
          </div>
        </div>
      </section>

      <section className={typography.section}>
        <div className={styles.container}>
          <p className={typography.strapline}>{texts.home.process.strapline}</p>

          <h2 className={typography.subtitle}>{texts.home.process.title}</h2>
        </div>

        <p className={typography.description}>
          {texts.home.process.description}
        </p>

        <div className={styles.process}>
          <div className={styles.process__step}>
            <div className={styles.process__number}>
              <img className={styles.process__icon} src={icon} alt="" />
            </div>

            <h3 className={styles.process__title}>Contact Me</h3>

            <p className={styles.process__text}>
              Tell me about your goals and availability.
            </p>
          </div>
          <img
            src={arrowIcon}
            className={`${styles.process__arrow} ${styles.process__arrow_active}`}
          />

          <div className={styles.process__step}>
            <div className={styles.process__number}>
              {" "}
              <img className={styles.process__icon} src={icon} alt="" />
            </div>

            <h3 className={styles.process__title}>Free Consultation</h3>

            <p className={styles.process__text}>
              We'll discuss your English level and objectives.
            </p>
          </div>
          <img
            src={arrowIcon}
            className={`${styles.process__arrow} ${styles.process__arrow_active}`}
          />

          <div className={styles.process__step}>
            <div className={styles.process__number}>
              {" "}
              <img className={styles.process__icon} src={icon} alt="" />
            </div>

            <h3 className={styles.process__title}>Learning Plan</h3>

            <p className={styles.process__text}>
              I'll prepare a personalized learning plan for you.
            </p>
          </div>

          <img
            src={arrowIcon}
            className={`${styles.process__arrow} ${styles.process__arrow_active}`}
          />

          <div className={styles.process__step}>
            <div className={styles.process__number}>
              {" "}
              <img className={styles.process__icon} src={icon} alt="" />
            </div>

            <h3 className={styles.process__title}>Book Your Classes</h3>

            <p className={styles.process__text}>
              Choose the days and times that fit your schedule.
            </p>
          </div>
        </div>
      </section>

      <section className={typography.section}>
        <div className={styles.container}>
          <p className={typography.strapline}>
            {texts.home.testimonials.strapline}
          </p>

          <h2 className={typography.subtitle}>
            {texts.home.testimonials.title}
          </h2>
        </div>

        <p className={typography.description}>
          {texts.home.testimonials.description}
        </p>

        <Testimonials />
      </section>

      <section className={typography.section}>
        <div className={styles.container}>
          {/* <p className={typography.strapline}>{texts.home.faq.strapline}</p> */}

          <h2 className={`${typography.subtitle} ${styles.subtitle_questions}`}>
            {texts.home.faq.title}
          </h2>
        </div>

        <FAQ questions={questions} />
      </section>
    </section>
  );
}

export default Home;
