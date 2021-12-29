//合并两个有序数组，新数组仍然有序
let Merge=function (arr1,arr2)
{
    let arr=[]
    while (arr1.length!==0 && arr2.length!==0)
    {
        if(arr1[0]<arr2[0])
        {
            arr.push(arr1[0])
            arr1.splice(0,1)
        }
        else
        {
            arr.push(arr2[0])
            arr2.splice(0,1)
        }
    }
    if(arr1.length!==0 || arr2.length!==0)
    {arr=arr.concat((arr1.length!==0)?arr1:arr2)}

    return arr
}
//console.log(merge([1, 3, 5, 7, 9, 11], [2, 4, 6, 8, 10, 12]));

//88 合并两个有序数组
var merge = function(nums1, m, nums2, n) {
    if(m===0 && n!==0)
    {
        for(let i of nums1.keys())
        {nums1[i]=nums2[i]}
        return nums1
    }
    else if(m!==0 && n===0){return nums1}
    else
    {
        let copy=nums1.slice(0,m)
        let pointer1=0
        let pointer2=0
        let pointer=0
        while (pointer1<=m-1 && pointer2<=n-1 && pointer<=m+n-1)
        {
            if(copy[pointer1]<=nums2[pointer2])
            {
                nums1[pointer]=copy[pointer1]
                pointer1+=1
                pointer+=1
            }
            else
            {
                nums1[pointer]=nums2[pointer2]
                pointer2+=1
                pointer+=1
            }
        }
        if(pointer1===m && pointer2<=n-1)
        {
            while (pointer2<=n-1)
            {
                nums1[pointer]=nums2[pointer2]
                pointer2+=1
                pointer+=1
            }
        }
        if(pointer2===n && pointer1<=m-1)
        {
            while (pointer1<=m-1)
            {
                nums1[pointer]=copy[pointer1]
                pointer1+=1
                pointer+=1
            }
        }
        return nums1
    }
};
console.log(merge(nums1 = [1,0], m = 1, nums2 = [2], n = 1));