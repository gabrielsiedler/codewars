// http://www.codewars.com/kata/a-bugs-trilogy-episode-1-let-math-dot-random-decide-your-future/solutions/javascript/me

const yourFutureCareer = _ => {
  var r = Math.random();
  return `${r <= 0.32 ? `FrontEnd` : (r <= 0.65 ? `BackEnd` : `Full-Stack`)} Developer`;
};