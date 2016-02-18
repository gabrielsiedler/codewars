// http://www.codewars.com/kata/sevenate9/solutions/javascript/me

const sevenAte9 = s => {
  while (/797/g.test(s)) {
    s = s.replace(/797/g,'77')
  }
  return s;
};