import React from "react";
import "./matchResult.css";
import WeaponToken from "../weapon/weaponToken";

import { MatchResultType } from "../../api/matchResultType";

export type MatchResultPopupProps = {
  matchResult: MatchResultType;
};

const MatchResult: React.FC<MatchResultPopupProps> = ({ matchResult }) => {
  const { playerOne, playerTwo, result, winner } = matchResult;

  const headerClasses = `header ${winner}`;

  return (
    <div>
      <div className={headerClasses}>
        <h3>{result}</h3>
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
