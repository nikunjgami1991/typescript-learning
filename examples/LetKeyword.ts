function greetPerson2(name){
    //It has block level scope.
    let greet;

    if(name === "Let in TS!!!"){
        greet = "Let in TS!!!";
    }else{
        greet = "Hi there!!!!!";
    }

    console.log(greet);
}

greetPerson2("Let in TS!!!");

var a = 1;
var b = 2;

if(a === 1){
    a = 10;
    let b = 20;
    console.log(a);
    console.log(b);
}

console.log(a);
console.log(b);

// Variable hoisting is not possible using let;
// Duplicate let variable can not be possible.

//While using closure inside for loop use let keyword.


//Example of let keyword in for loop
for(var i = 1; i<=5; i++){
    setTimeout(() => {
        console.log(i);
    },1000)
}

for(let i = 1; i<=5; i++){
    setTimeout(() => {
        console.log(i);
    },1000)
}


//Arrow function does not create its own this context.
//It takes from its parent.


//Default parameter Example

function getValue(value = 10){
    console.log(value);
}

getValue();
getValue(20);