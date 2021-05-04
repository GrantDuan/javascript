/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let current = head;
    if (head == null || head.next == null)
        return head;
    while (current.next != null) {
        if (current.next.val == current.val)
            current.next = current.next.next;
        else
            current = current.next;
    }

    return head;
};