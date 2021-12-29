/*var asteroidCollision = function(asteroids) {
    const destroy=[]
    let positive=[]
    let negative=[]
    const getQueue=function (num,queue){
        if(queue.length===0){queue.push(num)}
        else if(num>=queue[0]){queue.unshift(num)}
        else if(num<=queue[queue.length-1]){queue.push(num)}
        else
        {
            for(let i=0; i<queue.length; i++)
            {
                if(queue[i]>=num && queue[i+1]<=num)
                {queue.splice(i+1,0,num)}
            }
        }
    }

    for(let i=0; i<asteroids.length; i++)
    {
        if(asteroids[i]>0){getQueue(asteroids[i],positive)}
        else if(positive[0]> -asteroids[i] && (positive[0]> -asteroids[i-1] || destroy.indexOf(i-1)!==-1)) {destroy.push(i)}
        else if(positive[0]===-asteroids[i] && (positive[0]> -asteroids[i-1] || destroy.indexOf(i-1)!==-1))
        {
            destroy.push(i)
            positive.shift()
        }
    }
    for(let i=asteroids.length-1; i>=0; i--)
    {
        if(asteroids[i]<0){getQueue(-asteroids[i],negative)}
        else if(negative[0]>asteroids[i] && (negative[0]>asteroids[i+1] || destroy.indexOf(i+1)!==-1)) {destroy.push(i)}
        else if(negative[0]===asteroids[i] && (negative[0]>asteroids[i+1] || destroy.indexOf(i+1)!==-1))
        {
            destroy.push(i)
            negative.shift()
        }
    }

    const res=[]
    for(let i=0; i<asteroids.length; i++)
    {
        if(destroy.indexOf(i)===-1)
        {res.push(asteroids[i])}
    }
    return res
};*/
var asteroidCollision = function(asteroids) {
    const res=[]
    for(let asteroid of asteroids)
    {
        if(asteroid>0){res.push(asteroid)}
        else
        {
            let top=res[res.length-1]
            let isDestroy=false
            while (top>0)
            {
                if(top> -asteroid)
                {
                    isDestroy=true
                    break
                }
                else if(top< -asteroid)
                {
                    res.pop();
                    top=res[res.length-1]
                }
                else
                {
                    isDestroy=true;
                    res.pop();
                    break
                }
            }
            if(!isDestroy){res.push(asteroid)}
        }
    }
    return res
};
console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
console.log(asteroidCollision([-2, -1, 1, 2]));
console.log(asteroidCollision([-2, 1, -1, -1]));
console.log(asteroidCollision([1, 1, -1, -1]));
console.log(asteroidCollision([1, 2, -2, -2]));