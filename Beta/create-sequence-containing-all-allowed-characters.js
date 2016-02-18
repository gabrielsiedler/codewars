// http://www.codewars.com/kata/create-sequence-containing-all-allowed-characters/solutions/javascript/me

const createSequence = (regex) => {
  let output = '';

  for (let i = 32; i < 127; i++) {
    let currentCharacter = String.fromCharCode(i);
    output += regex.test(currentCharacter) ? currentCharacter : '';
  }
  
  return output;
};