import styles from "./style.module.css";
import expand from "../../../assets/icons/expand.svg";

import { useState } from "react";

function FQA() {
  const [isQuestion, setIsQuestion] = useState<boolean>(false);

  return (
    <button
      onClick={() => setIsQuestion((prev) => !prev)}
      className={styles.question__container}
    >
      <p className={styles.question}>How do I start takin classes</p>
      <img src={expand} alt="" />

      {isQuestion && (
        <p className={styles.anwer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
          sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse
          potenti.
        </p>
      )}
    </button>
  );
}

export default FQA;
