/*贪心原则不能是“先把最轻的两个人装进一艘船再考虑其他的”，否则people=[3,5,3,4],limit=5这样的情况无法通过
var numRescueBoats = function(people, limit) {
    let boats=1
    let restWeight=limit
    let restNum=2
    let compare=function (a,b){
        if(a===b)return 0
        return (a>b)?1:-1
    }
    people.sort(compare)
    for(let i of people.keys())
    {
        if(restWeight>=people[i] && restNum>=1)
        {
            restWeight-=people[i]
            restNum-=1
        }
        else
        {
            boats+=1
            restWeight=limit-people[i]
            restNum=1
        }
    }

    return boats
};*/
//贪心原则：先把最轻的和最重的装进一艘船，再考虑第二轻的和第二重的...
var numRescueBoats = function(people, limit){
    let boats=0
    let left=0
    let right=people.length-1
    let compare=function (a,b){
        if(a===b)return 0
        return (a>b)?1:-1
    }
    people.sort(compare)
    while (left<=right)
    {
        if (left===right){boats+=1;break}
        else
        {
            if(people[left]+people[right]<=limit)
            {
                boats+=1
                left+=1
                right-=1
            }
            else
            {
                boats+=1
                right-=1
            }
        }
    }
    return boats
}
console.log(numRescueBoats(people = [3,5,3,4], limit = 5));