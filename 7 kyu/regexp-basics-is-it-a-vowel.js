// http://www.codewars.com/kata/regexp-basics-is-it-a-vowel/solutions/javascript/me

Object.assign(String.prototype, {
  vowel () {
    return /^[aeiou]$/i.test(this);
  }
});