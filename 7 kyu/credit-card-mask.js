// http://www.codewars.com/kata/credit-card-mask/solutions/javascript/me

const maskify = s => {
  if (s.length <= 4) return s;
  
  s = s.split('');
  s.splice(0,s.length-4,Array(s.length-3).join('#'));
  return s.join('');
};
