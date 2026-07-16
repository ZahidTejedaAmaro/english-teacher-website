import { useState } from "react";
import { LanguageContext } from "./contexts/LanguageContext";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { es } from "./locales/es";
import { en } from "./locales/en";

function App() {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const locales = { es, en };

  const texts = locales[language];

  return (
    <>
      <LanguageContext.Provider
        value={{
          language,
          setLanguage,
          texts,
        }}
      >
        <Header />
        <Main />
        <Footer />{" "}
      </LanguageContext.Provider>
    </>
  );
}

export default App;
