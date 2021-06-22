import { PlayerType } from "./playerType";

export type MatchResultType = {
  playerOne: PlayerType;
  playerTwo: PlayerType;
  winner?: string;
  resultSentence?: string;
};
