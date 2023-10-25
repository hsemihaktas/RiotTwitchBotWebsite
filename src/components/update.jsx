import React, { useState, useEffect } from "react";
import axios from "axios";

const Modal = ({ isOpen, closeModal, currentLang }) => {
  const [commitData, setCommitData] = useState([]);

  useEffect(() => {
    if (isOpen) {
      axios
        .get("https://api.github.com/repos/ByDexterTR/RiotTwitchBot/commits")
        .then((response) => {
          setCommitData(response.data);
        })
        .catch((error) => {
          console.error("GitHub API isteği başarısız oldu", error);
        });
    }
  }, [isOpen]);

  const filteredCommits = commitData.filter((commit) => {
    const title = commit.commit.message.split("\n")[0].toLowerCase();
    return title.includes('sürüm') || title.includes('version');
  });

  const replaceVersionWithSürüm = (title) => {
    if (currentLang === "tr") return title.replace(/version/gi, "Sürüm");
    else {
      return title.replace(/sürüm/gi, "Version");
    }
  };

  return (
    isOpen && (
      <div className="fixed z-10 inset-0 p-5 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-black opacity-70"></div>

          <div className="bg-[#7c81ad80] rounded-lg p-4 shadow-lg z-50 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 text-white hover:text-[#E5C3A6] focus:outline-none"
            >
              X
            </button>

            <div className="p-4">
              <h1 className="text-xl font-semibold mb-4 text-[#E5C3A6] text-center">
                {currentLang === "tr" ? "Sürüm Notları" : "Release Notes"}
              </h1>
              <div className="max-h-60 overflow-y-auto p-5">
                {filteredCommits.map((commit, index) => (
                  <div key={index}>
                    {index > 0 && (
                      <hr className="my-4 border-t border-gray-300" />
                    )}
                    <div>
                      <h2 className="text-lg font-semibold hover:text-[#E5C3A6]">
                        <a
                          href={commit.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {replaceVersionWithSürüm(
                            commit.commit.message.split("\n")[0]
                          )}
                        </a>
                      </h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
