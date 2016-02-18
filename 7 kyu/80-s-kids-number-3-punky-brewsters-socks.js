// http://www.codewars.com/kata/80-s-kids-number-3-punky-brewsters-socks/solutions/javascript/me

const getSocks = (name, socks) => {
  socks = socks.sort();
  if (name === 'Punky') {
    for (let i = 0; i < socks.length-1; i++) {
      if (socks[i] !== socks[i+1])
        return [socks[i],socks[i+1]];
    }
  } else {
    for (let i = 0; i < socks.length-1; i++) {
      if (socks[i] === socks[i+1])
        return [socks[i],socks[i+1]];
    }
  }
  return [];
};