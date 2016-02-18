// http://www.codewars.com/kata/objectify-a-url-query-string/solutions/javascript/me

function convertQueryToMap(query) {
  var output = {};

  query.split('&').forEach(function (q) {
    if(q.length === 0) { return {}; }
    
    var resMatch = q.match(/([^&]+)=([^&]+|)?/);
    var keyList = resMatch[1].match(/([^.]+)/g);
    var dinamicKey = output;

    keyList.forEach(function (m, i) {
      if(dinamicKey[m] === undefined) {
        dinamicKey[m] = {};
      }

      if(i === keyList.length-1) {
        dinamicKey[m] = (resMatch[2] === undefined) ? '' : decodeURIComponent(resMatch[2]);
      } else {
        dinamicKey = dinamicKey[m];
      }
    })
  });

  return output;
}