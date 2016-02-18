// http://www.codewars.com/kata/diffuse-the-bombs/solutions/javascript/me

Bomb.diffuse(42)

Bomb.diffuse('just keep trying');
Bomb.diffuse('just keep trying');
Bomb.diffuse('just keep trying');
Bomb.diffuse('just keep trying');
Bomb.diffuse('just keep trying');

Bomb.diffuse(BombKey);

let diffuseTheBomb = () => true;
Bomb.diffuse();

Bomb.diffuse(3.14159);

Bomb.diffuse(new Date().setFullYear(new Date().getFullYear()-4));

class c {
  get key() {
    return 43;
  }
  set key(a) { 
  }
}

Bomb.diffuse(new c());

class ob {
  constructor () {
    this.num = 100;
  }
  valueOf () {
    this.num = -this.num;
    return this.num;
  }
}

Bomb.diffuse(new ob());

Math.random = () => {
  if(!this.count) {
    this.count = 0;
  }
  this.count++;
  
  if(this.count == 3) {
    return 0.5;
  }
  return 1;
}

Bomb.diffuse(42);

Array.prototype.valueOf = function () { return this.reduce((pre, next) => pre+next) }
Bomb.diffuse('eWVz')