import React from "react";
import { useTranslation } from "react-i18next";

function Commands({ currentLang }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full h-auto pt-32 lg:pt-64 pb-16 px-5 codeText text-base text-[#E5C3A6]">
        <div className="lg:flex bg-gradient-to-b from-[#7c81ad20] to-[#7c81ad80] rounded-lg px-5 pt-5 lg:gap-16">
          <div className="w-full lg:w-1/2 lg:flex lg:justify-center lg:items-center h-auto">
            <div className="codeContainer relative w-full h-auto border-2 border-white rounded-lg bg-[#7c81ad80]">
              <div className="codeTitleLeft">League Of Legends</div>
              <div className="p-10">
                !lolrank » {t("lolrank", { lng: currentLang })}
                <br />
                !lollastmatch / !lollastgame » {t("lollastmatch", { lng: currentLang })}
                <br />
                !runes / !run / !rune » {t("runes", { lng: currentLang })}
                <br />
                !matchup / !lolranks » {t("matchup", { lng: currentLang })}
                <br />
                !winrate / !wr » {t("winrate", { lng: currentLang })}
                <br />
                !avgrank / !elo » {t("avgrank", { lng: currentLang })}
                <br />
                !mostplayed / !main » {t("mostplayed", { lng: currentLang })}
                <br />
                !streak » {t("streak", { lng: currentLang })}
                <br />
                !mastery » {t("mastery", { lng: currentLang })}
                <br />
                !level » {t("level", { lng: currentLang })}
                <br/>
                !levels » {t("levels", { lng: currentLang })}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-wrap gap-5 justify-center items-center h-auto py-5 ">
            <div className="codeContainer relative w-full h-auto border-2 border-white rounded-lg bg-[#7c81ad80]">
              <div className="codeTitleRight">Teamfight Tactics</div>
              <div className="p-10">
              !tftrank » {t("tftrank", { lng: currentLang })}
              <br />
              !tftlastmatch / !tftlastgame » {t("tftlastmatch", { lng: currentLang })}
              <br />
              !tftavg » {t("tftavg", { lng: currentLang })}
              <br />
              !tftitem / !bis Karakter » {t("tftitem", { lng: currentLang })}
              <br />
              </div>
            </div>
            <div className="codeContainer relative w-full h-auto border-2 border-white rounded-lg bg-[#7c81ad80]">
            <div className="codeTitleRight">{t("commandModerator", { lng: currentLang })}</div>
            <div className="p-10">
              !commands / !help » {t("commands", { lng: currentLang })}
              <br />
              !setsummoner Name » {t("setsummoner", { lng: currentLang })}
              <br />
              !setregion TR » {t("setregion", { lng: currentLang })}
              <br />
              !setlang » {t("setlang", { lng: currentLang })}
              <br />
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commands;
