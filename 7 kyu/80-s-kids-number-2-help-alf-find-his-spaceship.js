// http://www.codewars.com/kata/80-s-kids-number-2-help-alf-find-his-spaceship/solutions/javascript/me

const findSpaceship = m => {
  if (!m || m.indexOf('X') === -1) return 'Spaceship lost forever.';
  let X = m.replace(/\n/g,'').indexOf('X');
  let l = m.indexOf('\n');
  return [X%l,m.split('\n').length - 1 - Math.floor(X/l)]
};