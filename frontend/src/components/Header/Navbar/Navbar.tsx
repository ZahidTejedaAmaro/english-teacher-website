import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { LanguageContext } from "../../../contexts/LanguageContext";

import styles from "./style.module.css";

function Navbar() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { texts } = context;

  return (
    <nav className={styles.nav}>
      <NavLink to="/">{texts.header.home}</NavLink>
      <NavLink to="/about">{texts.header.about}</NavLink>
      <NavLink to="/classes">{texts.header.classes}</NavLink>
      <NavLink to="/book">{texts.header.book}</NavLink>
    </nav>
  );
}

export default Navbar;
