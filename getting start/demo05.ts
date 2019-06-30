class Student {
  fullName: string;

  constructor (public firstName, public lastName) {
    this.fullName = `${firstName} ${lastName}`;
  }
}
interface Person {
  firstName: string,
  lastName: string
}
const greeter = (person: Person) => {
  return `Hello, ${person.firstName} ${person.lastName}`;
};
const person = new Student('Type', 'Script');
document.body.innerHTML = greeter(person);
