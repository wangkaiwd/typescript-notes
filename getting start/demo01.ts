const greeter = (person) => {
  return `Hello, ${person}`;
};
let person = 'Jane User';

document.body.innerHTML = greeter(person);
