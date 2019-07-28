type Name = string;
type NameHandle = () => string;
type NameOrNameHandle = Name | NameHandle;

const getName = (n: NameOrNameHandle): Name => {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
};

// 类型别名中使用泛型：
type Container<T> = { value: T }

// 类型别名和接口：
type Alias = { num: number }
interface Interface {
  num: number;
}
export {};
