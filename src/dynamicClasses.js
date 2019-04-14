$("#removeClass").on("click", function() {
    $("h1").removeClass("firstClass");
})

$("#addClass").on("click", function() {
    $("h1").addClass("firstClass");
    $("h1").text("This is the New Data");
})