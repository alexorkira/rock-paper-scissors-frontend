import React from "react";
import "./weapon.css";

interface WeaponTokenProps {
  weaponName: string;
  weaponImgPath: string;
  tokenStyle?: string;
}

const WeaponToken: React.FC<WeaponTokenProps> = ({
  weaponName,
  weaponImgPath,
  tokenStyle,
}) => {
  let classes = "weapon-token flex-item";
  if (tokenStyle) {
    classes += " flip grayscale brightness huerotate";
  }

  return <img className={classes} src={weaponImgPath} alt={weaponName} />;
};

export default WeaponToken;
