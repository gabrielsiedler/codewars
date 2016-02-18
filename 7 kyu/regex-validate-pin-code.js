// http://www.codewars.com/kata/regex-validate-pin-code/solutions/javascript/me

const validatePIN = p => /^(\d{4}|\d{6})$/.test(p);