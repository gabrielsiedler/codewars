// http://www.codewars.com/kata/daves-gamble/solutions/javascript/me

const horses = n => {
  if (!/^\d+$/.test(n)) return undefined;
  if (n < 3) return n;
  
  let output = n;
  output *= (n-1) > 0 ? (n-1) : 1;
  output *= (n-2) > 0 ? (n-2) : 1;
  
  return output;
};