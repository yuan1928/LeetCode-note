var singleNumber = function(nums){
    let or=0
    for(let num of nums)
    {or^=num}
    const firstOne=or&(-or)//最低位的1置1，其余位置0
    let res1=0
    let res2=0
    for(let num of nums)
    {
        let mask=num&firstOne
        if(mask){res1^=num}
        else {res2^=num}
    }
    return [res1,res2]
}
console.log(singleNumber([1, 2, 1, 3, 2, 5]));
console.log(singleNumber([0, 1]));
console.log(singleNumber([2, 1, 2, 3, 4, 1]));
singleNumber([1403617094,-490450406,-1756388866,-967931676,1878401007,1878401007,-74743538,1403617094,-1756388866,-74743538,-490450406,-1895772685])

