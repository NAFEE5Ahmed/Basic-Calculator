const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const percentage = document.querySelector("#percentage");
const del = document.querySelector("#del");
const ac = document.querySelector("#ac");
const equal = document.querySelector("#equal");
let inputNum = "";
let currentInput = "";
let operator = "";
let storedNum = 0;

for (number of numbers) {
  number.addEventListener("click", (e) => {
    if (inputNum.length <= 9) {
      inputNum += e.currentTarget.textContent;
      document.querySelector("#calculator-input").value = inputNum; // Update the input field
      // console.log(inputNum)
    }
  });
}

plus.addEventListener("click", () => {
  currentInput = document.querySelector("#calculator-input").value;
  console.log(currentInput);
  inputNum = "";
  operator = "+";
});

function sumOperation(num1, num2) {
  let result = +num1 + +num2;
   if (result.toString().length > 10) {
    result = result.toPrecision(1); // Use exponential notation if more than 9 digits
  }
  document.querySelector("#calculator-input").value = result;
}

minus.addEventListener("click", () => {
  currentInput = document.querySelector("#calculator-input").value;
  console.log(currentInput);
  inputNum = "";
  operator = "-";
});

function minusOperation(num1, num2) {
  let result = +num1 - +num2;
   if (result.toString().length > 10) {
    result = result.toPrecision(1); // Use exponential notation if more than 9 digits
  }
  document.querySelector("#calculator-input").value = result;
}

multiply.addEventListener("click", () => {
  currentInput = document.querySelector("#calculator-input").value;
  console.log(currentInput);
  inputNum = "";
  operator = "*";
});

function multiplyOperation(num1, num2) {
  let result = +num1 * +num2;
   if (result.toString().length > 10) {
    result = result.toPrecision(1); // Use exponential notation if more than 9 digits
  }
  document.querySelector("#calculator-input").value = result;
}

divide.addEventListener("click", () => {
  currentInput = document.querySelector("#calculator-input").value;
  console.log(currentInput);
  inputNum = "";
  operator = "/";
});

function divideOperation(num1, num2) {
  let result = +num1 / +num2;
   if (result.toString().length > 10) {
    result = result.toPrecision(1); // Use exponential notation if more than 9 digits
  }
  document.querySelector("#calculator-input").value = result;
}

percentage.addEventListener("click", () => {
  percentageOperation(inputNum);
  inputNum = "";
});

// del.addEventListener("click",()=>{
//   currentInput = document.querySelector("#calculator-input").value
//   console.log(currentInput)
//   inputNum = "";
//   operator = "del"
// })

ac.addEventListener("click", () => {
  inputNum = "";
  document.querySelector("#calculator-input").value = "";
});

function percentageOperation(num) {
  let result = num / 100;
   if (result.toString().length > 10) {
    result = result.toPrecision(1); // Use exponential notation if more than 9 digits
  }
  document.querySelector("#calculator-input").value = result;
  if (result === 0) {
    document.querySelector("#calculator-input").value = "";
  }
}

equal.addEventListener("click", () => {
  if (document.querySelector("#calculator-input").value === "" || inputNum === "") {
    document.querySelector("#calculator-input").value = "Syntax Error";
    return;
  }
  if (operator === "+") {
    sumOperation(currentInput, inputNum);
  } else if (operator === "-") {
    minusOperation(currentInput, inputNum);
  } else if (operator === "*") {
    multiplyOperation(currentInput, inputNum);
  } else if (operator === "/") {
    divideOperation(currentInput, inputNum);
  }
  inputNum = "";
  currentInput = "";
});
