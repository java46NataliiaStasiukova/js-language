//Homework-19
//Task-1
function getRandomNumber(min, max){
  if(min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//Test
let res = getRandomNumber(16, 14);
console.log(res);
//Task-2
function concatinate(prefix){
  let res = prefix;
  return (p => res + p);
}
//Test
const concatApp = concatinate('App - ');
const concatMassage = concatApp('Test status: Done');
console.log(concatMassage);

























    






