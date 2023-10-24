import React from "react";
import AboutPNG from "../images/aboutImage.png";
import "font-awesome/css/font-awesome.min.css";
import { useTranslation } from "react-i18next";

const About = ({ currentLang }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-screen lg:w-full h-auto lg:flex items-center justify-center pt-48 gap-5">
        <div className="text-[#E5C3A6] w-full py-10 px-5 lg:w-2/3 lg:pl-32">
          <div className="text text-l my-3 lg:text-2xl lg:my-5">
          {t("about", { lng: currentLang })}
          </div>
        </div>
        <div className="w-full lg:w-1/3 lg:h-1/2 lg:flex lg:flex-wrap lg:pr-32">
          <div className="w-full flex justify-center items-center ">
            <img src={AboutPNG} alt="about" className="skew-y-6"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
