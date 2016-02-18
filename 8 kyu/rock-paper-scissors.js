// http://www.codewars.com/kata/rock-paper-scissors/solutions/javascript/me

const rps=(p1,p2)=>p1==p2?'Draw!':`Player ${/sp|pr|rs/.test(p1[0]+p2[0])?1:2} won!`;

// alternative solution
const rps=(p1,p2)=>p1==p2?'Draw!':`Player ${['s','p','r'].indexOf(p1[0])===['p','r','s'].indexOf(p2[0])?1:2} won!`;