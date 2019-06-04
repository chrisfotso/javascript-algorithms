// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

class MinStack {
  constructor() {
    this._stack = [];
  }

  push(num) {
    this._stack.push(num);
  }

  pop() {
    this._stack.pop();
  }

  top() {
    return this._stack[this._stack.length - 1];
  }

  getMin() {
    return Math.min(...this._stack);
  }
}
