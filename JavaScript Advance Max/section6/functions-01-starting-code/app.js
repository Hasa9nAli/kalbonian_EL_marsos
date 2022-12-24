const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";
const RESULT_PLAYER_WINS = "PLAYER_WINS";

let gameIsRunning = true;
const getPlayersChoice = () => {
  let selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    selection = DEFAULT_USER_CHOICE ; 
    alert(`Invalid choice ! we chose ${DEFAULT_USER_CHOICE} for you!`);
    return selection;
} else return selection;
};
const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) return ROCK;
  else if (randomValue < 0.67) return PAPER;
  else return SCISSORS;
};
const getWinner = (cChoice, pChoice) => {
  return cChoice == pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && cChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

  //   if (cChoice == pChoice) return RESULT_DRAW;
  //   else if (
  //     (cChoice === ROCK && cChoice === PAPER) ||
  //     (cChoice === PAPER && pChoice === SCISSORS) ||
  //     (cChoice === SCISSORS && pChoice === ROCK)
  //   ) {
  //     return RESULT_PLAYER_WINS;
  //   } else return RESULT_COMPUTER_WINS;
};
startGameBtn.addEventListener("click", () => {
  //   if (gameIsRunning) {
  //     return;
  //   }
  //   gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayersChoice();
  console.log(playerChoice);
  const computerChoice = getComputerChoice();
  const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice}, computer picked ${computerChoice}`;
  if (winner === RESULT_DRAW) {
    message += " had a draw ";
  } else if (winner === RESULT_PLAYER_WINS) message += " won";
  else message += " lost";

  alert(message);
});

// it will work
// const start = function startGame() {
//   console.log("Game is starting ...");
// }
//     const start = function () {
//       console.log("Game is starting ...");
//     };

// // welcome();
// // #f00 when call this function before create it work
// function welcome() {
//   console.log("Welcome");
// }

// //------------------------------------
// // this is an anonymous function
// //#f00 (Hoisting)if call this function before create it will be  error
// //--------------------

// // const person = {
// //   greet: function greet() {
// //     console.log("hi there!");
// //   },
// // };
// // personalbar.greet();
// // will be function is separate
// //console.log(typeof start);
// // .dir => give us a different inside into object
// //console.dir(start);

// #f00 anonymous function
// startGameBtn.addEventListener("click", function () {
//   console.log("hello world");
// });
