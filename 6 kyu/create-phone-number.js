// http://www.codewars.com/kata/create-phone-number/solutions/javascript/me

function createPhoneNumber(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}