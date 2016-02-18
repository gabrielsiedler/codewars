// http://www.codewars.com/kata/remove-zeros/solutions/javascript/me

function removeZeros(array) {
  for(var i = array.length-1; i >= 0; i--) {
    if(array[i] === 0 || array[i] === '0') {
      j = i;
      while((j+1 < array.length) && (array[j+1] !== 0 && array[j+1] !== '0')) { 
        var aux = array[j];
        array[j] = array[j+1];
        array[j+1] = aux;
        j++;
      }
    }
  }

  return array;
}