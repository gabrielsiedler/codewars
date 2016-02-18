// http://www.codewars.com/kata/email-address-obfuscator/solutions/javascript/me

obfuscate = function(email) {
  return email.replace(/@/, ' [at] ').replace(/\./g, ' [dot] ');
}