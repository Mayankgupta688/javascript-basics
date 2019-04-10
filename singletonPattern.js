
// Singleton Pattern

var userDetails = (function websiteUser() {
    var name = "Mayank";
    var age = 10;
    var designation = "Developer";
    var salary = 1000;
    var getName = function() {
        console.log(name);
    }

    var getBonus = function() {
        console.log("Bonus Amount: " + salary/10);
    }

    return {
        name: name,
        age: age,
        designation: designation,
        getName: getName,
        getBonus: getBonus
    }
})();

userDetails.getName()

userDetails.getBonus()

console.dir(userDetails)