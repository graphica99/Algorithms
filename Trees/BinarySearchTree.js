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
      if (data < current.data) {
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

  search(value) {
    let current = this.root;
    while (current !== null) {
      console.log(current.data);
      if (current.data === value) {
        console.log(current);
        return;
      }

      if (value < current.data) {
        current = current.leftNode;
      } else if (value > current.data) {
        current = current.rightNode;
      }
    }

    // return current;
  }
  // insert(value) {
  //   let current = this.root;
  //   var node = new Node(value);
  //   while (current !== null) {
  //     if (value < current.data) {
  //       current.leftNode = node;
  //     } else {
  //       current.rightNode = node;
  //     }

  //     if (value < current.data) {
  //       current = current.leftNode;
  //     } else if (value > current.data) {
  //       current = current.rightNode;
  //     }
  //   }
  // }
}

var tree = new BinarySearchTree();
tree.create(10);
tree.create(5);
tree.create(13);
tree.create(11);
tree.create(2);
tree.create(16);
tree.create(7);
// tree.insert(6);
// console.log(tree.search(6));
// console.log(tree.searchRecursion(16));

//      10
//   5     13
// 2  7  11  16
