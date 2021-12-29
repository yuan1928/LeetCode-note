var minEatingSpeed = function(piles, h) {
    let left=Math.ceil((piles.reduce((a,b)=>(a+b)))/h)
    let right=Math.max(...piles)

    let simulate=function (v){
        let t=0
        for(let pile of piles)
        {t+=Math.ceil(pile/v)}
        return t<=h
    }

    let mid
    let res
    while (left<=right)
    {
        mid=Math.floor((left+right)/2)
        if(simulate(mid)) {res=mid;right-=1}//不保存mid的话，更新right后如果无法通过simulate，则mid会被更新为错误的Math.floor((left+right)/2)
        else {left=mid+1}
    }
    /*这样寻找mid下界会导致超时
    while (simulate(mid-1))
    {mid-=1}*/

    return res
};
console.log(minEatingSpeed([312884470],312884469));