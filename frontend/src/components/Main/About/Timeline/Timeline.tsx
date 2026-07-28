import { useState } from "react";
import styles from "./style.module.css";

type TimelineItem = {
  year: string;
  label: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  {
    year: "2018",
    label: "Started teaching",
    description:
      "Started helping students improve their English skills through personalized lessons.",
  },
  {
    year: "2020",
    label: "Online classes",
    description:
      "Started teaching online and adapting lessons to different learning styles.",
  },
  {
    year: "2023",
    label: "New methodology",
    description:
      "Focused on practical communication and confidence-building activities.",
  },
  {
    year: "2026",
    label: "Today",
    description: "Continuing to help students achieve their English goals.",
  },
];

function Timeline() {
  const [activeYear, setActiveYear] = useState("2023");

  return (
    <section className={styles.timeline}>
      <h2 className={styles.title}>My journey</h2>

      <div className={styles.flexParent}>
        <div className={styles.inputFlexContainer}>
          {timelineData.map((item) => (
            <div key={item.year}>
              <input
                type="radio"
                name="timeline"
                value={item.year}
                checked={activeYear === item.year}
                onChange={() => setActiveYear(item.year)}
              />

              <div className={styles.dotInfo}>
                <span className={styles.year}>{item.year}</span>

                <span className={styles.label}>{item.label}</span>
              </div>
            </div>
          ))}

          <div className={styles.timelineDescriptionsWrapper}>
            {timelineData.map(
              (item) =>
                activeYear === item.year && (
                  <p key={item.year}>{item.description}</p>
                ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
