var Solution = function(w) {
    this.w=w
    this.distribution=[]
    this.thresh=0
};

Solution.prototype.pickIndex = function() {
    if(this.distribution.length===0)
    {
        for(let i of this.w.keys())
        {
            if(i-1>=0)
            {this.distribution.push([this.distribution[i-1][1],this.distribution[i-1][1]+this.w[i]])}
            else
            {this.distribution.push([0,this.w[i]])}
        }
        this.thresh=this.distribution[this.distribution.length-1][1]
    }
    let random=Math.floor(Math.random()*this.thresh)
    let left=0
    let right=this.w.length-1
    while (left<=right)
    {
        let mid=Math.floor((left+right)/2)
        if(this.distribution[mid][0]<=random && this.distribution[mid][1]>random) return mid
        else if(this.distribution[mid][0]>random) right=mid-1
        else if(this.distribution[mid][1]<=random) left=mid+1
    }
};
let obj=new Solution([1,1,1,1])
console.log(obj.pickIndex());
console.log(obj.pickIndex());
console.log(obj.pickIndex());
console.log(obj.pickIndex());
console.log(obj.pickIndex());
console.log(obj.pickIndex());
console.log(obj.pickIndex());
console.log(obj.pickIndex());