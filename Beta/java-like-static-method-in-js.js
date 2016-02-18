// http://www.codewars.com/kata/java-like-static-method-in-js/solutions/javascript/me

const addStaticMethod = (c, n, m) => c.prototype[n] = c[n] = m.bind(c);