// http://www.codewars.com/kata/unique-in-order/solutions/javascript/me

const uniqueInOrder = it => {
  var lastOccurence = null;

  if (!Array.isArray(it)) { it = it.toString().split(''); }
  
  return it.filter(element => {
    if (element !== lastOccurence) {
      lastOccurence = element;
      return true;
    }
  });
};

// alternative solution
var uniqueInOrder=function(iterable){
  var output = [];
  var lastOccurence = null;

  if(!Array.isArray(iterable)) {
    iterable = iterable.toString().split('');
  }
  
  iterable.forEach(function (element) {
    if(element !== lastOccurence) {
      lastOccurence = element;
      output.push(element);
    }
  })

  return output;
}