function TreeNode(val,left,right) {
      this.val = val;
      this.left = left
      this.right = right;
  }

var kthLargest = function(root, k) {
    let memo=[]
    const DFS=function (node){
        if(memo.length===k)return
        if(!(node instanceof TreeNode) || (!node.left && !node.right))
        {
            memo.push((node instanceof TreeNode)?node.val:node)
            return;
        }

        if(node.right){DFS(node.right)}
        memo.push(node.val)
        if(node.left){DFS(node.left)}
    }
    DFS(root)
    return memo[k-1]
};
let tree1=new TreeNode(3,new TreeNode(1,null,2),4)
let tree2=new TreeNode(5,new TreeNode(3,new TreeNode(2,1),4),new TreeNode(6))
console.log(kthLargest(tree1, 1));
console.log(kthLargest(tree2, 3));