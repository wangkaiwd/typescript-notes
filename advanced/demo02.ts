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
export {};
