// http://www.codewars.com/kata/invalid-login-bug-fixing-number-11/solutions/javascript/me

function validate(username, password){
  var regex = /\/\/|\|\|/;
  if(regex.test(username) || regex.test(password)) {
    return 'Wrong username or password!';
  }
  
  var database = new Database();
  return database.login(username, password);
}