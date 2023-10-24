import React from "react";
import { useTranslation } from "react-i18next";

function Navbar({ changeLanguage, currentLang }) {

  const { t } = useTranslation();

  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/RiotTwitchBot-main.zip"; // Zip dosyanızın yolu
    anchor.download = "RiotTwitchBot-main.zip"; // İndirilen dosyanın adı
    anchor.click();
  };

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "tr" : "en";
    changeLanguage(newLang);
  };

  return (
    <div className={`fixed top-0 w-full bg-[#7c81ad80] z-50`}>
      <div className="container mx-auto py-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">RiotTwitchBot</div>
          <ul className="flex space-x-4">
            <li className="text-2xl">
              <a href="https://github.com/ByDexterTR/RiotTwitchBot">
                <i className="fa fa-github-alt" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <button
                className="bg-black text-white py-2 px-4 rounded-full hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
                onClick={handleDownload}
              >
                <i className="fa fa-download mr-2" aria-hidden="true"></i>
                {t("download", { lng: currentLang })}
              </button>
            </li>
            <li className="text-2xl hover:text-white">
              <button onClick={toggleLanguage}>
                {currentLang === "en" ? "EN" : "TR"}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
