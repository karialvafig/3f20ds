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
function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
      s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
      rword += s.pop();
    }
    return word === rword;
  }