
var inputElement = $("#myInput");

document.getElementById("myInput").value = "Anshul Gupta";

console.log(inputElement.val())


$("input").on("click", function() {
    inputElement.val("Mayank Gupta");
});

