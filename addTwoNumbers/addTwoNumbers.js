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
var addTwoNumbers = function (l1, l2) {
  var n1 = 0;
  var n2 = 0;
  l1.forEach((value, place) => {
    n1 += value * Math.pow(10, place);
  });
  l2.forEach((value, place) => {
    n2 += value * Math.pow(10, place);
  });
  var n3 = n1 + n2;
  var l3 = [];
  var place = 0;
  if (n3 === 0) {
    return [0];
  }
  while (Math.floor(n3 / Math.pow(10, place)) > 0) {
    l3.push(Math.floor(n3 / Math.pow(10, place) % 10));
    place++;
  }
  return l3;
};

var r1 = addTwoNumbers([2, 4, 3], [5, 6, 4]);
console.log(r1);

var r2 = addTwoNumbers([0], [0]);
console.log(r2);

var r3 = addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
console.log(r3);