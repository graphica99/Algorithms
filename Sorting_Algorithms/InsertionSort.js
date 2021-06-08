// //basic insert
// const insert = (arr,val) =>{
//    for(var i = 0 , j = arr.length - 1; i < arr.length; i++,j--){
//        if(arr[j] > val){
//           arr[j + 1] = arr[j]
//           arr[j] = val;
//        }
//    }
//    arr
// }
// insert([2,6,10,15,20,25,30],3)
// //2 6 10 15 20 25 30
// //0 1 2  3  4  5   6

//Insertion sort

const insertionSort = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    var j = i - 1;
    var x = arr[i];

    while (arr[j] > x) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = x;
  }
  arr;
};

insertionSort([8, 5, 7, 3, 2]);
