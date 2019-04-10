// Function Hoisting: 

function sampleData() {
    console.log(abc);

    // Variable declaration
    var abc;

    console.log("abc: " + abc);

    // Variable Assignment/ definition 
    abc = 10;

    console.log("abc: " + abc);
    logData();

    var userName = "Mayank Gupta";
    console.log("userAge: " + userAge);

    var userAge = 10;
    console.log("userName: " + userName);

    // Function definition
    function logData() {
        console.log("logData: Xyz");
    }

    // Function Expressions
    var logOtherData = function() {
        console.log("logOtherData: Abc")
    }

    logOtherData();
}

sampleData();

console.log("........................................")


// Compiled Version

function sampleCompiledData() {

    // Function definition
    function logData() {
        console.log("logData: Xyz");
    }

    // Variable declaration
    var abc;

    var userName;

    var userAge;

    var logOtherData;

    console.log("abc: " + abc);

    // Variable Assignment/ definition
    abc = 10;
    console.log("abc: " + abc);

    logData();

    userName = "Mayank Gupta";

    console.log("userAge: " + userAge);

    userAge = 10;

    console.log("userName: " + userName);

    // Function Expressions
    logOtherData = function() {
        console.log("logOtherData: Abc")
    }

    logOtherData();
}

sampleCompiledData()
