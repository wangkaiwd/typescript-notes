// 目前小结：
//    1. 将css样式进行了初步的搭建
//    2. 动态创建计算器的按钮

// 接下来的计划：
//    1. 做出计算界面
//    2. 实现加减乘除四则运算

interface ResultMap {
  [key: string]: number
}
const texts: string[] = ['clear', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const createButton = (content: string, className?: string): void => {
  const button: HTMLButtonElement = document.createElement('button');
  const div: HTMLElement = document.createElement('div');
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
const createResultBox = () => {
  const div: HTMLElement = document.createElement('div');
  div.classList.add('result-box');
  div.innerText = '0';
  (<HTMLElement>document.querySelector('.calculator')).appendChild(div);
};
const removeZero = (result: string) => {
  if (result.indexOf('0') === 0 && result.length > 1) {
    return result.slice(1);
  }
  return result;
};
const calculateResult = (number1: number, number2: number, operator: string) => {
  const resultMap: ResultMap = {
    '+': number1 + number2,
    '-': number1 - number2,
    '×': number1 * number2,
    '÷': number1 / number2
  };
  return resultMap[operator];
};
const bindEvent = () => {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.button');
  // !: https://stackoverflow.com/questions/43951090/typescript-object-is-possibly-null
  // 当我们确认当前值既不是null也不是undefined但是编译器不知道的时候，你能使用non-null(非空)断言操作符!来向编译
  // 器传达这个信息。
  const result: HTMLElement = document.querySelector<HTMLElement>('.result-box')!;
  let cache: number = 0;
  let operator: string;
  buttons.forEach((button: HTMLButtonElement) => {
    button.addEventListener('click', () => {
      const text: string = button.innerText;
      // 并不用单独判断每一个值，可以将相同类型的值组成一个数组或者字符串，使用字符串的方法来进行操作
      if ('0123456789'.indexOf(text) > -1) {
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
texts.forEach((item: string): void => {
  createButton(item, `item-${item}`);
});
bindEvent();


