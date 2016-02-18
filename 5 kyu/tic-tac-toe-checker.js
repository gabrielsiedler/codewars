// http://www.codewars.com/kata/tic-tac-toe-checker/solutions/javascript/me

function isSolved(board) {
  var board = board.reduce(function(a, b) { return a.concat(b); });
  var winningPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  
  var won = winningPatterns.filter(function (pattern) { 
    return (board[pattern[0]] !== 0) && ((board[pattern[0]] === board[pattern[1]]) && (board[pattern[1]] === board[pattern[2]]));
  });

  if (won.length) {
    return board[won[0][0]];
  }
  
  if(board.some(function (pos) { return pos === 0; })) { return -1; }

  return 0;
}
