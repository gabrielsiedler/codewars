// http://www.codewars.com/kata/localize-the-barycenter-of-a-triangle/solutions/javascript/me

const barTriang = (p1, p2, p3) => [+((p1[0] + p2[0] + p3[0]) / 3).toFixed(4), +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4)];