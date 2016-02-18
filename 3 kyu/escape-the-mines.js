// http://www.codewars.com/kata/escape-the-mines/solutions/javascript/me

class Johnny {
  constructor (map, exit) {
    this.map = map;
    this.exit = exit;
    this.found = false;

    this.visited = [];

    for (let i = 0; i<map.length; i++) {
      this.visited.push(new Array(map[0].length));
    }

    this.path = [];

  }

  outOfBoundaries (x,y) {
    return (x < 0 || y < 0 || x >= this.map.length || y >= this.map[0].length);
  }

  walk (x, y) {
    if(x === this.exit.x && y === this.exit.y) {
      this.found = true;
      return true;
    }

    if(this.found || this.outOfBoundaries(x,y) || !this.map[x][y] || this.visited[x][y]) {
      return false;
    }

    this.visited[x][y] = true;
    
    let moveLeft = this.walk(x-1,y, 'left');
    let moveUp = this.walk(x,y-1, 'up');
    let moveRight = this.walk(x+1,y, 'right');
    let moveDown = this.walk(x,y+1, 'down');

    let currentMovement = moveLeft ? 'left' : moveUp ? 'up' : moveRight ? 'right': moveDown ? 'down' : false;

    if(currentMovement) {
      this.path.push(currentMovement);
    }

    return !!currentMovement;
  }

  keepWalking (x ,y) {
    this.walk(x, y);

    return this.path.reverse();
  }

}

function solve(map, miner, exit) {
  var johnny = new Johnny(map, exit);
  return johnny.keepWalking(miner.x, miner.y);
}