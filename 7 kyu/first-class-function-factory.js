// http://www.codewars.com/kata/first-class-function-factory/solutions/javascript/me

const factory = x => (array => array.map(y => y * x));