const Game = require("./Game");
const game = new Game();

let rolls = 0;

document.addEventListener("click", (event) => {
  const pins = Math.floor(Math.random() * 10 + 1);

  game.roll(pins);

  console.log("Rolls: ", ++rolls);
  console.log("Score: ", game.score());
});
