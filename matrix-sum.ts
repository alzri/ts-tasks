/* Write a function addMatrices(matrixA: number[][], matrixB: number[][]): number[][] 
that takes two matrices of the same dimensions and returns a new matrix where each element 
is the sum of the corresponding elements from matrixA and matrixB.
If the matrices have different dimensions, return null or handle the error appropriately. */

function addMatrices(matrixA, matrixB){
const res = null;
// Step 1: Check if both matrices have the same number of rows
    if ( matrixA.length === matrixB.length) { 
        console.log('Isto je!');
    } else {
        console.log('Jbg, više sreće drugi put');
    };

// Step 2: Check if all rows have the same number of columns
   for (let x = 0; x < matrixA.length; x++) {
        if (matrixA[x].length === matrixB[x].length) {
            console.log ('Isti broj kolumni!');
        } else {
            console.log('Više sreće drugi put!');
        }
    };

// Step 3: Initialize a new matrix to store the sum
    let sum = [];

// Step 4: Loop through the matrices and add corresponding elements
    for (let i = 0; i < matrixA.length; i++) {
        let sumArray = [];
        for (let k = 0; k < matrixB[i].length; k++) {
            sumArray.push(matrixA[i][k] + matrixB[i][k]);
        }

        sum.push(sumArray);
    }

    sum.forEach(sumArray => console.log(sumArray.join(", ")));


// Step 5: Return the resulting matrix or null if dimensions don't match
    return sum;
}
  
const matrixA = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

const matrixB = [
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

/* const expectedOutput = [[10, 10, 10],
[10, 10, 10],
[10, 10, 10]] */ 