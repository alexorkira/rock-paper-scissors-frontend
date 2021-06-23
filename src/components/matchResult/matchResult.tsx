import React from "react";
import "./matchResult.css";
import WeaponToken from "../weapon/weaponToken";

import { MatchResultType } from "./matchResultType";

type MatchResultPopupProps = {
  matchResult: MatchResultType;
};

const MatchResult: React.FC<MatchResultPopupProps> = ({ matchResult }) => {
  const { playerOne, playerTwo, resultSentence } = matchResult;

  return (
    <div className="result-box">
      <div className="result-header">
        <h3>{resultSentence}</h3>
      </div>
      <div className="result-container" style={{ padding: "10" }}>
        <figure className="token-figure">
          <div className="position-left">
            <WeaponToken
              weaponName={playerTwo.weapon}
              weaponImgPath={`/img/weapons/${playerTwo.weapon}.png`}
              tokenStyle="opponent left"
            />
            <figcaption className="playerTwo-stroke-color">
              {playerTwo.name}
            </figcaption>
          </div>
        </figure>
        <img
          className="fight-image flex-item"
          src="/img/vs-logo.png"
          alt="VS"
        />
        <figure className="token-figure">
          <div className="position-right">
            <WeaponToken
              weaponName={playerOne.weapon}
              weaponImgPath={`/img/weapons/${playerOne.weapon}.png`}
            />
            <figcaption className="playerOne-stroke-color">
              {playerOne.name}
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default MatchResult;
