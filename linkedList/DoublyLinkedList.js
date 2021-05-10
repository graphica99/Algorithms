class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  create(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.head.next = node;
      this.tail = node;
      this.tail.previous = this.head;
      this.length++;
    }
    this.tail.next = node;
    this.tail.prev = this.tail;
    this.tail = node;
    this.length++;
    //   console.log(this)
  }
  display() {
    while (this.head !== null) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
  }
  insertNode(val, pos) {
    var node = new Node(val);
    for (var i = 1; i <= pos - 1; i++) {
      this.head = this.head.next;
    }
    var tempLoc = this.head.next;
    this.head.next = node;
    node.previous = this.head.next;
    node.next = tempLoc;
    tempLoc.previous = node;
    //   console.log(this.head.data)
  }
}

var DLL = new DoublyLinkedList();
DLL.create(10);
DLL.create(20);
DLL.create(30);
DLL.create(40);
DLL.insertNode(35, 3);
DLL.display();
