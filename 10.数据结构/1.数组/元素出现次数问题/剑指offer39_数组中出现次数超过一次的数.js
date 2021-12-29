var getNumSort=function (arr){
    arr.sort((a,b)=>(a-b))
    const half=Math.floor(arr.length/2)
    return arr[half]
}
var getNum=function (nums){
    let res
    let vote=0
    for(let num of nums)
    {
        if(vote && num===res){vote+=1}
        else if(!vote)
        {
            res=num
            vote=1
        }
        else {vote-=1}
    }
    return res
}
console.log(getNum([1, 2, 3, 2, 2, 2, 5, 4, 2]));
