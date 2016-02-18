// http://www.codewars.com/kata/whats-up-next/solutions/javascript/me

const nextItem = (xs, item) => {
  var found = false;
  var finalValue = undefined;

  for (let i of xs) {
    if (found) {
      finalValue = i;
      break;
    }

    if (i === item) {
      found = true;
    }
  }

  return finalValue;
}