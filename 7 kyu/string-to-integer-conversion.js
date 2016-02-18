// http://www.codewars.com/kata/string-to-integer-conversion/solutions/javascript/me

const myParseInt = s => /^\d+$/.test(s.trim()) ? +s : 'NaN';
