interface Human {
  name: string;
  age: number;
}
// this参数是假的，只是用来指定函数中this的类型
const fn = function (this: Human, x: number, y: number): number {
  console.log(this, x + y);
  return x + y;
};
// 不能将void类型分配给为Human类型的this
// fn(1, 2); //TS2684: The 'this' context of type 'void' is not assignable to method's 'this' of type 'Human'.
fn.call({ name: 'wangkai', age: 12 }, 2, 1);

export {};
