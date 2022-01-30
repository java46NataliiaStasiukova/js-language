//Homework-14
//1.
function myFilter(arr, callback){
    const newAr = [];
        myForEach(arr, function(n, i, arr){
            let res = callback(arr[i], i, arr);
            if(res == true) newAr.push(arr[i]);
   });
   return newAr;
}
function myForEach(arr,callbackFunc){
    for(i = 0; i < arr.length; i++){
        callbackFunc(arr[i], i, arr)
    }
}
//Test:
const array = [10, 12, 11, 3, -5, 7];
let res = myFilter(array, (n, i, array) => n % 2 == 0);
console.log(res);
res = myFilter(array, (n, i, array) => n != -5);
console.log(res);
//2.
function myReduce(arr, callback, initialResult){
    if(initialResult == undefined) {
        initialResult = arr[0];
        arr = arr.slice(arr[0]);
    }
    let res = initialResult;
    myForEach(arr, function(n, i, arr){
        
        res = callback(res, arr[i], i, arr);
    });
    return res;
}
//Test:
const array2 = [1, 4, 5, 7, 8];
res = myReduce(array2, (cur, n, i, arr) => cur * n);
console.log(res);
res = myReduce(array2, (cur, n, i, arr) => cur + n);
console.log(res);
//Objects for test:
function createAddress(city, street){
    return {city: city, street: street};
 }
 function createPerson(id, name, address){
    return {id, name, address};
 }
 const persons = [
    createPerson(123, "Vasya", createAddress("Rehovot", "Parshani")),
    createPerson(124, "Olya", createAddress("Rehovot", "Pr. Plaut")),
    createPerson(125, "Tolya", createAddress("Tel-Aviv", "Dizengoff")),
    createPerson(126, "Sara", createAddress('Lod', 'Sokolov'))
 ]
 //3.
function getPersonsCity(person,city1){
    let str = "";
    let result = [];
    for(i =0; i < person.length; i++){
        str = JSON.stringify(person[i]);
        if(str.indexOf(city1) > 0){
            result.push(str);
        }
    }
    return result;
}
//Test:
let ct = "Rehovot";
res = getPersonsCity(persons, ct);
console.log(res);
//4.
function movePersonsNoCityAtBeginning(person,city1){
    let str = "";
    let result = [];
    for(i =0; i < person.length; i++){
        str = JSON.stringify(person[i]);
        str.indexOf(city1) < 0 ? result.unshift(str) : result.push(str);
    }
    return result;
}
//Test:
res = movePersonsNoCityAtBeginning(persons, ct);
console.log(res);



//1) Calculate IN ONE LINE OF CODE the name of Person living in Rehovot 
//having maximal value of 'id'
//(expected output: Olya) 


//2*) Build IN ONE LINE OF CODE statistics of persons amount per city. 
//The expected result is object: {Rehovot:2, 'Tel-Aviv':1,Lod:1}

//Your solution add to existing HW at github or send directly by mail 
//with subject 'HW-14 Additional'

// -------------------------------
// Write a functinon groupBy(array, .......), which has 
// some callback parameters and performs the following actions
// 1) breaks the array elements into groups by specified criteria
// 2) for each group performs specified reduction operation
// The same function would be able to show the following information 
// when called with different callback parameters:
// Example 1: { Rehovot: 2, 'Tel-Aviv': 1, Lod: 1 }
// Example 2: { 
//    Rehovot: [ 'Vasya', 'Olya' ],
//    'Tel-Aviv': [ 'Tolya' ],
//    Lod: [ 'Sara' ]
// }
//
// Your tasks are:
// - Decide which parameters must have such function
// - Implement the function
// - Implement the calls of this function implementing results of Example 1 and Example 2
//------------------------------------









    






