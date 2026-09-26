import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";

import { LanguageContext } from "../../../contexts/LanguageContext";

import styles from "./style.module.css";

import hamburgerIcon from "../../../assets/icons/hamburguer.svg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts } = context;

  const closeMenu = () => setIsMenuOpen(false);

  const links = (
    <>
      <NavLink to="/" onClick={closeMenu} className={styles.nav__link}>
        {texts.header.home}
      </NavLink>

      <NavLink to="/about" onClick={closeMenu} className={styles.nav__link}>
        {texts.header.about}
      </NavLink>

      <NavLink to="/classes" onClick={closeMenu} className={styles.nav__link}>
        {texts.header.classes}
      </NavLink>

      <NavLink to="/book" onClick={closeMenu} className={styles.nav__link}>
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
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <img src={hamburgerIcon} alt="" />
        </button>

        {isMenuOpen && <div className={styles.hamburger__menu}>{links}</div>}
      </nav>
    </>
  );
}

export default Navbar;
