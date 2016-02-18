// http://www.codewars.com/kata/ruplesjs-number-1-n-times-do/solutions/javascript/me

Object.assign(Number.prototype, {
  times (fn) {
    if (!fn) {
      throw Error('No function specified');
    }
    
    let i = Math.round(this);   
    while(i-- > 0) {
      fn();
    }
  }
});