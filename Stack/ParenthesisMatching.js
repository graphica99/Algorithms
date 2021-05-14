var stack = {
  size: this.size,
  top: this.top,
  arr: this.arr,
};
class Stack {
  constructor(size) {
    stack.size = size;
    stack.arr = new Array(size);
    stack.top = -1;
  }
  push(value) {
    if (stack.top === stack.size - 1) {
      console.log("stack overflow");
      return;
    }
    stack.top++;
    stack.arr[stack.top] = value;
  }
  //   isEmpty() {
  //     if (stack.top === -1) {
  //       return true;
  //     }
  //   }
  pop() {
    if (stack.top === -1) {
      console.log("stack underflow");
      return -1;
    }
    stack.arr[stack.top] = null;
    stack.top--;
    //   console.log(stack.arr);
  }
}

function isBalance(arr) {
  var stk = new Stack(arr.length);
  console.log(arr);
  for (var i = 0; i != arr.length; i++) {
    if (arr[i] == "(") {
      stk.push(arr[i]);
    } else if (arr[i] === ")") {
      if (stack.top === -1) {
        return false;
      }
      stk.pop();
    }
  }

  if (stack.top === -1) {
    return true;
  } else {
    return false;
  }
}

// var result = isBalance([
//   "(",
//   "(",
//   "a",
//   "+",
//   "b",
//   ")",
//   "*",
//   "(",
//   "-",
//   "d",
//   ")",
//   ")",
// ]);

// console.log(result);
function isOperand(char) {
  if (char == "+" || char == "-" || char == "*" || char == "/") {
    return 0;
  } else {
    return 1;
  }
}

function precedence(symb) {
  if (symb == "+" || symb == "-") {
    return 1;
  } else if (symb == "*" || symb == "/") {
    return 2;
  }
  return 0;
}

function convert(arr) {
  var stk = new Stack(arr.length);
  var convertedArr = new Array(arr.length);
  var i = 0;
  var j = 0;
  while (j <= arr.length || i <= arr.length) {
    if (isOperand(arr[i])) {
      convertedArr[j] = arr[i];
    } else if (precedence(arr[i]) > stack.arr[i]) {
    }
    j++;
    i++;
  }
  console.log(convertedArr);
}

var char = ["a", "+", "b", "*", "c", "-", "d", "/", "e"];
convert(char);
