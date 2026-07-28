import typography from "../../../styles/typography.module.css";

import styles from "./style.module.css";

import profileImage from "../../../assets/images/profile.png";

import FAQ from "../FAQ/FAQ";
import { es } from "../../../locales/faq/es";
import { en } from "../../../locales/faq/en";

import { useContext } from "react";

import { LanguageContext } from "../../../contexts/LanguageContext";

function About() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts, language } = context;

  const questions = language === "es" ? es.about : en.about;

  return (
    <section id="about" className={styles.about}>
      <section
        className={`${typography.section} ${typography.section_introduction}`}
      >
        <h2 className={`${typography.subtitle} ${styles.subtitle_about}`}>
          About me
        </h2>

        <div className={styles.profile}>
          <div className={styles.profile__content}>
            <p className={styles.profile__text}>
              Hi, I'm [Name], an English teacher passionate about helping
              students improve their communication skills through personalized
              lessons.
            </p>

            <p className={styles.profile__text}>
              My approach focuses on creating a comfortable environment where
              students can learn at their own pace, gain confidence, and use
              English naturally in real-life situations.
            </p>

            <a className={styles.profile__cv} href="#">
              📄 View my credentials
            </a>
          </div>

          <img
            className={styles.profile__image}
            src={profileImage}
            alt="English teacher profile"
          />
        </div>
      </section>

      <section
        className={`${typography.section} ${typography.section_introduction}`}
      >
        <h2 className={`${typography.subtitle} ${styles.subtitle_about}`}>
          My professional journey
        </h2>
      </section>

      <section className={typography.section}>
        <div className={styles.container}>
          <h2 className={`${typography.subtitle} ${styles.subtitle_questions}`}>
            Frequently asked questions
          </h2>
        </div>

        <FAQ questions={questions} />
      </section>
    </section>
  );
}

export default About;
