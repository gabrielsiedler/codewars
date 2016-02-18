// http://www.codewars.com/kata/anagram-or-not/solutions/javascript/me

function isAnagram(test, original){
  test = test.replace(/[\W]/g,'').split('').map(v => v.toLowerCase()).join('')
  original = original.replace(/[\W]/g,'').split('').map(v => v.toLowerCase()).join('');

  if (test.length !== original.length) return false;
 
  for (let letter of original) {
    test = test.replace(letter, '');
  }
  return test.length === 0;
}