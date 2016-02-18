// http://www.codewars.com/kata/tip-calculator/solutions/javascript/me

const calculateTip = (amount, rating) => {
  let ratings = [['terrible',0],['poor',0.05],['good',0.1],['great',0.15],['excellent',0.2]];
  let matchedRating = ratings.filter(r => new RegExp('^' + r[0] + '$','i').test(rating));
  
  if(!matchedRating.length) return 'Rating not recognised';
  
  return Math.ceil(amount * matchedRating[0][1]);
}