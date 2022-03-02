function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)}

var swapPairs = function(head) {
    if(head===null || head.next===null){return head}

    /*var pointer=head
    var count=0
    while (pointer.next)
    {
        if(count%2===0)
        {
            var temp=pointer.val
            pointer.val=pointer.next.val
            pointer.next.val=temp
            //console.log('yes',head)
        }
        pointer=pointer.next
        count+=1
        //console.log(head);
    }
    return head*/
    let prev=null
    let cur=head
    let pad=head.next
    let next
    let temp
    while (cur && cur.next)//prev-cur-next -> prev-next-cur
    {
        next=cur.next
        temp=next.next//预先记录

        if(prev)prev.next=next
        next.next=cur
        cur.next=temp

        prev=cur
        cur=temp
    }
    pad.next=head//head最初指向的头节点最后变成了第二个节点，直接返回head的话会缺少从第二变第一的那个节点，因此这里需要为head pad该节点后再返回
    return pad
};

var head1=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4))))
var head2=new ListNode(1,new ListNode(2,new ListNode(3)))
console.log(swapPairs(head1));
