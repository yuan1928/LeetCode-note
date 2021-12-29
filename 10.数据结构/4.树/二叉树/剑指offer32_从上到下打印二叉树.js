function TreeNode(val, left, right) {
      this.val = val;
      this.left = left
      this.right = right
  }
var levelOrderI = function(root) {
    if(!root)return []

    let res=[]
    let cur=[root]
    while (cur.length)
    {
        let next=[]
        for(let node of cur)
        {
            res.push((node instanceof TreeNode)?node.val:node)
            if(node.left){next.push(node.left)}
            if(node.right){next.push(node.right)}
        }
        cur=next
    }
    return res
};
var levelOrderII = function(root) {
    if(!root)return []

    let res=[]
    let cur=[root]
    while (cur.length)
    {
        res.push([])

        let next=[]
        for(let node of cur)
        {
            res[res.length-1].push((node instanceof TreeNode)?node.val:node)
            if(node.left){next.push(node.left)}
            if(node.right){next.push(node.right)}
        }

        cur=next
    }
    return res
};
var levelOrderIII = function(root) {
    if(!root)return []

    let res=[]
    let cur=[root]
    while (cur.length)
    {
        res.push([])

        let next=[]
        for(let node of cur)
        {
            res[res.length-1].push((node instanceof TreeNode)?node.val:node)
            if(node.left){next.push(node.left)}
            if(node.right){next.push(node.right)}
        }

        if(!(res.length%2))
        {res[res.length-1].reverse()}

        cur=next
    }
    return res
};
let obj=new TreeNode(3, 9, new TreeNode(20, 15, 7))
console.log(levelOrder(obj));
//III若利用双端队列实现：
//用temp保存当前层节点值->当前层为奇数层，每个值从队尾入队，否则从队头入队->res.push(temp)