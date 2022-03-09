var minNumber = function(nums){
    /*nums=nums.map((v,k)=>String(v))
    nums.sort((a,b)=>(Number(a+b)-Number(b+a)))
    return nums.join().replace(/,/g,"")*/
    const quikSort=function (start, end, arr){
        if(start>=end)return

        let left=start
        let right=end
        while (left<right)
        {
            //类比按数值大小升序快排：
            //arr.sort((a,b)=>(a-b)) -> while(l<r && arr[s]<=arr[r){r-=1} <=> while(l<r && arr[s]-arr[r]<=0){r-=1}
            //->start等价为a，right等价为b，right在sort条件为false时持续-1；start等价为a，left等价为b，left在sort条件为true时持续+1
            //->arr.sort((a,b)=>((a,b)=>(Number(a+b)-Number(b+a))))等价于：
            while (left<right && Number(String(arr[start])+String(arr[right]))<=Number(String(arr[right])+String(arr[start])))right-=1
            while (left<right && Number(String(arr[start])+String(arr[left]))>=Number(String(arr[left])+String(arr[start])))left+=1
            swap(left, right, arr)
        }
        swap(start, left, arr)
        quikSort(start, left-1, arr)
        quikSort(left+1, end, arr)
    }
    const swap=function (i, j, arr){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
    quikSort(0, nums.length-1, nums)
    nums.forEach((v,k)=>{nums[k]=String(v)})
    return nums.join().replace(/,/g, "")
}
//3033459  (9)8_7_(9)...   (0)...
console.log(minNumber([3,30,34,5,9]));
console.log(minNumber([999999998, 999999997, 999999999]));
console.log(minNumber([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))

