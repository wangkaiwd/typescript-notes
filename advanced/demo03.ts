// 简单数据类型
type LiteralType1 = 1 | 2 | 'not a number' | false
// 对象
type LiteralType2 = {
  gender: '男' | '女'
}

// 函数: 参数只能是LiteralType1指定中的某一个
const getNumber = (n: LiteralType1): void => {

};
// 数组: 数组中每一项的类型必须符合LiteralType1中的某一个
const array: LiteralType1[] = [1, 2, false];

// 接口
interface LiteralType3 {
  direction: 'up' | 'down' | 'left' | 'right'
}
export {};
