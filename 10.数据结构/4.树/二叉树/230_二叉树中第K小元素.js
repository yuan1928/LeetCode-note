function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
//中序遍历得到排序后的二叉树数组->剪枝：数组长度达到K时停止递归
var kthSmallest = function(root, k) {
    let memo=[]
    let DFS=function (node){
        if(memo.length===k)return
        if(!(node instanceof TreeNode) || (!node.left && !node.right))
        {
            memo.push((node instanceof TreeNode)?node.val:node)
            return
        }

        if(node.left){DFS(node.left)}
        memo.push(node.val)
        if(node.right){DFS(node.right)}
    }
    DFS(root)
    return memo[k-1]
};
let tree1=new TreeNode(3,new TreeNode(1,null,2),4)
let tree2=new TreeNode(5,new TreeNode(3,new TreeNode(2,1),4),new TreeNode(6))
console.log(kthSmallest(tree2, 3));
//other method:
//求每个当前节点cur左子树的节点数L
//L<k-1 -> 目标节点在右子树中 -> cur=cur.right
//L=k-1 -> cur即目标节点
//L>k-1 -> 目标节点在左子树中 -> cur=cur.left