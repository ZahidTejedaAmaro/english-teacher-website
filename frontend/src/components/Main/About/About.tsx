import typography from "../../../styles/typography.module.css";

import styles from "./style.module.css";

import profileImage from "../../../assets/images/profile.png";

import FAQ from "../FAQ/FAQ";
import { esQuestions } from "../../../locales/faq/es";
import { enQuestions } from "../../../locales/faq/en";

import { useContext } from "react";

import { LanguageContext } from "../../../contexts/LanguageContext";

function About() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts, language } = context;

  const questions = language === "es" ? esQuestions.about : enQuestions.about;

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

      <section className={typography.section}>
        <p className={typography.strapline}>My Journey.</p>

        <h2 className={typography.subtitle}>How I became an English teacher</h2>

        <p className={typography.description}>
          Every experience has helped me grow as both a learner and a teacher.
          Here's a brief overview of my professional journey.
        </p>

        <div className={styles.journey}>
          <div className={styles.journey__item}>
            <span className={styles.journey__year}>01</span>

            <h3 className={styles.journey__title}>
              Building My English Skills
            </h3>

            <p className={styles.journey__description}>
              I dedicated years to improving my English through consistent
              practice, real conversations, and continuous learning.
            </p>
          </div>

          <div className={styles.journey__item}>
            <span className={styles.journey__year}>02</span>

            <h3 className={styles.journey__title}>Teaching Experience</h3>

            <p className={styles.journey__description}>
              I started helping students strengthen their communication skills,
              adapting every lesson to their individual goals and learning
              styles.
            </p>
          </div>

          <div className={styles.journey__item}>
            <span className={styles.journey__year}>03</span>

            <h3 className={styles.journey__title}>Continuous Development</h3>

            <p className={styles.journey__description}>
              I continue expanding my teaching techniques and language knowledge
              to provide engaging and effective lessons.
            </p>
          </div>

          <div className={styles.journey__item}>
            <span className={styles.journey__year}>04</span>

            <h3 className={styles.journey__title}>Helping Students Grow</h3>

            <p className={styles.journey__description}>
              Today, my goal is to help students gain confidence, communicate
              naturally, and enjoy learning English at their own pace.
            </p>
          </div>
        </div>
      </section>
      <section className={typography.section}>
        <div className={styles.container}>
          <p className={typography.strapline}>My values.</p>

          <h2 className={typography.subtitle}>
            The principles behind every lesson
          </h2>
        </div>

        <p className={typography.description}>
          Every lesson I teach is guided by a set of values that help create a
          positive, supportive, and effective learning experience for every
          student.
        </p>

        <div className={styles.values}>
          <div className={styles.value}>
            <h3 className={styles.value__title}>Patience</h3>

            <p className={styles.value__description}>
              Everyone learns at a different pace, so I make sure every student
              has the time and support they need to improve with confidence.
            </p>
          </div>

          <div className={styles.value}>
            <h3 className={styles.value__title}>Communication</h3>

            <p className={styles.value__description}>
              I encourage students to speak from day one, creating opportunities
              to practice English in meaningful and practical situations.
            </p>
          </div>

          <div className={styles.value}>
            <h3 className={styles.value__title}>Growth</h3>

            <p className={styles.value__description}>
              Learning is a continuous journey, and every lesson is designed to
              help students make steady progress toward their goals.
            </p>
          </div>

          <div className={styles.value}>
            <h3 className={styles.value__title}>Support</h3>

            <p className={styles.value__description}>
              I strive to create a welcoming environment where students feel
              comfortable asking questions, making mistakes, and celebrating
              their achievements.
            </p>
          </div>
        </div>
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
