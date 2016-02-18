// http://www.codewars.com/kata/naughty-or-nice/solutions/javascript/me

function getNiceNames(people){
  return people.filter(p => p.wasNice).map(p => p.name);
}

function getNaughtyNames(people){
   return people.filter(p => !p.wasNice).map(p => p.name);
}