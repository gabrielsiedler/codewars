// http://www.codewars.com/kata/comfortable-words/solutions/javascript/me

const comfortable_word = word => !/\s{2}|\w{2}/.test(word.replace(/[qwertasdfgzxcvb]/g,' '));