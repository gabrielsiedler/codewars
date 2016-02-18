// http://www.codewars.com/kata/binary-genetic-algorithms/solutions/javascript/me

class GeneticAlgorithm {

  generate (length) {
    return Array(length + 1).join('0').split('').map(v => Math.round(Math.random())).join('');
  }

  select (population, fitnesses) {
    let partialWeightenedProbability;

    const _selectItemFromArray = (array, fitnessesSum) => {
      let roulette = Math.random() * fitnessesSum;

      for (let item of array) {
        if (roulette <= item.weightenedProbability) {
          return item;
        }
      }
    };

    const _calculateWeightenedProbability = (population) => {
      partialWeightenedProbability = 0;

      return population.map(chromosome => {
        partialWeightenedProbability += chromosome.probability;
        chromosome.weightenedProbability = partialWeightenedProbability;
        return chromosome;
      });
    };

    let totalFitnesses = fitnesses.reduce((x,y) => x + y);

    population = population.map((chromosome,index) => {
      return {
        value: chromosome,
        probability: fitnesses[index]/totalFitnesses,
      };
    });
    population = _calculateWeightenedProbability(population);
    population = population.sort((chromosome1, chromosome2) => chromosome1.weightenedProbability - chromosome2.weightenedProbability);

    let chosen = [];
    chosen[0] = _selectItemFromArray(population, partialWeightenedProbability);

    population = population.filter(chromosome => chromosome.weightenedProbability !== chosen[0].weightenedProbability);
    population = _calculateWeightenedProbability(population);

    chosen[1] = _selectItemFromArray(population, partialWeightenedProbability);

    return chosen.map(chromosome => chromosome.value);
  }

  mutate (chromosome, p) {
    return chromosome.split('').map(bit => (Math.random() < p) ? (bit === '1' ? '0' : '1') : bit).join('');
  }

  crossover (chromosome1, chromosome2) {
    let crossoverPoint = Math.floor(Math.random() * (chromosome1.length-1) + 1);
    chromosome1 = chromosome1.split('');
    chromosome2 = chromosome2.split('');

    let auxiliary = chromosome2.slice(crossoverPoint, chromosome2.length);
    auxiliary = chromosome1.splice(crossoverPoint, chromosome1.length, ...auxiliary);
    chromosome2.splice(crossoverPoint, chromosome2.length, ...auxiliary);

    return [chromosome1.join(''), chromosome2.join('')];
  }

  run (fitness, length, p_c, p_m, iterations) {
    const POPULATION_SIZE = 100;
    let custom_iterations = 1000;
    let population, chosen;
    let found;
    let newPopulation = Array(POPULATION_SIZE + 1).join('0').split('').map(() => this.generate(length));

    while (custom_iterations--) {
      population = newPopulation.slice();
      newPopulation = [];

      while (newPopulation.length < population.length) {
        chosen = this.select(population, population.map(chromosome => fitness(chromosome)));
        newPopulation.push(chosen[0]);
        newPopulation.push(chosen[1]);

        if (Math.random() < p_c) {
          chosen = this.crossover(...chosen);
        }

        chosen[0] = this.mutate(chosen[0], p_m);
        chosen[1] = this.mutate(chosen[1], p_m);

        newPopulation.push(chosen[0]);
        newPopulation.push(chosen[1]);

        if (fitness(chosen[0]) === 1 || fitness(chosen[1]) === 1) {
          custom_iterations = 0;
          break;
        }
      }
    }

    newPopulation = newPopulation.map((chromosome) => {
      return {
        value: chromosome,
        fitness: fitness(chromosome)
      };
    });

    newPopulation = newPopulation.sort((chromosome1, chromosome2) => chromosome2.fitness - chromosome1.fitness);

    return newPopulation[0].value;
  }
}
