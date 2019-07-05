var greeter = function (person) {
    return "Hello, " + person.firstName + " " + person.lastName;
};
var person = { firstName: 'name1', lastName: 'name2' };
console.log(greeter(person));
