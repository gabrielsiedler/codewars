// http://www.codewars.com/kata/who-won-the-election/solutions/javascript/me

function getWinner(listOfBallots) {
  let votes = {};
  let majority = { candidate: null, votes: Number.NEGATIVE_INFINITY };
  
  for (let vote of listOfBallots) {
    if (!votes[vote]) {
      votes[vote] = 0;
    }
    
    votes[vote]++;
    
    if (votes[vote] > majority.votes) {
      majority.candidate = vote;
      majority.votes = votes[vote];
    }
  }

  return (majority.votes > listOfBallots.length/2) ? majority.candidate : null;
}