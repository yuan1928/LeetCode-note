//后序遍历序列：左树(较小值)+右树(较大值)+节点值
var verifyPostorder = function(postorder) {
    if(!postorder.length)return true

    let DFS=function (tree){
        if(tree.length<=1){return true}

        let end=tree.length-1
        let center=0
        while (tree[center]<tree[end] && center<end){center+=1}//左树所有值都小于节点值
        if(center===end){return DFS(tree.slice(0,end))}//注意右树可能为空
        else
        {
            for(let i=center; i<end; i++)//center为0即左树为空
            {
                if(tree[i]<=tree[end])return false//右树所有值都大于节点值
            }
            return DFS(tree.slice(0,center))&&DFS(tree.slice(center,end))
        }
    }

    return DFS(postorder)
};
console.log(verifyPostorder([1,3,2,6,5]));
console.log(verifyPostorder([1,2,3,4,5]));
console.log(verifyPostorder([5,4,3,2,1]));
console.log(verifyPostorder([1, 2, 5, 10, 6, 9, 4, 3]));
console.log(verifyPostorder([179, 437, 1405, 5227, 8060, 8764, 8248, 4687, 3297, 13038, 12691, 15744, 16195, 15642, 19813, 17128, 21051, 20707, 22177, 21944, 23644, 23281, 19970, 23652, 26471, 31467, 33810, 32300, 33880, 27334, 25987, 35643, 35103, 36489, 42534, 42990, 42942, 37090, 36075, 34516, 16624, 11335, 10737, 44641, 45754, 47096, 46021, 49150, 48013, 49814, 51545, 52555, 50701, 47875, 56783, 57558, 53812, 62008, 61737, 63052, 63478, 62799, 59246, 64765, 64066, 63862, 65384, 67449, 66552, 57741, 45618, 44412, 667, 69718, 75519, 76819, 72971, 79319, 78145, 80615, 84280, 80984, 86598, 85903, 84334, 80867, 87993, 92361, 88465, 87738, 80364, 94380, 94446, 96785, 93694, 76847, 99655, 98675, 97001, 72112]));