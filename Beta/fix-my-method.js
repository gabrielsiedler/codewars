// http://www.codewars.com/kata/fix-my-method/solutions/javascript/me

function myFunction() {
  var MyObject = {
     objProperty: "string",
     objMethod: function() {
         return this.objProperty;
    }
     }
  return MyObject.objMethod();
};