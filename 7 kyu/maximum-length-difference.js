// http://www.codewars.com/kata/maximum-length-difference/solutions/javascript/me

function mxdiflg(a1, a2) {
  a1 = a1.map(v => v.length).sort((a,b) => a<b);
  a2 = a2.map(v => v.length).sort((a,b) => a<b);
  return !a1.length || !a2.length ? -1 : Math.max(Math.abs(a1[0]-a2[a2.length-1]),Math.abs(a2[0]-a1[a1.length-1]));
}