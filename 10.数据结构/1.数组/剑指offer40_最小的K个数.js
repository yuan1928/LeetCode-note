/*const quikSort=function (start, end, arr){
    if(start>=end)return

    let left=start
    let right=end
    while (left<right)
    {
        while (left<right && arr[right]>=arr[start]){right-=1}
        while (left<right && arr[left]<=arr[start]){left+=1}//先right后left，不可颠倒
        swap(left, right, arr)
    }

    swap(start, left, arr)
    quikSort(start, left-1, arr)
    quikSort(left+1, end, arr)
}*/
var getLeastNumbers = function(arr, k) {
    if(arr.length<=k)return arr

    let res=[]
    const quikChoose=function (start, end, arr, k){
        if(start>=end)
        {
            res=arr.slice(0,k)
            return
        }

        let left=start
        let right=end
        while (left<right)
        {
            while (left<right && arr[right]>=arr[start]){right-=1}
            while (left<right && arr[left]<=arr[start]){left+=1}//先right后left，不可颠倒
            swap(left, right, arr)
        }

        swap(start, left, arr)
        /*if(left>=k-1) {res=arr.slice(0,k)}  如果left>k,只能保证arr.slice(0,left)是前left小，不能保证arr.slice(0,k)是前k小
        else {quikChoose(left+1, end, arr, k)}*/
        if(left===k-1)res=arr.slice(0,k)
        else if(left>k-1)quikChoose(start, left-1, arr, k)
        else {quikChoose(left+1, end, arr, k)}
    }
    const swap=function (l, r, arr){
        let temp=arr[l]
        arr[l]=arr[r]
        arr[r]=temp
    }

    quikChoose(0, arr.length - 1, arr, k)
    return res
};
console.log(getLeastNumbers1([0,1,2,1], 3));

/*
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
}*/
console.log(getLeastNumbers([0,0,1,2,4,2,2,3,1,4],8))
console.log(getLeastNumbers([0,0,1,3,4,5,0,7,6,7],9))
console.log(getLeastNumbers([3,2,1],2))
console.log(getLeastNumbers([0,0,0,1,2,2,3,7,6,1],3))