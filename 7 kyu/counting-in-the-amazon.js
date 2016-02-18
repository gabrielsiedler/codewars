// http://www.codewars.com/kata/counting-in-the-amazon/solutions/javascript/me

const countArara = n => (Array(Math.floor(n/2)+1).join('adak ') + Array(Math.floor(n%2)+1).join('anane ')).slice(0,-1);
