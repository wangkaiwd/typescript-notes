class Student {
  fullName: string;
  // public会同时在实例上添加相应的属性：
  // 相当于如下代码:
  // firstName: string;
  // middleInitial: string;
  // lastName: string;
  //
  // constructor (firstName: string, middleInitial: string, lastName: string) {
  //   this.firstName = firstName;
  //   this.middleInitial = middleInitial;
  //   this.lastName = lastName;
  // }
  constructor (public firstName: string, public middleInitial: string, public lastName: string) {
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
console.log(greeter(person)); // hello, Jane User
