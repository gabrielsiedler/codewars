// http://www.codewars.com/kata/ruplesjs-number-2-string-delete/solutions/javascript/me

Object.assign(String.prototype, {
  delete () {
    let result = this.valueOf();
    for (let condition of arguments) {
      if (!/function|string|object/.test(typeof condition)) {
        continue;
      }
      let regex = condition;
      if (typeof condition === 'string') {
        regex = new RegExp(condition,'g');
      }
      result = result.replace(regex,'');
    }
    return result;
  }
});