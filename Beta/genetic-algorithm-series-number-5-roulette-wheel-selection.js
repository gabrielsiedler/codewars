// http://www.codewars.com/kata/genetic-algorithm-series-number-5-roulette-wheel-selection/solutions/javascript/me

const select = (population, fitnesses) => {
  let n = Math.random() * fitnesses.reduce((p,n) => p+n);
  for (let i = 0; i < population.length; i++){
    n -= fitnesses[i];
    if (n <= 0) {
      return population[i];
    }
  }
};