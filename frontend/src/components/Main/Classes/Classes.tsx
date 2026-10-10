import styles from "./style.module.css";

import SectionHeader from "../Home/SectionHeader/SectionHeader";
import CTA from "../CTA/CTA";

import questionIcon from "../../../assets/hero.png";
import expandIcon from "../../../assets/icons/expandIcon.svg";

import { useState } from "react";

// import { es } from "../../../locales/es";
// import { en } from "../../../locales/en";

import { useContext } from "react";

import { LanguageContext } from "../../../contexts/LanguageContext";

function Classes() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts } = context;

  const { classes } = texts;

  const { hero, stats, formats, methodology, faq } = classes;

  const [activeStudent, setActiveStudent] = useState<number>(0);
  const [activeMethodology, setActiveMethodology] = useState<number>(0);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [isQuestionActive, setIsQuestionActive] = useState<number | null>(null);

  const [isCardRevealed, setIsCardRevealed] = useState<number | null>(null);

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

            <div className={styles.heroTextContainer}>
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
      <div className={styles.statsContainer}>
        {stats.items.map((stat) => (
          <div className={styles.statItem}>
            <p className={styles.statTitle}>{stat.title}</p>
            <p className={styles.statDescription}>{stat.description}</p>
          </div>
        ))}
      </div>
      <section className={styles.formatsSection}>
        <SectionHeader
          eyebrow={formats.eyebrow}
          title={formats.title}
          description={formats.description}
        />
        <div className={styles.formatsGrid}>
          {formats.items.map((item, index) => (
            <div
              key={item.title}
              className={`${styles.formatsItem} ${
                isCardRevealed === index ? styles.formatsItemRevealed : ""
              }`}
            >
              {isCardRevealed === index ? (
                <div
                  className={styles.formatsItemExpanded}
                  onClick={() => setIsCardRevealed(null)}
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className={styles.formatsItemExpandedContent}>
                    <p className={styles.formatsItemExpandedTitle}>
                      {item.expandedTitle}
                    </p>
                    <p className={styles.formatsItemExpandedDescription}>
                      {item.expandedDescription}
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    className={styles.formatsItemImage}
                    src={item.image}
                    alt=""
                  />

                  <div className={styles.formatsItemContainer}>
                    <p className={styles.formatsItemTitle}>{item.title}</p>

                    <div className={styles.formatsItemRow}>
                      <p className={styles.formatsItemText}>16:00 - 21:00</p>
                      <p className={styles.formatsItemText}>Mon – Fri</p>
                    </div>

                    <div className={styles.formatsItemRow}>
                      <p className={styles.formatsItemText}>08:00 - 16:00</p>
                      <p className={styles.formatsItemText}>Sat – Sun</p>
                    </div>

                    <div className={styles.formatsItemRow}>
                      <p className={styles.formatsItemText}>{item.modality}</p>
                    </div>

                    <div className={styles.formatsItemRow}>
                      <p className={styles.formatsItemText}>{item.students}</p>

                      <p
                        className={`${styles.formatsItemText} ${styles.formatsItemDetails}`}
                        onClick={() => setIsCardRevealed(index)}
                      >
                        Ver detalles
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className={styles.methodologySection}>
        <SectionHeader
          eyebrow={methodology.eyebrow}
          title={methodology.title}
          description={methodology.description}
        />
        <div className={styles.methodologyContent}>
          <div className={styles.methodologyButtons}>
            {methodology.items.map((item, index) => (
              <button
                onClick={() => setActiveMethodology(index)}
                className={`${styles.methodologyButton} ${
                  activeMethodology === index
                    ? styles.methodologyButtonActive
                    : ""
                }`}
              >
                {item.button}
              </button>
            ))}
          </div>
          <div className={styles.methodologyBottomContainer}>
            <div className={styles.methodologyInformation}>
              <p className={styles.methodologyInformationTitle}>
                {methodology.items[activeMethodology].title}
              </p>
              <div className={styles.methodologyInformationText}>
                <p className={styles.methodologyInformationParagraph}>
                  {methodology.items[activeMethodology].firstParagraph}
                </p>
                <p className={styles.methodologyInformationParagraph}>
                  {methodology.items[activeMethodology].secondParagraph}
                </p>
              </div>
            </div>
            <img
              className={styles.methodologyPhoto}
              src={methodology.items[activeMethodology].image}
              alt=""
            />
          </div>
        </div>
      </section>
      <section className={styles.faqSection}>
        <SectionHeader
          eyebrow={faq.eyebrow}
          title={faq.title}
          description={faq.description}
        />
        <div className={styles.faqContent}>
          <div className={styles.faqButtons}>
            <p className={styles.faqButtonsTitle}>{faq.buttonsTitle}</p>
            {faq.items.map((item, index) => (
              <button
                className={`${styles.faqButton} ${
                  activeQuestion === index ? styles.faqButtonActive : ""
                }`}
                onClick={() => setActiveQuestion(index)}
              >
                {item.button}
              </button>
            ))}
          </div>
          <div className={styles.faqQuestions}>
            {faq.items[activeQuestion].questions.map((item, index) => (
              <div
                key={item.question}
                className={styles.faqQuestion}
                onClick={() =>
                  setIsQuestionActive(isQuestionActive === index ? null : index)
                }
              >
                <div className={styles.faqQuestionUpperContainer}>
                  <div className={styles.faqQuestionLeftContainer}>
                    <img
                      className={styles.faqQuestionIcon}
                      src={questionIcon}
                      alt=""
                    />{" "}
                    <div className={styles.faqQuestionContainerSpecial}>
                      <p className={styles.faqQuestionTitle}>{item.question}</p>
                      {isQuestionActive === index && (
                        <p className={styles.faqQuestionAnswer}>
                          {item.answer}
                        </p>
                      )}
                    </div>
                  </div>
                  <img
                    className={`${styles.faqQuestionExpandIcon} ${
                      isQuestionActive === index
                        ? styles.faqQuestionExpandIconActive
                        : ""
                    }`}
                    src={expandIcon}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export default Classes;
