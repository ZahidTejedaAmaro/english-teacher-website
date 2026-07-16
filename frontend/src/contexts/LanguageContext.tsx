import { createContext } from "react";

import type { es } from "../locales/es";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  texts: typeof es;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);
