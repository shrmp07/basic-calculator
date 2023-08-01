let currentDisplay = '0';
let currentOperator = '';
let firstOperand = '';
let isOperatorClicked = false;
let expressionText = '';

function updateDisplay() {
    const displayElement = document.getElementById('display');
    const expressionElement = document.getElementById('expression');
    displayElement.textContent = currentDisplay;
    expressionElement.textContent = expressionText;
}

function appendToDisplay(value) {
    if (currentDisplay === '0' || isOperatorClicked) {
        currentDisplay = value;
        isOperatorClicked = false;
    } else {
        currentDisplay += value;
    }
    expressionText += value;
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = '0';
    currentOperator = '';
    firstOperand = '';
    isOperatorClicked = false;
    expressionText = ''; // Clear the expression when 'C' is pressed
    updateDisplay();
}

function handleOperator(operator) {
    if (currentOperator !== '') {
        calculate();
    }
    currentOperator = operator;
    firstOperand = currentDisplay;
    isOperatorClicked = true;
    expressionText += ' ' + operator + ' ';
    updateDisplay();
}

function calculate() {
    const secondOperand = currentDisplay;
    let result;

    switch (currentOperator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    currentDisplay = result.toString();
    currentOperator = '';
    firstOperand = '';
    expressionText += ' = ' + currentDisplay;
    updateDisplay();
}

document.getElementById('clear').addEventListener('click', clearDisplay);

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendToDisplay(button.textContent);
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleOperator(button.textContent);
    });
});

document.getElementById('equals').addEventListener('click', calculate);

// Automatically process when operands and operators are entered
const displayElement = document.getElementById('display');
displayElement.addEventListener('input', () => {
    if (!isNaN(parseFloat(displayElement.textContent))) {
        currentDisplay = displayElement.textContent;
        isOperatorClicked = true;
    }
});