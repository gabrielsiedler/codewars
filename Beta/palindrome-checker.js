// http://www.codewars.com/kata/palindrome-checker/solutions/javascript/me

const isPalindrome = str => {
  if (!str) return false;
  str = str.replace(/\W/g,'');
  for (let i = 0,j = str.length-1; i<j; i++, j--) {
    if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false;
    }
  }
  return true;
};