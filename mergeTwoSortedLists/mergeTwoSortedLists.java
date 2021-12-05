        ListNode mergedHead;

        boolean list1Done = false;
        boolean list2Done = false;

        //Initialize
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