// http://www.codewars.com/kata/printer-errors/solutions/javascript/me

const printerError = s => `${s.replace(/[a-m]/g,'').length}/${s.length}`