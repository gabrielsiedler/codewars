// http://www.codewars.com/kata/find-the-middle-element/solutions/javascript/me

const gimme = arr => arr.map((v,i) => Object({ v: v, i: i })).sort((a,b) => a.v-b.v)[1].i;