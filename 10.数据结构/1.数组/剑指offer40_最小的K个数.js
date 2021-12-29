var getLeastNumbers1 = function(arr, k) {
    if(arr.length<=k)return arr

    let mins=arr.slice(0,k).sort((a,b)=>(a-b))//从小到大
    for(let i=k; i<=arr.length-1; i++)
    {
        if(arr[i]<=mins[0])
        {
            mins.pop()
            mins.unshift(arr[i])
        }
        else if(arr[i]>mins[0] && arr[i]<mins[k-1])
        {
            for(let j of mins.keys())
            {
                if(mins[j]<=arr[i] && arr[i]<=mins[j+1])
                {
                    mins.pop()
                    mins.splice(j+1,0,arr[i])
                }
            }
        }
    }
    return mins
};
console.log(getLeastNumbers1([0,1,2,1], 3));

var getLeastNumbers = function(arr, k){
    if(k===0)return []
    if(arr.length<=k)return arr

    const quicChoose=function (head,tail){
        let left=head+1
        let right=tail
        while (left<right)
        {
            if(arr[left]>=arr[head] && arr[right]<=arr[head])
            {
                let temp=arr[left]
                arr[left]=arr[right]
                arr[right]=temp
                if(left+1<=right-1)
                {
                    left+=1
                    right-=1
                    continue
                }
            }
            if(arr[left]<=arr[head]){left+=1}
            if(arr[right]>=arr[head] && right-1>=left){right-=1}//循环终止时left=right
        }

        if(arr[head]>arr[left])
        {
            let temp=arr[head]
            arr[head]=arr[left]
            arr[left]=temp
        }

        if(left===k)return arr.slice(0,k)
        else if(left>k)return quicChoose(head,left-1)
        else if(left<k){return quicChoose(left,tail)}
    }
    return quicChoose(0,arr.length-1)
}
console.log(getLeastNumbers([0,0,1,2,4,2,2,3,1,4],8))
console.log(getLeastNumbers([0,0,1,3,4,5,0,7,6,7],9))
console.log(getLeastNumbers([3,2,1],2))
console.log(getLeastNumbers([0,0,0,1,2,2,3,7,6,1],3))