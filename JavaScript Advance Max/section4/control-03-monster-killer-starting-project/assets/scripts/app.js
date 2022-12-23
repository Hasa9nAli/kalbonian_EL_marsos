// using the Capital letter with the Global Variable
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";
/* Q -why is chosenMaxLife not such a "Global value "? 
   A - Because we'll later allow the user of the webpage to set this value  
*/
const enteredValue = prompt("Maximum life for you and the monster.", "100");
let chosenMaxLife = parseInt(enteredValue);
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];
let  logEntry = {};
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}
function writeToLog(ev, value, monsterHeath, playerHealth) {
   logEntry = {
    event: ev,
    value: value,
    finalMonsterHealth: monsterHeath,
    finalPlayerHealth: playerHealth,
  };
  switch (ev) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = "MONSTER";
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry.target = "PLAYER";
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target = "PLAYER";
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: ev,
        value: value,
        finalMonsterHealth: monsterHeath,
        finalPlayerHealth: playerHealth,
      };
      break ; 
      default:logEntry = {} ; 
  }
  // if (ev === LOG_EVENT_PLAYER_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: value,
  //     finalMonsterHealth: monsterHeath,
  //     target: "MONSTER",
  //     finalPlayerHealth: playerHealth,
  //   };
  // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry.target = "MONSTER";
  // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
  //   logEntry.target = "PLAYER";
  // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry.target = "PLAYER";
  // } else if (ev === LOG_EVENT_GAME_OVER) {
  //   logEntry = {
  //     event: ev,
  //     value: value,
  //     finalMonsterHealth: monsterHeath,
  //     finalPlayerHealth: playerHealth,
  //   };
  // }

  battleLog.push(logEntry);
}
function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );
  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    alert("You would be dead but the bonus life saved you! ");
    setPlayerHealth(initialPlayerHealth);
  }
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You won!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("you lost!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER WON",
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("You have a draw! ");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "A DRAW",
      currentMonsterHealth,
      currentPlayerHealth
    );
  }
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) reset();
}
function attackMonster(mode) {
  let maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  let logEvent =
    mode === MODE_ATTACK
      ? LOG_EVENT_PLAYER_ATTACK
      : LOG_EVENT_PLAYER_STRONG_ATTACK;
  // if (mode === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_ATTACK
  // } else if (mode === MODE_STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK

  // }
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
  endRound();
}
adjustHealthBars(chosenMaxLife);
function attackHandler() {
  attackMonster(MODE_ATTACK);
}
function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}
function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You con't heal to more than your max initial health .");
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}
function printLogHandler() {
  console.log(battleLog);
}
function printLogHandler() {
  // for (let i = 0 ;  i < battleLog.length ; i++ ){
  // console.log('----------') 
  // console.log(battleLog[i]); }
  for (const element of battleLog){
  for (let key in logEntry)
    console.log("key is=> ", key , '\nvalue is =>',(logEntry[key]),'\n')}

}
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healPlayerHandler);
logBtn.addEventListener("click", printLogHandler);
