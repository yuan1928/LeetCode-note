var MyQueue = function() {
    this.stack1=[]
    this.stack2=[]
};

MyQueue.prototype.push = function(x) {
    while (this.stack1.length!==0)
    {this.stack2.push(this.stack1.pop())}
    this.stack1.push(x)
    while (this.stack2.length!==0)
    {this.stack1.push(this.stack2.pop())}
};
MyQueue.prototype.pop = function() {
    return this.stack1.pop()
};

MyQueue.prototype.peek = function() {
    return this.stack1[this.stack1.length-1]
};

MyQueue.prototype.empty = function() {
    return (this.stack1.length===0)
};
let queue=new MyQueue()
queue.push(1)
queue.push(2)
console.log(queue.pop());
queue.push(3)
console.log(queue.peek());
console.log(queue.empty());