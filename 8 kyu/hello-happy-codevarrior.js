// http://www.codewars.com/kata/hello-happy-codevarrior/solutions/javascript/me

class Warrior {
  constructor (name) {
    this._name = name;
  }
    
  valueOf () {
    return `Hi! my name's ${this._name}`;
  }
  
  name (name) {
    if (name) {
      this._name = name;
    }
    return this._name;
  }
}