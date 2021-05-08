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
  getLinkedList(pos) {
    for (var i = 1; i <= this.length; i++) {
      if (pos === i) {
        return this.head;
      }
      this.head = this.head.next;
    }
  }
  insert(index, value) {
    var node = new Node(value);
    var pos = this.getLinkedList(index);
    var tempPos = pos.next;
    pos.next = node;
    node.next = tempPos;
    this.length++;
  }
  insertFirst(val) {
    var node = new Node(val);
    var head = this.head;
    node.next = head;
    this.head = node;
  }
  insertLast(val) {
    var node = new Node(val);
    var tail = this.tail;
    tail.next = node;
    this.tail = node;
  }
  // ****
  insertIntoSortedList(value) {
    var node = new Node(value);
    var p = this.head;
    var q = null;
    while (p && p.data < value) {
      q = p;
      p = p.next;
      console.log(this.head.data);
      console.log(q.data);
      console.log(p.data);
      this.head = this.head.next;
    }
    node.next = q.next;
    q.next = node;
    console.log(this);
  }
  deleteLinkedList(pos) {
    var p = this.head;
    var q = null;
    for (var i = 0; i < pos - 1; i++) {
      q = p;
      p = p.next;
    }
    q.next = p.next;
  }
  isSorted() {
    var max = 0;
    for (var i = 0; i < this.length; i++) {
      if (this.head.data < max) {
        return false;
      } else {
        max = this.head.data;
      }
      this.head = this.head.next;
    }
    return true;
  }
  reversingLinkedList() {
    var q = null;
    var p = null;
    var r = this.head;
    while (r != null) {
      q = p;
      p = r;
      r = r.next;
      p.next = q;
      // console.log(q)
      console.log(this);
    }
    this.head = q;
  }
  isLoop() {
    let q = this.head;
    let p = this.head;
    do {
      p = p.next;
      q = q.next;
      q = q != null ? q.next : null;
    } while (q && p);
    return p == q ? true : false;
  }
}

var SLL = new LinkedList();

SLL.createArr([10, 20, 30, 40]);
console.log(SLL.isLoop());
// SLL.reversingLinkedList();
// console.log(SLL.isSorted());
// SLL.deleteLinkedList(2);
// SLL.insertIntoSortedList(25)
// SLL.insertFirst(5)
// SLL.insertLast(50)
// SLL.getLinkedList(4)
// SLL.insert(2, 25);
// SLL.linearSearch(10,'value');
// SLL.maxElement()
// SLL.sumOfAllElement();
// SLL.displayRecursively();
// SLL.display();
