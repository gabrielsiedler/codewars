// http://www.codewars.com/kata/evaluate-mathematical-expression

const calc = s => {
  s = s.replace(/\s/g,'');
  s = s.replace(/--/g,'+');

  let exec;

  let rParentesis = /\(([^(]*?)\)/;
  let rTerm = /(.*[^*/]\b)([+-])(.+)/;
  let rFactor = /(.+)([*/])(.+)/;
  let rDigit = /^[-+]?\d+(\.\d+)?$/;

  /* Parentesis */
  while (exec = rParentesis.exec(s)) {
    s = s.replace(rParentesis, calc(exec[1]));
  }

  /* Sum and Subtraction */
  while (exec = rTerm.exec(s)) {
    let leftSide = calc(exec[1]);
    let rightSide = calc(exec[3]);
    let operand = exec[2];

    let result = operand === '+' ? +leftSide + +rightSide : +leftSide - +rightSide;
    s = s.replace(rTerm, result);
  }

  /* Multiplication and division */
  while (exec = rFactor.exec(s)) {
    let leftSide = calc(exec[1]);
    let rightSide = calc(exec[3]);
    let operand = exec[2];

    let result = operand === '*' ? +leftSide * +rightSide : +leftSide / +rightSide;
    s = s.replace(rFactor, result);
  }

  /* Value */
  if (exec = rDigit.exec(s)) {
    return Number(exec[0]);
  }

  return s;
};
