// http://www.codewars.com/kata/reversing-fun/solutions/javascript/me

const flipNumber = n => {
  let output = '';
  for (let i = 0; i < Math.floor(n.length/2); i++) {
    output += `${n[n.length-1-i]}${n[i]}`; 
  }
  return n.length%2 ? output + n[Math.ceil(n.length/2-1)] : output;
};