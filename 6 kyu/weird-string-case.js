// http://www.codewars.com/kata/weird-string-case/solutions/javascript/me

const toWeirdCase = function (string){
  return string.toLowerCase().split(' ').map(mapWord).join(' ');
};

const mapWord = function (word) {
  return word.split('').map(mapCharacter).join('');
};

const mapCharacter = function (letter, index) {
  return (index%2 === 0) ? letter.toUpperCase() : letter;
};