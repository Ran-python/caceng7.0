let history = [];
let midValue = 0;

// Load the calculator after selecting a theme
function loadCalculator() {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("calculatorPage").classList.remove("hidden");
}

// Set theme dynamically
function setTheme(theme) {
    document.body.className = theme;
}

// Append values to the display
function appendValue(value) {
    const display = document.getElementById("currentDisplay");
    if (display.textContent === "0") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Clear the display
function clearDisplay() {
    document.getElementById("currentDisplay").textContent = "0"; 
    document.getElementById("secondaryDisplay").textContent = "0";
}

// Calculate the result
function calculateResult() {
    const display = document.getElementById("currentDisplay");
    try {
        const result = eval(display.textContent.replace("×", "*").replace("÷", "/"));
        history.push(`${display.textContent} = ${result}`);
        updateHistory();
        display.textContent = result;
    } catch {
        display.textContent = "Error";
    }
}

// Store intermediate value
function storeIntermediate() {
    const display = document.getElementById("currentDisplay");
    midValue = parseFloat(display.textContent);
    document.getElementById("secondaryDisplay").textContent = `Stored: ${midValue}`;
}

// Update history display
function updateHistory() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";
    history.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = entry;
        historyList.appendChild(li);
    });
}

// Toggle history modal
function toggleHistory() {
    const historyModal = document.getElementById("historyModal");
    historyModal.classList.toggle("hidden");
}

// Font size toggle
function toggleFontSize() {
    document.body.classList.toggle("large-font");
}

// Graph functionality (placeholder)
function showGraph() {
    alert("Graph functionality coming soon!");
}

function setTheme(theme) {
    document.body.className = theme; // Applies theme to body
    const settingsButton = document.getElementById("interfaceModifications");
    settingsButton.className = theme; // Updates button style
}
