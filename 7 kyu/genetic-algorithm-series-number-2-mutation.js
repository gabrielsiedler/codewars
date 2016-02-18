// http://www.codewars.com/kata/genetic-algorithm-series-number-2-mutation/solutions/javascript/me

const mutate = (chromosome, p) => chromosome.split('').map(bit => (Math.random() < p) ? (bit === '1' ? '0' : '1') : bit).join('');