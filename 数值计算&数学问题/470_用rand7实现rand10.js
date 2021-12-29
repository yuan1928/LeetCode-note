/*var rand10 = function() {
    let sample=[2,3,5,7,8,10,14,15,16,20]
    let out=[1,2,3,4,5,6,7,8,9,10]
    let isFind=false
    while(!isFind)
    {
        let random=rand7()*rand7()
        if(sample.indexOf(random)!==-1)
        {return out[sample.indexOf(random)]}
    }
};*/
var rand10 = function(){
    let row
    let col
    let idx
    do {
        row=rand7()
        col=rand7()
        idx=col+(row-1)*7
    }
    while (idx>40)
    return 1+(idx-1)%10
}