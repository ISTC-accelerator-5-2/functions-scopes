/*

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
*/


let a = 5;

const foo = (variable) => { // copies the argument
  variable = 8;
};

console.log(a); // 5
foo(a);
console.log(a); // 5

let b = [9];

const bar = (array) => {
  array[0] = 2;
};

console.log(b); // [9]
bar(b);
console.log(b); // [2]

let o = {z: 1};

const zoo = (obj) => {
  obj.z = 10;
};

console.log(o); // {z: 1}
zoo(o);
console.log(o); // {z: 10}

let array = [7,8,9];
let newArray = array;
console.log(array, newArray);

newArray[0] = 10;
newArray[1] = 6;
console.log(array, newArray);

const myArray = [1,2,3];
myArray[2] = 10;
console.log(myArray);

const myObj = {z: 10};
Object.freeze(myObj);
myObj.z = 7;
myObj.x = 10;
console.log(myObj);

// spread operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// const copyArray = (arr) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++)
//     newArr.push(arr[i]);
  
//   return newArr;
// };

const copyArray = arr => arr.map(el => el);

const k = [1,2,3];
const l = copyArray(k);
console.log(k, l);
k[1] = 56;
console.log(k, l);

const p = {a: 1};
const op = Object.assign({}, p);
console.log(p, op);
p.a = 9;
console.log(p, op);

const array1 = [1,2,3];
// array1 => [1,2,3]
// ...array1 => 1,2,3
// [...array1] => [1,2,3]
const copyOfArray1 = [...array1];

const obj1 = {a: 1, b: 2};
// obj1 = {a: 1, b: 2}
// ...obj1 = a: 1, b: 2
// {...obj1} = {a: 1, b: 2}
const copyOfObj1 = {...obj1};

// -------------------------------------------------------
const sumAll = (...numbers) => {
  let result = 0;
  numbers.forEach(n => result += n);
  return result;
};

console.log(sumAll(1,2,3,5));





// ---------------------------------------------------
// Practice
// find max of an array
const maxOfArray = array => {
  let max = array[0];

  // for (let i = 1; i < array.length; i++)
  //   if (max < array[i])
  //     max = array[i];

  array.forEach(number => {
    if (max < number)
      max = number;
  });

  return max;
};

const maxOfArrayClean = arr => arr.sort().reverse()[0];

console.log(maxOfArray([6,4,2,5,7,3,4,1,4,3,5,67,12]));
console.log(maxOfArrayClean([6,4,2,5,7,3,4,1,4,3,5,67,12]));

// https://www.youtube.com/watch?v=xli_FI7CuzA
const bubbleSort = (array) => {
  const arr = [...array];
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j+1]) {
        let copy = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = copy;
      }
    }
  }

  return arr;
};

const originalArray = [6,8,9,14,56,90,70];
const sortedArray = bubbleSort(originalArray);

console.log(originalArray);
console.log(sortedArray);