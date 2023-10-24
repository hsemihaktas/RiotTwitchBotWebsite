import React , { useState }from "react";
import Navbar from "./components/navbar";
import About from "./components/about"
import Commands from "./components/command"
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslation from "./locales/en.json";
import trTranslation from "./locales/tr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    tr: {
      translation: trTranslation,
    },
  },
  lng: "tr",
  fallbackLng: "tr",
  interpolation: {
    escapeValue: false,
  },
});
function App() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("tr");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
  };
  return (
    <div className="bg-[#4b527e4d]">
      <Navbar changeLanguage={changeLanguage} currentLang={currentLang} />
      <About currentLang={currentLang}/>
      <Commands currentLang={currentLang}/>
    </div>
  );
}

export default App;