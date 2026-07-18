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
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/classes">Classes</NavLink>
      <NavLink to="/book">Book</NavLink>
    </nav>
  );
}

export default Navbar;
