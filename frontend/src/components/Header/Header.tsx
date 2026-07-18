import styles from "./style.module.css";
import Navbar from "./Navbar/Navbar";

import { useContext } from "react";

import { LanguageContext } from "../../contexts/LanguageContext";

function Header() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  return (
    <header className={styles.header}>
      <div></div>
      <Navbar />
    </header>
  );
}

export default Header;
