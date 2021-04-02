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
      this.tail = this.head;
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
    // for (var i = 0; i < this.length; i++) {
    //   console.log(this.head.data);
    //   this.head = this.head.next;
    // }
    // using whileLoop
    while (this.head) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
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
  get(pos) {
    for (var i = 1; i <= this.length; i++) {
      if (pos === i) {
        // console.log(this.head)
        return this.head;
      }
      this.head = this.head.next;
    }
  }
  insert(index, data) {
    var node = new Node(data);
    var pos = this.get(index);
    var temp = pos.next;
    pos.next = node;
    node.next = temp;
    this.length++;
  }
  insertAtLast(data) {}
  insertSortedList(data) {
    // var node = new Node(data);
    for (var i = 0; i <= this.length && this.head.data < data; i++) {
      i;
      // console.log(this.head.next)
      this.head = this.head.next;
    }
    this.insert(i, data);
    // console.log(this.head)
  }
}

var List = new SinglyLinkedList();
List.createList(10);
List.createList(20);
List.createList(30);
List.createList(40);
// List.insert(3,25);
// List.insert(2,15);
List.insertSortedList(25);
List.displayListData();
