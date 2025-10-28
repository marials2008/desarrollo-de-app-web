// --- 1. Cookie Banner Dismissal ---
function acceptCookies() {
    const banner = document.getElementById('cookieBanner');
    // Hide the banner
    banner.remove(); 
}

// --- 2. Loading Pop-up (Modal Simulation) ---

// Function called when a city is clicked (simulated)
function cityAlert(element) {
    const cityName = element.innerText;
    // Show the modal
    document.getElementById('loadingModal').style.display = 'block';
    
    // In a real application, you would load data here, then close the modal
    // For this example, we'll just show the alert and close it after a short time
    // to simulate the effect.
    setTimeout(closeModal, 1500); 
}

function closeModal() {
    // Hide the modal
    document.getElementById('loadingModal').style.display = 'none';
}

// Add event listeners to the city links to trigger the alert
document.addEventListener('DOMContentLoaded', () => {
    const cityLinks = document.querySelectorAll('.nav-links a');
    cityLinks.forEach(link => {
        // Prevent default navigation for demonstration
        link.addEventListener('click', (e) => {
            e.preventDefault();
            cityAlert(link);
        });
    });
});

// --- 3. Temperature Conversion ---

/**
 * Converts a temperature value between Celsius and Fahrenheit.
 * @param {number} temp - The temperature value.
 * @param {string} unit - The current unit ('C' or 'F').
 * @param {string} targetUnit - The unit to convert to ('C' or 'F').
 * @returns {number} The converted temperature, rounded to the nearest integer.
 */
function convert(temp, currentUnit, targetUnit) {
    if (currentUnit === 'C' && targetUnit === 'F') {
        // C to F: (C * 9/5) + 32
        return Math.round((temp * 9/5) + 32);
    } else if (currentUnit === 'F' && targetUnit === 'C') {
        // F to C: (F - 32) * 5/9
        return Math.round((temp - 32) * 5/9);
    }
    // No conversion needed
    return temp;
}

/**
 * Converts all displayed temperatures when the selector is changed.
 * @param {HTMLSelectElement} selectElement - The dropdown element that triggered the change.
 */
function convertTemperatures(selectElement) {
    const targetUnit = selectElement.value; // 'C' or 'F'
    const highTemps = document.querySelectorAll('.high-temp');
    const lowTemps = document.querySelectorAll('.low-temp');
    const allTemps = [...highTemps, ...lowTemps];

    allTemps.forEach(tempSpan => {
        const unitSpan = tempSpan.querySelector('.unit');
        
        // Determine the current unit based on the stored value (or the initial text)
        // We'll use a data attribute for robust tracking, but fall back to the unit text.
        let currentUnit = unitSpan ? unitSpan.textContent : (targetUnit === 'F' ? 'C' : 'F');
        currentUnit = currentUnit.replace('°', ''); // Clean up the unit string
        
        // Get the temperature value, assuming the text content contains only the number and the unit.
        let tempValueText = tempSpan.textContent.replace(unitSpan.textContent, '').replace('°', '').trim();
        let temp = parseInt(tempValueText);

        // Check if the current unit is already the target unit (unnecessary conversion)
        if (currentUnit === targetUnit) {
            return;
        }

        // Perform the conversion
        const newTemp = convert(temp, currentUnit, targetUnit);

        // Update the display
        tempSpan.innerHTML = `${newTemp}°<span class="unit">${targetUnit}</span>`;
    });
}