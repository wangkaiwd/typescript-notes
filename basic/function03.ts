// ts会将添加了默认值的参数识别为可选参数
// 这里我们为firstName指定默认值
const buildName = (firstName: string = 'Tom', lastName: string) => {
  return firstName + ' ' + lastName;
}

// 调用的时候如果参数要是用默认值的话，必须传入undefined
console.log(buildName(undefined, 'Cat'))