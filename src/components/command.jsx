import React from "react";
import { useTranslation } from "react-i18next";

function Commands({ currentLang }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full h-auto py-32">
        <div className="flex">
          <div className="w-1/2 flex justify-center items-center h-auto py-32 ">
            <div className="codeContainer relative w-2/3 h-auto border-2 border-white rounded-lg text-[#E5C3A6] bg-[#7c81ad80]">
              <div className="codeTitleLeft">League Of Legends</div>
              <div className="codeText p-10">
                • !lolrank • {t("lolrank", { lng: currentLang })}
                <br />
                • !lollastmatch / !lollastgame • {t("lollastmatch", { lng: currentLang })}
                <br />
                • !runes • {t("runes", { lng: currentLang })}
                <br />
                • !matchup • {t("matchup", { lng: currentLang })}
                <br />
                • !winrate / !wr • {t("winrate", { lng: currentLang })}
                <br />
                • !avgrank / !elo • {t("avgrank", { lng: currentLang })}
                <br />
                • !mostplayed • {t("mostplayed", { lng: currentLang })}
                <br />
                • !streak • {t("streak", { lng: currentLang })}
                <br />
                • !mastery • {t("mastery", { lng: currentLang })}
                <br />
                • !levels • {t("levels", { lng: currentLang })}
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center h-auto py-32 ">
            <div className="codeContainer relative w-2/3 h-auto border-2 border-white rounded-lg text-[#E5C3A6] bg-[#7c81ad80]">
              <div className="codeTitleRight">Teamfight Tactics</div>
              <div className="codeText p-10">
              • !tftrank • {t("tftrank", { lng: currentLang })}
              <br />
              • !tftlastmatch / !tftlastgame • {t("tftlastmatch", { lng: currentLang })}
              <br />
              • !tftavg • {t("tftavg", { lng: currentLang })}
              <br />
              • !tftitem / !bis Karakter • {t("tftitem", { lng: currentLang })}
              <br />
              • !tftmeta • {t("tftmeta", { lng: currentLang })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="codeContainer relative w-1/2 h-auto border-2 border-white rounded-lg text-[#E5C3A6] bg-[#7c81ad80]">
            <div className="codeTitleLeft">Moderatör</div>
            <div className="codeText p-10">
              • !commands / !help • {t("commands", { lng: currentLang })}
              <br />
              • !lolsummonner Name • {t("lolsummoner", { lng: currentLang })}
              <br />
              • !lolregion TR • {t("lolregion", { lng: currentLang })}
              <br />
              • !tftsummoner • {t("tftsummoner", { lng: currentLang })}
              <br />
              • !tftregion TR • {t("tftregion", { lng: currentLang })}
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Commands;
