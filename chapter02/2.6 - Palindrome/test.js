var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = reverse(slow);
  fast = head;

  while (slow) {
    if (slow.val !== fast.val) return false;
    slow = slow.next;
    fast = fast.next;
  }

  return true;
};

function reverse(node) {
  let prev = null;
  let next;

  while (node) {
    next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
}

var isPalindrome2 = function (head) {
  let left = 0;
  let current = head;
  const stack = [];

  while (current) {
    stack.push(current.val);
    current = current.next;
  }

  console.log(stack);

  let right = stack.length - 1;

  while (left < right) {
    if (stack[left] !== stack[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};
