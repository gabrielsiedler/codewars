// http://www.codewars.com/kata/number-hashtag/solutions/javascript/me

const getHashtags = post => {
  const regex = /\B#+(\w+)(\s|$)/g;
  let output = [], res = '';
  while(res = regex.exec(post)) {
    output.push(res[1]);
  }
  return output;
};
  