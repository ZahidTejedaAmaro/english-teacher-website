import styles from "./style.module.css";
import typography from "../../../styles/typography.module.css";

import { useState, useEffect } from "react";

import { es } from "../../../locales/es";
import { en } from "../../../locales/en";

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
              <p></p>
            </div>
            <div className={styles.methodology}>
              <p></p>
            </div>
            <div className={styles.methodology}>
              <p></p>
            </div>
            <div className={styles.methodology}>
              <p></p>
            </div>
          </div>
        </section>
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
