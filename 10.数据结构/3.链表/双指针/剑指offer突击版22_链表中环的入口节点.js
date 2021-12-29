function ListNode(val,next) {
    this.val = val;
    this.next = next;
}

/*var detectCycle = function(head) {
    const memo=[]
    let pointer=head
    while (true)
    {
        memo.push(pointer)
        pointer=pointer.next
        if(pointer===null)return null
        for(let k=0; k<memo.length; k++)
        {
            if(memo[k]===pointer)
            {return k}
        }
    }
};*/
// |<-a->| entry |<-b->相遇<-c->entry|
//slow每次走一步，fast每次走两步 -> 二者相遇在环中某位置(s-t图可知有交点) -> fast路程=2*slow路程：a+n(b+c)+b=2(a+b) -> a=c+(n-1)(b+c)
//找到slow后，设entry=head，二者都每次走一步，最后会相遇在环入口：entry路程(a)=slow路程(c+(n-1)(b+c))
var detectCycle = function(head){
    let fast=head
    let slow=head
    do{
        if(fast===null || fast.next===null || fast.next.next===null || slow===null || slow.next===null)return null
        fast=fast.next.next
        slow=slow.next
    }while (fast!==slow)
    let entry=head
    while (entry!==slow)
    {
        slow=slow.next
        entry=entry.next
    }
    return entry
}

const tail=new ListNode(-4,null)
const entry=new ListNode(2,new ListNode(0, tail))
tail.next=entry
const obj=new ListNode(3, entry)
console.log(detectCycle(obj));

const tail1=new ListNode(2,null)
const obj1=new ListNode(1,tail1)
tail1.next=obj1
console.log(detectCycle(obj1));

const obj2=new ListNode(1,null)
console.log(detectCycle(obj2));
