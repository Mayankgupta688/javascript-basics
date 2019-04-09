var userInfo = {
    name: "Mayank",
    age: 20,
    showName: function() {
        console.log("User Name is: " + this.name)
    },
    showAge: function() {
        console.log("User Name is: " + this.age)
    }
}

userInfo.showName();
userInfo.showAge();