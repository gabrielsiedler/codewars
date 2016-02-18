// http://www.codewars.com/kata/hangman/solutions/javascript/me

const hangman = (word, letters) => {
  for (let i = 0, mistakes = 7; i < letters.length && mistakes; i++) {
    let r = new RegExp(letters[i],'g');
    if(r.test(word)) {
      word = word.replace(r,'');
    } else {
      mistakes--;
    }
  }
  
  return word.length === 0; 
};