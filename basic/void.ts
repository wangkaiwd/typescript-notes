// es5
function doSomething1 (): void {
  console.log('this function no return value');
}
// es6
const doSomething2: () => void = () => {
  console.log('this function no return value');
};
doSomething1();
doSomething2();

let unusable: void = undefined;
