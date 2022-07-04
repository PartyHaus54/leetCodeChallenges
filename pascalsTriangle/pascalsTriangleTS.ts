function generate(numRows: number): number[][] {
  let triangle : number[][] = [];
  while (triangle.length < numRows) {
    let row : number[] = [];
    for (let index = 0; index <= triangle.length; index++) {
      if (index === 0 || index === triangle.length) {
        row.push(1);
      } else if (triangle.length >= 2) {
        row.push(triangle[triangle.length - 1][index - 1] + triangle[triangle.length - 1][index]);
      }
    }
    triangle.push(row);
  }
  return triangle;
};

let r1 : number[][] = generate(1);
console.log(r1);
let r2 : number[][] = generate(2);
console.log(r2);
let r3 : number[][] = generate(3);
console.log(r3);
let r4 : number[][] = generate(4);
console.log(r4);
let r5 : number[][] = generate(5);
console.log(r5);