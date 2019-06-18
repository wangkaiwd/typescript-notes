// 类数组并不是数组类型，它们有自己单独的类型来进行定义和校验
// function sum () {
//   const args: number[] = arguments;
// }
function sum () {
  const args: IArguments = arguments;
}
// 类数组也可能会在dom操作中遇到，如 NodeList, HTMLCollection
