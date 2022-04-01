const numberButton = document.querySelectorAll('.number');
const operationButton = document.querySelectorAll('.operation')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
const showResult = document.querySelector('.result')
const currentOperand = document.querySelector('.current-operand')
const previousOperand = document.querySelector('.previous-operand')
const equalsKey = document.querySelector('.equals');
currentOperand.textContent = ' ';
previousOperand.textContent = ' ';

function add(a, b) {
    return a + b;
  };
  
  // Subtraction of a and b ...
  function subtract(a, b) {
    return a - b;
  };
  
  // Multiply a, b ... 
  function multiply(a, b) {
    return a * b;
  };
  
  // Divide a,b ... 
  function divide(a, b) {
    return a / b;
  };
  
  // Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
  function operate(num1, num2, operator) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        if(num2==0) return null;
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
    }
  };
  

let storedNumber = '';
let clickedOperator = '';
let firstNumber = '';
let result = '';
currentOperand.textContent = 0;

numberButton.forEach((number) => {
  number.addEventListener('click', function() {
    storedNumber += number.textContent;
    previousOperand.textContent += number.textContent;
    // currentOperand.textContent += previousOperand.textContent;
  })
});
// numberButton.forEach((number) => {
//     number.addEventListener('click', () => {
      
//             storedNumber = storedNumber + number.textContent;
//             previousOperand.textContent += number.textContent;
//             calculate();
//         })
//   });
//   https://stackoverflow.com/questions/63058457/calculator-project-stuck-javascript 
  operationButton.forEach((operator => {
    operator.addEventListener('click', () => {
        firstNumber = storedNumber;
        clickedOperator = operator.textContent;
        previousOperand.textContent =  storedNumber + clickedOperator;
        storedNumber = '';
      });

  }));
  clearButton.addEventListener('click', () => {
    currentOperand.innerText = ''
    previousOperand.innerText = ''
    storedNumber = '';
    firstNumber = '';
    result = ''

  })

  deleteButton.addEventListener('click', () => {
    currentOperand.textContent = currentOperand.textContent.toString().slice(0,-1);
  })


  const calculate = () => {
    let result = operate(parseFloat(firstNumber), parseFloat(storedNumber), clickedOperator);
    currentOperand.textContent = result;
    previousOperand.textContent = firstNumber + ' ' + clickedOperator + ' ' + storedNumber;
    storedNumber = result;
    console.log(previousOperand.textContent);
    }
  
equalsKey.addEventListener('click', (e) => {
        calculate();
    });






