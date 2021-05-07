class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  create(data) {
    var node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
      console.log(this);
    }
  }
  createArr(arr) {
    var node = new Node(arr[0]);
    this.head = node;
    this.tail = node;
    this.length++;
    for (var i = 1; i < arr.length; i++) {
      var node = new Node(arr[i]);
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }
  display() {
    var head = this.head;
    while (head) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
  }
  displayRecursively() {
    let head = this.head;
    if (!head) {
      return 0;
    }
    console.log(this.head.data);
    this.head = this.head.next;
    this.displayRecursively(this.head);
  }
  sumOfAllElement() {
    var sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum = sum + this.head.data;
      this.head = this.head.next;
    }
    console.log(sum);
  }
  maxElement() {
    var max = 0;
    for (var i = 0; i < this.length; i++) {
      if (this.head.data > max) {
        max = this.head.data;
      }
      this.head = this.head.next;
    }
    console.log(max);
  }
  linearSearch(value, type) {
    switch (type) {
      case (type = "index"):
        for (var i = 1; i <= this.length; i++) {
          if (value === i) {
            console.log(this.head.data);
          }
          this.head = this.head.next;
        }
        break;
      case (type = "value"):
        for (var i = 0; i < this.length; i++) {
          if (value === this.head.data) {
            console.log(this.head.data);
          }
          this.head = this.head.next;
        }
        break;
      default:
        break;
    }
  }
  insert(index, value) {
    var node = new Node(value);

    for (var i = 1; i <= this.length; i++) {
      i;
      var pos = this.head;
      if (index == i) {
        console.log(pos);
        var tempPos = pos.next;
        pos.next = node;
        node.next = tempPos;
        console.log(this);
      }
    }
    this.head = this.head.next;
  }
}

var SLL = new LinkedList();
// SLL.create(10);
// SLL.create(20);
// SLL.create(30);
SLL.createArr([10, 20, 30, 40]);
SLL.insert(2, 25);
// SLL.linearSearch(10,'value');
// SLL.maxElement()
// SLL.sumOfAllElement();
SLL.displayRecursively();
// SLL.display();
