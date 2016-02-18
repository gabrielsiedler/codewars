// http://www.codewars.com/kata/string-templates-bug-fixing-number-5/solutions/javascript/me

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}