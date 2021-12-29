
var RandomizedSet = function() {
    this.memo={}
    this.nums=[]
};

RandomizedSet.prototype.insert = function(val) {
    if(this.memo[val]!==undefined)return false

    this.nums.push(val)
    this.memo[val]=this.nums.length-1
    return true
};

RandomizedSet.prototype.remove = function(val) {
    //数组直接用splice删除的复杂度不是常数，但pop的复杂度是常熟->用尾元素值覆盖删除目标再pop也相当于删除
    if(this.memo[val]===undefined)return false

    this.memo[this.nums[this.nums.length-1]]=this.memo[val]//覆盖删除的操作相当于将尾元素位置移到了删除目标处->尾元素在memo中的位置索引也要更新
    this.nums[this.memo[val]]=this.nums[this.nums.length-1]//覆盖
    this.nums.pop()//删除
    delete this.memo[val]
    return true
};

RandomizedSet.prototype.getRandom = function() {
    let randomIdx=Math.floor(Math.random()*this.nums.length)
    return (this.nums[randomIdx]===undefined)?null:this.nums[randomIdx]
};
const obj=new RandomizedSet()
console.log(obj.getRandom());
console.log(obj.insert(0));
console.log(obj.insert(1));
console.log(obj.remove(0));
console.log(obj.insert(2));
console.log(obj.remove(1));

console.log(obj.getRandom());
console.log(obj.remove(1));
console.log(obj.insert(2));
console.log(obj.getRandom());