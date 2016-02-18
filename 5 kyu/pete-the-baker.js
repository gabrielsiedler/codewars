// http://www.codewars.com/kata/pete-the-baker/solutions/javascript/me

function cakes(recipe, available) {
  var quantity = Number.POSITIVE_INFINITY;
  Object.keys(recipe).forEach(function (field) {
    if(!available[field] || available[field] < recipe[field]) {
      quantity = 0;
    } else {
      var intermediate = Math.floor(available[field]/recipe[field]);
      if(intermediate < quantity) {
        quantity = intermediate;
      }
    }
  });
  
  return quantity;
}