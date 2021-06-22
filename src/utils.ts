export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function customizeMessage(
  playerMode: boolean,
  winner: string | undefined
) {
  let result = "It's a draw";
  if (playerMode) {
    if (winner) {
      result =
        winner === "playerOne"
          ? "Congrats! You won!"
          : "Ehm, sorry... you lost the match";
    }
  } else if (winner) {
    result = winner === "playerOne" ? "COM2 wins!!" : "COM1 defeated COM2";
  }
  return result;
}
