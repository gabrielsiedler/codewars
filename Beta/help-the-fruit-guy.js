// http://www.codewars.com/kata/help-the-fruit-guy/solutions/javascript/me

const removeRotten = b => b && b.map(f => f.replace('rotten','').toLowerCase()) || [];