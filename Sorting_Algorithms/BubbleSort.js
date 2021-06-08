const BubbleSort = (arr) => {
  var flag;
  for (var i = 0; i < arr.length - 1; i++) {
    flag = false;
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    arr;
  }
  flag ? console.log("array is not sorted") : console.log("array is sorted");
};

BubbleSort([8, 5, 7, 3, 2]);
// BubbleSort([2,3,5,7,8]);

function swap(arr1, arr2) {
  var temp = arr1;
  arr1 = arr2;
  arr2 = temp;
  return arr1, arr2;
}
