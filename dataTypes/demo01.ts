// null 和 undefined
const delta1: null = null;
const delta2: undefined = undefined;

// number:
const delta3: number = 1;

// string:
const delta4: string = 'string';

// boolean
const delta5: boolean = true;

// object
const delta6: object = { name: 'Dog' };
// array
// 写法1：
const delta7: string[] = ['1', '2', '3'];
// 写法2：
const delta8: Array<string> = ['1', '2', '3'];
//null undefined 1 string true { name: 'Dog' }
console.log(delta1, delta2, delta3, delta4, delta5, delta6, delta7, delta8);
