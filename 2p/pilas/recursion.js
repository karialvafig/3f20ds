class Stack {
  constructor() {
      this.data = [];
      this.top = 0;
  }

  push(element) {
      this.data[this.top++] = element;
  }

  pop() {
      return this.data[--this.top];
  }

  length() {
      return this.top;
  }

  clear() {
      this.top = 0;
  }

}

module.exports = Stack;
function fact(n) {
    var s = new Stack();
    var product = 1;
    while (n > 1) {
      s.push(n--);
    }
    while (s.length() > 0) {
      product *= s.pop();
    }
    console.log  (product);
  }