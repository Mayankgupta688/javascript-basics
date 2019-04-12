function clickButton(event) {
    event.stopPropagation();
    alert("Button Clicked..")
}


function clickOtherButton(event) {
    event.stopPropagation();
    alert("Button Other Clicked..")
}

function clickInnerDiv(event) {
    alert("Inner Div Clicked..");
    event.stopPropagation();
}

function clickOuterDiv(event) {
    alert("Outer Div Clicked..")
}


document.getElementById("inputButton").addEventListener("click", function(event) {
    alert("Other Function Clicked")
})

document.getElementById("inputButton").addEventListener("click", function(event) {
    alert("First Function Clicked");
    event.stopImmediatePropagation();
})
