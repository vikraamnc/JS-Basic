//functional programming======Functional programming is a paradigm of building computer programs using expressions and functions without mutating state and data.
//-side effects:
// let i=0;
// let total = 0;
// const add = (a, b) => {
//   const total = a + b;
//   return total;
// };
// const ans = add(3, 4);
// console.log(ans);
//-- having any sets of code that are not used and affecting any part of the program
// pure function
// const add = (a,b)=> a+b;
// const ans =add(3,4);
// console.log(ans)

// ==high order function

// const add = (a, b) => a + b;
// const subs = (a, b) => a - b;

// const calculate = (a, b, func) => {
//   return func(a, b);
// };
// const ans =calculate (2,4, add);
// const ans =calculate (2,4, subs);
// console.log(ans)

// const addAndSquare = (a, b) => {
//   const ttl = a + b;
//   const square = (multiplier) => {
//     return ttl ** multiplier;
//   };
//   return square;
// };
// const result = addAndSquare(2, 3);
// const ans = result(2);
// console.log(ans);

// recursive function

let i = 0;
const increase = () => {
  i++;
  console.log(i);

  if ((i = 100));
  return;
};
increase();

const money = [1, 2, 3, 4, 5, 6, 7, 8];

let sum = 0;
const total = (money) => {
  sum += money.pop();
  console.log(sum);

  if (!money.length) {
    return sum;
  }
  return total(money);
};
const ttl = total(money);
console.log(ttl);
