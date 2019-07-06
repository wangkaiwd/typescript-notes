interface Person {
  firstName: string,
  lastName: string
}

const greeter = (person: Person) => {
  return `Hello, ${person.firstName} ${person.lastName}`;
};

const person = { firstName: 'name1', lastName: 'name2' };

console.log(greeter(person));
export {};
