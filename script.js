let sum = document.querySelector("#sum"); // Display textarea
let sSum = ""; // Calculation string

// Function to append values
function appendValue(value) {
    sum.value += value; // Append new value to display
    sSum += value; // Append new value to calculation string
}

// Attach click events to all buttons
document.querySelectorAll("button").forEach(button => {
    button.onclick = () => {
        const id = button.id;

        if (id === "allcut") {
            // Reset calculator
            sum.value = "";
            sSum = "";
        } else if (id === "cut") {
            // Remove last character
            sum.value = sum.value.slice(0, -1);
            sSum = sSum.slice(0, -1);
        } else if (id === "equal") {
            // Evaluate the calculation
            try {
                sum.value = Function(`return ${sSum}`)();
                sSum = sum.value; // Update sSum with the result
            } catch {
                sum.value = "Error"; // Handle invalid expressions
                sSum = "";
            }
        } else if (id === "pm") {
            // Toggle positive/negative
            if (sum.value.startsWith("-")) {
                sum.value = sum.value.slice(1); // Remove "-"
                sSum = sSum.slice(1);
            } else {
                sum.value = "-" + sum.value; // Add "-"
                sSum = "-" + sSum;
            }
        } else if (id === "persent") {
            appendValue("/100"); // Convert percentage
        } else {
            // Replace symbols for multiply and divide in the calculation string
            const value = button.innerText === "×" ? "*" :
                          button.innerText === "÷" ? "/" :
                          button.innerText; // Use button's text as value
            appendValue(value);
        }
    };
});