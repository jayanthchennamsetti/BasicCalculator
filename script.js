let input = document.getElementById('input');
let output = document.getElementById('output');
let currentInput = '';
let currentOperator = '';

function appendDigit(digit) {
  currentInput += digit;
  input.value = currentInput;
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    input.value = currentInput;
  }
}

function clearInput() {
  currentInput = '';
  input.value = '';
  output.value = '';
}

function operate(operator) {
  currentOperator = operator;
  output.value = input.value + ' ' + currentOperator;
  currentInput = '';
  input.value = '';
}

function calculate() {
  let result;
  let num1 = parseFloat(output.value.split(' ')[0]);
  let num2 = parseFloat(input.value);

  switch (currentOperator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = 'Error: Division by zero';
      } else {
        result = num1 / num2;
      }
      break;
    default:
      result = 'Error: Invalid operation';
  }

  output.value = '';
  input.value = result;
  currentInput = '';
}
