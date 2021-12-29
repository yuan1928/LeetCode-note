function Node(val,left,right) {
     this.val = val;
     this.left = left;
     this.right = right;
}
//DFS遍历二叉树
//(1)当前左树为空或为叶子节点->叶子节点：左树.right=当前节点，将左树作为LL；空：当前节点作为LL
//(2)否则->找到整棵左树最左节点L和最右节点R->当前节点.left=R,R.right=当前节点，将L作为LL
//(3)当前右树为空或为叶子节点->叶子节点：右树.left=当前节点，将右树作为RR；空：当前节点作为RR
//(4)否则->找到整棵右树最左节点L和最右节点R->当前节点.right=L,L.left=当前节点，将R作为RR
//返回当前节点作为root的树的最左节点和最右节点：[LL,RR]
var treeToDoublyList = function(root) {
    if(!root)return root
    let DFS=function (node){
        let Left=(!node.left) || !(node.left instanceof Node) || ((!node.left.left) && (!node.left.right))//判断左树是否为空或为叶子节点
        let Right=(!node.right) || !(node.right instanceof Node) || ((!node.right.left) && (!node.right.right))
        let LL,LR,RL,RR

        if(Left)//(1)
        {
            if(node.left && (node.left instanceof Node)) {node.left.right=node}
            else if(node.left && !(node.left instanceof Node))
            {
                node.left=new Node(node.left,null,null)
                node.left.right=node
            }
        }
        else//(2)
        {
            [LL,LR]=[...DFS(node.left)]
            node.left=LR
            LR.right=node
        }
        if(Right)//(3)
        {
            if(node.right && (node.right instanceof Node)) {node.right.left=node}
            else if(node.right && !(node.right instanceof Node))
            {
                node.right=new Node(node.right,null,null)
                node.right.left=node
            }
        }
        else//(4)
        {
            [RL,RR]=[...DFS(node.right)]
            node.right=RL
            RL.left=node
        }

        if(Left && Right) {return [(node.left)?node.left:node, (node.right)?node.right:node]}
        else if(Left && !Right) {return [(node.left)?node.left:node, RR]}
        else if(!Left && Right) {return [LL, (node.right)?node.right:node]}
        else {return [LL,RR]}
    }
    DFS(root)//首尾还未相连

    let head=root
    let tail=root
    while (head && head.left){head=head.left}//整棵树最左的叶子节点作为head
    while (tail && tail.right){tail=tail.right}//整棵树最右的叶子节点作为tail
    head.left=tail
    tail.right=head//首尾相连
    return head
};
let obj=new Node(4, new Node(2,new Node(1,null,null),new Node(3,null,null)), new Node(5,null,null))
let obj1=new Node(8,new Node(-6,-8,null),null)
console.log(treeToDoublyList(obj1));