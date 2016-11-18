function greetPerson(name) {
    if (name === "Nikunj") {
        greet = "Hi Nikunj!!!!!";
    }
    else {
        greet = "Hi there!!!!!";
    }
    /** It is valid in javascript.
     *  This is called as hoisting.
     *  Variable can be declared anywhere in a file.
     * It will automatically considered for all above where value has been assigned before variable declaration.*/
    var greet;
    console.log(greet);
}
greetPerson("Nikunj");
function greetPerson1(name) {
    if (name === "Gami") {
        var greet = "Hi Gami!!!!!";
    }
    else {
        var greet = "Hi there!!!!!";
    }
    /**This is also valid in javascript.
     * Even though greet has been declared inside if and else it is accessible out side of it.
     * Because it has functional scope.
     * It will be accessible inside function everywhere.*/
    console.log(greet);
}
greetPerson1("Gami");
//# sourceMappingURL=VarHoistingAndFunctionScope.js.map