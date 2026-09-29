import styles from "./style.module.css";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className={styles.sectionHeader}>
      <p className={styles.eyebrow}>{eyebrow}</p>

      <h2 className={styles.title}>{title}</h2>

      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default SectionHeader;
