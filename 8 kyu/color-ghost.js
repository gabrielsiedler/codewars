// http://www.codewars.com/kata/color-ghost/solutions/javascript/me

class Ghost {
  constructor () {
    let colors = ['yellow', 'purple', 'red', 'white'];
    this.color = colors[parseInt(Math.random()*4)];
  }
}