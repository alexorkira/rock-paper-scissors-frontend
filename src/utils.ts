export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function customizeMessage(
  playerMode: boolean,
  winner: string | undefined
): string {
  if (winner) {
    if (playerMode) {
      return winner === "playerOne"
        ? "Congrats! You win!"
        : "Sorry... You lost";
    }
    return winner === "playerOne" ? "COM2 wins!!" : "COM1 defeats COM2";
  }
  return "It's a draw";
}
