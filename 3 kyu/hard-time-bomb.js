// http://www.codewars.com/kata/hard-time-bomb/solutions/javascript/me

var cut = Object.keys(global).filter(k => (typeof global[k] === 'number'))[0];

Bomb.CutTheWire(global[cut]);