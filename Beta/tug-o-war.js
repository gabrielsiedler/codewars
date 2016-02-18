// http://www.codewars.com/kata/tug-o-war/solutions/javascript/me

const tug_o_war = teams => {
  let team1 = teams[0].reduce((p,n) => p+n);
  let team2 = teams[1].reduce((p,n) => p+n);
  let anchor1 = teams[0][0];
  let anchor2 = teams[1][teams[1].length-1];
  
  if (team1 === team2) {
    return anchor1 === anchor2 ? `It's a tie!` : `Team ${anchor1 > anchor2 ? 1 : 2} wins!`;
  }
  
  return `Team ${team1 > team2 ? 1 : 2} wins!`;
};