/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let c1 = l1;
    let c2 = l2;

    if(c1 == null){
        return l2;
    }
    if(c2 == null)
        return l1;

    let biggerThanTen = false;
    
    let result = new ListNode(c1.val + c2.val, null);
    if(result.val >= 10){
        biggerThanTen = true;
        result.val %= 10;
    }
    c1 = c1.next;
    c2 = c2.next;
    let c3 = result;
    

    while(c1 != null || c2 !=null){
        let node = new ListNode(0, null);
        if(c1 != null){
            node.val += c1.val;
            c1 = c1.next;
        }
        if(c2 != null){
            node.val += c2.val;
            c2 = c2.next;
        }
        if(biggerThanTen)
            node.val +=1;
        
        biggerThanTen = node.val >= 10;
        node.val %= 10; 
        c3.next = node;
        c3 = node;
    }

    if(biggerThanTen)
        c3.next = new ListNode(1, null);

    return result;
};