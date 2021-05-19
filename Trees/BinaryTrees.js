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
  }

  create(data, pos) {
    var node = new Node(data);
    if (this.root === null && pos == "root") {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      //         console.log(current.leftNode);
      //  console.log(current)
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

var binaryTree = new BinaryTree();
binaryTree.create(10, "root");
binaryTree.create(20, "left");
binaryTree.create(30, "right");

binaryTree.create(35, "left");
binaryTree.create(40, "right");

// binaryTree.create(30);
