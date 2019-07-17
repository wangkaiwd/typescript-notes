class Human {
  name: string;
  age: number;
  static think: string = '思考人生';

}
const human = new Human();
// console.log(human.think);//TS2576: Property 'think' is a static member of type 'Human'
// 要通过类名来直接调用
console.log(Human.think); // 思考人生
export {};
