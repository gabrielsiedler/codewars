// http://www.codewars.com/kata/strip-url-params/solutions/javascript/me

function stripUrlParams(url, paramsToStrip){
  var broke = url.split('?');
  if(!broke[1]) return url;

  var obj = {};
  var url = broke[0];
  broke[1].match(/([^&?]+)=([^&?]+)/g).forEach(function (m) {
    var aux = m.split('=');

    if(obj[aux[0]]) return;

    paramsToStrip = paramsToStrip || [];
    var toExclude = paramsToStrip.some(function (p) {
        return p === m[0];
    });

    if(!toExclude) {
      obj[aux[0]] = aux[1];
    }
  });

  if(!Object.keys(obj).length) return url;

  var args = '';
  Object.keys(obj).forEach(function (p) {
    if(args.length) args += '&';
    args += p + '=' + obj[p];
  }); 

  return url + '?' + args;
}