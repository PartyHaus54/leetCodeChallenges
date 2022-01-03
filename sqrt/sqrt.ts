function mySqrt(x: number): number {
  let sqrt: number = 0;
  let rootFound: boolean = false;

  while (!rootFound) {
    if (sqrt * sqrt === x) {
      rootFound = true;
    } else if ((sqrt + 1) * (sqrt + 1) > x) {
      rootFound = true;
    } else {
      sqrt++;
    }
  }

  return sqrt;
};