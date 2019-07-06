let a: number = 123;
let newA: string = String(a);

console.log('number => string', a, newA);

let b: string = '123';
let newB: number = Number('123');
console.log('string => number', b, newB);

let c: number = 1;
let newC: boolean = Boolean(c);
console.log('number => boolean', c, newC);

let d: object = { name: 'wangkaiwd', age: 18 };
let newD: string = JSON.stringify(d);

console.log('string => object', d, newD);
