// http://www.codewars.com/kata/simpler-interactive-interpreter

class Interpreter {
  constructor () {
    this.variables = {};
  }

  input (s) {
    s = s.replace(/\s/g,'');
    s = s.replace(/--/g,'+');

    let exec;

    let rAttribution = /^(.+)=(.+)$/i;
    let rParentesis = /\(([^(]*?)\)/;
    let rTerm = /(.*[^*/]\b)([+-])(.+)/;
    let rFactor = /(.+)([*/%])(.+)/;
    let rDigit = /^[-+]?\d+(\.\d+)?$/;
    let rVariable = /^[_a-z][_a-z0-9]*$/;

    /* Attribution */

    if (exec = rAttribution.exec(s)) {
      let c = this.input(exec[2]);
      this.variables[exec[1]] = c;
      return c;
    }

    /* Parentesis */
    while (exec = rParentesis.exec(s)) {
      s = s.replace(rParentesis, this.input(exec[1]));
    }

    /* Sum and Subtraction */
    while (exec = rTerm.exec(s)) {
      let leftSide = this.input(exec[1]);
      let rightSide = this.input(exec[3]);
      let operand = exec[2];

      let result = operand === '+' ? +leftSide + +rightSide : +leftSide - +rightSide;
      s = s.replace(rTerm, result);
    }

    /* Multiplication and division */
    while (exec = rFactor.exec(s)) {
      let leftSide = this.input(exec[1]);
      let rightSide = this.input(exec[3]);
      let operand = exec[2];

      let result = operand === '*' ? +leftSide * +rightSide : operand === '/' ? +leftSide / +rightSide : +leftSide % +rightSide;
      s = s.replace(rFactor, result);
    }

    /* Value */
    if (exec = rDigit.exec(s)) {
      return Number(exec[0]);
    }

    /* Variable */
    if (exec = rVariable.exec(s)) {
      let variable = this.variables[exec[0]];

      if (!variable) {
        throw `ERROR: Invalid identifier. No variable with name '${s}' was found.`;
      }

      return variable;
    }

    return s;
  }
}
