// http://www.codewars.com/kata/square-n-sum/solutions/javascript/me

function squareSum(numbers){
  return numbers.reduce(function (sum, current, index) { 
    if(index === 1) {
      return sum*sum + current*current;
    }
    return sum + current*current; 
  });
}