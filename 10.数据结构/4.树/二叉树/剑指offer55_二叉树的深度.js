function TreeNode(val,left,right) {
      this.val = val;
      this.left = left
      this.right = right;
}
//层序遍历->树深=层数
var maxDepthBFS = function(root) {
    if(!root)return 0

    let res=0
    let level=[root]
    while (level.length!==0)
    {
        res+=1
        let next=[]
        for(let node of level)
        {
            if(node.left){next.push(node.left)}
            if(node.right){next.push(node.right)}
        }
        level=next
    }
    return res
};
//best:后序遍历->树深=1+max(左树高度，右树高度)
var maxDepthDFS = function(root) {
    if(!root)return 0

    const DFS=function (cur){//返回以cur为顶点的树高
        let left=(cur.left)?(1+DFS(cur.left)):0//左树高=(有无左树)?(1+左树的子树高):0
        let right=(cur.right)?(1+DFS(cur.right)):0//右树高=(有无右树)?(1+右树的子树高):0
        return Math.max(left,right)//当前树高=max(左树高，右树高)
    }
    return DFS(root)+1
};
/*let tree=new TreeNode(3,new TreeNode(9),new TreeNode(20,15,7))
console.log(maxDepth(tree));*/