// 通过接口来定义函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = (source, subString) => {
  return source.indexOf(subString) > -1;
};

// 有时候我们也可以为函数定义自己的属性和方法
interface Counter {
  (start: number): string;

  interval: number;
  // 赋值表达式
  // reset: () => void;
  // 函数声明
  reset (): void;
}
function getCounter (): Counter {
  // 这里的<Counter> 是什么意思？而且这里为什么只能使用普通函数
  let counter = <Counter>function (start) {

  };
  counter.interval = 123;
  counter.reset = function () {

  };
  return counter;
}

