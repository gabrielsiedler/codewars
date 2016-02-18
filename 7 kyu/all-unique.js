// http://www.codewars.com/kata/all-unique/solutions/javascript/me

const hasUniqueChars = function (str){
  let depot = {}, duplicated = false;
  str = str.split('');
  
  for (i = 0; i<str.length && duplicated === false; i++) {
    if(depot[str[i]]) { duplicated = true; }
      
    depot[str[i]] = true;
  }
  
  return !duplicated;
}