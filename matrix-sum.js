/* Write a function addMatrices(matrixA: number[][], matrixB: number[][]): number[][]
that takes two matrices of the same dimensions and returns a new matrix where each element
is the sum of the corresponding elements from matrixA and matrixB.
If the matrices have different dimensions, return null or handle the error appropriately. */
function addMatrices(matrixA, matrixB) {
    var res = null;
    // Step 1: Check if both matrices have the same number of rows
    if (matrixA.length === matrixB.length) {
        console.log('Isto je!');
    }
    else {
        console.log('Jbg, više sreće drugi put');
    }
    ;
    // Step 2: Check if all rows have the same number of columns
    for (var x = 0; x < matrixA.length; x++) {
        if (matrixA[x].length === matrixB[x].length) {
            console.log('Isti broj kolumni!');
        }
        else {
            console.log('Više sreće drugi put!');
        }
    }
    ;
    // Step 3: Initialize a new matrix to store the sum
    var sum = [];
    for (var i = 0; i < matrixA.length; i++) {
        var sumArray = "";
        for (var k = 0; k < matrixB[i].length; k++) {
            sumArray += matrixA[i][k] + matrixB[i][k];
        }
        sum.push(sumArray.trim());
    }
    ;
    sum.forEach(function (sumArray) { return console.log(sumArray.join(", ")); });
    // Step 4: Loop through the matrices and add corresponding elements
    // Step 5: Return the resulting matrix or null if dimensions don't match
    return res;
}
var matrixA = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var matrixB = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];
var result = addMatrices(matrixA, matrixB);
if (result !== null) {
    console.log("Sum of matrices:");
    console.log(result);
}
else {
    console.log("Matrix addition failed due to mismatched dimensions.");
}
/* expected result for given matrices */
var expectedOutput = [[10, 10, 10],
    [10, 10, 10],
    [10, 10, 10]];
