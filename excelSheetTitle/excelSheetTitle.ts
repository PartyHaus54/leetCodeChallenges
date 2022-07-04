function convertToTitle(columnNumber: number): string {
  let efPlaces: number = 0;
  const numberToLetter: any = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z'
  };
  let colTitle = '';

  const placeArray = [columnNumber];
  for (let placeIndex = 0; placeIndex < placeArray.length; placeIndex++) {
      while (placeArray[placeIndex] > 26) {
          placeArray[placeIndex] -= 26;
          if (placeArray[placeIndex + 1]) {
              placeArray[placeIndex + 1]++;
          }
          else {
              placeArray[placeIndex + 1] = 1;
          }
      }
      colTitle = numberToLetter[placeArray[placeIndex]] + colTitle;
  }
  return colTitle;
};

const estr1: string = convertToTitle(5);
console.log(estr1);