
const a=[1,2,[3,4,[5,6,[9]]],7,[8]]

function flatten1(arr){
    return arr.reduce((a,b)=>{
        if(!Array.isArray(a)){a=[a]}
        return a.concat(Array.isArray(b)?flatten1(b):b)
    })
}

function flatten2(arr){
    while (arr.some(item=>Array.isArray(item)))
    {arr=[].concat(...arr)}
    return arr
}

function flatten3(arr){
    let temp=[]
    for(let item of arr)
    {
        if(Array.isArray(item))
        {
            temp=temp.concat(flatten3(item))
            //(temp.concat(flatten3(item)))
        }
        else {temp.push(item)}
    }
    return temp
}

console.log(flatten1(a));
console.log(flatten2(a));
console.log(flatten3(a));