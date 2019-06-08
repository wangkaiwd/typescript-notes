interface Person {
  firstName: string,
  lastName: string
}

const greeter = (person: Person) => {
  return `Hello, ${person.firstName} ${person.lastName}`;
};

const person = {firstName: 'wang', lastName: 'kaiwd'};

greeter(person);
