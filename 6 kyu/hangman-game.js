// http://www.codewars.com/kata/hangman-game/solutions/javascript/me

class Hangman {
  constructor(word) {
    this.word = word;
    this.missed = '';
    this.found = '';
    this.ended = false;
    this.MESSAGE = {
      found: `You found the word! (${this.word})`,
      hung: `You got hung! The word was ${this.word}.`,
      ended: `The game has ended.`
    };
  }
  
  guess(letter) {
    if (this.ended) {
      return this.MESSAGE.ended;
    }
    
    if (new RegExp(letter,'gi').test(this.word)) {
      this.found += letter;
      
      if (this.word.replace(new RegExp(`[${this.found}]`,'gi'),'').length === 0) {
        this.ended = true;
        return this.MESSAGE.found;
      }
    } else {
      if (this.missed.indexOf(letter) === -1) {
        this.missed += letter;
        if (this.missed.length >= 7) {
          this.ended = true;
          return this.MESSAGE.hung;
        }
      }
    }
    
    return this._buildState();
  }
  
  _buildState() {
    let word = this.word.split('').map(c => this.found.indexOf(c) === -1 ? '_' : c).join(' ');
    if (this.missed.length) {
      word += ` # ${this.missed}`
    }
    
    return word;
  }
}