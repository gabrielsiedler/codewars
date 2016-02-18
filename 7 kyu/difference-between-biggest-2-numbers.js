// http://www.codewars.com/kata/difference-between-biggest-2-numbers/solutions/javascript/me

const diffBig2 = a => {
  let b1,b2;
  b1 = b2 = Number.NEGATIVE_INFINITY;
  for (e of a) {
    if (e > b1) {
      b2 = b1;
      b1 = e;
    } else if (e > b2) {
      b2 = e;
    }
  }
  
  return b1-b2;
}