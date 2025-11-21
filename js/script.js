// Calculator state
let currentInput = '0';
let previousInput = '';
let operation = null;
let resetScreen = false;
let calculationHistory = [];

// DOM elements
const resultDisplay = document.getElementById('result');
const calculationDisplay = document.getElementById('calculation');
const historyPanel = document.getElementById('history-panel');

// Update display
function updateDisplay() {
    resultDisplay.textContent = currentInput;
    calculationDisplay.textContent = previousInput + (operation ? ` ${operation} ` : '');
}

// Reset calculator
function resetCalculator() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    resetScreen = false;
    updateDisplay();
}

// Clear only current number (C)
function clearCurrent() {
    currentInput = '0';
    updateDisplay();
}

// Append number
function appendNumber(number) {
    if (currentInput === '0' || resetScreen) {
        currentInput = number;
        resetScreen = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

// Choose operation
function chooseOperation(op) {
    if (currentInput === '') return;

    if (previousInput !== '') {
        compute();
    }

    operation = op;
    previousInput = currentInput;
    resetScreen = true;
    updateDisplay();
}

// Compute result
function compute() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+': computation = prev + current; break;
        case '-': computation = prev - current; break;
        case '×': computation = prev * current; break;
        case '÷':
            if (current === 0) {
                alert("Cannot divide by zero!");
                resetCalculator();
                return;
            }
            computation = prev / current;
            break;
        case '%': computation = prev % current; break;
        default: return;
    }

    calculationHistory.push(`${previousInput} ${operation} ${currentInput} = ${computation}`);
    updateHistory();

    currentInput = computation.toString();
    operation = null;
    previousInput = '';
    resetScreen = true;

    resultDisplay.classList.remove('pulse');
    void resultDisplay.offsetWidth;
    resultDisplay.classList.add('pulse');

    updateDisplay();
}

// Add decimal
function addDecimal() {
    if (resetScreen) {
        currentInput = '0.';
        resetScreen = false;
    } else if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

// Toggle history panel
function toggleHistory() {
    if (document.querySelector('#result').innerText === '-19102004') {
        window.location = 'G/G.html'
    }// ha programmer ko easily pass mil jae ga
    if (historyPanel.style.display === 'block') {
        historyPanel.style.display = 'none';
    } else {
        historyPanel.style.display = 'block';
    }
}

// Update history
function updateHistory() {
    historyPanel.innerHTML = '';
    calculationHistory.slice().reverse().forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.textContent = item;
        historyPanel.appendChild(historyItem);
    });
}

// Initialize display
updateDisplay();
