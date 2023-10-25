import React, { useState } from "react";
import Update from "./update";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import {  faBoxOpen } from "@fortawesome/free-solid-svg-icons";

function Navbar({ changeLanguage, currentLang }) {
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/RiotTwitchBot-main.zip"; // Zip dosyanızın yolu
    anchor.download = "RiotTwitchBot-main.zip"; // İndirilen dosyanın adı
    anchor.click();
  };

  const handleSelectChange = (event) => {
    const newLang = event.target.value;
    changeLanguage(newLang);
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={`fixed top-0 w-full bg-[#7c81ad80] z-50`}>
      <div className="container mx-auto py-4 px-1 lg:px-0">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">RiotTwitchBot</div>
          <ul className="flex space-x-2 lg:space-x-4">
            <li className="text-2xl hover:text-[#E5C3A6]">
              <a href="https://github.com/ByDexterTR/RiotTwitchBot">
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
            </li>
            <li className="text-2xl hover:text-[#E5C3A6]">
              <button onClick={handleDownload}>
                <FontAwesomeIcon icon={faCircleDown} />
              </button>
            </li>
            <li className="text-2xl hover:text-[#E5C3A6]">
              <button onClick={toggleModal}>
                <FontAwesomeIcon icon={faBoxOpen} />
              </button>
            </li>
            <li className="text-2xl hover:text-[#E5C3A6]">
              <select className="bg-black rounded text-[#E5C3A6]"value={currentLang} onChange={handleSelectChange}>
                <option value="en">EN</option>
                <option value="tr">TR</option>
              </select>
            </li>
          </ul>
          <Update
            isOpen={showModal}
            closeModal={toggleModal}
            currentLang={currentLang}
          />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
