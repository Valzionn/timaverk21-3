// Retrieve current settings from local storage or use default values
let incrementValue = parseInt(localStorage.getItem('incrementValue')) || 5;
let limitValue = parseInt(localStorage.getItem('limitValue')) || 50;

// Set input field values to current settings
document.getElementById('increment').value = incrementValue;
document.getElementById('limit').value = limitValue;
updateCurrentSettingsDisplay();

// Function to increment value
function increment() {
    incrementValue += parseInt(localStorage.getItem('incrementValue'));
    checkBoom();
    console.log("Incremented value:", incrementValue);
    updateCurrentSettingsDisplay();
}

// Function to decrement value
function decrement() {
    incrementValue -= parseInt(localStorage.getItem('incrementValue'));
    checkBoom();
    console.log("Decremented value:", incrementValue);
    updateCurrentSettingsDisplay();
}

// Function to save settings to local storage
function saveSettings() {
    // Get values from input fields
    incrementValue = document.getElementById('increment').value;
    limitValue = document.getElementById('limit').value;

    // Validate and update settings
    incrementValue = Math.max(1, Math.min(10, incrementValue)); // Ensure increment value is between 1 and 10
    limitValue = Math.max(-50, Math.min(50, limitValue)); // Ensure limit value is between -50 and 50

    // Save settings to local storage
    localStorage.setItem('incrementValue', incrementValue);
    localStorage.setItem('limitValue', limitValue);

    // Update current settings display
    updateCurrentSettingsDisplay();
}

// Function to update the current settings display
function updateCurrentSettingsDisplay() {
    document.getElementById('currentIncrement').textContent = incrementValue;
    document.getElementById('currentLimit').textContent = limitValue;
}

// Function to check if the value exceeds the limit and show "BOOM" accordingly
function checkBoom() {
    if (Math.abs(incrementValue) > Math.abs(limitValue)) {
        console.log("BOOM!");
    }
}
