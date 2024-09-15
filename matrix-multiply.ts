/* Matrix Multiplication Rules:
- Matrix dimensions must be compatible:
For matrix multiplication to be possible, the number of columns in the first matrix (matrixA) must equal the number of rows in the second matrix (matrixB).
If matrixA has dimensions 𝑚 × 𝑛 and matrixB has dimensions 𝑛 × 𝑝 , the resulting matrix will have dimensions 𝑚 × 𝑝.
- Formula for Matrix Multiplication:
Each element of the resulting matrix is computed as the dot product of the corresponding row from matrixA and the corresponding column from matrixB.
For the resulting matrix element at position [i][j], you sum the products of the elements in the i-th row of matrixA and the j-th column of matrixB. */

/* Write a function multiplyMatrices(matrixA: number[][], matrixB: number[][]): number[][] that multiplies two matrices. 
The number of columns in the first matrix (matrixA) must equal the number of rows in the second matrix (matrixB). 
The function should return the resulting matrix or handle errors if the matrices have incompatible dimensions. */

function multiplyMatrices(matrixA: number[][], matrixB: number[][]): number[][] | null {
    const result = null;
// Step 1: Check if matrices can be multiplied

// Step 2: Initialize the result matrix with dimensions rowsA x colsB

// Step 3: Multiply matrices (dot product of rows of A and columns of B)

return result;
}
  
// Example matrices (filled in for testing):
const matrixC: number[][] = [
[1, 2],
[3, 4]
];

const matrixD: number[][] = [
[5, 6],
[7, 8]
];

// Example usage:
const resultMultiply = multiplyMatrices(matrixC, matrixD);
  
if (result !== null) {
    console.log("Result of Matrix Multiplication:");
    console.log(resultMultiply);
} else {
    console.log("Matrix multiplication failed due to incompatible dimensions.");
}
  