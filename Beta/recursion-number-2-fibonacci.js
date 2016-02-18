// http://www.codewars.com/kata/recursion-number-2-fibonacci/solutions/javascript/me

const fibonacci = n => (n <= 2) ? 1 : fibonacci(n-1) + fibonacci(n-2);