/*var MaxQueue = function() {
    this.main=[]
    this.assist=[]
};
MaxQueue.prototype.max_value = function() {
    return (this.assist.length)?this.assist[this.assist.length-1]:-1
};
MaxQueue.prototype.push_back = function(value) {
    this.main.push(value)
    if(this.assist.length)
    {
        if(value<=this.assist[0]){this.assist.unshift(value)}
        else if(value>=this.assist[this.assist.length-1]){this.assist.push(value)}
        else
        {
            for(let i of this.assist.keys())
            {
                if(this.assist[i]<=value && this.assist[i+1]>=value)
                {
                    this.assist.splice(i+1,0,value)
                    break
                }
            }
        }
    }
    else{this.assist.push(value)}
};
MaxQueue.prototype.pop_front = function() {
    const pop=this.main.shift()
    for(let i of this.assist.keys())
    {
        if(this.assist[i]===pop)
        {
            this.assist.splice(i,1)
            break
        }
    }
    return pop
};*/
var MaxQueue = function() {
    this.main=[]
    this.monotonous=[]
};
MaxQueue.prototype.max_value = function() {
    return (this.monotonous.length)?this.monotonous[0]:-1
};
MaxQueue.prototype.push_back = function(value) {
    this.main.push(value)
    while (this.monotonous.length && this.monotonous[this.monotonous.length-1]<value)
    {this.monotonous.pop()}
    this.monotonous.push(value)//0->this.monotonous.length-1: 值减小，索引增加，本质上是优先队列
    //使某个元素成为最大值的两个因素：值尽可能大->成为全局最大值的可能性更大，索引尽可能靠后->不受pop操作影响可能性越大、成为"备胎"可能性越大
    //this.monotonous中的备选最大值要么值大，要么索引靠后
    //当产生push操作时，this.monotonous中的元素索引都比当前新元素小，如果其值还没有新元素大，那么其不应再保留于备选的最大值优先队列中
};
MaxQueue.prototype.pop_front = function() {
    if(!this.monotonous.length)return -1

    const pop=this.main.shift()
    if(pop===this.monotonous[0])
    {this.monotonous.shift()}
    return pop
};
let obj=new MaxQueue()
obj.push_back(1)
obj.push_back(2)
console.log(obj.max_value());
console.log(obj.pop_front());
console.log(obj.max_value());
console.log(obj.pop_front());
console.log(obj.max_value());