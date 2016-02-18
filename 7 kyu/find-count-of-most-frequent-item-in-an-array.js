// http://www.codewars.com/kata/find-count-of-most-frequent-item-in-an-array/solutions/javascript/me

function mostFrequentItemCount(collection) {
  collection.sort();
  let current = null;
  let max = 0;
  let count = 1;

  collection.forEach(i => {
    if (i===current) {
      count++;
    } else {
      if(count > max) {
        max = count;
      }
      count = 1;
      current = i;
    }
  });

  return max;
}