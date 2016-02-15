// http://www.codewars.com/kata/lario-and-muigi-pipe-problem

const pipeFix = n => {
  const output = [];
  for (let i = Math.min(...n); i <= Math.max(...n); i++) {
    output.push(i);
  }
  return output;
};
