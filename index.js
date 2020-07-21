// console.log(power(5));
// console.log(functionName(5, 6));

// function functionName(firstNumber, secondNumber) {
//   console.log(a);
//   if (true) {
//     var a = 5;
//     const b = 6;
//   }

//   return firstNumber * secondNumber;
// }

// const power = function (number) {
//   return number * number;
// };
// (1;2;3) {
//   4
// }
// 1, 2 if true 4; (3, 2 if true 4)
// let i = 80;
// for (let i=0; i<10; i++) {
//   console.log(i);
// }

// console.log(i);

// function foo() {
//   var i = 0;
// }
// foo();
// console.log(i);

// arrow functions
const sum = (a, b) => {
  return a+b;
};

const mult = (a, b) => a*b;

const zoo = (a, b, func) => func(a,b);
// const zoo = (a, b, func) => {
//   const result = func(a,b);
//   return result;
// };

console.log('zoo', zoo(1,4,mult));

// const square = (n) => {
//   return n**2;
// };

// const square = n => {
//   return n**2;
// };

const square = n => n**2;

console.log(square(5));

const sumFactorial = n => {
  // 2 => 3
  // 4 => 10
  let sum = 0;
  for (let i = 1; i<=n; i++){
    // sum = sum + i;
    sum += i;
  }
  return sum;
};

console.log(sumFactorial(3));

// assignment
// const factorial = (n) => n factorial;
// const stars = (n) => 
// 5
// *
// **
// ***
// ****
// *****
// const stars1 = (n) =>
// 5
// ----*
// ---**
// --***
// -****
// *****

// const m = arr => average arr
