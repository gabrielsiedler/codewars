// http://www.codewars.com/kata/ghostbusters-whitespace-removal/solutions/javascript/me

const ghostBusters = b => / /.test(b) ? b.replace(/ /g,'') : "You just wanted my autograph didn't you?";