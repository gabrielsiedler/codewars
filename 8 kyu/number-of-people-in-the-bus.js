// http://www.codewars.com/kata/number-of-people-in-the-bus/solutions/javascript/me

var number = function(busStops){ 
  var people = 0;
  busStops.forEach(function (stop) {
    people += stop[0];
    people -= stop[1];
  });
  
  return people;
}