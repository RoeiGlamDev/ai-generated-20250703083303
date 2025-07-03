// Get the display element
const display = document.getElementById('display');

// Get the buttons
const buttons = document.querySelectorAll('button');

// Initialize the calculator state
let currentNumber = '';
let previousNumber = '';
let operator = '';

// Function to update the display
function updateDisplay() {
  display.value = currentNumber;
}

// Function to handle number button clicks
function handleNumberClick(event) {
  const number = event.target.dataset.value;
  currentNumber += number;
  updateDisplay();
}

// Function to handle operator button clicks
function handleOperatorClick(event) {
  const op = event.target.dataset.value;
  previousNumber = currentNumber;
  currentNumber = '';
  operator = op;
}

// Function to handle equals button click
function handleEqualsClick() {
  const result = calculateResult(previousNumber, operator, currentNumber);
  currentNumber = result.toString();
  previousNumber = '';
  operator = '';
  updateDisplay();
}

// Function to handle clear button click
function handleClearClick() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  updateDisplay();
}

// Function to calculate the result
function calculateResult(num1, op, num2) {
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  switch (op) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      if (number2 === 0) {
        throw new Error('Cannot divide by zero');
      }
      return number1 / number2;
    default:
      throw new Error('Invalid operator');
  }
}

// Add event listeners to the buttons
buttons.forEach((button) => {
  if (button.classList.contains('number')) {
    button.addEventListener('click', handleNumberClick);
  } else if (button.classList.contains('operator')) {
    button.addEventListener('click', handleOperatorClick);
  } else if (button.classList.contains('clear')) {
    button.addEventListener('click', handleClearClick);
  } else if (button.dataset.value === '=') {
    button.addEventListener('click', handleEqualsClick);
  }
});

// Handle errors
window.addEventListener('error', (event) => {
  alert(event.message);
});