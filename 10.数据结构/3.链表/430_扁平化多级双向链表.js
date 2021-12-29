function Node(val,prev,next,child) {
     this.val = val;
     this.prev = prev;
     this.next = next;
     this.child = child;
  }

var flatten = function(head) {
    let read=[]
    let DFS=function (cur){
        let node=cur
        while (node)
        {
            read.push(node.val)
            if(node.child) {DFS(node.child)}
            node=node.next
        }
    }

    DFS(head)

    let res
    for(let i=read.length-1;i>=0;i-=1)//按打平规则读取链表、生成新的扁平链表
    {
        let temp=new Node(read[i],null,null,null)
        if(i<read.length-1)
        {
            res.prev=temp
            temp.next=res
        }
        res=temp
    }
    return res
};
/*DFS过程中对链表原地操作以进行打平
var flatten = function(head) {
    const dfs = (node) => {
        let cur = node;
        let last = null;// 当前子链表的最后一个节点

        while (cur)
        {
            let next = cur.next;
            //  如果有子节点，那么首先处理子节点
            if (cur.child)
            {
                const childLast = dfs(cur.child);//记录当前链表的子链表的最后一个node

                next = cur.next;//保存有子链表的断开处节点的next
                cur.next = cur.child;//将断开处节点的next指向其child
                cur.child.prev = cur;//将断开处节点child的prev指向其本身

                //  如果 next 不为空，就将 last 与 next 相连
                if (next != null) {
                    childLast.next = next; //子链表尾节点的next指向原先断开处的后半部分
                    next.prev = childLast;
                }

                // 将 child 置为空
                cur.child = null;//打平之后每个节点的child都应该为null
                last = childLast;
            }
            else {last = cur;}

            cur = next;
        }
        return last;
    }

    dfs(head);
    return head;
};
 */

let l1=[1,2,3,4,5,6]
let l2=[7,8,9,10]
let l3=[11,12]
for(let i of l1.keys())
{
    l1[i]=new Node(l1[i],null,null,null)
    if(i<=l2.length-1){l2[i]=new Node(l2[i],null,null,null)}
    if(i<=l3.length-1){l3[i]=new Node(l3[i],null,null,null)}
}
for(let i of l1.keys())
{
    if(i<l1.length-1){l1[i].next=l1[i+1]}
    if(i>0){l1[i].prev=l1[i-1]}
    if(i<l2.length-1){l2[i].next=l2[i+1]}
    if(i>0 && i<=l2.length-1){l2[i].prev=l2[i-1]}
    if(i<l3.length-1){l3[i].next=l3[i+1]}
    if(i>0 && i<=l3.length-1){l3[i].prev=l3[i-1]}
}
l2[1].child=l3[0]
l1[2].child=l2[0]
let obj=l1[0]

flatten(obj)
//console.log(flatten(obj));


