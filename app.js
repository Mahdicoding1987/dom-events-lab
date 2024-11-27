let firstValue = null;
let secondValue = null;
let operation = null;

let numbers = document.querySelectorAll('.number');
let operationButtons = document.querySelectorAll('.operation');

let addButton = document.querySelector('#add');
let subtractButton = document.querySelector('#subtract');
let multiplyButton = document.querySelector('#multiply');
let divideButton = document.querySelector('#divide');

let equalsButton = document.querySelector('#equals');
let clearButton = document.querySelector('#clear');

let totalDisplay = document.querySelector('.display');
totalDisplay.innerText = 0;


const add = () => {
  return firstValue + secondValue;
}

const subtract = () => {
  return firstValue - secondValue;
}

const multiply = () => {
  return firstValue * secondValue;
}

const divide = () => {
  return firstValue / secondValue;
}

const renderCalculation = () => {
  let total;
  if(operation === 'add'){
    total = add();
  }
  if(operation === 'subtract'){
    total = subtract();
  }
  if(operation === 'multiply'){
    total = multiply();
  }
  if(operation === 'divide'){
    total = divide();
  }
  totalDisplay.innerHTML = total;
}

const handleEqualBtnClick = () => {
  secondValue = parseInt(totalDisplay.innerText);
  renderCalculation();
}

const handleOperatorClick = (event) => {
  firstValue = parseInt(totalDisplay.innerText);
  operation = event.target.id;
  totalDisplay.innerText = 0;
}

const clear = () => {
  totalDisplay.innerText = 0;
  firstValue = null;
  secondValue = null;
  operation = null;
}

equalsButton.addEventListener('click', handleEqualBtnClick);
clearButton.addEventListener('click', clear);

numbers.forEach(number => {
  number.addEventListener('click', (event) => {
    totalDisplay.innerText = Number(totalDisplay.innerText + event.target.innerText);
  });
});

operationButtons.forEach(operation => {
  operation.addEventListener('click', handleOperatorClick);
})


plusButton.addEventListener('click', () => {
  operation = 'add'
})
minusButton.addEventListener('click', () => {
  operation = 'subtract'
})
plusButton.addEventListener('click', () => {
  operation = 'multiply'
})
plusButton.addEventListener('click', () => {
  operation = 'divide'
})
