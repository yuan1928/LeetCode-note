function ListNode(val,next) {
    this.val = val;
    this.next = next;
}
/*var getIntersectionNode = function(headA, headB) {
    const A=[]
    const B=[]
    let pointer=headA
    while (pointer)
    {
        A.push(pointer)
        pointer=pointer.next
    }
    pointer=headB
    while (pointer)
    {
        B.push(pointer)
        pointer=pointer.next
    }

    let a=A.length
    let b=B.length
    let thresh=Math.min(a,b)
    for(let i=0; i<thresh; i++)
    {
        if(A[a-1-i]===B[b-1-i] && ((i<thresh-1 && A[a-1-i-1]!==B[b-1-i-1]) || i===thresh-1))
        {return A[a-1-i]}
    }
    return null
};*/

//分别指向两个链表的指针每次走一步，走到null时回到头节点
//由s-t图可证只要链表有交点，则两个指针一定会相交
var getIntersectionNode = function(headA, headB){
    if(!headA || !headB)return null
    let pointerA=headA
    let pointerB=headB
    while (pointerA!==pointerB)
    {
        pointerA=(pointerA===null)?headA:pointerA.next
        pointerB=(pointerB===null)?headB:pointerB.next
    }
    return pointerA
}
const common1=new ListNode(8,new ListNode(4,new ListNode(5,null)))
const a1=new ListNode(4,new ListNode(1,common1))
const b1=new ListNode(5,new ListNode(0,new ListNode(1,common1)))
const common2=new ListNode(2,new ListNode(4,null))
const a2=new ListNode(0,new ListNode(9,new ListNode(1,common2)))
const b2=new ListNode(3,common2)
const a3=new ListNode(2,new ListNode(6,new ListNode(4,null)))
const b3=new ListNode(1,new ListNode(5,null))
console.log(getIntersectionNode(a3, b3));