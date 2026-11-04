import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { readPreference, savePreference } from "./utils";

export type Language = "en" | "fr";
type LanguageValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (en: string, fr: string) => string;
};
const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() =>
    readPreference("portfolio-language", "en") === "fr" ? "fr" : "en",
  );
  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "en"
        ? "Reda El Ferrasi — AI, Data & Full Stack"
        : "Reda El Ferrasi — IA, Data & Full Stack";
    savePreference("portfolio-language", language);
  }, [language]);
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: (en, fr) => (language === "en" ? en : fr),
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("LanguageProvider is required");
  return value;
}
