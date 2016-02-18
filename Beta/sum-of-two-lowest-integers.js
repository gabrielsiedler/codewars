// http://www.codewars.com/kata/sum-of-two-lowest-integers/solutions/javascript/me

const sumTwoSmallestNumbers = (numbers) => {
  let minIndex = -1;
  let min = Number.POSITIVE_INFINITY;
  let secondMin = Number.POSITIVE_INFINITY;
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      secondMin = min;
      min = numbers[i];
    } else if (numbers[i] < secondMin) {
      secondMin = numbers[i];
    }
  }
  
  return min + secondMin;
};