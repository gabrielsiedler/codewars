// http://www.codewars.com/kata/return-a-strings-even-characters/solutions/javascript/me

const evenChars = s => {
  if (s.length < 2 || s.length > 100) return `invalid string`;
  
  return s.split('').filter((v,i) => i%2>0); 
};