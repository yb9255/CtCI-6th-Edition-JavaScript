function partition() {
  let node = head;
  let beforeStart = null;
  let beforeEnd = null;
  let afterStart = null;
  let afterEnd = null;

  while (node) {
    const next = node.next;
    node.next = null;

    if (node.val < x) {
      if (!beforeStart) {
        beforeStart = node;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = node;
        beforeEnd = node;
      }
    } else {
      if (!afterStart) {
        afterStart = node;
        afterEnd = afterStart;
      } else {
        afterEnd.next = node;
        afterEnd = node;
      }
    }

    node = next;
  }

  if (beforeStart === null) {
    return afterStart;
  }

  beforeEnd.next = afterStart;

  return beforeStart;
}
