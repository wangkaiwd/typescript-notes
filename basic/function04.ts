// 这里的剩余参数...items是数组，可以用数组类型来表示
const push = (array: any[], ...itmes: any[]) => {
  itmes.forEach(item => {
    array.push(item)
  })
  return array
}

console.log(push([1, 2], 3, 4, 5))