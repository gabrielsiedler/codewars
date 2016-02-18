// http://www.codewars.com/kata/a-no-more-bugs-trilogy-episode-2-an-array-of-tasks/solutions/javascript/me

const myTasks = function () {
  return Array.from(arguments).map(v => {
    if (v === 'buy food') {
      return 'learn Node.js';
    }
    
    if (v === 'sleep') {
      return 'make a weather app';
    }
    
    return v;
  });
}

myTasks('make a calculator app','buy food','sleep','program a game')