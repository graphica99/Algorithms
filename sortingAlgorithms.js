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

function swap(a,b){ 
let temp;
temp = a;
a = b;
b = temp;
}
//7.
function perm(str,l,h){
  var i = 0;
  if(l == h){
    console.log(str)
  }else{
    for(i = l; i <= h; i++){
      swap(str[i],str[l]);
      perm(str,l+1,h);
      swap(str[l],str[i]);
    }
  }
}

// perm('ABC',0,2)

const permutator = (inputArr) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }
 permute(inputArr)
 console.log(result)
 return result;
}
permutator(['university','of','cape','coast']);



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
