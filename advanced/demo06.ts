// 要求：更新的时候需要id,创建的时候不需要id
interface Action {
  type: 'create' | 'update';
  id?: number;
  name: string;
}
// 接口并不能实现这个需求，我们需要通过联合类型来实现
interface Action1 {
  type: 'create';
  name: string;
  test: number;
}

interface Action2 {
  type: 'update';
  id: number;
  name: string;
  test: string;
}

type Action3 = Action1 | Action2

// TS 可以通过一个特征值来区分类型
// 可识别类型的前提： 1. 有一个共有的字段  2. 共有字段为字面量类型
// 当符合这俩个条件的时候，TypeScript就会自动区分出对应的联合类型
const reducer = (state: any, action: Action3) => {
  // 通过type可以区分当前到底是类型Action1 或者 Action2
  if (action.type === 'create') {
    console.log('name', action.name);
  } else {
    console.log('id', action.id);
  }
  // 不能通过类型来进行类型识别
  // if (typeof action.test === 'number') {
  //   console.log(action.name);
  // } else {
  //   console.log(action.id);
  // }
};
