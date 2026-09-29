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
      <NavLink to="/" onClick={closeMenu} className={styles.navLink}>
        {texts.header.home}
      </NavLink>

      <NavLink to="/about" onClick={closeMenu} className={styles.navLink}>
        {texts.header.about}
      </NavLink>

      <NavLink to="/classes" onClick={closeMenu} className={styles.navLink}>
        {texts.header.classes}
      </NavLink>

      <NavLink to="/book" onClick={closeMenu} className={styles.navLink}>
        {texts.header.book}
      </NavLink>
    </>
  );

  return (
    <>
      <nav className={`${styles.nav} ${styles.navHide}`}>{links}</nav>

      <nav className={styles.navbarMobile}>
        <button
          className={styles.navbarMenuButton}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <img src={hamburgerIcon} alt="" />
        </button>

        {isMenuOpen && (
          <>
            <div className={styles.navbarOverlay} onClick={closeMenu} />

            <div className={styles.navbarMenu}>{links}</div>
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;
