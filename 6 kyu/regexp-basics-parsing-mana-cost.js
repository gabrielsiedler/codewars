// http://www.codewars.com/kata/regexp-basics-parsing-mana-cost/solutions/javascript/me

Object.assign(String.prototype, {
  parseManaCost () {
    let output = {};
    let format = /^\d*[wubrg]*$/i;
    let match = this.match(/\d+|[wubrg]{1,}?/ig) || [];
    
    if (!format.test(this)) return null;
    
    for (let c of match) {
      if (/\d+/.test(c)) {
        if (+c > 0) output['*'] = +c;
      } else {
        c = c.toLowerCase();
        output[c] = output[c] ? output[c] + 1 : 1;
      }
    }
    
    return output;
  }
});