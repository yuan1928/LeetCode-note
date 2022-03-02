function ListNode(val,next) {
    this.val = val;
    this.next = next;
}

var getIntersectionNode = function(headA, headB) {
    let nodeA=[]
    let nodeB=[]
    const read=function (head,node){
        let pointer=head
        while (pointer)
        {
            if(pointer)
            {node.push(pointer)}
            pointer=pointer.next
        }
    }

    read(headA,nodeA)
    read(headB,nodeB)

    let commonA=nodeA.length-1
    let commonB=nodeB.length-1
    if(nodeA[commonA]!==nodeB[commonB])return null
    while (nodeA[commonA]===nodeB[commonB] && commonA>=0 && commonB>=0)
    {
        commonA-=1
        commonB-=1
    }
   return nodeA[commonA+1]
};

let common=new ListNode(8,new ListNode(4,new ListNode(5)))
let A=new ListNode(4,new ListNode(1,common))
let B=new ListNode(5,new ListNode(0,new ListNode(1,common)))
/*let common=new ListNode(2,new ListNode(4))
let A=new ListNode(0,new ListNode(9,new ListNode(1,common)))
let B=new ListNode(3,common)*/
/*let A=new ListNode(2,new ListNode(6,new ListNode(4)))
let B=new ListNode(1,new ListNode(5))*/
//let common=new ListNode(1)
console.log(getIntersectionNode(A, B));

