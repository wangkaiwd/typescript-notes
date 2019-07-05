var getFullName = function (lastName, firstName) {
    if (firstName) {
        return firstName + ' ' + lastName;
    }
    return lastName;
};
// 这时候我们只传一个参数的话: getFullName('Jon')，并不能清楚传入的是firstName还是lastName
// const getFullName = (firstName?: string, lastName: string,) => {
//   if (firstName) {
//     return firstName + ' ' + lastName;
//   }
//   return lastName;
// };
getFullName('Yue', 'Jon');
