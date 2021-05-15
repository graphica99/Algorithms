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
    if (queue.rear === queue.front) {
      return true;
      console.log("queue is empty");
    }
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

  create(data) {
    if (this.root === null) {
      var node = new Node(data);
      this.root = node;
      this.queue.enqueue(this.root);
    } else {
      while (!this.queue.isEmpty()) {
        this.p = this.queue.dequeue();
        console.log(this.p);
        //   if (data !== -1) {
        //     var n = new Node(data);
        //     this.p.leftNode = n;
        //     this.queue.enqueue(n);
        //   }
        //   if (data !== -1) {
        //     var n = new Node(data);
        //     this.p.rightNode = n;
        //     this.queue.enqueue(n);
        //   }
      }
    }
  }
}

var binaryTree = new BinaryTree();
binaryTree.create(10);
binaryTree.create(20);
// binaryTree.create(30);
