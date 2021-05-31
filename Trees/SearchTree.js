//B+ tree
//Incomplete!!!!!!!!!!!!!!
class Node {
  constructor(data) {
    this.data = data;
    this.rightNode = null;
    this.leftNode = null;
    this.middleNode = null;
  }
}

class SearchTree {
  constructor() {
    this.root = null;
    this.leftValue = null;
    this.rightValue = null;
  }

  insert(value) {
    var node = new Node(value);
    if (this.root === null) {
      this.root = node;
      this.leftValue = node;
    } else {
      //there should be a temp value for leftVal and rightVal
      if (this.rightValue === null) {
        this.rightValue = node;
      } else {
        let leftVal = this.leftValue;
        let rightVal = this.rightValue;
        var node1 = new Node(leftVal.data);
        var node2 = new Node(value);
        this.root = rightVal;
        //   console.log(rightVal)
        rightVal.leftNode = node1;
        rightVal.middleNode = node2;
      }
    }
    console.log(this);
  }
  //this.root = node;
  //this.rightValue = node;
  //this.leftNode = node;
}
var ST = new SearchTree();
ST.insert(20);
ST.insert(30);
ST.insert(40);
