// http://www.codewars.com/kata/width-height-ratio/solutions/javascript/me

const mdc = (m, n) => {
  let x = Math.min(Math.abs(m),Math.abs(n));

  while (m%x !== 0 || n%x !== 0) {
     x--;
   }

   return x;
}

const calculateRatio = (w, h) => {
  if(w === 0 || h === 0) {
    throw 'Error';
  }
  
  const m = mdc(w,h);
  return `${w/m}:${h/m}`;
}