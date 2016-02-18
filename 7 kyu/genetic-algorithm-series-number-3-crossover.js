// http://www.codewars.com/kata/genetic-algorithm-series-number-3-crossover/solutions/javascript/me

const crossover = (chromosome1, chromosome2, index) => {
  chromosome1 = chromosome1.split('');
  chromosome2 = chromosome2.split('');

  let auxiliary = chromosome2.slice(index, chromosome2.length);
  auxiliary = chromosome1.splice(index, chromosome1.length, ...auxiliary);
  chromosome2.splice(index, chromosome2.length, ...auxiliary);

  return [chromosome1.join(''), chromosome2.join('')];
};