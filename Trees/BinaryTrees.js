var queue = {
  size: this.size,
  front: this.front,
  rear: this.rear,
  arr: this.arr,
};

class Queue {
  constructor(front, rear, size) {
    queue.front = front;
    queue.rear = rear;
    queue.size = size;
    queue.arr = new Array(size);
  }

  enqueue(val) {
    queue.rear++;
    queue.arr[queue.rear] = val;
    console.log(queue.arr);
  }

  dequeue() {
    queue.front++;
    var x = queue.arr[queue.front];
    queue.arr[queue.front] = null;
    return x;
  }

  isEmpty() {
    return queue.rear === queue.front;
  }
}

//Representing a tree with linked
class Node {
  constructor(data) {
    this.data = data;
    this.leftNode = null;
    this.rightNode = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.queue = new Queue(-1, -1, 10);
    this.p = null;
  }

  create(data, pos) {
    var node = new Node(data);
    if (this.root === null && pos == "root") {
      this.root = node;

      return this;
    } else {
      while (true) {
        let current = this.root;
        console.log(current.leftNode);
        if (pos == "left") {
          if (current.leftNode === null) {
            current.leftNode = node;
            return this;
          }
          current = current.leftNode;
        } else if (pos == "right") {
          if (current.rightNode === null) {
            current.rightNode = node;
            return this;
          }
          current = current.rightNode;
        }
      }
    }
  }
}

var binaryTree = new BinaryTree();
binaryTree.create(10, "root");
binaryTree.create(20, "left");
binaryTree.create(30, "right");
// binaryTree.create(35, "right");

// binaryTree.create(30);
