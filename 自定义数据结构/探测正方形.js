var DetectSquares = function() {
    this.points = {}
};

DetectSquares.prototype.add = function(point) {
    const name = point[0]+"/"+point[1]
    if(name in this.points){this.points[name].count+=1}
    else {this.points[name] = {count:1,value:point}}
};

DetectSquares.prototype.count = function(point) {
    const X = []
    const Y = []
    let cur
    for(let p in this.points)
    {
        cur=this.points[p]
        if(cur.value[0]===point[0] && cur.value[1]!==point[1]) {Y.push(cur)}
        else if(cur.value[0]!==point[0] && cur.value[1]===point[1]) {X.push(cur)}
    }

    let res=0
    let pX
    let pY
    for(let x of X)
    {
        for(let y of Y)
        {
            if(Math.abs(x.value[0]-point[0])===Math.abs(y.value[1]-point[1]))
            {
                pX=x.value[0]-point[0]+y.value[0]
                pY=y.value[1]-point[1]+x.value[1]
                if(pX+"/"+pY in this.points)
                {res+=(x.count*y.count*this.points[pX+"/"+pY].count)}
            }
        }
    }
    return res
};

const add=function (dest,src)
{
    for(let p of src)
    {dest.add(p)}
}

const test=new DetectSquares()
/*for(let p of [[3,10],[11,2],[3,2]]) {test.add(p)}
console.log(test.count([11, 10]));
console.log(test.count([14, 8]));
test.add([11,2])
console.log(test.count([11, 10]));*/
const add1=[[5,10],[10,5],[10,10]]
const add2=[[3,0],[8,0],[8,5]]
const add3=[[9,0],[9,8],[1,8]]
add(test,[...add1,...add2,...add3,[0,0],[8,0],[8,8]])
console.log(test.count([0,8]));
