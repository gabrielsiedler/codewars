// http://www.codewars.com/kata/ip-validation/solutions/javascript/me

function isValidIP(str) {
  return /^((2(5[0-5]|[0-4]\d)|(1?\d{0,2}))\.){3}(2(5[0-5]|[0-4]\d)|(1?\d{0,2}))$/.test(str);
}