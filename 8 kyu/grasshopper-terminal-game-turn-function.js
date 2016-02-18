// http://www.codewars.com/kata/grasshopper-terminal-game-turn-function/solutions/javascript/me

function doTurn () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}