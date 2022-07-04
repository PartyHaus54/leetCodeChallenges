package com.example.java;

public class ImplementStrStr {
    public int strStr(String haystack, String needle) {
        int loc = -1;
        if (needle.length() == 0) {
            return 0;
        }
        int startIndex = 0;
        int nextIndex = 0;
        int needleIndex = 0;
        boolean compareFinished = false;
        while (loc == -1 && startIndex <= haystack.length() - needle.length()) {
            nextIndex = startIndex;
            needleIndex = 0;
            while (!compareFinished) {
                if (needleIndex < needle.length()) {
                    if (haystack.charAt(nextIndex) == needle.charAt(needleIndex)) {
                        nextIndex++;
                        needleIndex++;
                    } else {
                        compareFinished = true;
                        needleIndex = 0;
                    }
                } else {
                    loc = startIndex;
                    compareFinished = true;
                }
            }
            compareFinished = false;
            startIndex++;
        }
        return loc;
    }
}
