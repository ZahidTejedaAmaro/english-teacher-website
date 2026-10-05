import styles from "./style.module.css";
import typography from "../../../styles/typography.module.css";
import SectionHeader from "../Home/SectionHeader/SectionHeader";

import { useState, useEffect } from "react";

// import { es } from "../../../locales/es";
// import { en } from "../../../locales/en";

import { esQuestions } from "../../../locales/faq/es";
import { enQuestions } from "../../../locales/faq/en";

import { useContext } from "react";

import { LanguageContext } from "../../../contexts/LanguageContext";

function Classes() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts } = context;

  const { classes } = texts;

  const { hero } = classes;

  //   interface HeroItem {
  //     title: string;
  //     description: string;
  //   }

  const [activeStudent, setActiveStudent] = useState<number>(0);

  return (
    <>
      <section className={styles.heroSection}>
        <SectionHeader
          eyebrow={hero.eyebrow}
          title={hero.title}
          description={hero.description}
        />

        <div className={styles.heroContent}>
          <div className={styles.heroButtons}>
            <p className={styles.heroButtonsTitle}>{hero.buttonsTitle}</p>
            <div className={styles.heroGrid}>
              {hero.items.map((item, index) => (
                <p
                  key={item.title}
                  className={styles.heroButton}
                  onClick={() => setActiveStudent(index)}
                >
                  {item.title}
                </p>
              ))}
            </div>
          </div>

          <div className={styles.heroInformation}>
            <img
              className={styles.heroPhoto}
              src={hero.items[activeStudent].image}
              alt=""
            />

            <div className={styles.heroText}>
              <p className={styles.heroTextTitle}>
                {hero.items[activeStudent].title}
              </p>
              <p className={styles.heroTextDescription}>
                {hero.items[activeStudent].description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Classes;
