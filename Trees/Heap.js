//Binary Heap using array
//40 30 15 20 10 12 6 5 -- 35

function insert(arr) {
  var n, temp;
  n = arr.length - 1;
  temp = arr[n];

  while (n > 1 && temp > arr[n / 2]) {
    arr[n] = arr[n / 2];
    n / 2 === 1 ? (n = 0) : (n = n / 2);
  }
  arr[n] = temp;
  arr;
  return arr;
}

function create(arr) {
  insert(arr);
}

// insert([40, 30, 15, 20, 10, 12, 6, 5]);
create([13, 14, 9, 7, 60]);

function merge(arr1, arr2) {
  //merging two unsorted array
  var res = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
  console.log(res);
}
