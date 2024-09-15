/* Write a function addMatrices(matrixA: number[][], matrixB: number[][]): number[][] 
that takes two matrices of the same dimensions and returns a new matrix where each element 
is the sum of the corresponding elements from matrixA and matrixB.
If the matrices have different dimensions, return null or handle the error appropriately. */

function addMatrices(matrixA: number[][], matrixB: number[][]): number[][] | null {
const res = null;
// Step 1: Check if both matrices have the same number of rows

// Step 2: Check if all rows have the same number of columns

// Step 3: Initialize a new matrix to store the sum

// Step 4: Loop through the matrices and add corresponding elements

// Step 5: Return the resulting matrix or null if dimensions don't match
return res;
}
  
const matrixA: number[][] = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

const matrixB: number[][] = [
[9, 8, 7],
[6, 5, 4],
[3, 2, 1]
];

const result = addMatrices(matrixA, matrixB);

if (result !== null) {
console.log("Sum of matrices:");
console.log(result);
} else {
console.log("Matrix addition failed due to mismatched dimensions.");
}


/* expected result for given matrices */

const expectedOutput = [[10, 10, 10],
[10, 10, 10],
[10, 10, 10]]