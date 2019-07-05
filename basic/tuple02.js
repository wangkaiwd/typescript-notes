var array;
array = ['hello', 1];
array.push(2);
array.push('string');
// 当添加越界的元素时，它的类型会被限制为元祖中每个类型的联合类型（这里就是 string|number）
// true是boolean,并不属性string或者number
array.push(true); // Argument of type 'true' is not assignable to parameter of type 'string | number'
