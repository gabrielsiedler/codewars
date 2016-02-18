// http://www.codewars.com/kata/wilson-primes/solutions/javascript/me

function f (n) {
  if (n==0 || n==1){ return 1; }
  return f(n-1)*n;
} 

const amIWilson = p => {
  let n = (f(p-1) + 1)/(p*p);
  return parseInt(n) === n;
}