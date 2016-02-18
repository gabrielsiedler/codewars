// http://www.codewars.com/kata/vigenere-cipher-helper/solutions/javascript/me

class VigenèreCipher {
  constructor (key, abc) {
    this.key = key;
    this.abc = abc;
  }
  
  _cypher (str, op) {
    return str.split('').map((c,i) => {
      let index = i < this.key.length ? i : i%this.key.length;
      let cIndex = this.abc.indexOf(c) >= 0 ? this.abc.indexOf(c) : 0;
      let keyIndex = this.abc.indexOf(this.key[index]) >= 0 ? this.abc.indexOf(this.key[index]) : 0;
      let conversion;
      if (op === 'encode') {
        conversion = (cIndex + keyIndex) % this.abc.length;
      } else {
        conversion = (cIndex - keyIndex < 0) ? this.abc.length + (cIndex - keyIndex) : (cIndex - keyIndex) % this.abc.length;
      }
      return this.abc.indexOf(c) >= 0 ? this.abc[conversion] : c;
    }).join('');
  }

  encode (str) {
    return this._cypher(str, 'encode');
  }
  
  decode (str) {
    return this._cypher(str, 'decode');
  }
}