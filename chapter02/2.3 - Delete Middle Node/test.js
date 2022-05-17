var deleteMiddle = function (head) {
  if (!head || !head.next) return null;

  let slow = new ListNode(0, head);
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow.next = slow.next.next;

  return head;
};
