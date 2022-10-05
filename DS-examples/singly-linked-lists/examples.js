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
    let node = this.get(index);

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
    if (index = 0) {
      this.unshift(val);
      return true;
    }


    let before = this.get(index - 1);
    console.log(before)
    let after = before.next;
    let newNode = new Node(val)

    before.next = newNode;
    newNode.next = after;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prev = this.get(index - 1)
    let target = prev.next;
    prev.next = target.next;
    this.length--;

    return target;
  }
}

let list = new SingleLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("Oh")
list.push("wait")

list.insert(2, "OI")

console.log(list)