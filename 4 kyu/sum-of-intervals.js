// http://www.codewars.com/kata/sum-of-intervals/solutions/javascript/me

function sumIntervals(intervals){

  if(!intervals.length) return 0;

  intervals = intervals.sort(function (a,b) {
    return a[0] - b[0];
  })

  var total = 0;
  var building = null;

  for(i=0; i<intervals.length; i++) {

    if (i === intervals.length-1) {
      if (building) {
        total += building[1] - building[0];
      } else {
        total += intervals[i][1] - intervals[i][0];
      }

      return total;
    }

    var next = intervals[i+1];

    if(!building) {
      building = intervals[i];
    }
    
    if(building[1] < next[0]) {
      total += building[1] - building[0];
      building = null;
    } else if ((building[1] === next[1]) || (building[1] > next[0] && building[1] < next[1])) {
      building[1] = next[1];
    }
  }

  if(building) {
    total += building[1] - building[0];
  }
}
