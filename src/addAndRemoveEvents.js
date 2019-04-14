

$(function() {
    
    $("#myButtonAdd").on("click", function() {

        $("#myButtonShowDetails").on("click", function() {
            alert($(".userName").val())
        })

        $("#myButtonRemove").on("click", function() {
            $("#myButtonShowDetails").off("click")
        })

    });


});
