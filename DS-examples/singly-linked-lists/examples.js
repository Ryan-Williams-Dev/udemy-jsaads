class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let curr = this.head;
    let newTail = this.head;

    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if(this.length === 0){
      this.head = null;
      this.tail = null;
    } 
    return curr;
  }

  shift() {
    if (!this.head) return undefined;
    let removedHead = this.head;
    this.head = removedHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return undefined;
    }

    let curr = this.head;
    let count = 0;
    while (count < index) {
      curr = curr.next;
      count++;
    }

    return curr;
  }

  set(index, val) {
    let node = get(index);

    if (node) {
      node.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }


    let before = get(index - 1);
    let after = before.next;
    let newNode = new Node(val)

    before.next = newNode;
    newNode.next = after;
    this.length++;
  }
}

let list = new SingleLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("Oh")
list.push("wait")

console.log (list.pop())

console.log(list)