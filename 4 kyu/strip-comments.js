// http://www.codewars.com/kata/strip-comments/solutions/javascript/me

function solution(input, markers){
  markers.forEach(function (m) {
    var re = new RegExp(' ?[' + m + '].*?(\\n|$)', 'g');
    var match = re.exec(input);
    input = (input.length - match[0].length === match.index) ? input.replace(re, '') : input.replace(re, '\n');
  })

  return input;
}