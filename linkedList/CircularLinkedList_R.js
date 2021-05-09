class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  create(val) {
    var node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
    }
    this.tail.next = node;
    this.tail = node;
    node.next = this.head;
    // console.log(this.head.data);
    // console.log(this.tail.data);
    // console.log(this.tail.next.data)
  }
  display() {
    var p = this.head;
    do {
      console.log(this.head.data);
      this.head = this.head.next;
    } while (p !== this.head);
  }
  insert(val, pos) {
    for (var i = 1; i <= pos - 1; i++) {
      this.head = this.head.next;
    }
    var node = new Node(val);
    node.next = this.head.next;
    this.head.next = node;
  }
}

var CLL = new CircularLinkedList();
CLL.create(10);
CLL.create(20);
CLL.create(30);
CLL.create(40);
CLL.insert(25, 1);
CLL.display();
