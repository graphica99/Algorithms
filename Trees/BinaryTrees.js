//Representing a tree with linked
var prompt = require("prompt-sync")();
// var n = prompt("How many more times? ");
// console.log(n);
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

  create() {
    var queue = [];
    //push to insert at back || shift to remove from front
    var rn = prompt("enter root node ");
    var node = new Node(rn);
    this.root = node;
    queue.push(this.root);

    while (queue.length > 0) {
      var p = queue.shift();
      var l = prompt(`enter left child ${p.data} -> `);

      if (Number(l) !== -1) {
        var node = new Node(l);
        p.leftNode = node;
        queue.push(node);
      }

      var r = prompt(`enter right child ${p.data} -> `);
      if (Number(r) !== -1) {
        var node = new Node(r);
        p.rightNode = node;
        queue.push(node);
      }
    }
    // console.log(this);
  }

  levelOrderTraversal() {
    var close = [];
    close.push(this.root);
    while (close.length > 0) {
      let popped = close.shift();
      console.log(popped.data);
      if (popped.leftNode !== null) {
        close.push(popped.leftNode);
      }
      if (popped.rightNode !== null) {
        close.push(popped.rightNode);
      }
    }
  }

  countNodes() {
    //push all the element inside an array and return it length;
    var x = 0;
    var close = [];
    close.push(this.root);
    while (close.length > 0) {
      let popped = close.shift();
      x++;
      if (popped.leftNode !== null) {
        close.push(popped.leftNode);
      }
      if (popped.rightNode !== null) {
        close.push(popped.rightNode);
      }
    }
    console.log(x);
  }

  fullNode() {
    var x = 0;
    var close = [];
    close.push(this.root);
    while (close.length > 0) {
      let popped = close.shift();
      if (popped.leftNode !== null) {
        close.push(popped.leftNode);
      }
      if (popped.rightNode !== null) {
        close.push(popped.rightNode);
      }
      if (popped.rightNode && popped.leftNode) {
        x++;
      }
    }
    console.log(x);
  }

  HalfNode() {
    var x = 0;
    var close = [];
    close.push(this.root);
    while (close.length > 0) {
      let popped = close.shift();
      if (popped.leftNode !== null) {
        close.push(popped.leftNode);
      }
      if (popped.rightNode !== null) {
        close.push(popped.rightNode);
      }
      if (
        (popped.rightNode === null && popped.leftNode) ||
        (popped.rightNode && popped.leftNode === null)
      ) {
        x++;
      }
    }
    console.log(x);
  }
}

var binaryTree = new BinaryTree();
// binaryTree.test();
binaryTree.create();
// binaryTree.levelOrderTraversal();
// binaryTree.countNodes();
binaryTree.HalfNode();
