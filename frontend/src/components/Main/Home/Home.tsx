import typography from "../../../styles/typography.module.css";

import { useState } from "react";

import CTA from "./CTA/CTA";

import SectionHeader from "./SectionHeader/SectionHeader";

import styles from "./style.module.css";

import { Link } from "react-router-dom";

import icon from "../../../../public/favicon.svg";

import scrollArrow from "../../../assets/icons/scrollArrow.svg";

import { useContext } from "react";

import { LanguageContext } from "../../../contexts/LanguageContext";

import kidsImage from "../../../assets/images/studentsSection/kids.jpg";

import adultsImage from "../../../assets/images/studentsSection/adults.jpg";

import teenagersImage from "../../../assets/images/studentsSection/teenagers.jpg";

import businessImage from "../../../assets/images/studentsSection/business.jpg";

import examsImage from "../../../assets/images/studentsSection/exams.jpg";

import travelImage from "../../../assets/images/studentsSection/travel.jpg";

import rightArrowIcon from "../../../assets/icons/rightArrowIcon.svg";

import leftArrowIcon from "../../../assets/icons/leftArrowIcon.svg";

function Home() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const [activeTestimony, setActiveTestimony] = useState<number>(0);

  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts } = context;

  const { home } = texts;

  const { hero, fact, students, benefits, stats, testimonials } = home;

  const testimonialPhotos = [
    kidsImage,
    adultsImage,
    teenagersImage,
    businessImage,
    examsImage,
  ];

  return (
    <>
      <section className={styles.heroSection}>
        <p className={styles.heroEyebrow}>HOLA COMO ESTAS</p>

        <h1 className={styles.heroTitle}>{hero.title}</h1>

        <h3 className={styles.heroDescription}>{hero.description}</h3>

        <div className={styles.heroCtaGroup}>
          <Link
            to="/classes"
            className={`${styles.heroButton} ${styles.heroButtonSecondary}`}
          >
            {hero.aboutClasses}
          </Link>

          <Link
            to="#"
            className={`${styles.heroButton} ${styles.heroButtonPrimary}`}
          >
            {hero.bookClass}
          </Link>
        </div>

        <p className={styles.heroScrollText}>
          {hero.scroll}

          <img src={scrollArrow} className={styles.heroArrow} alt="" />
        </p>
      </section>

      <div className={styles.factSection}>
        <h2 className={styles.factTitle}>{fact.title}</h2>

        <div className={styles.factContent}>
          <p className={styles.factDescription}>{fact.description}</p>

          <div className={styles.factCTA}>
            <p className={styles.factCTAText}>{fact.ctaText}</p>

            <Link to="#" className={styles.factCTAButton}>
              {fact.ctaButton}
            </Link>
          </div>
        </div>
      </div>

      <section className={styles.studentsSection}>
        <SectionHeader
          eyebrow={students.eyebrow}
          title={students.title}
          description={students.description}
        />
        <div className={styles.studentsGrid}>
          {students.items.map((student, index) => (
            <article
              className={`${styles.studentItem} ${
                activeCard === index ? styles.studentItemActive : ""
              }`}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              style={
                activeCard === index
                  ? {}
                  : { backgroundImage: `url(${student.image})` }
              }
            >
              {activeCard !== index && (
                <h3 className={styles.studentMainTitle}>{student.title}</h3>
              )}

              {activeCard === index && (
                <>
                  <div className={styles.studentContent}>
                    <span className={styles.studentKeyword}>
                      {student.keywords}
                    </span>

                    <h3 className={styles.studentTitle}>{student.title}</h3>

                    <p className={styles.studentDescription}>
                      {student.description}
                    </p>
                  </div>

                  <img
                    className={styles.studentImage}
                    src={student.image}
                    alt=""
                  />
                </>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <SectionHeader
          eyebrow={benefits.eyebrow}
          title={benefits.title}
          description={benefits.description}
        />

        <div className={styles.benefitsGrid}>
          {benefits.items.map((benefit) => (
            <div className={styles.benefitItem} key={benefit.title}>
              <img className={styles.benefitIcon} src={icon} alt="" />

              <p className={styles.benefitTitle}>{benefit.title}</p>

              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>

        <Link to="/classes" className={styles.benefitsCTAButton}>
          {benefits.cta}
        </Link>
      </section>

      <div className={styles.statsContainer}>
        {stats.items.map((stat) => (
          <div className={styles.statItem}>
            <p className={styles.statTitle}>{stat.title}</p>
            <p className={styles.statDescription}>{stat.description}</p>
          </div>
        ))}
      </div>

      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsHeader}>
          <p
            className={`${styles.sectionEyebrow} ${styles.testimonialsEyebrow}`}
          >
            {testimonials.eyebrow}
          </p>

          <h2 className={`${styles.sectionTitle} ${styles.testimonialsTitle}`}>
            {testimonials.title}
          </h2>
        </div>

        <div className={styles.testimonialContent}>
          <p className={styles.testimonialText}>
            {testimonials.items[activeTestimony].testimony}
          </p>

          <div className={styles.testimonialFooter}>
            <div className={styles.testimonialAuthor}>
              <img
                className={styles.testimonialPhoto}
                src={testimonialPhotos[activeTestimony]}
                alt=""
              />

              <div className={styles.testimonialDetails}>
                <p className={styles.testimonialName}>
                  {testimonials.items[activeTestimony].name}
                </p>

                <p className={styles.testimonialOccupation}>
                  {testimonials.items[activeTestimony].occupation}
                </p>
              </div>
            </div>

            <div className={styles.testimonialControls}>
              <button
                className={styles.testimonialButton}
                onClick={() =>
                  setActiveTestimony((prev) =>
                    prev === 0 ? testimonials.items.length - 1 : prev - 1,
                  )
                }
              >
                <img
                  className={styles.testimonialButtonIcon}
                  src={leftArrowIcon}
                  alt="Previous testimonial"
                />
              </button>

              <button
                className={styles.testimonialButton}
                onClick={() =>
                  setActiveTestimony((prev) =>
                    prev === testimonials.items.length - 1 ? 0 : prev + 1,
                  )
                }
              >
                <img
                  className={styles.testimonialButtonIcon}
                  src={rightArrowIcon}
                  alt="Next testimonial"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default Home;
