// http://www.codewars.com/kata/search-json-for-any-key-value-pair/solutions/javascript/me

const getCharacters = (obj, key, val) => obj.characters.filter(x => RegExp('^' + val + '$','i').test(x[key]));