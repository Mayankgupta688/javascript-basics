function showData() {
    var name = "Mayank";
    console.log(name);
}

showData();

var arrowFunction = () => {

    var name = "Mayank";
    console.log("Arrow Function Output: " + name);

}

arrowFunction()

function showDetails(name) {
    console.log(name);
}

showDetails("Anshul");

var parameterisedShowDetailsArrowFunction = (name) => {
    console.log("Parameterised Function: " + name);
}

parameterisedShowDetailsArrowFunction("Anshul Gupta");