import React from "react";
import "./weapon.style.css";
import axios from "axios";

interface WeaponProps {
  weaponName: string;
}

const onWeaponClick = (weapon: string) => {
  console.log("Selected weapon", { weapon });
  const url = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_BACKEND_PORT}/the-winner-is`;
  axios
    .post(url, {
      playerChoice: weapon,
    })
    .then((res) => {
      const { playerChoice, computerChoice, winner } = res.data;
      if (!winner) {
        alert(`Draw!`);
      } else {
        alert(`Computer choice: ${computerChoice}\nWinner: ${winner}`);
      }
    });
};

const WeaponButton: React.FC<WeaponProps> = ({ weaponName }) => {
  const weaponImgPath = `/img/weapons/${weaponName}.png`;

  return (
    <button
      key={weaponName}
      className="weapon-button"
      type="button"
      onClick={() => onWeaponClick(weaponName)}
    >
      <img
        style={{ cursor: "pointer", width: "100%" }}
        src={weaponImgPath}
        alt={weaponName}
      />
    </button>
  );
};

export default WeaponButton;
