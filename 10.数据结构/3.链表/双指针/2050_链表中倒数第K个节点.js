function ListNode(val,next) {
    this.val = val;
    this.next = next;
}

/*var getKthFromEnd = function(head, k) {
    let cur=head
    while (!(cur.val===null))
    {
        let end=cur
        let count=0
        while (count<k-1)
        {
            end=end.next
            count+=1
        }
        if(end.next===null) {return cur}
        else {cur=cur.next}
    }
};*/
//双指针(测试结果没有上面的算法好)
//left指向头节点(n=1),right指向n=k的节点
//当right指向尾节点，left应该指向目标节点
var getKthFromEnd = function(head, k){
    let left=head
    let right=head
    let count=1
    while (count<k)
    {
        right=right.next
        count+=1
    }
    while ((right.next!==null))
    {
        left=left.next
        right=right.next
    }
    return left
}

let obj=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5,null)))))
let obj1=new ListNode(3,new ListNode(7,new ListNode(9,new ListNode(3,new ListNode(5,new ListNode(8,new ListNode(0,null)))))))

console.log(getKthFromEnd(new ListNode(1,null),1));