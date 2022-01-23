var StockPrice = function() {
    this.memo={}
    this.price=[]
    //this.time=[]
    this.curTime=0
};

StockPrice.prototype.update = function(timestamp, price) {
    if(this.memo[timestamp]===undefined) {this.curTime=(timestamp>this.curTime)?timestamp:this.curTime}
    else
    {
        if(this.memo[timestamp]===price)return
        this.price.splice(this.price.indexOf(this.memo[timestamp]),1)
    }
    this.sort(this.price,price)
    this.memo[timestamp]=price
};

StockPrice.prototype.current = function() {
    return this.memo[this.curTime]
};

StockPrice.prototype.maximum = function() {
    return this.price[this.price.length-1]
};

StockPrice.prototype.minimum = function() {
    return this.price[0]
};

StockPrice.prototype.sort=function (arr,val){
    let idx
    if(!arr.length || val<=arr[0]) {idx=0}
    else if(val>=arr[arr.length-1]) {idx=arr.length}
    else
    {
        /*for(let i of arr.keys())
        {
            if(val>=arr[i] && val<=arr[i+1])
            {
                idx=i+1
                break
            }
        }*/
        //优化：逐个查找插入位置->二分查找插入位置
        let left=0
        let right=arr.length-1
        while (Math.floor((left+right)/2)+1<=arr.length-1)
        {
            let mid=Math.floor((left+right)/2)
            if(arr[mid]<=val && arr[mid+1]>=val)
            {
                idx=mid+1
                break
            }
            if(arr[mid]>val){right=mid}
            else if(arr[mid+1]<val){left=mid+1}
        }
    }
    arr.splice(idx,0,val)
    return idx
}

const test=new StockPrice()
test.update(1,10)
test.update(2,5)
console.log(test.current());
console.log(test.maximum());
test.update(1,3)
console.log(test.maximum());
test.update(4,2)
console.log(test.minimum());
