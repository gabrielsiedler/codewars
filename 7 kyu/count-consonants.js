// http://www.codewars.com/kata/count-consonants/solutions/javascript/me

const consonantCount = s => s.replace(/[^bcdfghjklmnpqrstvwxyz]/gi,'').length;