// http://www.codewars.com/kata/fix-me/solutions/javascript/me

const fixMe = _ => {
  const numbers = [];
  
  for (let i = 0; i < 10; i++) {
    numbers.push(() => i);
  }

  return numbers;
};