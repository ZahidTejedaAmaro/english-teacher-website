import typography from "../../../styles/typography.module.css";

import BackgroundItem from "./Background/Background";

import styles from "./style.module.css";

import SectionHeader from "../Home/SectionHeader/SectionHeader";

import profileImage from "../../../assets/images/profile.png";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { LanguageContext } from "../../../contexts/LanguageContext";

function About() {
  const context = useContext(LanguageContext);

  const [activeAcademic, setActiveAcademic] = useState<number | null>(null);
  const [activeQualification, setActiveQualification] = useState<number | null>(
    null,
  );

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
            {background.academic.map((item, index) => (
              <BackgroundItem
                key={item.title}
                item={item}
                index={index}
                activeCard={activeAcademic}
                setActiveCard={setActiveAcademic}
                mobileCollapse
              />
            ))}
          </div>
          <div className={styles.backgroundQualifications}>
            <h3 className={styles.backgroundSubtitle}>
              {background.qualificationsTitle}
            </h3>
            {background.qualifications.map((item, index) => (
              <BackgroundItem
                key={item.title}
                item={item}
                index={index}
                activeCard={activeQualification}
                setActiveCard={setActiveQualification}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
