// Problem with Object Literals

var websiteUser = {
    name: "Mayank",
    age: 20,
    salary: 10000,
    showDetails: function() {
        console.log(this.name);
    }, incrementSalary: function() {
        this.salary = this.salary + 2000;
    }
}

console.log(websiteUser.salary);

websiteUser.incrementSalary();

console.log(websiteUser.salary)


// Module Pattern to the Rescue..

function WebSiteUser() {
    var name = "Mayank";
    var age = 20;
    var salary = 10000;

    var showDetails = function() {
        console.log(name + " " + age);
    }

    var incrementSalary = function() {
        salary = salary + 2000;
    }

    var showSalary = function() {
        console.log(salary)
    }

    return {
        myName: name,
        myAge: age,
        showMyDetails: showDetails,
        incrementMySalary: incrementSalary,
        showMySalary: showSalary
    }
}

var myDetails = WebSiteUser();

myDetails.incrementMySalary()

myDetails.showMySalary();