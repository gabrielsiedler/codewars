// http://www.codewars.com/kata/reducing-problems-bug-fixing-number-8/solutions/javascript/me

function calculateTotal(team1, team2) {
  var t1s = team1.length && team1.reduce((p, c) => p + c);
  var t2s = team2.length && team2.reduce((p, c) => p + c);
  return t1s > t2s;
}