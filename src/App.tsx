import React, { useState } from "react";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import WeaponEnum from "./components/weapon/weapon.enum";
import WeaponButton from "./components/weapon/weaponButton";
import MatchResultPopup from "./components/matchResult/matchResultPopup";
import { MatchResultType } from "./api/matchResultType";
import { MatchResultInfo } from "./components/matchResult/matchResult";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App(): React.ReactElement {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const [matchResult, setMatchResult] = useState<MatchResultInfo>();

  const onWeaponClick = (weapon: string) => {
    const url = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_BACKEND_PORT}/player-vs-com`;
    axios
      .post(url, {
        playerChoice: weapon,
      })
      .then((res: AxiosResponse<MatchResultType>) => {
        const { playerOneWeapon, playerTwoWeapon, winner } = res.data;

        let result = "It's a draw";
        if (winner) {
          result =
            winner === "playerOne" ? "Congrats you won!" : "You lost the match";
        }

        setMatchResult({
          firstWeapon: playerOneWeapon,
          secondWeapon: playerTwoWeapon,
          result,
        });

        setOpen(true);
      });
  };

  return (
    <div className="TheGame">
      <h1>
        {Object.values(WeaponEnum).map((weaponName) => {
          return `${capitalizeFirstLetter(weaponName)} `;
        })}
      </h1>

      <div className="weaponPack">
        <h2>Make your choice</h2>
        {Object.values(WeaponEnum).map((weaponName) => {
          return (
            <WeaponButton
              key={weaponName}
              weaponName={weaponName}
              onWeaponClick={onWeaponClick}
            />
          );
        })}
      </div>
      {open && matchResult && (
        <MatchResultPopup
          id="confirmation-dialog"
          content
          open
          matchResult={matchResult}
          onClose={onClose}
        />
      )}
    </div>
  );
}

export default App;
