// http://www.codewars.com/kata/80-s-kids-number-1-how-many-licks-does-it-take/solutions/javascript/me

function totalLicks(env) {
  let d = 252;
  let hardest = { name: null, value: 0 };
  
  for (let i in env) {
    d += env[i];
    if (env[i] > hardest.value) {
      hardest.name = i;
      hardest.value = env[i];
    }
  }
  let output = `It took ${d} licks to get to the tootsie roll center of a tootsie pop.`; 
  return hardest.name ? output + ` The toughest challenge was ${hardest.name}.` : output;
}