// http://www.codewars.com/kata/is-valid-identifier/solutions/javascript/me

const isValid = idn => /^[$\_a-z][\da-z\_$]*$/i.test(idn);