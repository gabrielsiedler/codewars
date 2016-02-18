// http://www.codewars.com/kata/the-hashtag-generator/solutions/javascript/me

function generateHashtag (str) {
  var hashTag = '';
  
  str.split(' ').forEach(function (s) {
    if(s) { 
      hashTag += s[0].toUpperCase() + s.slice(1);
    }
  });
  
  return (hashTag.length > 140 || hashTag.length === 0) ? false : '#' + hashTag;
}