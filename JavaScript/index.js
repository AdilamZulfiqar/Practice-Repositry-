console.log("I m in index.js");

var a = 3;
var b = 4;

function sum(var1, var2){
    return a+b;
}

console.log(sum(a,b));

var storeFunInVar = sum;
console.log(storeFunInVar);