// http://www.codewars.com/kata/supernatural/solutions/javascript/me

const bob = m => {
  if (!drunkenDoodling[m]) {
    drunkenDoodling[m] = 'I have friggin no idea yet';
  }
  
  return `${drunkenDoodling[m]}, idjits!`;
};