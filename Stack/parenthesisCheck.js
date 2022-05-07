class Stack {
  constructor() {
    this.arr = [];
  }
  push(element) {
    this.arr.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    } else {
      return this.arr.pop();
    }
  }
  isEmpty() {
    return this.arr.length == 0;
  }
  display() {
    for (let i = 0; i < this.arr.length; i++) {
      console.log(this.arr[i]);
    }
  }
}
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "(" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      if (s[i] == "}") {
        //check the top of stack
        if (stack.length != 0 && stack[stack.length - 1] == "{") {
          stack.pop();
          continue;
        } else {
          isValid = false;
          break;
        }
      } else if (s[i] == ")") {
        //check the top of stack
        if (stack.length != 0 && stack[stack.length - 1] == "(") {
          stack.pop();
          continue;
        } else {
          isValid = false;
          break;
        }
      } else if (s[i] == "[") {
        //check the top of stack
        if (stack.length != 0 && stack[stack.length - 1] == "]") {
          stack.pop();
          continue;
        } else {
          isValid = false;
          break;
        }
      }
    }
  }

  if (isValid === false) {
    return false;
  } else if (isValid === true) {
    if (stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
};
