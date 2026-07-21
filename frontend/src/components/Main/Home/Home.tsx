import styles from "./style.module.css";
import { Link } from "react-router-dom";
import icon from "../../../../public/favicon.svg";
import Testimonials from "./Testimonials/Testimonials";
import FQA from "../FQA/FQA";

import { useContext } from "react";

import { LanguageContext } from "../../../contexts/LanguageContext";

function Home() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside Langu ageContext.Provider");
  }

  const { texts } = context;

  return (
    <section id="home" className={styles.home}>
      <section className={`${styles.section} ${styles.section_introduction}`}>
        <p className={styles.strapline}>{texts.home.introduction.strapline}</p>

        <h1 className={styles.title}>{texts.home.introduction.title}</h1>

        <p className={styles.description}>
          {texts.home.introduction.description}
        </p>

        <div className={styles.buttons}>
          <Link to="/classes" className={styles.button}>
            {texts.home.introduction.aboutClasses}
          </Link>

          <Link to="/book" className={styles.button}>
            {texts.home.introduction.bookClass}
          </Link>
        </div>

        {/* <p className={styles.discover}>{texts.home.introduction.discover}</p> */}
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.strapline}>{texts.home.why.strapline}</p>

          <h2 className={styles.subtitle}>{texts.home.why.title}</h2>
        </div>

        <p className={styles.description}>{texts.home.why.description}</p>

        <div className={styles.reasons}>
          <div className={styles.reason}>
            <img className={styles.reason__icon} src={icon} alt="" />

            <h4 className={styles.reason__title}>
              {texts.home.why.reasons.personalized.title}
            </h4>

            <p className={styles.reason__description}>
              {texts.home.why.reasons.personalized.description}
            </p>
          </div>

          <div className={styles.reason}>
            <img className={styles.reason__icon} src={icon} alt="" />

            <h4 className={styles.reason__title}>
              {texts.home.why.reasons.pace.title}
            </h4>

            <p className={styles.reason__description}>
              {texts.home.why.reasons.pace.description}
            </p>
          </div>

          <div className={styles.reason}>
            <img className={styles.reason__icon} src={icon} alt="" />

            <h4 className={styles.reason__title}>
              {texts.home.why.reasons.practical.title}
            </h4>

            <p className={styles.reason__description}>
              {texts.home.why.reasons.practical.description}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.strapline}>{texts.home.process.strapline}</p>

          <h2 className={styles.subtitle}>{texts.home.process.title}</h2>
        </div>

        <p className={styles.description}>{texts.home.process.description}</p>

        <div className={styles.process}>
          <div className={styles.process__step}>
            <div className={styles.process__number}>1</div>

            <h3 className={styles.process__title}>Contact Me</h3>

            <p className={styles.process__text}>
              Tell me about your goals and availability.
            </p>
          </div>

          <div className={styles.process__line}></div>

          <div className={styles.process__step}>
            <div className={styles.process__number}>2</div>

            <h3 className={styles.process__title}>Free Consultation</h3>

            <p className={styles.process__text}>
              We'll discuss your English level and objectives.
            </p>
          </div>

          <div className={styles.process__line}></div>

          <div className={styles.process__step}>
            <div className={styles.process__number}>3</div>

            <h3 className={styles.process__title}>Learning Plan</h3>

            <p className={styles.process__text}>
              I'll prepare a personalized learning plan for you.
            </p>
          </div>

          <div className={styles.process__line}></div>

          <div className={styles.process__step}>
            <div className={styles.process__number}>4</div>

            <h3 className={styles.process__title}>Book Your Classes</h3>

            <p className={styles.process__text}>
              Choose the days and times that fit your schedule.
            </p>
          </div>

          <div className={styles.process__line}></div>

          <div className={styles.process__step}>
            <div className={styles.process__number}>5</div>

            <h3 className={styles.process__title}>Start Learning</h3>

            <p className={styles.process__text}>
              Begin improving your English with personalized lessons.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.strapline}>
            {texts.home.testimonials.strapline}
          </p>

          <h2 className={styles.subtitle}>{texts.home.testimonials.title}</h2>
        </div>

        <p className={styles.description}>
          {texts.home.testimonials.description}
        </p>

        <Testimonials />
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.strapline}>{texts.home.faq.strapline}</p>

          <h2 className={styles.subtitle}>{texts.home.faq.title}</h2>
        </div>

        <FQA />
      </section>
    </section>
  );
}

export default Home;
