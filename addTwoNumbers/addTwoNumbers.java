package com.example.java;

public class AddTwoNumbers {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode n1 = l1;
        ListNode n2 = l2;
        ListNode l3 = new ListNode();
        ListNode n3 = l3;
        boolean n1done = false;
        boolean n2done = false;
        int remainder = 0;

        while (!n1done || !n2done || remainder > 0) {
            int placeVal = 0;
            placeVal += remainder;
            remainder = 0;

            if (!n1done) {
                placeVal += n1.val;
                if (n1.next != null) {
                    n1 = n1.next;
                } else {
                    n1done = true;
                }
            }

            if (!n2done) {
                placeVal += n2.val;
                if (n2.next != null) {
                    n2 = n2.next;
                } else {
                    n2done = true;
                }
            }

            if (placeVal >= 10) {
                remainder = 1;
            }
            if (placeVal < 10) {
                n3.val = placeVal;
            } else {
                n3.val = placeVal - 10;
            }

            if (!n1done || !n2done || remainder > 0) {
                n3.next = new ListNode();
                n3 = n3.next;
            }
        }

        return l3;
    }
}
