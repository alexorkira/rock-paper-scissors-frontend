import WeaponEnum from "../weapon/weapon.enum";

type PlayerType = {
  name: string;
  weapon: WeaponEnum;
};

export type MatchResultType = {
  playerOne: PlayerType;
  playerTwo: PlayerType;
  winner?: string;
  resultSentence?: string;
};
