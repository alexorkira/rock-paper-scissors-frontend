import React from "react";
import "./weapon.css";

interface WeaponTokenProps {
  weaponName: string;
  weaponImgPath: string;
}

const WeaponToken: React.FC<WeaponTokenProps> = ({
  weaponName,
  weaponImgPath,
}) => {
  return (
    <img
      className="weapon-token flex-item"
      src={weaponImgPath}
      alt={weaponName}
    />
  );
};

export default WeaponToken;
