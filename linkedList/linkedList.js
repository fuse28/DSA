class Node {
  constructor(data) {
    this.data = data;
    this.nextAddress = null;
  }
}
let node = new Node(10);
console.log(node);

class LinkedList {
  root = null;

  //how to add element in linked list:

  add(data) {
    let newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
    }

    // move temp to last until nextAdress is null
    else {
      let temp = this.root;
      while (temp.nextAddress != null) {
        temp = temp.nextAddress;
      }
      temp.nextAddress = newNode;
    }
  }
  display() {
    let temp = this.root;
    while (temp != null) {
      console.log(temp.data + "-->");
      temp = temp.nextAddress;
    }
  }
  addToFront(data) {
    let newNode = new Node(data);
    newNode.nextAddress = this.root;
    this.root = newNode;
  }

  removeLast() {
    let temp = this.root;
    if ((this.root = null)) {
      return;
    } else if (this.root.nextAddress == null) {
      this.root = null;
      return;
    }
    while (temp.nextAddress.nextAddress != null) {
      temp = temp.nextAddress;
    }
    // temp is second last element
    temp.nextAddress = null;
  }
}
let linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.addToFront(50);
linkedList.removeLast();

linkedList.display();

console.log(linkedList);
