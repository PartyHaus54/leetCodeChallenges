package com.example.java;

public class ValidParentheses {
    String currParens = "";
    boolean enclosuresValid = true;
    public char currentOpener(String parens) {
        if (parens.length() > 0) {
            return parens.charAt(parens.length() - 1);
        } else {
            return 'x';
        }
    }
    public String pop(String enclosure) {
        if (enclosure.length() > 1) {
            return enclosure.substring(0, enclosure.length() - 1);
        } else {
            return "";
        }
    }
    public void processNextChar(char nextChar) {
        if (nextChar == ')') {
            if (currentOpener(currParens) == '(') {
                currParens = pop(currParens);
            } else {
                enclosuresValid = false;
            }
        } else if (nextChar == ']') {
            if (currentOpener(currParens) == '[') {
                currParens = pop(currParens);
            } else {
                enclosuresValid = false;
            }
        } else if (nextChar == '}') {
            if (currentOpener(currParens) == '{') {
                currParens = pop(currParens);
            } else {
                enclosuresValid = false;
            }
        } else {
            currParens += nextChar;
        }
    }
    public boolean isValid(String s) {
        for (int index = 0; index < s.length(); index++) {
            processNextChar(s.charAt(index));
        }
        if (currParens != "") {
            enclosuresValid = false;
        }
        System.out.println(String.format("%s has valid parentheses: %b", s, enclosuresValid));
        return enclosuresValid;
    }
}
