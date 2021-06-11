//selection sort

const selectionSort = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = (k = i); j < arr.length; j++) {
      if (arr[j] < arr[k]) {
        k = j;
      }
      var temp = arr[i];
      arr[i] = arr[k];
      arr[k] = temp;
    }
  }
  arr;
};
selectionSort([8, 5, 3, 9, 10, 2, 1]);
