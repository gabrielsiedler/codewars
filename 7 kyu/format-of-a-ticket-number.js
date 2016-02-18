// http://www.codewars.com/kata/format-of-a-ticket-number/solutions/javascript/me

const nbrValidTickets = tickets => tickets.filter(ticket => /^[a-z]\d[a-z]{4}$/i.test(ticket)).length;