// http://www.codewars.com/kata/add-length/solutions/javascript/me

const addLength = str => str.split(' ').map(s => `${s} ${s.length}`);