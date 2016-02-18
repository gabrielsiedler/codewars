// http://www.codewars.com/kata/rgb-to-hex-conversion/solutions/javascript/me

function rgb(r, g, b){
  var _transform = function (number) {
    var converted = number.toString(16);
    if (number >= 255) {
      converted = 'FF';
    } else if (number < 0) {
      converted = '00';
    }

    return (converted.length === 1 ? '0' + converted : converted);
  };

  return (_transform(r) + _transform(g) + _transform(b)).toUpperCase();
}