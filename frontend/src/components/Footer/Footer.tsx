import styles from "./style.module.css";
import scrollIcon from "../../assets/icons/scrollArrow.svg";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerIntro}>
          <p className={styles.footerPhrase}>Learn English with confidence</p>

          <button
            className={styles.backToTop}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img className={styles.scrollIcon} src={scrollIcon} alt="" />
            BACK TO TOP
          </button>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linksGroup}>
            <p className={styles.linksTitle}>Explore</p>

            <Link className={styles.link} to="/">
              Home
            </Link>

            <Link className={styles.link} to="/about">
              About
            </Link>

            <Link className={styles.link} to="/classes">
              Classes
            </Link>

            <Link className={styles.link} to="/book">
              Book
            </Link>
          </div>

          <div className={styles.linksGroup}>
            <p className={styles.linksTitle}>Social</p>

            <a className={styles.link} href="">
              LinkedIn
            </a>

            <a className={styles.link} href="">
              Facebook
            </a>

            <a className={styles.link} href="">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerDecorativeLine}></div>

        <p className={styles.footerCopyright}>
          &copy; {new Date().getFullYear()} Ivette. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
