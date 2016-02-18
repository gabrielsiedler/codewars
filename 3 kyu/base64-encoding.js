// http://www.codewars.com/kata/base64-encoding/solutions/javascript/me

const base64Table = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','+','/'];

const toBinary = (value, size) => {
  var bin = value.toString(2);
  return (bin.length < size) ? bin = Array(size-bin.length+1).join(0) + bin : bin;
};

String.prototype.toBase64 = function () {
  let str = this.split('').map(v => toBinary(v.charCodeAt(0),8)).join('');
  let pad = 0;
  str = str.match(/.{1,6}/g).map(v => {
    if (v.length < 6) {
      pad+=(6-v.length)/2;
      v = v + Array(6-v.length+1).join('0') ;
    }
    return base64Table[parseInt(v,2)];
  });
  return str.join('') + Array(pad+1).join('=');
}

String.prototype.fromBase64 = function () {
  let str = this.split('').map(v => toBinary(base64Table.indexOf(v),6)).join('');
  str = str.match(/.{1,8}/g).map(v => {
    return String.fromCharCode(parseInt(v,2));
  });
  return str.join('');
};