// http://www.codewars.com/kata/international-morse-code-encryption/solutions/javascript/me

function encryption(message) {
  return message.
    split('').
    map(c => (CHAR_TO_MORSE[c] || ' ')).
    join(' ');
}