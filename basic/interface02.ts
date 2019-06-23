interface ThinkProp {
  most: string,
  secondary: string
}
interface HobbyProp {
  id: number,
  item: string
}
interface PersonProp {
  name: string,
  age: number,
  run: () => void,
  // eat: (a: string, b: string) => void;
  eat(a: string, b: string): void,
  hobby: Array<HobbyProp>,
  think: ThinkProp
}
const object: PersonProp = {
  name: 'wangkai',
  age: 18,
  run: function () {
    console.log('run')
  },
  eat: function (a, b) {
    const result = `eat ${a} and ${b}`
    console.log(result)
  },
  hobby: [{ id: 1, item: 'hobby1' }, { id: 2, item: 'hobby2' }],
  think: { most: 'life', secondary: 'others' }
}
console.log(object)