import styles from "./style.module.css";
import expand from "../../../assets/icons/expand.svg";

import { useState } from "react";

type Question = {
  question: string;
  answer: string;
};

type FAQProps = {
  questions: Question[];
};

function FAQ({ questions }: FAQProps) {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  return (
    <div className={styles.faq}>
      {questions.map((item, index) => (
        <div className={styles.item}>
          <button
            key={index}
            onClick={() =>
              setActiveQuestion((prev) => (prev === index ? null : index))
            }
            className={styles.container}
          >
            <p className={styles.question}>{item.question}</p>

            <img src={expand} alt="" />

            {activeQuestion === index && (
              <p className={styles.answer}>{item.answer}</p>
            )}
          </button>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
