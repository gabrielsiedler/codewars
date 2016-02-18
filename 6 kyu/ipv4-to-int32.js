// http://www.codewars.com/kata/ipv4-to-int32/solutions/javascript/me

var toOctet = function (val) {
 var bin = (val >>> 0).toString(2);

 while(bin.length < 8) {
   bin = '0' + bin
 }

 return bin;
}

function ipToInt32(ip){
  var split = ip.match(/(\d+)\.(\d+)\.(\d+)\.(\d+)/);
  return parseInt(toOctet(split[1]) + toOctet(split[2]) + toOctet(split[3]) + toOctet(split[4]), 2);
}