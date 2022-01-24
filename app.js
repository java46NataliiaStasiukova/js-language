//Homework-13
//1. myForEach
function myForEach(arr,func){
    for(i = 0; i < arr.length; i++){
        func(arr[i], i, arr)
    }
}
function callback(n, i, ar){
    console.log(`array[${i}] = ${n}`);
}
array = [3,4,5,6,7,8];
myForEach(array,callback);
// or another callback for myForEach:
let string = "";
myForEach(array, n => string += n + "#");
console.log(string);
//2. myMap
function myMap(arr,func){
    myForEach(arr,func);
}
let arr2 = [];
myMap(array, n => arr2.push(n * 2));
console.log(arr2);








    






