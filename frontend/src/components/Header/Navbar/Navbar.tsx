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
      <a href="#">{texts.header.home}</a>
      <a href="#">About</a>
      <a href="#">Contacto</a>
    </nav>
  );
}

export default Navbar;
