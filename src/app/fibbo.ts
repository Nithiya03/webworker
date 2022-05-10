var data: any;

export const generateFibonacci = (n: number, arr = new Array(n - 1)) => [
  console.log("Array"+arr),
  data.reduce(
    console.log("Array1"+arr),
    (acc: any, curr: any, index: any) =>
      (arr[index + 1] = index ? acc + arr[index - 1] : 1),
    (arr[0] = 1)
  ),
  console.log("The Array is"+arr)
];