//Homework-12
//1
function sortOddsEven(arr){
    let odds = [];
    let even = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0) even.push(arr[i]);
        else odds.push(arr[i]);
    }
    even.sort((a, b) => a - b);
    odds.sort((a,b) => b - a);
    even.push(...odds);
    return even;
}
const arflw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
console.log("ex.1")
console.log(sortOddsEven(arflw));
//2 version-1
function matrixTransp(matrix){
    let arrI = [];
    for(let i = 0; i < matrix.length; i++){
       let arrJ = [];
        for (let j = 0; j < matrix.length; j++) {
           arrJ.push(matrix[j][i]);
        }
        arrJ.filter(element => element != null);
        arrJ = arrJ.filter(Boolean);
        arrI.push(arrJ);
    }
    matrixPrint(arrI);
}
function matrixPrint(matrix){
    for(let i = 0; i < matrix.length; i++){
        let row = '';
        for (let j = 0; j < matrix[i].length; j++){
           row = row + matrix[i][j] + '  ';
        }
        console.log(row);
     }
}
//2 version-2
function matrixTransp1(matrix){
    for(let i = 0; i < matrix.length; i++){
        let row = '';
        for (let j = 0; j < matrix.length; j++){
           row = row + matrix[j][i] + '  ';
        }
        console.log(row);
     }
}
// Test:
const matrix1 = [[1, 2], [3, 4], [5, 6]];
const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("ex.2-version-1:")
matrixTransp(matrix1);
matrixTransp(matrix2);
console.log("ex.2-version-2:")
console.log(matrixTransp1(matrix1));
console.log(matrixTransp1(matrix2));




