function reverse(x: number): number {
  let stringified: string = String(x);
  let reversed: string = '';
  let lastPlace: number = 0;

  let trailingZsTrimmed: boolean = false;
  if (stringified[0] === '-') {
    reversed += '-';
    lastPlace = 1;
  }

  for (let place: number = stringified.length -1; place >= lastPlace; place--) {
    if (stringified[place] !== '0' || trailingZsTrimmed) {
      reversed += stringified[place];
      trailingZsTrimmed = true;
    }
  }

  let reversedNumber: number = Number(reversed);
  if (reversedNumber < -1 * Math.pow(2, 31) || reversedNumber > Math.pow(2, 31) - 1) {
    reversedNumber = 0;
  }

    return reversedNumber;
};