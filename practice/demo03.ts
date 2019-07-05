// 目前小结：
//    1. 将css样式进行了初步的搭建
//    2. 动态创建计算器的按钮

// 接下来的计划：
//    1. 做出计算界面
//    2. 实现加减乘除四则运算

// 过程中碰到的小问题：如何输入÷,×符号
// 阻止自己的难点 ：
//    1. 如何生成按钮文字：可以通过将所有文字组成一个数组来进行遍历生成
//    2. 如何动态生成页面的布局：
//          a. 动态创建button,为button添加类 .button
//          b. 为了兼容布局，又为button外层嵌套了div,实现了等间距布局
//          c. 只想到了为单独有区别的按钮设置样式，导致样式处理困难
//    3. 如何处理运算逻辑：有那么多的按钮，我该如何根据点击不同按钮做不同的事情
// 比较优雅的解决方案：
//    1. 如何生成按钮文字：可以将按钮文字组合为二维数组，一维数组中的每一项插入到div中，二维数组中的每一项插入到button中，可以轻松生成对应的页面结构
//    2. 生成布局： 由于有了比较好的数组结构，所以布局生成比较容易，唯一需要注意的是在遍历生成的过程中为每一个按钮拼接了class，这样极大的方便了之后样式的修改
//    3. 如何处理运算逻辑： 可以将相同逻辑进行字符串或者数组分类，这样就可以通过indexOf或者includes等api来进行很好的区分处理

// 知识点：
//    1. ！非空断言操作符
//    2. 类型断言

// 优化点： 1. 使用事件代理  2. 通过class来组织代码 3. 注意js的精度丢失问题  4. 小数点问题
interface ResultMap {
  [key: string]: number
}
const texts: string[] = ['clear', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const createButton = (content: string, className?: string): void => {
  const button: HTMLButtonElement = document.createElement('button');
  const div: HTMLDivElement = document.createElement('div');
  button.innerText = content;
  button.classList.add('button');
  div.classList.add('col');
  if (className) {
    div.classList.add(className);
  }
  div.appendChild(button);
  // 强制断言为HTMLElement
  document.querySelector('.calculator')!.appendChild(div);
};
const appendButtons = (): void => {
  texts.forEach((item: string): void => {
    createButton(item, `item-${item}`);
  });
};
const createResultBox = () => {
  const div: HTMLDivElement = document.createElement('div');
  div.classList.add('result-box');
  div.innerText = '0';
  (<HTMLDivElement>document.querySelector('.calculator')).appendChild(div);
};
const removeZero = (result: string): string => {
  if (result.indexOf('0') === 0 && result.length > 1) {
    return result.slice(1);
  }
  return result;
};
const calculateResult = (number1: number, number2: number, operator: string): number => {
  const resultMap: ResultMap = {
    '+': number1 + number2,
    '-': number1 - number2,
    '×': number1 * number2,
    '÷': number1 / number2
  };
  return resultMap[operator];
};
const bindEvent = (): void => {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button');
  // !: https://stackoverflow.com/questions/43951090/typescript-object-is-possibly-null
  // 当我们确认当前值既不是null也不是undefined但是编译器不知道的时候，你能使用non-null(非空)断言操作符!来向编译
  // 器传达这个信息。
  const result: HTMLDivElement = document.querySelector<HTMLDivElement>('.result-box')!;
  let cache: number = 0;
  let operator: string;
  // 这里可以用事件代理来减少监听器，进行代码优化
  buttons.forEach((button: HTMLButtonElement) => {
    button.addEventListener('click', () => {
      const text: string = button.innerText;
      if ('0123456789.'.indexOf(text) > -1) {
        result.innerText = removeZero(result.innerText + text);
      } else if ('+-×÷'.indexOf(text) > -1) {
        operator = text;
        cache = Number(result.innerText);
        result.innerText = '0';
      } else if (text === '=') {
        cache = calculateResult(cache, Number(result.innerText), operator);
        result.innerText = cache.toString();
      } else {
        cache = 0;
        result.innerText = '0';
      }
    });
  });
};

createResultBox();
appendButtons();
bindEvent();


