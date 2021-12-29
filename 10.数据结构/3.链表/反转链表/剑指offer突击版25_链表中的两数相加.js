function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    const reverse=function (head){
        let changed=head
        let pointer=null
        let temp
        while (changed)
        {
            temp=changed.next
            changed.next=pointer
            pointer=changed
            changed=temp
        }
        return pointer
    }
    let res=null
    let add1
    let add2
    let cur
    let supply=0

    l1=reverse(l1)
    l2=reverse(l2)
    while (l1 || l2 || supply)
    {
        add1=(l1)?l1.val:0
        add2=(l2)?l2.val:0
        if(add1+add2+supply>9)
        {
            cur=new ListNode((add1+add2+supply)%10)
            supply=1
        }
        else
        {
            cur=new ListNode(add1+add2+supply)
            supply=0
        }
        cur.next=res
        res=cur
        l1=(l1)?l1.next:l1
        l2=(l2)?l2.next:l2
    }

    return res
};
let obj1=new ListNode(7,new ListNode(2,new ListNode(4,new ListNode(3))))
let obj2=new ListNode(5,new ListNode(6,new ListNode(4)))
//let l1=new ListNode(2,new ListNode(4,new ListNode(3)))
//let l2=new ListNode(5,new ListNode(6,new ListNode(4)))
let l1=new ListNode(9)
let l2=new ListNode(9)
console.log(addTwoNumbers(l1, l2));