function reverse(x) {
    let stringified = String(x);
    let reversed = '';
    let lastPlace = 0;
    let trailingZsTrimmed = false;
    if (stringified[0] === '-') {
        reversed += '-';
        lastPlace = 1;
    }
    for (let place = stringified.length - 1; place >= lastPlace; place--) {
        if (stringified[place] !== '0' || trailingZsTrimmed) {
            reversed += stringified[place];
            trailingZsTrimmed = true;
        }
    }
    return Number(reversed);
}
;
//# sourceMappingURL=reverseInteger.js.map