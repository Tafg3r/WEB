// 1. Calculate the sum of two numbers
function getSum(a, b) {
  return a + b;
}

function displaySum() {
  const a = parseFloat(document.getElementById("sumA").value);
  const b = parseFloat(document.getElementById("sumB").value);
  document.getElementById("sumResult").innerText = `Result: ${getSum(a, b)}`;
}

// 2. Define if a number is a square
function isSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}

function checkSquare() {
  const n = parseFloat(document.getElementById("squareNumber").value);
  document.getElementById("squareResult").innerText = `Result: ${isSquare(n)}`;
}

// 3. Greeting
function greeting(firstName, lastName, age) {
  return `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
}

function showGreeting() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = parseInt(document.getElementById("age").value);
  document.getElementById("greetingResult").innerText = greeting(firstName, lastName, age);
}

// 4. Min between 3 numbers
function getMin(a, b, c) {
  return Math.min(a, b, c);
}

function displayMin() {
  const a = parseFloat(document.getElementById("minA").value);
  const b = parseFloat(document.getElementById("minB").value);
  const c = parseFloat(document.getElementById("minC").value);
  document.getElementById("minResult").innerText = `Min: ${getMin(a, b, c)}`;
}

// 5. Even Odd checker
function evenOrOdd(a, b, c) {
  if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
    return 'even';
  } else if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0) {
    return 'odd';
  } else {
    return 'even/odd';
  }
}

function checkEvenOrOdd() {
  const a = parseInt(document.getElementById("evenOddA").value);
  const b = parseInt(document.getElementById("evenOddB").value);
  const c = parseInt(document.getElementById("evenOddC").value);
  document.getElementById("evenOddResult").innerText = `Result: ${evenOrOdd(a, b, c)}`;
}

// 6. In or Out Range
function inOrOutRange(x, y, num) {
  return (num >= x && num <= y) ? 'In range' : 'Out of range';
}

function checkRange() {
  const x = parseFloat(document.getElementById("rangeX").value);
  const y = parseFloat(document.getElementById("rangeY").value);
  const num = parseFloat(document.getElementById("rangeNum").value);
  document.getElementById("rangeResult").innerText = `Result: ${inOrOutRange(x, y, num)}`;
}
