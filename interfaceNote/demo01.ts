// 接口是用来描述对象应该有哪些属性以及属性对应的类型

// 需要注意这里对参数的检查并不严格
// const printLabel = (labelledObj: { label: string }) => {
//   console.log(labelledObj.label);
// };
// // 这里我们传入了很多属性，但是typescript只会检查必要的属性(label)是否存在，并且其类型是否匹配
// const myObject = { size: 10, label: 'Size 10 Object' };
// printLabel(myObject);

// 用接口改写这个例子
interface LabeledValue {
  label: string;
}

const printLabel = (labelledObj: LabeledValue) => {
  console.log(labelledObj.label);
};

const myObject = { size: 10, label: 'Size 10 Object' };
printLabel(myObject);

