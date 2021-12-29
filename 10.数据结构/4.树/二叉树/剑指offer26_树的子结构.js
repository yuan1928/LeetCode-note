function TreeNode(val, left, right) {
    this.val = val;
    this.left = left
    this.right = right;
}

var isSubStructure = function(A, B) {
    if(!B)return false

    const compare=function (nodeA, nodeB){
        if(nodeA instanceof TreeNode && nodeB instanceof TreeNode)
        {
            if(nodeA.val===nodeB.val)
            {return ((nodeB.left)?compare(nodeA.left,nodeB.left):true)&&
                ((nodeB.right)?compare(nodeA.right,nodeB.right):true)}//以B为标准向下比较
            else {return false}
        }
        else if(nodeA instanceof TreeNode || nodeB instanceof TreeNode) {return false}//一个是叶节点一个不是叶节点->结构不同，不是子树
        else {return nodeA===nodeB}//两个皆为叶节点->不必再向下比较
    }

    let level=[A]
    while (level.length)//层序遍历A
    {
        let newLevel=[]
        for(let node of level)
        {
            if(((node instanceof TreeNode)?node.val:node)===B.val && compare(node, B)) {return true}

            if(node instanceof TreeNode)
            {
                newLevel.push(node.left)
                newLevel.push(node.right)
            }
        }
        level=newLevel
    }
    return false
};

let o1=new TreeNode(3, new TreeNode(4, 1, 2), 5)
let o2=new TreeNode(4, 1)
let o3=new TreeNode(1,2,3)
let o4=new TreeNode(3,1)
console.log(isSubStructure(o3, o4));