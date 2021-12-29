function Node(val, next) {
    this.val = val;
    this.next = next;
}
//遍历链表，维护最大节点和最小节点
//(1)遍历中发现某节点<=insert<=该节点的下一个节点 -> 直接插入
//(2)遍历过程中未插入 -> 将insert插入最小和最大节点之间
var insert = function(head, insertVal) {
    if(!head)
    {
        const res=new Node(insertVal,null)
        res.next=res
        return res
    }

    let min=new Node(Infinity,null)
    let max=new Node(-Infinity,null)
    let pointer=head
    while (pointer)
    {
        if(pointer.val<=insertVal && pointer.next.val>=insertVal)
        {
            const temp=new Node(insertVal,null)
            temp.next=pointer.next
            pointer.next=temp
            return head
        }

        //维护最值
        if(pointer.val<min.val){min=pointer}
        if(pointer.val>=max.val){max=pointer}//避免初始链表所有节点值相等的情况下min和max都停留在入口节点造成的新链表节点丢失

        pointer=pointer.next
        if(pointer===head)break//遍历一遍后停止
    }
    const temp=new Node(insertVal,null)
    temp.next=min
    max.next=temp
    return head
};
const o1=new Node(1,null)
const l1=new Node(3,new Node(4,o1))
o1.next=l1
//----------------------------------
const l2=new Node(1,null)
l2.next=l2
console.log(insert(l2,0));