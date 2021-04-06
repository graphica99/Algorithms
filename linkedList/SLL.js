class Node {
  constructor(data) {
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
  // create(data) {
  //   var node = new Node(data);
  //   if (!this.head) {
  //     this.head = node;
  //     this.tail = this.head;
  //   } else {
  //     this.tail.next = node;
  //     this.tail = node;
  //   }
  //   this.length++;

  //   console.log(this);
  // }
  create(arr) {
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
    for (var i = 0; i < this.length; i++) {
      // console.log(this.head.data);
      this.head = this.head.next;
    }
  }
  displayRecursively() {
    if (this.head === null) {
      return null;
    }
    console.log(this.head.data);
    this.head = this.head.next;
    this.displayRecursively(this.head);
  }
  search(key) {
    while (this.head) {
      if (this.head.data === key) {
        console.log(this.head.data);
        return this.head;
      }
      this.head = this.head.next;
    }
    console.log("value not found");
  }
  insert(key, data) {
    for (var i = 0; i <= key - 1; i++) {
      this.head = this.head.next;
    }
    var node = new Node(data);
    var temp = this.head.next;
    this.head.next = node;
    node.next = temp;
    console.log(this.head);
  }
  get(pos) {
    for (var i = 0; i < this.length; i++) {
      if (pos === i) {
        console.log(this.head);
        return this.head;
      }
      this.head = this.head.next;
    }
  }
  remove(key, pos) {
    // delete this.get(0);
    var prevNode = this.get(pos - 1);
    var nextNode = this.get(pos + 1);
    prevNode.next = nextNode;
    this.length--;
  }
  isSorted() {
    var data = 0;
    for (var i = 0; i < this.length; i++) {
      if (this.head.data < data) return false;
      data = this.head.data;
      this.head = this.head.next;
    }
    return true;
  }
  removeDuplicate() {
    var p = this.head;
    var q = p.next;
    while (q != null) {
      if (p.data !== q.data) {
        p = q;
        q = p.next;
      } else {
        p = q.next;
        console.log(q);
        q = p.next;
      }
    }
  }
  reverse() {
    var arr = [];
    for (var i = 0, j = this.length - 1; i < this.length; i++, j--) {
      arr[j] = this.head.data;
      this.head = this.head.next;
    }
    this.create(arr);
  }
  reverseLink() {
    var p = this.head;
    var q = null;
    var r = null;
    while (p) {
      r = q;
      q = p;
      p = p.next;
      q.next = r;
    }
    this.head = q;
    console.log(this);
  }
}
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.create([10, 20, 30, 40, 50, 60, 70]);

// singlyLinkedList.reverseLink();
// singlyLinkedList.displayRecursively();
// singlyLinkedList.reverseLink(this.head, this.head);
// singlyLinkedList.analogBinary();
// singlyLinkedList.create([1, 2, 2, 4, 5, 5, 7]);
// singlyLinkedList.removeDuplicate()
// console.log(singlyLinkedList.isSorted());
// singlyLinkedList.insert(1, 25);
// singlyLinkedList.remove(20, 1);
// singlyLinkedList.search(20);

// singlyLinkedList.display();
// singlyLinkedList.create(10);
// singlyLinkedList.create(20);
// singlyLinkedList.create(30);
