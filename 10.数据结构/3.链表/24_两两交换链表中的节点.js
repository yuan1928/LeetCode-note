function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)}

var swapPairs = function(head) {
    if(head===null || head.next===null){return head}

    var pointer=head
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
    return head
};

var head1=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4))))
var head2=new ListNode(1,new ListNode(2,new ListNode(3)))
console.log(swapPairs(head2));
