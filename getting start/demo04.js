var Student = /** @class */ (function () {
    // public会同时在实例上添加相应的属性：
    // 相当于如下代码:
    // firstName: string;
    // middleInitial: string;
    // lastName: string;
    //
    // constructor (firstName: string, middleInitial: string, lastName: string) {
    //   this.firstName = firstName;
    //   this.middleInitial = middleInitial;
    //   this.lastName = lastName;
    // }
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var greeter = function (person) {
    return "Hello, " + person.firstName + " " + person.lastName;
};
var person = new Student('Jane', 'M.', 'User');
console.log(greeter(person)); // hello, Jane User
