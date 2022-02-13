//Homework-16
//Task 1
function Deferred(){
   this.function = [];
}
Deferred.prototype.then = function(thenFn){
     this.function.push(thenFn);
}
Deferred.prototype.resolve = function(res){
    this.function.forEach(fn => res = fn(res));
}
//Test
const d = new Deferred()
d.then(function(res){ console.log('1 ', res); return 'a'; });
d.then(function(res){ console.log('2 ', res); return 'b'; });
d.then(function(res){ console.log('3 ', res); return 'c'; });
d.resolve('hello');
 //Task 2
function MyArray(value){
     this.value = value;
     this.array = [];
 }
 MyArray.prototype.set = function(index, value){
    this.array[index] = value;
 }
 MyArray.prototype.setValue = function(value){
    this.value = value;
    this.array = [];
 }
 MyArray.prototype.get = function(index){
    return this.array[index] ?? this.value;
}
//Test
 const myArray = new MyArray(10);
 console.log(myArray.get(100)) // displayed out 10
 myArray.set(100, 500)//sets 500 at index 100
 console.log(myArray.get(200)) //displayed out 10
 console.log(myArray.get(100)) //displayed out 500
 myArray.setValue(300);
 console.log(myArray.get(100)) //displayed out 300
 console.log(myArray.get(200)) //displayed out 300
























    






