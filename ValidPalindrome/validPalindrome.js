function isPalindrome(s) {
    let cleanString = '';
    let reversedString = '';
    let alphanumerics = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
    ];
    for (let index = 0; index < s.length; index++) {
        if (alphanumerics.includes(s[index])) {
            cleanString += s[index].toLocaleLowerCase();
        }
    }
    if (cleanString.length > 0) {
        for (let index = 0; index < cleanString.length; index++) {
            reversedString = cleanString[index] + reversedString;
        }
    }
    return cleanString === reversedString;
}
let vpr1 = isPalindrome("A man, a plan, a canal: Panama");
console.log(vpr1 + ' | true');
let vpr2 = isPalindrome("race a car");
console.log(vpr2 + ' | false');
let vpr3 = isPalindrome(" ");
console.log(vpr3 + ' | true');
//# sourceMappingURL=validPalindrome.js.map