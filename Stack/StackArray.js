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
var stk = new Stack(5);
stk.push(10);
stk.push(20);
stk.push(30);
stk.push(40);
stk.push(50);
// stk.pop();
// stk.pop();
// stk.pop();
// stk.pop();
// stk.pop();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class StackLinkedList {
  constructor(size) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.size = size;
  }

  push(val) {
    var node = new Node(val);
    if (this.length > this.size) {
      console.log("stack overflow");
      return;
    }
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
    }
    var head = this.head;
    node.next = head;
    this.head = node;
    this.length++;
  }
  pop() {
    this.length--;
    var newHead = this.head.next;
    this.head = null;
    this.head = newHead;
    console.log(this);
  }
}

var stackLL = new StackLinkedList(5);
stackLL.push(10);
stackLL.push(20);
stackLL.push(30);
stackLL.push(40);
stackLL.push(50);
// stackLL.pop();
