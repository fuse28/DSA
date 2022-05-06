class Stack {
  constructor() {
    this.arr = [];
  }

  // pushing at start

  push(value) {
    this.arr.push(value);
  }

  //poping at start

  pop() {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    } else {
      return this.arr.pop();
    }
  }

  //checking if stack is empty

  isEmpty() {
    return this.arr.length == 0;
  }

  // geting the top element
  top() {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    }
    return this.arr[this.arr.length - 1];
  }

  addAtBottom(element) {
    let tempStack = new Stack();
    while (!s.isEmpty()) {
      tempStack.push(s.pop());
    }
    s.push(element);
    while (!tempStack.isEmpty()) {
      s.push(tempStack.pop());
    }
  }

  display() {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
  }
}

let s = new Stack();

s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.push(50);

console.log(s);
// console.log(s.pop()); //50
// console.log(s.top()); //40

//insert Element at bottom

let tempStack = new Stack();
while (!s.isEmpty()) {
  tempStack.push(s.pop());
}
s.push(60);

while (!tempStack.isEmpty()) {
  s.push(tempStack.pop());
}

//60 added at the bottom ie at index 0

//Reversing the stack

function reverseStack(stack) {
  if (!stack.isEmpty()) {
    let element = stack.pop();
    reverseStack(stack);
    stack.addAtBottom(element);
  }
}
reverseStack(s);
s.display();
