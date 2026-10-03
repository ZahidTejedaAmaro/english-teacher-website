import expandIcon from "../../assets/icons/expand.svg";
import styles from "./style.module.css";

interface BackgroundItemProps {
  item: {
    title: string;
    type: string;
    description: string;
    date: string;
  };
  index: number;
  activeCard: number | null;
  setActiveCard: (index: number | null) => void;
}

function BackgroundItem({
  item,
  index,
  activeCard,
  setActiveCard,
}: BackgroundItemProps) {
  const isExpanded = activeCard === index;

  return (
    <div
      className={styles.backgroundItem}
      onClick={() => setActiveCard(isExpanded ? null : index)}
    >
      <div className={styles.backgroundIntroContainer}>
        <div className={styles.backgroundIntroText}>
          <p className={styles.backgroundItemTitle}>{item.title}</p>
          <p className={styles.backgroundItemType}>{item.type}</p>
        </div>

        <img
          className={`${styles.backgroundIcon} ${
            isExpanded ? styles.backgroundIconExpanded : ""
          }`}
          src={expandIcon}
          alt=""
        />
      </div>

      {isExpanded && (
        <>
          <p className={styles.backgroundItemDescription}>{item.description}</p>

          <div className={styles.backgroundItemLine}></div>

          <p className={styles.backgroundItemDate}>{item.date}</p>
        </>
      )}
    </div>
  );
}

export default BackgroundItem;
