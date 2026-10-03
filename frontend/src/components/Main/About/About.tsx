import typography from "../../../styles/typography.module.css";

import expandIcon from "../../../assets/icons/expandIcon.svg";

import styles from "./style.module.css";

import SectionHeader from "../Home/SectionHeader/SectionHeader";

import profileImage from "../../../assets/images/profile.png";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { LanguageContext } from "../../../contexts/LanguageContext";

function About() {
  const context = useContext(LanguageContext);

  const [activeCard, setActiveCard] = useState<number | null>(null);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts, language } = context;

  const { about } = texts;
  const { hero, background } = about;

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroPhotoContainer}>
          <img className={styles.heroPhoto} src={profileImage} alt="" />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <div className={styles.heroTextContainer}>
            <p className={styles.heroText}>{hero.firstParagraph}</p>
            <p className={styles.heroText}>
              <span className={styles.heroBold}>
                {hero.secondParagraph.bold}
              </span>
              {hero.secondParagraph.normal}
            </p>
          </div>
          <div className={styles.heroBottomContainer}>
            <Link to="/book" className={styles.heroButton}>
              Book your class
            </Link>
            <div className={styles.heroAuthorContainer}>
              <p className={styles.heroName}>{hero.name}</p>
              <p className={styles.heroProfession}>{hero.profession}</p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.backgroundSection}>
        <SectionHeader eyebrow={background.eyebrow} title={background.title} />
        <div className={styles.backgroundContent}>
          <div className={styles.backgroundAcademic}>
            <h3 className={styles.backgroundSubtitle}>
              {background.academicTitle}
            </h3>
            <div className={styles.backgroundGrid}>
              {background.academic.map((item) => (
                <div className={styles.backgroundItem}>
                  <p className={styles.backgroundItemTitle}>{item.title}</p>
                  <p className={styles.backgroundItemType}>{item.type}</p>
                  <p className={styles.backgroundItemDescription}>
                    {item.description}
                    <div className={styles.backgroundItemLine}></div>
                    <p className={styles.backgroundItemDate}>{item.date}</p>
                  </p>
                </div>
              ))}{" "}
            </div>
          </div>{" "}
          <div className={styles.backgroundQualifications}>
            <h3 className={styles.backgroundSubtitle}>
              {background.qualificationsTitle}
            </h3>
            <div className={styles.backgroundGrid}>
              {background.qualifications.map((item, index) => (
                <div
                  className={styles.backgroundItem}
                  onClick={() =>
                    setActiveCard(activeCard === index ? null : index)
                  }
                >
                  {" "}
                  <div className={styles.backgroundIntroContainer}>
                    <div className={styles.backgroundIntroText}>
                      <p className={styles.backgroundItemTitle}>{item.title}</p>
                      <p className={styles.backgroundItemType}>{item.type}</p>
                    </div>
                    <img
                      className={`${styles.backgroundIcon} ${
                        activeCard === index
                          ? styles.backgroundIconExpanded
                          : ""
                      }`}
                      src={expandIcon}
                      alt=""
                    />
                  </div>
                  {activeCard === index && (
                    <>
                      <p className={styles.backgroundItemDescription}>
                        {item.description}
                        <div className={styles.backgroundItemLine}></div>
                        <p className={styles.backgroundItemDate}>{item.date}</p>
                      </p>
                    </>
                  )}
                </div>
              ))}{" "}
            </div>
          </div>{" "}
        </div>
      </section>
    </>
  );
}

export default About;
