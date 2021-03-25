class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  createList(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    console.log(this);
  }
  displayListData() {
    //using for loop
    for (var i = 0; i < this.length; i++) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
    //using whileLoop
    // while (this.head) {
    //   console.log(this.head.data);
    //   this.head = this.head.next;
    // }
  }
  displayListDataRecursively() {
    if (this.head === null) {
      return null;
    }
    console.log(this.head.data);
    this.head = this.head.next;
    this.displayListDataRecursively(this.head);
  }
  sumAllElements() {
    var sum = 0;
    while (this.head) {
      sum = sum + this.head.data;
      this.head = this.head.next;
    }
    console.log(sum);
    // return sum
  }
  maximumElement() {
    var max = 0;
    while (this.head) {
      if (this.head.data > max) {
        max = this.head.data;
      }
      this.head = this.head.next;
    }
    return max;
  }
  linearSearchList(key) {
    while (this.head) {
      if (key === this.head.data) {
        //if found return the whole node
        // console.log(this.head);
        return this.head;
      }
      this.head = this.head.next;
    }
  }
  binarySearchList(key) {}
  insertionAtBeginning(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
    this.length++;
  }
  // insertionAtPosition(data, pos) {
  //   //20,25,30,35
  //   var position = this.linearSearchList(pos);
  //   position;
  //   var node = new Node(data);
  //   var tempNext = position.next;
  //   position.next = node;
  //   node.next = tempNext;
  //   console.log(this);
  // }
}

var List = new SinglyLinkedList();
List.createList(20);
List.createList(25);
List.createList(35);
List.insertionAtPosition(30, 25);
// List.linearSearchList(25);
// List.insertionAtBeginning(10);
// List.insertionAtBeginning(5);
// List.maximumElement();
// List.sumAllElements();
// List.displayListDataRecursively()
List.displayListData();
