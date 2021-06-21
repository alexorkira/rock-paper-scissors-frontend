import React, { useState } from "react";
import "./TheGame.css";
import axios, { AxiosResponse } from "axios";
import WeaponEnum from "./components/weapon/weapon.enum";
import WeaponButton from "./components/weapon/weaponButton";
import MatchResultPopup from "./components/matchResult/matchResultPopup";
import ToggleSwitch from "./components/toggleSwitch/toggleSwitch";
import { MatchResultType } from "./api/matchResultType";
import { MatchResultInfo } from "./components/matchResult/matchResult";
import { capitalizeFirstLetter, customizeMessage } from "./utils";

const BACKEND_URL = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_BACKEND_PORT}`;

function TheGame(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  const [matchResult, setMatchResult] = useState<MatchResultInfo>();

  const [selected, setSelected] = useState(true);

  const onReceiveReply = (receivedData: MatchResultType) => {
    const { playerOneWeapon, playerTwoWeapon, winner } = receivedData;

    const result = customizeMessage(selected, winner);

    setMatchResult({
      firstWeapon: playerOneWeapon,
      secondWeapon: playerTwoWeapon,
      result,
      winner,
    });

    setOpen(true);
  };

  const onPcPlayOnlyClick = () => {
    axios
      .get(`${BACKEND_URL}/com-vs-com`)
      .then((res: AxiosResponse<MatchResultType>) => {
        onReceiveReply(res.data);
      });
  };

  const onWeaponClick = (weapon: string) => {
    axios
      .post(`${BACKEND_URL}/player-vs-com`, {
        playerChoice: weapon,
      })
      .then((res: AxiosResponse<MatchResultType>) => {
        onReceiveReply(res.data);
      });
  };

  return (
    <div className="TheGame">
      <h1>
        {Object.values(WeaponEnum).map((weaponName) => {
          return `${capitalizeFirstLetter(weaponName)} `;
        })}
      </h1>
      <ToggleSwitch
        selected={selected}
        toggleSelected={() => {
          setSelected(!selected);
        }}
      />
      {selected && (
        <div className="weaponPack">
          <h2 style={{ fontSize: "2em" }}>Make your choice</h2>
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
      )}
      {!selected && (
        <div className="">
          <button
            key="let-computer-fight"
            type="button"
            onClick={onPcPlayOnlyClick}
          >
            Let the Computers fight
          </button>
        </div>
      )}
      {open && matchResult && (
        <MatchResultPopup open matchResult={matchResult} onClose={onClose} />
      )}
    </div>
  );
}

export default TheGame;
