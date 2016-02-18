// http://www.codewars.com/kata/two-to-one/solutions/javascript/me

const longest = (s1, s2) => {
  let ss = (s1 + s2).split('').sort();
  return ss.filter((v,i) => ss.lastIndexOf(v) === i).join('');
};