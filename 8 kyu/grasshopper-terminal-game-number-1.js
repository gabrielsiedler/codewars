// http://www.codewars.com/kata/grasshopper-terminal-game-number-1/solutions/javascript/me

function Hero (name) {
  this.name = name || 'Hero';
  this.position = '00';
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}