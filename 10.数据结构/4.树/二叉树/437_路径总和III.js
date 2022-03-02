function TreeNode(val, left, right)
{
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}

/*暴力搜索
var pathSumDFS=function (root, targetSum){
    let res=0
    const DFS=function (curNode, curSum){
        let val=(curNode instanceof TreeNode)?curNode.val:curNode
        if(val+curSum===targetSum){res+=1}
        if(curNode.left)
        {
            DFS(curNode.left, curSum+val)//沿当前路径继续搜索
            DFS(curNode.left, 0)//开辟新路径
        }
        if(curNode.right)
        {
            DFS(curNode.right, curSum+val)
            DFS(curNode.right, 0)
        }
    }
    DFS(root, 0)
    return res
}*/

var pathSum = function(root, targetSum) {
    const prefix = new Map();
    prefix.set(0, 1);//前缀长为0的节点有1个
    return dfs(root, prefix, 0, targetSum);
}

const dfs = (root, prefix, curr, targetSum) => {
    //root：当前节点
    //prefix：{某个路径长度：该长度出现次数}
    //curr: 当前路径和
    if (root == null) {return 0}

    let res = 0;
    curr += (root.val)?root.val:root
    res = prefix.get(curr - targetSum) || 0;//当前节点到根节点之间路径和为targetSum的路径条数

    prefix.set(curr, (prefix.get(curr) || 0) + 1);//当前路径和为curr->更新prefix
    res += dfs(root.left, prefix, curr, targetSum);//继续向下搜索
    res += dfs(root.right, prefix, curr, targetSum);
    prefix.set(curr, (prefix.get(curr) || 0) - 1);//对经过与[当前节点在同一深度的其他节点]的路径进行搜索，删除当前节点经过的路径记录

    return res;
}
let obj=new TreeNode(10,new TreeNode(5,new TreeNode(3,3,-2),new TreeNode(2,null,1)),new TreeNode(-3,null,11))
let obj1= new TreeNode(5,new TreeNode(4,new TreeNode(11,7,2),null),new TreeNode(8,new TreeNode(13,5,1),4))
console.log(pathSum(obj, 8));
console.log(pathSum(obj1,22));