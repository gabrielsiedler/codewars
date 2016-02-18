// http://www.codewars.com/kata/exes-and-ohs/solutions/javascript/me

const XO = s => {
  let resObject = {};
  for (let letter of s) {
    letter = letter.toLowerCase();
    resObject[letter] = resObject[letter] >= 0 ? resObject[letter]+1 : 0;
  }
  return resObject.x === resObject.o;
};