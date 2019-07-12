const x: number = Number(process.argv[2]);
const y: number = Number(process.argv[3]);
const operator: string = process.argv[4];

interface ResultMap {
  [key: string]: number
}

const resultMap: ResultMap = {
  'x': x * y,
  '+': x + y,
  '-': x - y,
  '/': x / y
};
if (isNaN(x) || isNaN(y)) {
  console.log('请输入2个数字');
  // 失败退出
  process.exit(1);
}
if (!Object.keys(resultMap).includes(operator)) {
  console.log('请在第三个参数位置输入正确的操作符');
  process.exit(1);
}
if (operator === '/' && y === 0) {
  console.log('除数不能为0');
  // 失败退出进程
  process.exit(1);
}
console.log(resultMap[operator]);
// 成功退出
process.exit(0);
export {};
