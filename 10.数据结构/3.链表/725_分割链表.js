/*官方题解
var splitListToParts = function(head, k) {
    let n = 0;
    let temp = head;
    while (temp != null) {
        n++;
        temp = temp.next;
    }
    let quotient = Math.floor(n / k), remainder = n % k;

    const parts = new Array(k).fill(null);
    let curr = head;
    for (let i = 0; i < k && curr != null; i++) {
        parts[i] = curr;
        let partSize = quotient + (i < remainder ? 1 : 0);
        for (let j = 1; j < partSize; j++) {
            curr = curr.next;
        }
        const next = curr.next;
        curr.next = null;
        curr = next;
    }
    return parts;
};
*/
var splitListToParts = function(head, k) {
    let temp=[]
    while (head)
    {
        temp.push(head.val)
        head=head.next
    }

    let slices=Array(k)
    let len=Math.floor(temp.length/k)
    let thresh=temp.length%k
    for(let i of slices.keys())
    {
        slices[i]=(i<thresh)?temp.slice(0,len+1):temp.slice(0,len)
        temp=(i<thresh)?temp.slice(len+1):temp.slice(len)
    }

    let res=[]
    for(let slice of slices)
    {
        let nodes=null
        for(let node of slice.reverse())
        {
            node=new ListNode(node)
            node.next=nodes
            nodes=node
        }
        res.push(nodes)
    }

    return res
};
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)}
let obj=new ListNode(1,new ListNode(2,new ListNode(3,new ListNode(4,new ListNode(5,
    new ListNode(6,new ListNode(7,new ListNode(8,new ListNode(9,new ListNode(10))))))))))
let obj1=new ListNode(1,new ListNode(2,new ListNode(3)))
//console.log(splitListToParts(obj, 3));
console.log(splitListToParts(obj1, 5));