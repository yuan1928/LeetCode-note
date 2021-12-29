var MinStack = function() {
    this.stack=[]
    this.mins=[Infinity]
};
MinStack.prototype.push = function(val) {
    if(val<=this.mins[this.mins.length-1]){this.mins.push(val)}
    this.stack.push(val)
};
MinStack.prototype.pop = function() {
    if(this.top()===this.mins[this.mins.length-1]) {this.mins.pop()}
    this.stack.pop()
};
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};
MinStack.prototype.getMin = function() {
    return this.mins[this.mins.length-1]
};
let queue=new MinStack()
queue.push(-3)
queue.push(0)
queue.push(-3)
console.log(queue.getMin());
queue.pop()
console.log(queue.top());
console.log(queue.getMin());