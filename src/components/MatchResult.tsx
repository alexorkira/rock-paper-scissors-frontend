import React from "react";
import "./matchResultPopup.css";
import WeaponToken from "./weapon/weaponToken";
import WeaponEnum from "./weapon/weapon.enum";

export type MatchResultInfo = {
  firstWeapon: WeaponEnum;
  secondWeapon: WeaponEnum;
  result: string;
};

const MatchResult: React.FC<{
  firstWeapon: WeaponEnum;
  secondWeapon: WeaponEnum;
}> = ({ firstWeapon, secondWeapon }) => {
  return (
    <div className="" style={{ padding: "10" }}>
      <WeaponToken
        weaponName={secondWeapon}
        weaponImgPath={`/img/weapons/${secondWeapon}-opponent.png`}
      />
      <img className="fight-image flex-item" src="/img/vs-logo.png" alt="VS" />
      <WeaponToken
        weaponName={firstWeapon}
        weaponImgPath={`/img/weapons/${firstWeapon}.png`}
      />
    </div>
  );
};

export default MatchResult;
