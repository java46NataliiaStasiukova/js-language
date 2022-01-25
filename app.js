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
//2. myMap
function myMap(arr,callbackFunc){
    const newAr = [];
    myForEach(arr,(n, i, arr) => newAr.push(callbackFunc(n, i, arr)));
    return newAr;
    }
    //Test
    array = [3,4,5,6,7,8];
    myForEach(array,callback);
    // or another callback for myForEach:
    let string = "";
    myForEach(array, n => string += n + "#");
    console.log(string);

    const arr2 = myMap(array, n => n = n * 2);
    console.log(arr2);








    






