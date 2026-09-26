import typography from "../../../styles/typography.module.css";
import { useState } from "react";
import CTA from "./CTA/CTA";

import styles from "./style.module.css";
import { Link } from "react-router-dom";
import icon from "../../../../public/favicon.svg";
import scrollArrow from "../../../assets/icons/scrollArrow.svg";

import { esQuestions } from "../../../locales/faq/es";
import { enQuestions } from "../../../locales/faq/en";

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

const students = [
  {
    title: "Kids",
    description: "Fun and engaging English lessons for young learners.",
    backgroundImage: kidsImage,
  },
  {
    title: "Teenagers",
    description: "Build confidence and communication skills.",
    backgroundImage: teenagersImage,
  },
  {
    title: "Adults",
    description: "Practical English lessons adapted to your goals.",
    backgroundImage: adultsImage,
  },
  {
    title: "Exams",
    description:
      "Improve your English for teaching and professional communication.",
    backgroundImage: examsImage,
  },
  {
    title: "Business",
    description: "Build a strong foundation in English.",
    backgroundImage: businessImage,
  },
  {
    title: "Travel",
    description: "Refine your fluency and communicate more naturally.",
    backgroundImage: travelImage,
  },
];

const testimonials = [
  {
    name: "John",
    occupation: "Software Developer",
    testimony: "Great classes!",
    photo: kidsImage,
  },
  {
    name: "Sarah",
    occupation: "Marketing Manager",
    testimony: "I improved my English a lot.",
    photo: adultsImage,
  },
  {
    name: "Mike",
    occupation: "University Student",
    testimony: "Very engaging lessons.",
    photo: teenagersImage,
  },
  {
    name: "Emma",
    occupation: "Business Consultant",
    testimony: "I feel much more confident speaking English.",
    photo: businessImage,
  },
  {
    name: "David",
    occupation: "High School Teacher",
    testimony: "The lessons are engaging and personalized.",
    photo: examsImage,
  },
];

function Home() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeTestimony, setActiveTestimony] = useState<number>(0);

  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts, language } = context;

  const questions = language === "es" ? esQuestions.home : enQuestions.home;

  return (
    <>
      <section className={styles.introSection}>
        <p className={styles.introEyebrow}>ENGLISH CLASSES, YOUR WAY</p>
        <h1 className={styles.introTitle}>
          Learn English with Confidence. Speak with Purpose.
        </h1>
        <h3 className={styles.introDescription}>
          Build real-world English skills through personalized lessons designed
          around your goals, your schedule, and your learning pace.
        </h3>
        <div className={styles.ctaGroup}>
          <Link
            to="/classes"
            className={`${styles.introButton} ${styles.introButtonSecondary}`}
          >
            About our classes
          </Link>
          <Link
            to="#"
            className={`${styles.introButton} ${styles.introButtonPrimary}`}
          >
            Book your class
          </Link>
        </div>
        <p className={styles.scrollText}>
          SCROLL FOR EXPLORE{" "}
          <img src={scrollArrow} className={styles.introArrow} alt="" />
        </p>
      </section>

      <div className={styles.factBlock}>
        <h2 className={styles.factTitle}>
          Learning English opens new horizons
        </h2>

        <div className={styles.factContent}>
          <p className={styles.factDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula
            velit, elementum eu pretium non, fermentum nec nulla. Morbi vitae
            ante consectetur, hendrerit elit ac, vulputate nibh. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Etiam eget convallis mi. Aenean tristique lectus eu
            tincidunt lobortis.
          </p>

          <div className={styles.factCTAContainer}>
            <p className={styles.factCTAText}>Ready for a new adventure?</p>
            <Link to="#" className={styles.factCTAButton}>
              Book your class
            </Link>
          </div>
        </div>
      </div>
      <section className={styles.studentsSection}>
        <p className={styles.sectionEyebrow}>FIND YOUR FIT</p>
        <h2 className={styles.sectionTitle}>Classes for everyone</h2>
        <p className={styles.sectionDescription}>
          No two learners are the same. I understand that every student has
          their own needs and goals. That’s why I offer flexible classes
          tailored to different learning styles, needs, and goals.
        </p>
        {/* <div className={styles.studentsGrid}>
          {students.map((student, index) => (
            <div
              className={`${styles.studentItem} ${
                activeCard === index ? styles.studentItemActive : ""
              }`}
              key={student.title}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              style={{ backgroundImage: `url(${student.backgroundImage})` }}
            >
              <div className={styles.studentItemPreview}>
                <p className={styles.studentItemPreviewTitle}>
                  {student.title}
                </p>
              </div>

              <div className={styles.studentItemExpanded}>
                <p>{student.title}</p>
                <p>{student.description}</p>
              </div>
            </div>
          ))}
        </div> */}
      </section>
      <section className={styles.benefitsSection}>
        <p className={styles.sectionEyebrow}>WHAT TO EXPECT</p>
        <h2 className={styles.sectionTitle}>What will you get?</h2>
        <p className={styles.sectionDescription}>
          Lessons designed around your goals, your schedule, and practical
          English you can use every day.
        </p>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <img className={styles.benefitIcon} src={icon} alt="" />
            <p className={styles.benefitTitle}>Personalized Learning</p>
            <p className={styles.benefitDescription}>
              Every student is unique. I design lessons that match each
              learner's age, goals, learning style, and pace to ensure
              meaningful progress.
            </p>
          </div>
          <div className={styles.benefitItem}>
            <img className={styles.benefitIcon} src={icon} alt="" />
            <p className={styles.benefitTitle}>Personalized Learning</p>
            <p className={styles.benefitDescription}>
              Every student is unique. I design lessons that match each
              learner's age, goals, learning style, and pace to ensure
              meaningful progress.
            </p>
          </div>
          <div className={styles.benefitItem}>
            <img className={styles.benefitIcon} src={icon} alt="" />
            <p className={styles.benefitTitle}>Personalized Learning</p>
            <p className={styles.benefitDescription}>
              Every student is unique. I design lessons that match each
              learner's age, goals, learning style, and pace to ensure
              meaningful progress.
            </p>
          </div>
          <div className={styles.benefitItem}>
            <img className={styles.benefitIcon} src={icon} alt="" />
            <p className={styles.benefitTitle}>Personalized Learning</p>
            <p className={styles.benefitDescription}>
              Every student is unique. I design lessons that match each
              learner's age, goals, learning style, and pace to ensure
              meaningful progress.
            </p>
          </div>
          <div className={styles.benefitItem}>
            <img className={styles.benefitIcon} src={icon} alt="" />
            <p className={styles.benefitTitle}>Personalized Learning</p>
            <p className={styles.benefitDescription}>
              Every student is unique. I design lessons that match each
              learner's age, goals, learning style, and pace to ensure
              meaningful progress.
            </p>
          </div>
          <div className={styles.benefitItem}>
            <img className={styles.benefitIcon} src={icon} alt="" />
            <p className={styles.benefitTitle}>Personalized Learning</p>
            <p className={styles.benefitDescription}>
              Every student is unique. I design lessons that match each
              learner's age, goals, learning style, and pace to ensure
              meaningful progress.
            </p>
          </div>
        </div>
        <Link to="/classes" className={styles.benefitsCTAButton}>
          Explore my classes →
        </Link>
      </section>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <p className={styles.statTitle}>100%</p>
          <p className={styles.statDescription}>COMMITED TO YOUR SUCCESS</p>
        </div>{" "}
        <div className={styles.statItem}>
          <p className={styles.statTitle}>100%</p>
          <p className={styles.statDescription}>COMMITED TO YOUR SUCCESS</p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.statTitle}>100%</p>
          <p className={styles.statDescription}>COMMITED TO YOUR SUCCESS</p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.statTitle}>100%</p>
          <p className={styles.statDescription}>COMMITED TO YOUR SUCCESS</p>
        </div>
      </div>

      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsIntroContainer}>
          {" "}
          <p
            className={`${styles.sectionEyebrow} ${styles.testimonialsEyebrow}`}
          >
            TESTIMONIALS
          </p>
          <h2 className={`${styles.sectionTitle} ${styles.testimonialsTitle}`}>
            Hear what my students have to say
          </h2>
        </div>
        <div className={styles.testimonialContentContainer}>
          <p className={styles.testimonialText}>
            {testimonials[activeTestimony].testimony}
          </p>

          <div className={styles.testimonialFooter}>
            <div className={styles.testimonialAuthor}>
              <img
                className={styles.testimonialPhoto}
                src={testimonials[activeTestimony].photo}
                alt=""
              />

              <div className={styles.testimonialDetails}>
                <p className={styles.testimonialName}>
                  {testimonials[activeTestimony].name}
                </p>

                <p className={styles.testimonialOccupation}>
                  {testimonials[activeTestimony].occupation}
                </p>
              </div>
            </div>
            <div className={styles.testimonialArrowsContainer}>
              <button
                className={styles.testimonialButton}
                onClick={() =>
                  setActiveTestimony((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1,
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
                    prev === testimonials.length - 1 ? 0 : prev + 1,
                  )
                }
              >
                <img
                  className={styles.testimonialButtonIcon}
                  src={rightArrowIcon}
                  alt="Next testimonial"
                />
              </button>{" "}
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export default Home;
