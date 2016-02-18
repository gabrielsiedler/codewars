// http://www.codewars.com/kata/swap-values/solutions/javascript/me

const swapValues = a => { 
  let t = a[1];
  a[1] = a[0];
  a[0] = t;
}