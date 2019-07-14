class Human {
  private _age: number;

  constructor (public name: string, age: number) {
    this.age = age;
  }

  get age (): number {
    return this._age;
  }

  set age (newAge: number) {
    if (newAge < 0) {
      console.warn('年龄不能小于0');
      this._age = 0;
    } else {
      this._age = newAge;
    }
  }

  say (): void {
    console.log(`I am speaking`);
  }
}
const human = new Human('wagkaiwd', 12);
human.age = -1;
console.log('human', human);
export {};
