class Student {
  fullName: string;
  // public会同时在实例上添加相应的属性： this.firstName = firstName; this.middleInitial = middleInitial; this.lastName = lastName
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}
interface Person {
  firstName: string,
  lastName: string
}
const greeter = (person: Person) => {
  return `Hello, ${person.firstName} ${person.lastName}`;
};
const person = new Student('Jane', 'M.', 'User');
greeter(person);
