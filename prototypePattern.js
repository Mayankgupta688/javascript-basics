function Employee(name, age, isCurrentEmployee) {
    this.name = name;
    this.age = age;
    this.isCurrentEmployee = isCurrentEmployee;
}

Employee.prototype.showDetails = function(){
    console.log(this.name);
}

var firstEmployee = new Employee("Mayank", 20, true);

var secondEmployee = new Employee("Anshul", 10, false);

var thirdEmployee = new Employee("Meha", 10, false);

firstEmployee.showDetails();
secondEmployee.showDetails();
thirdEmployee.showDetails();


// What happens when "new" keyword is called..

// 1. It creates a seperate memory space
// 2. It creates a pointer "firstEmployee" and point it to new Memory Space
// 3. All variable containing "this" are added to this memory space
