
class Employee {
    name = "";
    age = 0;
    designation = "";

    constructor(name, age, designation) {
        this.name = name;
        this.age = age;
        this.designation = designation;   
    }
}

var Mayank = new Employee("Mayank", 10, "Developer");

alert(Mayank.name);


var Employee = /** @class */ (function () {
    function Employee(name, age, designation) {
        this.name = "";
        this.age = 0;
        this.designation = "";
        this.name = name;
        this.age = age;
        this.designation = designation;
    }
    Employee.prototype.showDetails = function () {
        alert("Hi");
    };
    return Employee;
}());
var Mayank = new Employee("Mayank", 10, "Developer");
console.log(Mayank.designation);
