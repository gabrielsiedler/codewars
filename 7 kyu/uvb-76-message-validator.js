// http://www.codewars.com/kata/uvb-76-message-validator/solutions/javascript/me

const validate = m => /^MDZHB \d{2} \d{3} [A-Z]*(\s\d{2}){4}$/.test(m);