interface SquareConfig {
  width: number;
  height: number;
  color?: string;

  [propName: string]: any; // 支持任意类型的对象属性，相当于对除width,height,color之外的其它属性不进行类型检查

  // [propName: string]: string;
  // 这样定义的意思是说，接口的所有属性都要满足这个类型：key是字符串类型,value也是字符串类型。
  // 这样定义之后 height:number; width:number就会有错误提示
}

const createSquare = (squareConfig: SquareConfig) => {
  console.log('squareConfig', squareConfig);
};
createSquare({ color: 'red', width: 10, height: 20 });

