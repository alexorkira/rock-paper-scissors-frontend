import React, { useEffect, useState } from "react";
import "./TheGame.css";
import axios, { AxiosResponse } from "axios";
import WeaponEnum from "./components/weapon/weapon.enum";
import { MatchResultType } from "./api/matchResultType";
import WeaponButton from "./components/weapon/weaponButton";
import MatchResult from "./components/matchResult/matchResult";
import ToggleSwitch from "./components/toggleSwitch/toggleSwitch";
import { capitalizeFirstLetter, customizeMessage } from "./utils";
import "./components/matchResult/matchResult.css";

const BACKEND_URL = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_BACKEND_PORT}`;

function TheGame(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  const [matchResult, setMatchResult] = useState<MatchResultType>();

  const [selected, setSelected] = useState(true);

  const onReceiveReply = (receivedData: MatchResultType) => {
    const { playerOne, playerTwo, winner } = receivedData;

    const result = customizeMessage(selected, winner);

    setMatchResult({
      playerOne,
      playerTwo,
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
          onClose();
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
        <button
          className="pc-only"
          key="let-computer-fight"
          type="button"
          onClick={onPcPlayOnlyClick}
        >
          Let the Computers fight
        </button>
      )}
      {open && matchResult && <MatchResult matchResult={matchResult} />}
    </div>
  );
}

export default TheGame;
