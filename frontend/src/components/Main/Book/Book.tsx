import styles from "./style.module.css";
import SectionHeader from "../Home/SectionHeader/SectionHeader";
import philosophyImage from "../../../assets/images/profile.png";

import { useContext } from "react";

import { LanguageContext } from "../../../contexts/LanguageContext";

function Book() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts } = context;

  const { book } = texts;

  const { hero, faq, motivation } = book;

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroIntroContainer}>
          <p className={styles.heroEyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroDescription}>{hero.description}</p>
          <a
            className={styles.heroButton}
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Book your class
          </a>
        </div>
        <div className={styles.heroGrid}>
          {hero.items.map((item) => (
            <div className={styles.heroItem}>
              <div className={styles.heroItemNumber}>{item.number}</div>
              <div className={styles.heroItemText}>
                <p className={styles.heroItemTitle}>{item.title}</p>
                <p className={styles.heroItemDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <SectionHeader
          eyebrow={faq.eyebrow}
          title={faq.title}
          description={faq.description}
        />
        <div className={styles.faqGrid}>
          {faq.items.map((item) => (
            <div className={styles.faqItem} key={item.title}>
              <div className={styles.faqItemTitleContainer}>
                <div className={styles.faqItemNumber}>{item.number}</div>
                <p className={styles.faqItemTitle}>{item.title}</p>
              </div>
              <p className={styles.faqItemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.motivationSection}>
        <div className={styles.motivationPhotoContainer}>
          <img
            className={styles.motivationPhoto}
            src={philosophyImage}
            alt=""
          />
        </div>
        <div className={styles.motivationContent}>
          <p className={styles.motivationTitle}>{motivation.title}</p>
          <p className={styles.motivationDescription}>
            {motivation.description}
          </p>
        </div>
      </section>
    </>
  );
}

export default Book;
