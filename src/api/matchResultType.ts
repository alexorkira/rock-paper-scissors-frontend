import WeaponEnum from "../components/weapon/weapon.enum";

export type MatchResultType = {
  playerOneWeapon: WeaponEnum;
  playerTwoWeapon: WeaponEnum;
  winner?: string;
};
