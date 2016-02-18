// http://www.codewars.com/kata/get-planet-name-by-id/solutions/javascript/me

const getPlanetName = id => {
  let planets = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'];
  return planets[id-1];
}
