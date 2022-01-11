//1
let a = "a";
let b = "s";
console.log(a + a * b + a + b);
//2
let x = 12;
let y = 2;
let z = "/";// "+", "-", "*", "/";
let res = Calculate(x,y,z);
console.log("res = ", res);

function Calculate(x,y,z){
    let res;
    if(z == "+") res = x + y;
    if(z == "-") res = x - y;
    if(z == "*") res = x * y;
    if(z == "/" && y != 0) res = x / y;
    else {
        console.log("Dvision by 0.");
        res = "Error";
         }
    return res;
}
//3 - didn't find the was to run expression fun(5)(10,3);
let Functions = new Array (func1, func2, func3, func4, func5, func5);
let fun = Functions[5];
res = fun(10,3);
console.log("res = ", res);

ffun(Functions[5],10,3); // ffun(Functions[2])(10,3); - ffun is not a function
function ffun(f,a,b){
res = f(a,b);
console.log("res = ", res);
}
function func1(a,b){
    return a + b;
}
function func2(a,b){
    return a - b;
}
function func3(a,b){
    return a * b;
}
function func4(a,b){
    if(b == 0) console.log("Error!");
    else return a / b;
}
function func5(a,b){
    return a ** b;
}
function func6(a,b){
    let c = a + b;
    console.log("a + b = c");
}
