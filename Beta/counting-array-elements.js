// http://www.codewars.com/kata/counting-array-elements/solutions/javascript/me

const count = arr => {
  const obj = {};
  
  for (const elem of arr) {
    obj[elem] = obj[elem] ? obj[elem] + 1 : 1;
  }
  
  return obj;
};