// http://www.codewars.com/kata/multiply-two-numbers-a-number-of-times/solutions/javascript/me

const multiplyBy = (x,y,n) => {
  let v = x*y;
  let output = [v];
  while(--n){
    output.push(v = v * y);
  }  
  return output;
};