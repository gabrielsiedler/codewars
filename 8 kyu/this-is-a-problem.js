// http://www.codewars.com/kata/this-is-a-problem/solutions/javascript/me

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {
      name: this.firstName + ' ' + this.lastName,
      firstName: this.firstName,
      lastName: this.lastName
    };
}