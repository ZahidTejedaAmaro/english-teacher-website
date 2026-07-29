import styles from "./style.module.css";
import typography from "../../../styles/typography.module.css";

import { useState, useEffect } from "react";

// import { es } from "../../../locales/es";
// import { en } from "../../../locales/en";

import { esQuestions } from "../../../locales/faq/es";
import { enQuestions } from "../../../locales/faq/en";

import FAQ from "../FAQ/FAQ";

import { useContext } from "react";

import { LanguageContext } from "../../../contexts/LanguageContext";

function Classes() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts, language } = context;

  // const text = language === "es" ? es.classes : en.classes;

  // const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const questions = language === "es" ? esQuestions.home : enQuestions.home;

  const [selectedStudent, setSelectedStudent] = useState<
    keyof typeof texts.classes.students | null
  >(null);

  function handleClosePopup() {
    setSelectedStudent(null);
  }

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && selectedStudent) {
        handleClosePopup();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedStudent]);

  return (
    <section id="classes" className={styles.classes}>
      <section className={typography.section}>
        <p className={typography.strapline}>Classes.</p>

        <h2 className={typography.subtitle}>Who cant take my classes?</h2>
        <p className={typography.description}>
          English nowadays is a great tool to or daily lives. Thats why, I offer
          diferent types of English classes according to the neccesities of the
          student/s:
        </p>
        <div className={styles.types}>
          <div className={styles.type}>
            <p className={styles.type__title}>Kids</p>
            <div
              className={styles.type__overlay}
              onClick={() => setSelectedStudent("kids")}
            >
              <p className={styles.type__knowMore}>Click for more...</p>
            </div>
          </div>
          <div className={styles.type}>
            <p className={styles.type__title}>Teenagers</p>
            <div
              className={styles.type__overlay}
              onClick={() => setSelectedStudent("teenagers")}
            >
              <p className={styles.type__knowMore}>Click for more...</p>
            </div>
          </div>
          <div className={styles.type}>
            <p className={styles.type__title}>Adults</p>
            <div
              className={styles.type__overlay}
              onClick={() => setSelectedStudent("adults")}
            >
              <p className={styles.type__knowMore}>Click for more...</p>
            </div>
          </div>
          <div className={styles.type}>
            <p className={styles.type__title}>Exam preparation</p>
            <div
              className={styles.type__overlay}
              onClick={() => setSelectedStudent("exams")}
            >
              <p className={styles.type__knowMore}>Click for more...</p>
            </div>
          </div>
          <div className={styles.type}>
            <p className={styles.type__title}>Business English</p>
            <div
              className={styles.type__overlay}
              onClick={() => setSelectedStudent("business")}
            >
              <p className={styles.type__knowMore}>Click for more...</p>
            </div>
          </div>{" "}
          <div className={styles.type}>
            <p className={styles.type__title}>Travel English</p>
            <div
              className={styles.type__overlay}
              onClick={() => setSelectedStudent("travel")}
            >
              <p className={styles.type__knowMore}>Click for more...</p>
            </div>
          </div>
        </div>

        <section className={typography.section}>
          <p className={typography.strapline}>Teaching methodology.</p>

          <h2 className={typography.subtitle}>How do I teach?</h2>

          <p className={typography.description}>
            My teaching approach focuses on creating personalized and engaging
            lessons where students can improve their English skills through
            practical activities, communication, and continuous progress.
          </p>

          <div className={styles.methodologies}>
            <div className={styles.methodology}>
              <h3 className={styles.methodology__title}>
                Conversational Practice
              </h3>
              <p className={styles.methodology__description}>
                Build confidence through real-life conversations, role-playing,
                and interactive speaking activities.
              </p>
            </div>

            <div className={styles.methodology}>
              <h3 className={styles.methodology__title}>
                Personalized Learning
              </h3>
              <p className={styles.methodology__description}>
                Lessons are adapted to your goals, interests, and current
                English level to maximize your progress.
              </p>
            </div>

            <div className={styles.methodology}>
              <h3 className={styles.methodology__title}>
                Practical Activities
              </h3>
              <p className={styles.methodology__description}>
                Practice with exercises based on everyday situations, travel,
                work, and common communication scenarios.
              </p>
            </div>

            <div className={styles.methodology}>
              <h3 className={styles.methodology__title}>Continuous Feedback</h3>
              <p className={styles.methodology__description}>
                Receive regular feedback and guidance to identify your strengths
                and improve step by step.
              </p>
            </div>
          </div>
        </section>
        <section className={typography.section}>
          <div className={styles.container}>
            <p className={typography.strapline}>Learning outcomes.</p>

            <h2 className={typography.subtitle}>What will you learn?</h2>
          </div>

          <p className={typography.description}>
            Develop the English skills you need to communicate confidently in
            everyday, academic, and professional situations through practical
            and personalized lessons.
          </p>

          <div className={styles.skills}>
            <div className={styles.skill}>
              <h3 className={styles.skill__title}>Speaking</h3>

              <p className={styles.skill__description}>
                Build confidence by practicing real conversations,
                pronunciation, and everyday communication.
              </p>
            </div>

            <div className={styles.skill}>
              <h3 className={styles.skill__title}>Listening</h3>

              <p className={styles.skill__description}>
                Improve your understanding of native speakers through
                conversations, videos, and practical listening exercises.
              </p>
            </div>

            <div className={styles.skill}>
              <h3 className={styles.skill__title}>Reading</h3>

              <p className={styles.skill__description}>
                Read articles, stories, and professional content while expanding
                your vocabulary and comprehension.
              </p>
            </div>

            <div className={styles.skill}>
              <h3 className={styles.skill__title}>Writing</h3>

              <p className={styles.skill__description}>
                Learn to write emails, messages, essays, and other texts with
                greater accuracy and confidence.
              </p>
            </div>
          </div>
        </section>

        <FAQ questions={questions} />
      </section>

      {selectedStudent && (
        <div className={styles.popup} onClick={handleClosePopup}>
          <div
            className={styles.popup__container}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className={styles.popup__closeButton}
              onClick={handleClosePopup}
            ></button>
            <p className={styles.popup__title}>
              {texts.classes.students[selectedStudent].title}
            </p>
            <p className={styles.popup__text}>
              {" "}
              {texts.classes.students[selectedStudent].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Classes;
