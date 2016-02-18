// http://www.codewars.com/kata/finding-remainder-without-using-percent-operator/solutions/javascript/me

const remainder = (D,d) => {
  if (!d) return 'NaN';
  
  let fraction = /.*\.(.*)/.exec(D/d);
  
  return fraction ? Math.round(+('0.' + fraction[1]) * d) : 0;
}