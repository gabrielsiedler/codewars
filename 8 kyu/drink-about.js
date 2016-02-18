// http://www.codewars.com/kata/drink-about/solutions/javascript/me

const peopleWithAgeDrink = age => `drink ${age<=13 ? 'toddy' : (age<=17 ? 'coke' : (age<=20 ? 'beer' : 'whisky'))}`;