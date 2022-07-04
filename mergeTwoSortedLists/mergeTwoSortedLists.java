package com.example.java;

public class MergeTwoSortedLists {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode mergedHead;

        boolean list1Done = false;
        boolean list2Done = false;

        if (list1 == null) {
            list1Done = true;
        }
        if (list2 == null) {
            list2Done = true;
        }

        //Initialize
        if (list2Done) {
            mergedHead = new ListNode(list1.val);
            if (list1.next != null) {
                list1 = list1.next;
            } else {
                list1Done = true;
            }
        } else if (list1Done) {
            mergedHead = new ListNode(list2.val);
            if (list2.next != null) {
                list2 = list2.next;
            } else {
                list2Done = true;
            }
        } else {
            if (list1.val <= list2.val) {
                mergedHead = new ListNode(list1.val);
                if (list1.next != null) {
                    list1 = list1.next;
                } else {
                    list1Done = true;
                }
            } else {
                mergedHead = new ListNode(list2.val);
                if (list2.next != null) {
                    list2 = list2.next;
                } else {
                    list2Done = true;
                }
            }
        }

        if (list1Done && list2Done) {
            return mergedHead;
        }

        ListNode mergedList = mergedHead;
        mergedList.next = new ListNode();
        mergedList = mergedList.next;

        //Rest
        while (!list1Done || !list2Done) {
            if (list2Done) {
                mergedList.val = list1.val;
                if (list1.next != null) {
                    list1 = list1.next;
                } else {
                    list1Done = true;
                }
            } else if (list1Done) {
                mergedList.val = list2.val;
                if (list2.next != null) {
                    list2 = list2.next;
                } else {
                    list2Done = true;
                }
            } else {
                if (list1.val <= list2.val) {
                    mergedList.val = list1.val;
                    if (list1.next != null) {
                        list1 = list1.next;
                    } else {
                        list1Done = true;
                    }
                } else {
                    mergedList.val = list2.val;
                    if (list2.next != null) {
                        list2 = list2.next;
                    } else {
                        list2Done = true;
                    }
                }
            }
            if (!list1Done || !list2Done) {
                mergedList.next = new ListNode();
                mergedList = mergedList.next;
            }
        }

        return mergedHead;
    }

    public class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) {
            this.val = val;
        }
        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }
}
