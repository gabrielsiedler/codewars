// http://www.codewars.com/kata/sum-strings-as-numbers/solutions/javascript/me

function sumStrings(a,b) { 
  var aIndex = a.length-1;
  var bIndex = b.length-1;
  var plusOne = 0;
  var res = [];

  while (aIndex >= 0 || bIndex >= 0) {
    var total = 0;
    if(aIndex >= 0) {
      total += parseInt(a[aIndex--]);
    }

    if(bIndex >= 0) {
      total += parseInt(b[bIndex--]);
    }

    total += plusOne;

    res.unshift((total > 9) ? total % 10 : total);

    plusOne = (total > 9) ? 1 : 0;
  }

  if(plusOne) {
    res.unshift(1);
  }

  if(res[0] == 0) {
    res.shift();
  }

  return res.join('');
}