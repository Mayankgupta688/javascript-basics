var myArray = [1, 2, 3, 4, 5];

var newArray = myArray.map(function(data) {
    return data + 10;
})

var filteredArray = myArray.filter(function(data) {
    return data > 3
})

console.log(myArray)
console.log(newArray)
console.log(filteredArray)

// Implement "reduce" Higher Order Function..