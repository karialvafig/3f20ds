function fact(n) {
    var s = new Stack();
    var product = 1;
    while (n > 1) {
      s.push(n--);
    }
    while (s.length() > 0) {
      product *= s.pop();
    }
    return product;
  }