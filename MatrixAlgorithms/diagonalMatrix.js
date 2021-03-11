//Diagonal Matrix.
/**
 eg;
       0 1 2 3
    0 [3,0,0,0]
    1 [0,5,0,0]
    2 [0,0,6,0]
    3 [0,0,0,7]
Diagonal matrix is a matrix with data filled diagonally
All elements with with the same index of row and column is filled with data and anything else is a zero-element.
 */

//!! 1st approach
/**
 * This is approach is not efficient. It uses a lot of memory, it stores both the zero and non-zero element,
 * this can cause a lot when we are dealing with a lot of data.
 */

// The time Complexity for creating 2D array is O(n)
// space complexity for creating the 2D array is 0(n^2)
var diagonalArray = new Array(4);
for (var k = 0; k < diagonalArray.length; k++) {
  diagonalArray[k] = new Array(4);
}

//time complexity o(n^2)
function setDiagonalMatrix(data) {
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data.length; j++) {
      if (i === j) {
        diagonalArray[i][j] = data[i];
      } else {
        diagonalArray[i][j] = 0;
      }
    }
  }
}
setDiagonalMatrix([3, 5, 6, 7]);

function displayDiagonalMatrix() {
  console.table(diagonalArray);
}
displayDiagonalMatrix();

//!! 2st approach
/**
eg;
      0 1 2 3
   0 [3,0,0,0]
   1 [0,5,0,0]
   2 [0,0,6,0]
   3 [0,0,0,7]
observing this data, we can see that elements are non-zero if i === j
[0][0],[1][1],[2,2];

so instead of creating a 2D array to store them, we can optimise it and store it in 1D array;
*/
var arr = [];
function setDiagonalMatrix(i, j, value) {
  if (i === j) {
    arr[i] = value;
  }
}

setDiagonalMatrix(0, 0, 4);
setDiagonalMatrix(1, 1, 6);
setDiagonalMatrix(2, 2, 6);
setDiagonalMatrix(3, 3, 7);
