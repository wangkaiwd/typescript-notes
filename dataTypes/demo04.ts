const something: any = '123';
// 我们将其断言为更准确的类型
// '<>' 语法
// console.log((<string>something).split(''));
// 'as' 语法: 在`tsx`中只能使用as语法
console.log((something as string));

