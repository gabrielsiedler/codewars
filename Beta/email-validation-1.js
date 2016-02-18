// http://www.codewars.com/kata/email-validation-1/solutions/javascript/me

const validate = input => /^[a-z]\w*@([\w\-]+\.)+[\w]+$/.test(input);