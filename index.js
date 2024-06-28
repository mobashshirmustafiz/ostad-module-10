function calculateSum(a, b) {
  return a + b;
}

function isEven(num) {
  return num % 2 === 0;
}

function findMax(arr) {
  return Math.max(...arr);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function filterOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
