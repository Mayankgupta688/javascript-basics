

var count = 1;

$("[type=button]#prependElement").on("click", function() {
    $("#outerContainerDiv").prepend("<h2>Hello World " + count + "</h2>");
    count++;
})

$("[type=button]#appendElement").on("click", function() {
    $("#outerContainerDiv").append("<h3>I am Alive...</h3>")
})

$("#removeH2Element").on("click", function() {
    $("h2").remove();
})


$("#removeH3Element").on("click", function() {
    $("h3").remove();
})

$("#removeFirstElement").on("click", function() {
    $("h2:first").remove();
})