import { useEffect, useState } from "react";

import expandIcon from "../../../../assets/icons/expandIcon.svg";
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
  mobileCollapse?: boolean;
}

function BackgroundItem({
  item,
  index,
  activeCard,
  setActiveCard,
  mobileCollapse = false,
}: BackgroundItemProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");

    const handleChange = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const isExpanded = mobileCollapse
    ? !isMobile || activeCard === index
    : activeCard === index;

  const handleClick = () => {
    if (mobileCollapse && !isMobile) return;

    setActiveCard(isExpanded ? null : index);
  };

  return (
    <div className={styles.backgroundItem} onClick={handleClick}>
      <div className={styles.backgroundIntroContainer}>
        <div className={styles.backgroundIntroText}>
          <p className={styles.backgroundItemTitle}>{item.title}</p>
          <p className={styles.backgroundItemType}>{item.type}</p>
        </div>

        {(!mobileCollapse || isMobile) && (
          <img
            className={`${styles.backgroundIcon} ${
              isExpanded ? styles.backgroundIconExpanded : ""
            }`}
            src={expandIcon}
            alt=""
          />
        )}
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
