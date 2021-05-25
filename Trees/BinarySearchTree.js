class Node {
  constructor(data) {
    this.data = data;
    this.rightNode = null;
    this.leftNode = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  create(data) {
    var node = new Node(data);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    var current = this.root;
    while (true) {
      if (data === current.data) return;
      if (node < current.data) {
        if (current.leftNode === null) {
          current.leftNode = node;
          return this;
        }
        current = current.leftNode;
      } else {
        if (current.rightNode === null) {
          current.rightNode = node;
          return this;
        }
        current = current.rightNode;
      }
    }
  }

  current = this.root;
  searchRecursion(current, value) {
    var found = false;
    if (current === null) {
      return null;
    }
    if (value === current.data) {
      found = true;
      return current;
    }
    if (value < current.data) {
      return this.searchRecursion(current.leftNode, value);
    } else if (value > current.data) {
      return this.searchRecursion(current.rightNode, value);
    }
  }

  insert() {}
}

var tree = new BinarySearchTree();
tree.create(10);
tree.create(5);
tree.create(13);
tree.create(11);
tree.create(2);
tree.create(16);
tree.create(7);
console.log(tree.searchRecursion(16));

//      10
//   5     13
// 2  7  11  16
