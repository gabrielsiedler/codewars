// http://www.codewars.com/kata/lexical-this/solutions/javascript/me

var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) { person._friends = f}
  }
  return person;
}