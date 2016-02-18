// http://www.codewars.com/kata/rot13-1/solutions/javascript/me

function rot13(message){
  var output = '';

  message.split('').forEach(function (letter) {
    var flatLetter = letter.toLowerCase().charCodeAt(0) - 96;

    if(flatLetter < 0 || flatLetter > 26) {
      output += letter;
    } else {
      var conversion = ((flatLetter + 13) % 26);

      if (conversion === 0) { conversion = 26; };

      var aux = String.fromCharCode(conversion + 96);

      output += (letter === letter.toUpperCase()) ? aux.toUpperCase() : aux;
    }
  })

  return output;
}
