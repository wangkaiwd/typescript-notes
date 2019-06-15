// 用接口来定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean
}
const mySearch: SearchFunc = (source: string, subString: string) => {
  return source === subString;
};
mySearch('1', '2');

