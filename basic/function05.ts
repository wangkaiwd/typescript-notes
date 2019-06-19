// 实现一个函数reverse,接收字符串或者数字

// es6实现：
// const reverse: (x: string | number) => string | number = (x: string | number): string | number => {
//   if (typeof x === 'string') {
//     return x.split('').reverse().join('')
//   } else if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''))
//   }
// }
// console.log(reverse(123))
// console.log(reverse('abc'))
// console.log(reverse(532))

// es6简写：
// typescript 会自动推断返回值类型
// const reverse = (x: string | number) => {
//   if (typeof x === 'string') {
//     return x.split('').reverse().join('')
//   } else if (typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''))
//   }
// }
// console.log(reverse(123))
// console.log(reverse('abc'))

// es5重载实现
// TypeScript会优先从最前面的函数定义开始匹配
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}
console.log(reverse(132))
console.log(reverse('abc'))