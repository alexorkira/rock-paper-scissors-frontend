import React from "react";
import "./weapon.css";
import WeaponToken from "./weaponToken";

interface WeaponProps {
  weaponName: string;
  onWeaponClick?: (weapon: string) => void;
}

const WeaponButton: React.FC<WeaponProps> = ({ weaponName, onWeaponClick }) => {
  return (
    <button
      key={weaponName}
      className="weapon-button"
      type="button"
      onClick={() => (onWeaponClick ? onWeaponClick(weaponName) : null)}
    >
      <WeaponToken
        weaponName={weaponName}
        weaponImgPath={`/img/weapons/${weaponName}.png`}
      />
    </button>
  );
};

export default WeaponButton;
