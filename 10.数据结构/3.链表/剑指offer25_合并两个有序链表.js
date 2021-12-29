function ListNode(val,next) {
    this.val = val;
    this.next = next;
}
//归并排序
var mergeTwoLists = function(l1, l2) {
    let res=new ListNode(-Infinity)
    let cur=res
    while (l1 || l2)
    {
        if(l1 && l2)
        {
            if(l1.val===l2.val)
            {
                cur.next=new ListNode(l1.val,new ListNode(l2.val))
                cur=cur.next.next
                l1=l1.next
                l2=l2.next
            }
            else if(l1.val<l2.val)
            {
                cur.next=new ListNode(l1.val)
                cur=cur.next
                l1=l1.next
            }
            else
            {
                cur.next=new ListNode(l2.val)
                cur=cur.next
                l2=l2.next
            }
        }
        else if(l1) {cur.next=l1;break}
        else if(l2) {cur.next=l2;break}
    }
    res=res.next
    return res
};
let obj1=new ListNode(1,new ListNode(2,new ListNode(4,new ListNode(4,new ListNode(5)))))
let obj2=new ListNode(1,new ListNode(3,new ListNode(4)))
let res=mergeTwoLists(obj1, obj2)
while (res)
{
    console.log(res.val);
    res=res.next
}