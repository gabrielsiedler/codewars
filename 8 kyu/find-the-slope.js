// http://www.codewars.com/kata/find-the-slope/solutions/javascript/me

const slope = p => (p[2]-p[0]) === 0 ? 'undefined' : '' + (p[3]-p[1])/(p[2]-p[0]);