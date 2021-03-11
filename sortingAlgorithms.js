function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

// bubbleSort([1, 7, 3, 4, 5, 8, 10, 2]);

//1. display even numbers from 20 - 100
for (var i = 20; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//7.
function displayInstitution(name) {
  console.log(name);
}

//10.
function sqrtOfEvenNumbers() {
  for (var i = 1; i < 50; i++) {
    if (i % 2 === 0) {
      var squareRoot = Math.sqrt(i);
      console.log(squareRoot);
    }
  }
}

// sqrtOfEvenNumbers()
