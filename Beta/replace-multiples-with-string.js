// http://www.codewars.com/kata/replace-multiples-with-string/solutions/javascript/me

const getNumber = n => {
  if (n%3 === 0 && n%5 === 0) return 'BOTH';
  if (n%3 === 0) return 'THREE';
  if (n%5 === 0) return 'FIVE';
  
  return n;
};

const getNumberRange = (f, l) => {
  const output = [];
  if (f < l) {
    for (let i = f ; i <= l; i++) {
      output.push(getNumber(i));
    }
  } else {
    for (let i = f ; i >= l; i--) {
      output.push(getNumber(i));
    }
  }
  
  return output;
};