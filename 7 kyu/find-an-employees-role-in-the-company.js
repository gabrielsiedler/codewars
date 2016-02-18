// http://www.codewars.com/kata/find-an-employees-role-in-the-company/solutions/javascript/me

const findEmployeesRole = (name) => {
  name = name.split(' ');
  let employee = employees.filter(e => e.firstName === name[0] && e.lastName === name[1]);
  return employee.length ? employee[0].role : 'Does not work here!';
};