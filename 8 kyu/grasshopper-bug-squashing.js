// http://www.codewars.com/kata/grasshopper-bug-squashing/solutions/javascript/me

var health = 100
var position = 0
var coins = 0

function main () {
  rollDice()
  move()
  combat()
  getCoins()
  buyHealth()
  printStatus()
}