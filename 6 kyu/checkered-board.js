// http://www.codewars.com/kata/checkered-board/solutions/javascript/me

const checkeredBoard = n => {
  if (n < 2 || isNaN(n) || parseInt(n) !== n) { return false; }

  let even = (n%2 === 0) ? '\u25A1' : '\u25A0';
  let odd = (n%2 === 0) ? '\u25A0' : '\u25A1';
  let output = '';

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      output += ((i+j)%2 === 0) ? even : odd;
      output += (j !== n-1) ? ' ' : '';
    }
    output += (i !== n-1) ? '\n' : '';
  }

  return output;
};