import { Link } from "react-router-dom";
import styles from "./CTA.module.css";

function CTA() {
  return (
    <section className={styles.cta}>
      <p className={styles.ctaText}>
        Ready to get started? Your English journey starts here.
      </p>

      <Link className={styles.ctaButton} to="/book">
        Book a free class
      </Link>
    </section>
  );
}

export default CTA;
