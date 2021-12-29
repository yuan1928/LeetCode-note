function TreeNode(val, left, right) {
      this.val = val;
      this.left = left
      this.right = right;
  }

var mirrorTree = function(root) {
    const DFS=function (node){
        if(!node || (!node.left && !node.right)){return}

        if(node.left){DFS(node.left)}
        if(node.right){DFS(node.right)}
        let temp=node.left
        node.left=node.right
        node.right=temp
    }
    DFS(root)
    return root
};
const obj=new TreeNode(4, new TreeNode(2,1,3), new TreeNode(7,6,9))
console.log(mirrorTree(obj));