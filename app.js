//1
let a = "a";
let b = "s";
console.log(a + a * b + a + b);
//2
console.log(Calculate(10,2,exponentiate));
function Calculate(x,y,action){
    return action(x,y);
}
function exponentiate(x, y){
    return x ** y;
}
function multiplication(x,y){
    return x * y;
}
function division(x, y){
    if(y != 0) return x / y;
    else console.log("Devision by zero!");
}
//3
let Functions = new Array (func1, func2, func3, func4, func5, func6);
a = 10;
b = 3;
let i = 5;
console.log(fun(Functions[i])(a,b));

function fun(i){
    return function (a,b){
        res = i(a,b);
        return res;
        }
    }
//Functions array
function func1(a,b){
    return a + b + a;
}
function func2(a,b){
    return a - b;
}
function func3(a,b){
    return a * b;
}
function func4(a,b){
    if(b == 0) console.log("Error! Devision by zero!");
    else return a / b;
}
function func5(a,b){
    return a ** b;
}
function func6(a,b){
    return a + b;
}