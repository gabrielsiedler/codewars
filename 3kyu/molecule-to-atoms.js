// http://www.codewars.com/kata/molecule-to-atoms

function parseMolecule(formula) {
  var stack = [];
  var multiplier = 1;
  var output = {};
  var elementMultiplier = false;

  formula = formula.match(/([A-Z][a-z]?)|(\d+)|([\[\]\(\)\{\}])/g);

  formula.reverse().forEach(function (element) {
    if(/\d+/.test(element)) {
      multiplier *= parseInt(element);
      stack.push(parseInt(element));
      elementMultiplier = true;
    } else if (/[\]\)\}]/.test(element)) {
      elementMultiplier = false;
    } else if (/[\[\(\{}]/.test(element)) {
      var remove = stack.pop();
      multiplier /= remove;
    } else if (/[A-Z][a-z]?/.test(element)) {
      if(!output[element]) { output[element] = 0; }

      output[element] += multiplier;

      if(elementMultiplier) {
        var remove = stack.pop();
        multiplier /= remove;
        elementMultiplier = false;
      }
    }
  });

  return output;
}
