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
        const toggleHistoryBtn = document.getElementById('toggle-history');

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

        // Append number to current input
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
                case '+':
                    computation = prev + current;
                    break;
                case '-':
                    computation = prev - current;
                    break;
                case '×':
                    computation = prev * current;
                    break;
                case '÷':
                    if (current === 0) {
                        alert("Cannot divide by zero!");
                        resetCalculator();
                        return;
                    }
                    computation = prev / current;
                    break;
                case '%':
                    computation = prev % current;
                    break;
                default:
                    return;
            }

            // Add to history
            calculationHistory.push(`${previousInput} ${operation} ${currentInput} = ${computation}`);
            updateHistory();

            currentInput = computation.toString();
            operation = null;
            previousInput = '';
            resetScreen = true;

            // Add animation to result
            resultDisplay.classList.remove('pulse');
            void resultDisplay.offsetWidth; // Trigger reflow
            resultDisplay.classList.add('pulse');

            updateDisplay();
        }

        // Add decimal point
        function addDecimal() {
            if (resetScreen) {
                currentInput = '0.';
                resetScreen = false;
            } else if (currentInput.indexOf('.') === -1) {
                currentInput += '.';
            }
            updateDisplay();
        }

        // Calculate percentage
        function calculatePercentage() {
            if (currentInput !== '') {
                currentInput = (parseFloat(currentInput) / 100).toString();
                updateDisplay();
            }
        }

        // Toggle positive/negative
        function toggleSign() {
            currentInput = (parseFloat(currentInput) * -1).toString();
            updateDisplay();
        }

        // Update history panel
        function updateHistory() {
            historyPanel.innerHTML = '';
            calculationHistory.slice().reverse().forEach(item => {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                historyItem.textContent = item;
                historyPanel.appendChild(historyItem);
            });
        }

        // Toggle history panel
        function toggleHistory() {
            if (historyPanel.style.display === 'block') {
                historyPanel.style.display = 'none';
                toggleHistoryBtn.textContent = 'Show History';
            } else {
                historyPanel.style.display = 'block';
                toggleHistoryBtn.textContent = 'Hide History';
            }
        }

        // Handle keyboard input
        function handleKeyboardInput(e) {
            if (e.key >= '0' && e.key <= '9') appendNumber(e.key);
            if (e.key === '.') addDecimal();
            if (e.key === '=' || e.key === 'Enter') compute();
            if (e.key === 'Backspace') {
                if (currentInput.length > 1) {
                    currentInput = currentInput.slice(0, -1);
                } else {
                    currentInput = '0';
                }
                updateDisplay();
            }
            if (e.key === 'Escape') resetCalculator();
            if (e.key === '+') chooseOperation('+');
            if (e.key === '-') chooseOperation('-');
            if (e.key === '*') chooseOperation('×');
            if (e.key === '/') {
                e.preventDefault();
                chooseOperation('÷');
            }
        }

        // Event listeners for buttons
        document.getElementById('clear-all').addEventListener('click', resetCalculator);
        document.getElementById('clear').addEventListener('click', () => {
            currentInput = '0';
            updateDisplay();
        });
        document.getElementById('equals').addEventListener('click', compute);
        document.getElementById('decimal').addEventListener('click', addDecimal);
        document.getElementById('percent').addEventListener('click', calculatePercentage);
        document.getElementById('toggle-history').addEventListener('click', toggleHistory);

        // Number buttons
        document.querySelectorAll('.number').forEach(button => {
            button.addEventListener('click', () => {
                appendNumber(button.textContent);
            });
        });

        // Operation buttons
        document.querySelectorAll('.operator').forEach(button => {
            if (button.id !== 'percent') {
                button.addEventListener('click', () => {
                    chooseOperation(button.textContent);
                });
            }
        });

        // Plus/minus button (not in original HTML, but added functionality)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'p' || e.key === 'P') {
                toggleSign();
            }
        });

        // Keyboard support
        document.addEventListener('keydown', handleKeyboardInput);

        // Initialize display
        updateDisplay();