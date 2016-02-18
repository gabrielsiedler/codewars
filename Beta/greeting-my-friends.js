// http://www.codewars.com/kata/greeting-my-friends/solutions/javascript/me

const greetingForAllFriends = friends => {
  if (!friends || !friends.length) return null;
  
  return friends.map(friend => `Hello, ${friend}!`);
};