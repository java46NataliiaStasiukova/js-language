//Homework-12
//1
const comparator = function sortOddsEven(a,b){
    if(a % 2 == 0 && b % 2 == 0) return a - b;
    if (a % 2 != 0 && b % 2 == 0) return 1;
    if (a % 2 == 0 && b % 2 != 0) return -1;
    else return b - a;
}
const comparator2 = (a,b) => a%2 ? (b%2 ? b - a : 1) : (b%2 ? -1 : a - b);
//oposite:
const comparator3 = (a,b) => a%2 ? (b%2 ? a - b : -1) : (b%2 ? 1 : b - a);


    

const arflw = [13, 28, 4, 15, 25, -10, 40, 17, 27];
console.log(arflw.sort(comparator));
console.log(arflw.sort(comparator2));
console.log(arflw.sort(comparator3));

//2 version-1
//[[1, 2, 3], [4, 5, 6]];
function matrixTransp(matrix){
   const res = [];
   for(let i = 0; i < matrix[0].length; i++){
    res.push([]);
    for(let j = 0; j < matrix.length; j++){
        res[i].push(matrix[j][i]);
    }
   }
   return res;
}
function displayMatrix(arr) {
    for(let i = 0; i < arr.length; i++){
        let row = '';
        for(let j = 0; j < arr[i].length; j++){
            row = row + arr[i][j] + '  ';
        }
        console.log(row);
    }
    console.log('');
    
}
// Test:
const matrix1 = [[1, 2], [3, 4], [5, 6]];
const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const matrix3 = [[1, 2, 3], [4, 5, 6]];
//console.log("ex.2-version-1:")
//matrixTransp(matrix1);
//matrixTransp(matrix2);
//matrixTransp(matrix3);
//console.log("ex.2-version-2:")
displayMatrix(matrixTransp(matrix1));
//displayMatrix(matrix1);
displayMatrix(matrixTransp(matrix2));
displayMatrix(matrixTransp(matrix3));




