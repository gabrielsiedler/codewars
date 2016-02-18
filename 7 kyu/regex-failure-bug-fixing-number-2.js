// http://www.codewars.com/kata/regex-failure-bug-fixing-number-2/solutions/javascript/me

function filterWords(phrase){
  return phrase.replace(/(bad|mean|ugly|horrible|hideous)/ig,'awesome');
}