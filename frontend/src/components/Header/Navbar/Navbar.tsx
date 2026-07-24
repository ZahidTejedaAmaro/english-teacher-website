import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";

import { LanguageContext } from "../../../contexts/LanguageContext";

import styles from "./style.module.css";

import hamburgerIcon from "../../../assets/icons/hamburguer.svg";

function Navbar() {
  const [isHamburger, setIsHamburger] = useState(false);

  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts } = context;

  const links = (
    <>
      <NavLink to="/" onClick={() => setIsHamburger(false)}>
        {texts.header.home}
      </NavLink>

      <NavLink to="/about" onClick={() => setIsHamburger(false)}>
        {texts.header.about}
      </NavLink>

      <NavLink to="/classes" onClick={() => setIsHamburger(false)}>
        {texts.header.classes}
      </NavLink>

      <NavLink to="/book" onClick={() => setIsHamburger(false)}>
        {texts.header.book}
      </NavLink>
    </>
  );

  return (
    <>
      <nav className={`${styles.nav} ${styles.nav_hide}`}>{links}</nav>

      <nav className={styles.hamburger}>
        <button
          className={styles.hamburger__button}
          onClick={() => setIsHamburger((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <img src={hamburgerIcon} alt="" />
        </button>

        {isHamburger && <div className={styles.hamburger__menu}>{links}</div>}
      </nav>
    </>
  );
}

export default Navbar;
