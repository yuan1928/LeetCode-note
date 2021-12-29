function TreeNode(val,left,right) {
    this.val = val;
    this.left = left
    this.right = right;
}

var buildTree = function(preorder, inorder) {
    if(preorder.length===0)return null
    if(preorder.length===1)return new TreeNode(preorder[0],null,null)

    let head=new TreeNode(preorder[0])

    let inLeft=inorder.slice(0,inorder.indexOf(preorder[0]))
    let inRight=inorder.slice(inorder.indexOf(preorder[0])+1)
    let preLeft=preorder.slice(1,inLeft.length+1)
    let preRight=preorder.slice(inLeft.length+1)

    head.left=buildTree(preLeft,inLeft)
    head.right=buildTree(preRight,inRight)

    return head
};
console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
//console.log(buildTree([-1], [-1]));