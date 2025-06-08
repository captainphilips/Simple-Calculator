let display = document.querySelector("input"); // Select input d

// Function to append values to the display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Backspace function
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Evaluate expression
function calculate() {
    try {
        let expression = display.value;

        
        expression = expression.replace(/\^/g, "**");

        
        expression = expression.replace(/%/g, "/100");

        display.value = eval(expression); // Evaluate the expression 
    } catch {
        display.value = "Error";
    }
}

// Enable keyboard input
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (!isNaN(key) || "+-*/.^%".includes(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});