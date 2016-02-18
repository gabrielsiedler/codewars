// http://www.codewars.com/kata/genetic-algorithm-series-number-4-get-population-and-fitnesses/solutions/javascript/me

const mapPopulationFit = (population, fitness) => {
  return population.map(c => Object({
    chromosome: c,
    fitness: fitness(c)
  }));
};