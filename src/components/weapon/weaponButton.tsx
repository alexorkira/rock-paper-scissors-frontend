import React from "react";
import "./weapon.style.css";

interface WeaponProps {
  weaponName: string;
}

const onClickWeapon = (id: string) => {
  console.log("Selected weapon", { id });
  // const url = `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SWITCHBOARD_GHOST_PORT}/switchboard-ghost/push-button`;
  // axios
  //   .post(url, {
  //     columnIndex,
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     console.log(res.data);
  //   });
};

const WeaponButton: React.FC<WeaponProps> = ({ weaponName }) => {
  const weaponImgPath = `/img/weapons/${weaponName}.png`;

  return (
    <button
      key={weaponName}
      className="weapon-button"
      type="button"
      onClick={() => onClickWeapon(weaponName)}
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
