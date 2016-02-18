// http://www.codewars.com/kata/are-you-playing-banjo/solutions/javascript/me

function areYouPlayingBanjo(name) {
  return /^r/i.test(name)
    ? name + ' plays banjo'
    : name + ' does not play banjo';
}