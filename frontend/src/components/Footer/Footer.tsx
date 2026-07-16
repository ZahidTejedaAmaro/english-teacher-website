import styles from "./style.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Ivette. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
