//Homework-15

//Task 1.1:
function displayOccurrences(array){
    const res = {};
array.forEach((r, i, a) => res[array[i]] === undefined ? res[array[i]] = 1 : res[array[i]] += 1);
   Object.entries(res).sort((e1, e2) => {
    const res = e2[1] - e1[1];
    return res === 0 ? e1[0].localeCompare(e2[0]) : res;
}).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
}
//Task 1.2:
function displayOccurrences2(array, functin){
    const res = separatedFunc(array);
   Object.entries(res).sort((e1, e2) => {
    const res = e2[1] - e1[1];
    return res === 0 ? e1[0].localeCompare(e2[0]) : res;
}).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
}
function separatedFunc(array){
    let res = {};
    array.forEach((r, i, a) => res[array[i]] === undefined ? res[array[i]] = 1 : res[array[i]] += 1);
    return res;  
}
//Test:
const ar = ["lmn", "d", "d", "lmn", "a", "lmn", "a", "bc"];
displayOccurrences(ar);
displayOccurrences2(ar);


//task 2:
function countBy(array, callback){
let arrKey = [];
let res = {};
for(i = 0; i < array.length; i++){
    arrKey.push(callback(array[i], i, array));
}
arrKey.forEach((r, i, a) => res[arrKey[i]] === undefined ? res[arrKey[i]] = 1 : res[arrKey[i]] += 1);
console.log(res);
}
//Test:
const arr1 = [6.4, 7.3, 6.5, 6.9];
countBy(arr1, (element) => Math.floor(element));

const arr = ["abcd", "lmnr", "ab", "dddd"];
countBy(arr, (element) => element.length);

const arr2 = [{age: 25, id:123, name: "Vasya"}, {age: 50, id:123, name: "Vasya"},
{age: 25, id:123, name: "Vasya"}, {age: 70, id:123, name: "Vasya"}];
countBy(arr2, element => element.age);











    






