// http://www.codewars.com/kata/ascii85-encoding-and-decoding/solutions/javascript/me

Object.assign(String.prototype, {
  padLeft (ch, n) {
    let pad = n - this.length;
    return `${ ch.repeat(pad) }${ this }`;
  },

  padRight (ch, n) {
    let pad = n - this.length;
    return `${ this }${ ch.repeat(pad) }`;
  },

  repeat (i) {
    i = Math.max(0, i);
    return [...Array(i)].map(() => this).join('');
  },

  toAscii85 () {
    let stringAsBytes = this.split('').map(v => v.charCodeAt(0).toString(2).padLeft('0',8)).join('');

    let bigBytes = stringAsBytes.match(/\d{1,32}/g);
    let lastBigByte, desconsideredBytes;

    let output = '';
    if(bigBytes) {
      lastBigByte = bigBytes[bigBytes.length-1];
      desconsideredBytes = Math.floor((32-lastBigByte.length)/8);
      bigBytes[bigBytes.length-1] = lastBigByte.padRight('0',32);

      for (let bigByte of bigBytes) {
        for (let i = 4; i>=0; i--) {
          output += String.fromCharCode(Math.floor((parseInt(bigByte,2)/Math.pow(85,i))%85+33));
        }
      }
    }

    if (desconsideredBytes) {
      output = output.slice(0, -desconsideredBytes);
    }
    output = output.replace(/!{5}/g,'z');
    return `<~${output}~>`;
  },

  fromAscii85 () {
    let normalizedString = this.slice(2).slice(0, -2);
    normalizedString = normalizedString.replace(/z/g, '!!!!!').replace(/[\s\n\r]/g, '');
    let splitString = normalizedString.match(/.{1,5}/g);
    let padding = 0;
    let output = '';

    if (splitString) {
      if (splitString[splitString.length-1].length < 5) {
        padding = 5-splitString[splitString.length-1].length;
        splitString[splitString.length-1] = splitString[splitString.length-1].padRight('u', 5);
      }

      for (let letters of splitString) {
        let newNumber = 0;
        for (let i = 4; i >= 0; i--) {
          newNumber += +(letters[4-i].charCodeAt(0)-33)*Math.pow(85,i);
        }
        newNumber = (newNumber >>> 0).toString(2).padLeft('0',32);
        newNumber = newNumber.match(/\d{1,8}/g);

        if (newNumber[newNumber.length-1].length < 8) {
          newNumber[newNumber.length-1] = newNumber[newNumber.length-1].padLeft('0',8);
        }

        output += newNumber.map(v => {
          if (v === ' ') return '';
          return String.fromCharCode(parseInt(v,2));
        }).join('');
      }

      if (padding) {
        output = output.slice(0, -padding);
      }
    }

    return output;
  }
});