function convert(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    let zagged = '';
    let rows = [];
    while (rows.length < numRows) {
        let row = [];
        rows.push(row);
    }
    let zaggingUp = true;
    let currentRow = 0;
    let findNextRow = () => {
        let nextRow = currentRow;
        if (zaggingUp) {
            nextRow++;
            if (nextRow === numRows - 1) {
                zaggingUp = false;
            }
        }
        else {
            nextRow--;
            if (nextRow === 0) {
                zaggingUp = true;
            }
        }
        return nextRow;
    };
    for (let index = 0; index < s.length; index++) {
        rows[currentRow].push(s[index]);
        currentRow = findNextRow();
    }
    rows.forEach(row => {
        let rowString = row.join('');
        zagged += rowString;
    });
    return zagged;
}
;
let zzcr1 = convert('PAYPALISHIRING', 3);
console.log(`${zzcr1} | PAHNAPLSIIGYIR`);
let zzcr2 = convert('PAYPALISHIRING', 4);
console.log(`${zzcr2} | PINALSIGYAHRPI`);
let zzcr3 = convert('A', 1);
console.log(`${zzcr3} | A`);
//# sourceMappingURL=zigZagConversion.js.map