// http://www.codewars.com/kata/list-to-array/solutions/javascript/me

function listToArray(list) {
  let res = [];
  do {
    res.push(list.value);
  } while (list = list.next);
  return res;
}