// http://www.codewars.com/kata/grasshopper-debug/solutions/javascript/me

const weatherInfo = f => {
  const c = (f - 32) * (5/9);
  return c + ' is' + (c > 0 ? ' above': '') + ' freezing temperature';
}