var PeekingIterator = function(iterator) {
    this.iterator = iterator;
    this.nextElement = this.iterator.next();
};

PeekingIterator.prototype.peek = function() {
    return this.nextElement;

};

PeekingIterator.prototype.next = function() {
    const ret = this.nextElement;
    this.nextElement = this.iterator.hasNext() ? this.iterator.next() : null;
    return ret;
};

PeekingIterator.prototype.hasNext = function() {
    return this.nextElement != null;
};
//peek()和next()都返回头元素
//next()重置this.nextElement，peek()不重置->this.nextElement还是已返回的前一个头元素，相当于指针未移动