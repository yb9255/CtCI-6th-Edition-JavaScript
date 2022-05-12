const LinkedList = require('../util/LinkedListX');
const util = require('util');

/** O(n) time complexity */

function removeDuplicates(list) {
  const noDup = new Set();
  let prev = null;
  let current = list.head;

  while(current) {
    if (noDup.has(current.value)) {
      let node = current;
      prev.next = current.next;
      current = current.next;
      node.next = null
    } else {
      noDup.add(cur.value);
      prev = current;
      current = current.next;
    }
  }

  return list.head;
}

/** O(1) space complexity */

function removeDups(list) {
  let current = list.head;

  while (current !== null) {
    let runner = current;

    while (runner.next !== null) {
      if (runner.next.value === current.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }

    current = current.next;
  }

  return list.head;
}

let list = new LinkedList();

for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.append(elem);
}

console.log(util.inspect(removeDups(list), false, null, true));
