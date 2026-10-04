import typography from "../../../styles/typography.module.css";
import philosophyImage from "../../../assets/images/profile.png";

import BackgroundItem from "./Background/Background";
import CTA from "../CTA/CTA";
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
  const { hero, background, philosophy, values, motivation } = about;

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
          <div className={styles.backgroundContainer}>
            <h3 className={styles.backgroundSubtitle}>
              {background.academicTitle}
            </h3>
            <div className={styles.backgroundGrid}>
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
          </div>
          <div className={styles.backgroundContainer}>
            <h3 className={styles.backgroundSubtitle}>
              {background.qualificationsTitle}
            </h3>
            <div className={styles.backgroundGrid}>
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
        </div>
      </section>
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContent}>
          <p className={styles.philosophyEyebrow}>{philosophy.eyebrow}</p>
          <h2 className={styles.philosophyTitle}>{philosophy.title}</h2>
          <div className={styles.philosophyTextContainer}>
            <p className={styles.philosophyText}>{philosophy.firstParagraph}</p>
            <p className={styles.philosophyText}>
              {philosophy.secondParagraph}
            </p>
          </div>
          <Link to="/classes" className={styles.philosophyButton}>
            Explore my classes →
          </Link>
        </div>
        <div className={styles.philosophyPhotoContainer}>
          <img
            className={styles.philosophyPhoto}
            src={philosophyImage}
            alt=""
          />
        </div>
      </section>
      <section className={styles.valuesSection}>
        <SectionHeader
          eyebrow={values.eyebrow}
          title={values.title}
          description={values.description}
        />
        <div className={styles.valuesGrid}>
          {values.items.map((item) => (
            <div className={styles.valuesItem}>
              <img className={styles.valueIcon} src={item.icon} alt="" />
              <p className={styles.valueTitle}>{item.title}</p>
              <p className={styles.valueDescription}>{item.description}</p>
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
      <CTA />
    </>
  );
}

export default About;
