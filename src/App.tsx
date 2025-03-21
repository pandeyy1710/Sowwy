import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "NO",
      "NOO",
      "Still no? :( ?",
      "Really?",
      "sure?",
      "like SURE sure?",
      "Plwese?",
      "Babby?",
      "final No?",
      "No? No?",
      "No?",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bear kissing"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          />
          <div className="text-container">Yay!!!</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            style={{ width: "400x", height: "240px" }}
            alt="bear hugging"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-container">I am Sowwy...forgive me? </h1>
          <div>
            <button
              className="yes-button"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>

            <button className="no-button" onClick={handleNoClick}>
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
