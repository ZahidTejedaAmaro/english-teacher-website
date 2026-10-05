import { Routes, Route } from "react-router-dom";
import styles from "./style.module.css";

import Home from "./Home/Home";
import About from "./About/About";
import Classes from "./Classes/Classes";
import Book from "./Book/Book";

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.main__content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </div>
    </main>
  );
}

export default Main;
