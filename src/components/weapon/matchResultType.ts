import WeaponEnum from "./weapon.enum";

export type MatchResultType = {
  playerOneWeapon: WeaponEnum;
  playerTwoWeapon: WeaponEnum;
  winner?: string;
};
