// http://www.codewars.com/kata/generate-html-links/solutions/javascript/me

const generateMenu = a => a.map(i => `<a href="${i.url}">${i.text}</a>`).join('');