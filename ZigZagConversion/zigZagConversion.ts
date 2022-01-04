function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  let zagged: string = '';

  let rows : any[] = [];
  while (rows.length < numRows) {
    let row : string[] = [];
    rows.push(row);
  }

  let zaggingUp : boolean = true;
  let currentRow : number = 0;

  let findNextRow = (): number => {
    let nextRow : number = currentRow;
    if (zaggingUp) {
      nextRow++;
      if (nextRow === numRows - 1) {
        zaggingUp = false;
      }
    } else {
      nextRow--;
      if (nextRow === 0) {
        zaggingUp = true;
      }
    }

    return nextRow;
  }

  for (let index : number = 0; index < s.length; index++) {
    rows[currentRow].push(s[index]);
    currentRow = findNextRow();
  }

  rows.forEach(row => {
    let rowString : string = row.join('');
    zagged += rowString;
  });

  return zagged;
};

let zzcr1: string = convert('PAYPALISHIRING', 3);
console.log(`${zzcr1} | PAHNAPLSIIGYIR`);

let zzcr2: string = convert('PAYPALISHIRING', 4);
console.log(`${zzcr2} | PINALSIGYAHRPI`);

let zzcr3: string = convert('A', 1);
console.log(`${zzcr3} | A`);