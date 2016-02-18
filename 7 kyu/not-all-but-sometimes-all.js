// http://www.codewars.com/kata/not-all-but-sometimes-all/solutions/javascript/me

const remove = (str, what) => {
  for (let key of Object.keys(what)) {
    while (what[key]--) {
      str = str.replace(new RegExp(key), '');
    }  
  }
  return str;
}
