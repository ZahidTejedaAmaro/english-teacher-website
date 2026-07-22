import styles from "./style.module.css";
import Navbar from "./Navbar/Navbar";
import mexicanFlag from "../../assets/icons/mexican-flag.svg";
import usFlag from "../../assets/icons/us-flag.svg";

import { useContext } from "react";

import { LanguageContext } from "../../contexts/LanguageContext";

function Header() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Navbar must be inside LanguageContext.Provider");
  }

  const { language, setLanguage } = context;

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <button
          className={styles.button}
          onClick={() =>
            language === "es" ? setLanguage("en") : setLanguage("es")
          }
        >
          <img
            className={styles.flag}
            src={language === "es" ? usFlag : mexicanFlag}
            alt=""
          />
        </button>

        <Navbar />
      </div>
    </header>
  );
}

export default Header;
