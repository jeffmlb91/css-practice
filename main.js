// call backs functions

let add = (a, b) => {
  return a + b;
};
let multiply = (a, b) => {
  return a * b;
};

let calc = function (num1, num2, callback) {
  return callback(num1, num2);
};
console.log(calc(3, 5, multiply));
