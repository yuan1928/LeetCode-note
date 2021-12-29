function TreeNode(val,left,right) {
      this.val = val;
      this.left = left
      this.right = right;
}

var isBalanced = function(root) {
    if(!root)return true

    let res=true
    const DFS=function (cur){
        let left=(cur.left)?(1+DFS(cur.left)):0
        let right=(cur.right)?(1+DFS(cur.right)):0
        if(Math.abs(left-right)>1)res=false
        return Math.max(left,right)
    }
    DFS(root)
    return res
};
const tree1=new TreeNode(3,new TreeNode(9),new TreeNode(20,15,7))
const tree2=new TreeNode(1,new TreeNode(2,new TreeNode(3,4,4),3),new TreeNode(2))
console.log(isBalanced(tree1));
console.log(isBalanced(tree2));